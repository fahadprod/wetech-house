// File: /api/auth/resend-otp/route.js
import dbConnect from '@/lib/dbConnect';
import { sendOTPEmail } from '@/lib/emailService';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import {v4 as uuidv4} from 'uuid';

export async function POST(request) {
  try {
    await dbConnect();
    const { email } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found', code: 'USER_NOT_FOUND' },
        { status: 404 }
      );
    }

    if (user.isVerified) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email already verified', 
          code: 'ALREADY_VERIFIED' 
        },
        { status: 400 }
      );
    }

    // Generate new OTP and set expiration (e.g., 15 minutes from now)
     const otp = uuidv4().substring(0, 6);
      const otpExpires = new Date(Date.now() + 15 * 60 * 1000);
    
    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // Send verification email
    await sendOTPEmail(email, otp);

    return NextResponse.json(
      { 
        success: true, 
        message: 'OTP resent successfully',
        userId: user._id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Resend OTP error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to resend OTP',
        code: 'SERVER_ERROR' 
      },
      { status: 500 }
    );
  }
}