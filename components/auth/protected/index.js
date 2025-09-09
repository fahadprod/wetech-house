'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/app/context/AuthContext';

export default function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, hasRole, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (
      !loading &&
      (!isAuthenticated() || (requiredRole && !hasRole(requiredRole)))
    ) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, requiredRole, hasRole, router]);

  if (
    loading ||
    !isAuthenticated() ||
    (requiredRole && !hasRole(requiredRole))
  ) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return children;
}