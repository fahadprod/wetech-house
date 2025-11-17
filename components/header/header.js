'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

export const Header = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const scrollToCourses = () => {
    if (window.location.pathname === '/') {
      const element = document.getElementById('courses-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#courses-section');
    }
  };

  const handleCategoryClick = (link) => {
    if (link.startsWith('#')) {
      const elementId = link.substring(1);
      const section = document.getElementById(elementId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(link);
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', action: () => router.push('/') },
    // { label: 'Gallery', action: () => router.push('/gallery') },
    // { label: 'Global Recognition', action: scrollToCourses },
    // { label: 'BootCamp Curriculum', action: () => router.push('#') },
    // { label: 'Course Details', action: () => router.push('#') },
    { label: 'About Us', action: () => router.push('/about') },
    { label: 'Contact Us', action: () => router.push('/contact') },
     ...(user?.role === 'admin' ? [{ label: 'Dashboard', action: () => router.push('/dashboard') }] : user?.role === 'user' ? [{ label: 'Book Seminar', action: () => router.push('/seminar') }] : []),
  ];

  const exploreCategories = {
    Computers: [
      { label: 'Laptop', link: '/products/laptop' },
      { label: 'Desktop', link: '/products/desktop' },
      { label: 'Monitors', link: '/products/monitors' },
      { label: 'Accessories', link: '#accessories-section' },
      { label: 'Software', link: '/products/software' },
    ],
    Smartphone: [
      { label: 'Smartphones', link: '/products/smartphones' },
      { label: 'Compare', link: '#compare-smartphones' },
      { label: 'Airpods', link: '/products/airpods' },
      { label: 'Phone Cases', link: '/products/phone-cases' },
      { label: 'Chargers', link: '/products/chargers' },
    ],
    Tablets: [
      { label: 'Tablets', link: '/products/tablets' },
      { label: 'Compare', link: '#compare-tablets' },
      { label: 'Tablet Cases', link: '/products/tablet-cases' },
      { label: 'Chargers', link: '/products/tablet-chargers' },
    ],
    Music: [
      { label: 'Headphones', link: '/products/headphones' },
      { label: 'Earphones', link: '/products/earphones' },
      { label: 'Music Boxes', link: '#music-boxes-section' },
    ],
  };

  return (
    <header className="relative w-full bg-transparent z-50">
      <div className="flex justify-between items-center mb-3 px-4 py-5 lg:px-10 lg:pt-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-[100px] h-14 lg:w-[150px] lg:h-[50px]">
              <Image
                src="/images/wetech-logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              onClick={item.action}
              variant="ghost"
              className="text-[#353e45] cursor-pointer font-bold hover:bg-transparent hover:text-[#353e45]/80"
            >
              {item.label}
            </Button>
          ))}

          {user ? (
            <Button
              onClick={logout}
              className="bg-[#e92e3e] cursor-pointer hover:bg-[#e92e3e]/90 text-white"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => router.push('/login')}
              className="bg-[#e92e3e] cursor-pointer hover:bg-[#e92e3e]/90 text-white"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] z-[1001]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between mb-6">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <div className="relative w-[100px] h-[40px]">
                      <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>

                <ScrollArea className="flex-1">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <Button
                        key={index}
                        onClick={() => {
                          item.action();
                          setMobileMenuOpen(false);
                        }}
                        variant="ghost"
                        className="w-full justify-start text-left"
                      >
                        {item.label}
                      </Button>
                    ))}

                    <div className="border-t pt-2 mt-4 cursor-pointer">
                      <Button
                        onClick={() => {
                          user ? logout() : router.push('/login');
                          setMobileMenuOpen(false);
                        }}
                        variant="ghost"
                        className="w-full justify-start text-left text-green-600 font-bold"
                      >
                        {user ? 'Logout' : 'Login'}
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};