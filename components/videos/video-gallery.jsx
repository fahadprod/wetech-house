'use client'

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Plyr from 'plyr-react';
import "plyr-react/plyr.css";

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
    background: 'transparent',
    width: '90%',
    maxWidth: '800px',
    height: 'auto',
    maxHeight: '90vh'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000
  }
};

const VideoGallery = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
 const galleryRef = useRef(null);
 const modalContentRef = useRef(null);

 useEffect(() => {
  Modal.setAppElement('body');
 }, []);

 const videos = [
  {
   id: 1,
   title: 'Bootcamp Intro',
   thumbnail: '/placeholder-thumbnail.jpg', // Added placeholder
   url: 'https://vveba.s3.eu-north-1.amazonaws.com/videos/Reel-01.mp4',
  },
  {
   id: 2,
   title: 'WeTechHouse Intro',
   thumbnail: '/placeholder-thumbnail.jpg', // Added placeholder
   url: 'https://vveba.s3.eu-north-1.amazonaws.com/videos/Reel-03.mp4',
  },
  {
   id: 3,
   title: 'WeTechHouse Class Rooms',
   thumbnail: '/placeholder-thumbnail.jpg', // Added placeholder
   url: 'https://vveba.s3.eu-north-1.amazonaws.com/videos/Reel-02.mp4',
  },
 ];

 const openVideo = (index) => {
  setCurrentVideoIndex(index);
  setIsOpen(true);
 };

 const navigateVideo = (direction) => {
  let newIndex;
  if (direction === 'prev') {
   newIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  } else {
   newIndex = (currentVideoIndex + 1) % videos.length;
  }
  setCurrentVideoIndex(newIndex);
 };

 // Handle keyboard navigation
 useEffect(() => {
  const handleKeyDown = (e) => {
   if (!isOpen) return;

   if (e.key === 'ArrowLeft') {
    navigateVideo('prev');
   } else if (e.key === 'ArrowRight') {
    navigateVideo('next');
   } else if (e.key === 'Escape') {
    setIsOpen(false);
   }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
 }, [isOpen, currentVideoIndex]);

 // Handle swipe gestures
 useEffect(() => {
  if (!isOpen || !modalContentRef.current) return;

  const contentElement = modalContentRef.current;
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
   touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
   touchEndX = e.changedTouches[0].screenX;
   handleSwipe();
  };

  const handleSwipe = () => {
   const difference = touchStartX - touchEndX;
   if (difference > 50) {
    // Swipe left
    navigateVideo('next');
   } else if (difference < -50) {
    // Swipe right
    navigateVideo('prev');
   }
  };

  contentElement.addEventListener('touchstart', handleTouchStart);
  contentElement.addEventListener('touchend', handleTouchEnd);

  return () => {
   contentElement.removeEventListener('touchstart', handleTouchStart);
   contentElement.removeEventListener('touchend', handleTouchEnd);
  };
 }, [isOpen, currentVideoIndex]);

 // Lazy loading with Intersection Observer
 useEffect(() => {
  if (!galleryRef.current || typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
       img.src = img.dataset.src;
      }
      observer.unobserve(img);
     }
    });
   },
   {rootMargin: '100px'}
  );

  const images = galleryRef.current.querySelectorAll('img[data-src]');
  images.forEach((img) => observer.observe(img));

  return () => observer.disconnect();
 }, []);

 return (
  <div className="container mx-auto px-4 py-8" ref={galleryRef}>
   {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {videos.map((video, index) => (
     <motion.div
      key={video.id}
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5, delay: index * 0.1}}
      className="cursor-pointer transition-all hover:scale-[1.02]"
      onClick={() => openVideo(index)}
     >
      <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-200">
       {video.thumbnail ? (
        <img
         src={video.thumbnail}
         alt={video.title}
         className="w-full h-full object-cover"
         loading="lazy"
        />
       ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
         <span className="text-gray-500">No thumbnail</span>
        </div>
       )}
       <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
         <svg
          className="w-6 h-6 md:w-8 md:h-8 text-gray-800"
          fill="currentColor"
          viewBox="0 0 20 20"
         >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
         </svg>
        </div>
       </div>
      </div>
      <h3 className="mt-2 text-lg font-medium text-gray-800">{video.title}</h3>
     </motion.div>
    ))}
   </div> */}

   <Modal
    isOpen={isOpen}
    onRequestClose={() => setIsOpen(false)}
    style={modalStyles}
    ariaHideApp={false}
   >
    <div
     className="relative w-full"
     style={{
      aspectRatio: '16/9',
      maxWidth: '800px',
      maxHeight: '90vh',
     }}
     ref={modalContentRef}
    >
     {/* Video Player */}
     <Plyr
      source={{
       type: 'video',
       sources: [
        {
         src: videos[currentVideoIndex].url,
         provider: 'html5',
        },
       ],
      }}
      options={{
       controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen',
       ],
       ratio: '16:9',
      }}
     />

     {/* Navigation Arrows */}
     <button
      onClick={() => navigateVideo('prev')}
      className="absolute left-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
      aria-label="Previous video"
     >
      <svg
       className="w-6 h-6"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
       />
      </svg>
     </button>

     <button
      onClick={() => navigateVideo('next')}
      className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
      aria-label="Next video"
     >
      <svg
       className="w-6 h-6"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
       />
      </svg>
     </button>

     {/* Close Button */}
     <button
      onClick={() => setIsOpen(false)}
      className="absolute top-4 right-4 cursor-pointer bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
      aria-label="Close modal"
     >
      <svg
       className="w-6 h-6"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
       />
      </svg>
     </button>

     {/* Video Counter */}
     <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm z-10">
      {currentVideoIndex + 1} / {videos.length}
     </div>
    </div>
   </Modal>
  </div>
 );
};

export default VideoGallery;