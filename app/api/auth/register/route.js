import dbConnect from '@/lib/dbConnect';
import { sendOTPEmail } from '@/lib/emailService';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await dbConnect();

    // Parse and validate input
    const body = await req.json();
    const { name, email, password, phone, cnic, role = 'user' } = body;

    // Validate required fields
    if (!name || !email || !password || !phone || !cnic) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' }, 
        { status: 400 }
      );
    }

    // Generate OTP (keeping your UUID approach but ensuring 6 digits)
    const otp = uuidv4().replace(/\D/g, '').substring(0, 6).padEnd(6, '0');
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000);

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user (keeping all original fields)
    const user = new User({
      name,
      email,
      password: hashedPassword, // Store hashed password
      phone,
      cnic,
      role,
      otp,
      otpExpires,
    });

    await user.save();

    // Send OTP email (wrapped in try-catch to prevent registration failure if email fails)
    try {
      await sendOTPEmail(email, otp);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails (user can request resend)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'User registered successfully. Please check your email for verification.',
        userId: user._id,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Registration failed',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}