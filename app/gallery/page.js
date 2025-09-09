'use client';

import dynamic from 'next/dynamic';
import {PageHeader} from '@/components/common/page-header';

// Dynamically import VideoGallery with SSR disabled
const VideoGallery = dynamic(
 () => import('@/components/videos/video-gallery'),
 {
  ssr: false,
 }
);

export default function Contact() {
 return (
  <>
   <PageHeader title="Video Gallery" />
   <VideoGallery />
  </>
 );
}
