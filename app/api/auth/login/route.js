import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    await dbConnect();

    // Parse the request body
    const body = await request.json();
    const { email, password } = body;

    // Input validation
    if (!email || !password) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Email and password are required',
        code: 'MISSING_FIELDS'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Find user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check verification status
    if (!user.isVerified) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Please verify your email first',
        code: 'EMAIL_NOT_VERIFIED',
        userId: user._id
      }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Successful response
    return new Response(JSON.stringify({
      success: true,
      message: 'Login successful',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        cnic: user.cnic,
        isVerified: user.isVerified
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Internal server error',
      code: 'SERVER_ERROR'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Add OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}