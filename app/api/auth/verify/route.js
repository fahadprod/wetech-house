import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { userId, otp, email } = body;

    // Find user by either userId or email (for flexibility)
    const user = await User.findOne({
      $or: [
        { _id: userId },
        { email: email }
      ]
    });

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
          message: 'User already verified', 
          code: 'ALREADY_VERIFIED' 
        },
        { status: 400 }
      );
    }

    // OTP verification logic
    if (user.otp !== otp) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid OTP', 
          code: 'INVALID_OTP' 
        },
        { status: 400 }
      );
    }

    if (new Date() > new Date(user.otpExpires)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'OTP has expired', 
          code: 'OTP_EXPIRED' 
        },
        { status: 400 }
      );
    }

    // Mark user as verified and clear OTP fields
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email verified successfully',
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          isVerified: true
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Server error during verification',
        code: 'SERVER_ERROR' 
      },
      { status: 500 }
    );
  }
}