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

// Function to extract YouTube video ID from URL
const getYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoId, quality = 'hqdefault') => {
  // quality options: default, hqdefault, mqdefault, sddefault, maxresdefault
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

const VideoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const galleryRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  // Process videos to include YouTube IDs and thumbnails
  const videos = [
    { id: 1, url: 'https://youtu.be/VFcxY3_3yFg?si=9jHP4EgCYdBL-toW' },
    { id: 2, url: 'https://youtu.be/O29C5zNqaC0?si=OGvgtulgAeKA0G7J' },
    { id: 3, url: 'https://youtu.be/uk4B40Vc7nk?si=ePj_-PalFgX870C-' },
    { id: 4, url: 'https://youtu.be/ErJkEpu4JoE?si=NrJB18F4q6ev2sL0' },
    { id: 5, url: 'https://youtu.be/q4Rg6KRPJDI?si=Rx0DxF_YAZeRuVX_' },
    { id: 6, url: 'https://youtu.be/KI_JK22TrJ8?si=BZQ3xWQQxpGscLUt' },
    { id: 7, url: 'https://youtu.be/5MQ6w7X-x9E?si=DA18cnDsr-wfG3CN' },
    { id: 8, url: 'https://youtu.be/lVXbi-cyd8o?si=RCHlItdxaNrF2Dah' },
    { id: 9, url: 'https://youtu.be/b-lQmJyCcw8?si=0-21wgHjRVjtm5Hd' },
    { id: 10, url: 'https://youtu.be/dDxQCXS1Tno?si=SMPkzIz0Pt5IIvYP' },
    { id: 11, url: 'https://youtu.be/d-U9a9PzwIw?si=QUJvoHNdHsrJdcpV' },
    { id: 12, url: 'https://youtu.be/7w907OZR_YU?si=sLw2nft__GRpaa3a' },
    { id: 13, url: 'https://youtu.be/F_8Gy8T-PvY?si=djsf7DX0kP2w-4YK' },
    { id: 14, url: 'https://youtu.be/Xl6O8jS1Hho?si=wxdTnHKLHyK-Kdj1' },
    { id: 15, url: 'https://youtu.be/pYMVi4deXhw?si=nvndHX6xvff_4eCR' },
    { id: 16, url: 'https://youtu.be/P_6RhqaMUts?si=1J4KjaH-d5kGLNT4' },
    { id: 17, url: 'https://youtu.be/zju51INmW7U?si=wip7pTslpcai_3Nd' },
  ].map(video => {
    const videoId = getYouTubeId(video.url);
    return {
      ...video,
      videoId,
      thumbnail: videoId ? getYouTubeThumbnail(videoId) : null,
      embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : null
    };
  });

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
        navigateVideo('next');
      } else if (difference < -50) {
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
              img.onload = () => {
                img.style.opacity = 1;
              };
            }
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    const images = galleryRef.current.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      img.style.opacity = 0;
      img.style.transition = 'opacity 0.3s ease-in-out';
      observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  // Get current video for modal
  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="container mx-auto px-4 py-8" ref={galleryRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden"
            onClick={() => openVideo(index)}
          >
            <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-800">
              {video.thumbnail ? (
                <img
                  data-src={video.thumbnail}
                  alt={`YouTube video ${video.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  width={320}
                  height={180}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-400">No thumbnail</span>
                </div>
              )}
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                </div>
                
                {/* Video duration overlay (optional - needs API call) */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  YouTube
                </div>
              </div>
            </div>
            
            {/* Video title placeholder */}
            {/* <div className="p-3 bg-white dark:bg-gray-800">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                Video {video.id}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Click to play
              </p>
            </div> */}
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyles}
        ariaHideApp={false}
        closeTimeoutMS={300}
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
          {currentVideo?.embedUrl ? (
            <div className="w-full h-full bg-black rounded-lg overflow-hidden">
              {/* YouTube Embed using iframe (recommended for YouTube) */}
              <iframe
                src={currentVideo.embedUrl}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`YouTube video ${currentVideo.id}`}
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg">
              <p className="text-white">Video not available</p>
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={() => navigateVideo('prev')}
            className="absolute left-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 z-10 backdrop-blur-sm"
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
            className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 z-10 backdrop-blur-sm"
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
            className="absolute -top-10 right-0 cursor-pointer bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 z-10 backdrop-blur-sm md:top-4 md:right-4"
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
          <div className="absolute -top-10 left-0 bg-black/60 text-white px-3 py-1 rounded-lg text-sm z-10 backdrop-blur-sm md:top-4 md:left-4">
            {currentVideoIndex + 1} / {videos.length}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VideoGallery;