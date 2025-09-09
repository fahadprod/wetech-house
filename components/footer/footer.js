'use client'
import {useRouter} from 'next/navigation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

export const Footer = () => {

  const router = useRouter();
  
 const handleScroll = (e, id) => {
  e.preventDefault();

  const el = document.getElementById(id);
  // If the section exists, scroll to it smoothly
  if (el) {
   const startY = window.scrollY;
   const endY = el.getBoundingClientRect().top + startY;
   const distance = endY - startY;
   const duration = 1000;
   let start;

   const ease = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

   const step = (time) => {
    if (!start) start = time;
    const progress = Math.min((time - start) / duration, 1);
    window.scrollTo(0, startY + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
   };

   requestAnimationFrame(step);
  } else {
   // If the section is not found, navigate to another page
   router.push('/blogdetail/1');
  }
 };



  return (
   <footer className="bg-[#363f46] text-gray-300">
    {/* Main Footer Content */}
    <div className=" max-w-6xl mx-auto px-4 py-12 border-t border-gray-600">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Column 1 - Logo and Social */}
      <div className="space-y-6">
       <Link href="/" className="block">
        <h2 className="text-3xl font-bold text-white">Vveba</h2>
       </Link>
       <p>
        VVEBA Pvt. Ltd. empowers passionate learners to become global tech
        leaders through real-world training, guaranteed jobs, and
        industry-recognized certifications—step into your future.
       </p>
       <div className="flex items-center">
        <input
         type="text"
         placeholder="Your mail address"
         className="flex-1 py-2 px-4 bg-white text-black placeholder-gray-400"
        />
        <button className="p-3 bg-[#e92e3e] cursor-pointer text-white hover:text-white">
         <Send size={18} />
        </button>
       </div>
       <div className="flex gap-4">
        <a
         href="#"
         className="text-white p-3 rounded bg-gray-400 hover:bg-[#e92e3e] hover:text-white"
        >
         <FaFacebook size={18} />
        </a>
        <a
         href="#"
         className="text-white p-3 rounded bg-gray-400 hover:bg-[#e92e3e] hover:text-white"
        >
         <FaTwitter size={18} />
        </a>
        <a
         href="#"
         className="text-white p-3 rounded bg-gray-400 hover:bg-[#e92e3e] hover:text-white"
        >
         <FaInstagram size={18} />
        </a>
        <a
         href="#"
         className="text-white p-3 rounded bg-gray-400 hover:bg-[#e92e3e] hover:text-white"
        >
         <FaPinterest size={18} />
        </a>
       </div>
      </div>

      {/* Column 2 - Support Links */}
      <div className="space-y-6 md:justify-items-center">
       <h3 className="text-2xl font-bold text-white">Support Links</h3>
       <div className="grid grid-cols-1 gap-4">
        {/* <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Internships</a></li>
              </ul> */}
        <ul className="space-y-3">
         <li>
          <Link href="/" className="hover:text-white">
           Home
          </Link>
         </li>
         <li>
          <Link href="/gallery" className="hover:text-white">
           Gallery
          </Link>
         </li>
         <li>
          <Link
           onClick={(e) => handleScroll(e, 'blogPost')}
           href="#blogPost"
           scroll={false}
           className="hover:text-white"
          >
           Blogs
          </Link>
         </li>
         <li>
          <Link href="/contact" className="hover:text-white">
           Contact Us
          </Link>
         </li>
         <li>
          <Link href="/about" className="hover:text-white">
           About Us
          </Link>
         </li>
        </ul>
       </div>
      </div>

      {/* Column 3 - Contact Info */}
      <div className="space-y-6">
       <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
       <div className="space-y-4">
        <div className="flex items-center gap-4">
         <span className="bg-[#e92e3e] h-10 rounded p-3 flex items-center">
          <Phone className="flex-shrink-0 text-white" size={18} />
         </span>
         <div className="space-y-1">
          <a href="tel:923197167168" className="block hover:text-white">
           (092) 319 71 67 168
          </a>
          <a href="tel:923264047334" className="block hover:text-white">
           (092) 326 40 47 334
          </a>
         </div>
        </div>
        <div className="flex items-center gap-4">
         <span className="bg-[#e92e3e] h-10 rounded p-3 flex items-center">
          <MapPin className="flex-shrink-0 text-white" size={18} />
         </span>
         <a
          href="https://maps.app.goo.gl/bbkj4ijSvsgvg2Pb9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
         >
          Office # 20, Zone/C, 2 Floor, Innovista Technology Zone, DHA Business
          Hub, DHA Phase 8, Lahore.
         </a>
        </div>
        <div className="flex items-center gap-4">
         <span className="bg-[#e92e3e] h-10 rounded p-3 flex items-center">
          <Mail className="flex-shrink-0 text-white" size={18} />
         </span>
         <a href="mailto:Support@vveba.com" className="hover:text-white">
          Support@vveba.com
         </a>
        </div>
       </div>
      </div>
     </div>
    </div>

    {/* Copyright Section */}
    <div className="bg-[#363f46] border-t-1 py-6">
     <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
       <p>© Vveba {new Date().getFullYear()} | All Rights Reserved</p>
       <div className="flex gap-4 flex-wrap">
        <a href="#" className="hover:text-white">
         Terms and conditions
        </a>
        <a href="#" className="hover:text-white">
         Privacy policy
        </a>
        <Link href="/contact" className="hover:text-white">
         Contact Us
        </Link>
       </div>
      </div>
     </div>
    </div>
   </footer>
  );
};