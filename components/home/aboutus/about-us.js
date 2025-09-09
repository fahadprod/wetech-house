'use client';

import Link from "next/link";
import { Phone } from 'lucide-react';

export const AboutUs = () => {

  return (
    <section 
      className="relative py-6 md:py-8 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://vveba.s3.eu-north-1.amazonaws.com/about/hero-2.jpg')",
        zIndex: 1,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="w-full lg:w-9/12">
            <div className="text-white text-center">
              <div 
                className="mb-10"
                data-aos="fade-down"
              >
                <div className="mt-10">
                  <span className="text-white uppercase tracking-wider font-medium">
                    ABOUT US
                  </span>
                  <h2 className="text-3xl capitalize md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                    VVEBA turns learners into IT entrepreneurs with real skills and
                    guaranteed jobs.
                  </h2>
                </div>
              </div>
              <p 
                className="text-lg mb-8"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Learn, build, and get hired—VVEBA&apos;s step-by-step tech journey takes you
                from beginner to specialist, backed by global certifications and
                industry-grade job guarantees.
              </p>
              <div 
                className="mt-12 mb-16 border-white border-2 rounded-2xl p-10"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Build with us, Grow with us, Stay with us.
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-16 mb-10">
                <div>
                  <Link 
                    href="/about" 
                    prefetch={false}
                    className="inline-block px-8 py-3 bg-[#e92e3e] text-white font-medium rounded-md hover:bg-[#363f46] transition-colors"
                  >
                    DISCOVER MORE
                  </Link>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 border-2 border-white rounded-full p-4">
                    <Phone className="text-[#e92e3e] w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <a href="tel:9231971671681" className="text-white hover:text-gray-200">
                      <span className="block text-sm">Call for help</span>
                      <span className="block text-xl font-semibold">+92 319 71671681</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};