'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [success, setSuccess] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [userId, setUserId] = useState(null); // Add userId state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length > 8) {
          error = 'Password must be 8 characters or less';
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  useEffect(() => {
    const isValid =
      formData.email && formData.password && !errors.email && !errors.password;
    setIsFormValid(isValid);
  }, [formData, errors]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  // Validate all fields
  Object.keys(formData).forEach((field) => {
    validateField(field, formData[field]);
  });

  if (!isFormValid) {
    setLoading(false);
    return;
  }

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // First check if response exists and is OK
    if (!response) {
      throw new Error('No response from server');
    }

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(text || 'Invalid response from server');
    }

    const data = await response.json();

    if (!response.ok) {
      // Handle unverified email case
      if (data.code === 'EMAIL_NOT_VERIFIED') {
        setUserId(data.userId);
        setShowOtpForm(true);
        setError(data.message || 'Please verify your email first');
        return;
      }
      throw new Error(data.message || 'Login failed');
    }

    // Process successful login
    login(data.user, data.token);

    // Handle unverified user (redundant check as server already verified)
    if (!data.user.isVerified) {
      setUserId(data.user._id);
      setShowOtpForm(true);
      setError('Please verify your email first');
      return;
    }

    // Redirect based on role
    const redirectPath = data.user.role === 'user' ? '/seminar' : '/dashboard';
    router.push(redirectPath);

  } catch (err) {
    console.error('Login error:', err);
    setError(err.message || 'An error occurred during login');
  } finally {
    setLoading(false);
  }
};

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId,
          otp,
          email: formData.email // Include email for verification
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Verification failed');
      }

      setSuccess(data.message);
      
      // Automatically log in after successful verification
      const loginResponse = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const loginData = await loginResponse.json();

      if (!loginResponse.ok) {
        throw new Error(loginData.message || 'Login failed after verification');
      }

      login(loginData.user, loginData.token);

      // Redirect based on role
      if (loginData.user.role === 'user') {
        router.push('/seminar');
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="p-6 mb-4">
        <div className="space-y-6">
          <h1 className="text-3xl text-[#e92e3e] font-bold">Login</h1>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert variant="success">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          {!showOtpForm ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder='Enter email'
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password (max 8 characters)
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder='*********'
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'border-red-500' : ''}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer bg-[#e92e3e] hover:bg-[#e92e3e]"
                disabled={loading || !isFormValid}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  'Login'
                )}
              </Button>

              <div className="text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-primary hover:underline">
                  Register
                </Link>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-4">
              <h2 className="text-xl font-bold">Verify Your Email</h2>
              <p className="text-[#e92e3e]">
                We&apos;ve sent an OTP to {formData.email}. Please enter it below.
              </p>

              <div className="space-y-2">
                <label htmlFor="otp" className="block text-sm font-medium">
                  OTP Code
                </label>
                <Input
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#e92e3e] cursor-pointer hover:bg-[#e92e3e]"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Verify'}
              </Button>

              <div className="text-center text-sm">
                Didn&apos;t receive OTP?{' '}
                <button 
                  type="button" 
                  className="text-primary hover:underline"
                  onClick={async () => {
                    try {
                      await fetch('/api/auth/resend-otp', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: formData.email }),
                      });
                      setSuccess('OTP resent successfully!');
                    } catch (err) {
                      setError('Failed to resend OTP. Please try again.');
                    }
                  }}
                >
                  Resend OTP
                </button>
              </div>
            </form>
          )}
        </div>
      </Card>
    </div>
  );
}