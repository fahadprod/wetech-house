// app/api/auth/login/route.js
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    await dbConnect();
    console.log('✅ Database connected');

    const body = await request.json();
    const { email, password } = body;
    
    console.log('🔑 Login attempt for:', email);
    console.log('📝 Password length:', password?.length);

    if (!email || !password) {
      console.log('❌ Missing email or password');
      return new Response(JSON.stringify({
        success: false,
        message: 'Email and password are required',
        code: 'MISSING_FIELDS'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Find user with detailed logging
    console.log('🔍 Searching for user with email:', email);
    const user = await User.findOne({ email }).select('+password');
    
    console.log('👤 User found:', user ? 'YES' : 'NO');
    if (user) {
      console.log('📧 User email in DB:', user.email);
      console.log('✅ User verified:', user.isVerified);
      console.log('🔐 Password hash exists:', !!user.password);
      console.log('👨‍💼 User role:', user.role);
    }

    if (!user) {
      console.log('❌ No user found with email:', email);
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check password with detailed logging
    console.log('🔑 Comparing passwords...');
    console.log('📝 Input password:', password);
    console.log('💾 Stored hash:', user.password?.substring(0, 20) + '...');
    
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('🔐 Password match result:', isMatch);
    
    if (!isMatch) {
      console.log('❌ Password does not match');
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
      console.log('⚠️ User not verified');
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

    console.log('✅ Login successful for:', user.email);
    
    // Create token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

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
    console.error('💥 Login error:', error);
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