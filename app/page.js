'use client'

import { AboutUs } from "@/components/home/aboutus/about-us";
import BlogsCard from "@/components/home/blogCard/blogs-card";
import BootCamp from "@/components/home/bootcamp-fee/bootcamp";
import CarouselSlider from "@/components/home/carousel/carousel-slider";
import { CertificationSections } from "@/components/home/certifications/certification-sections";
import { CourseDetails } from "@/components/home/course-details/course-details";
import FreelancingPlatform from "@/components/home/freelancing-platform/freelancing";
import GlobalPayScale from "@/components/home/global-pay/global-pay-scale";
import { OurGoals } from "@/components/home/goals/our-goals";
import JobPosting from "@/components/home/job-posting/job-posting";
import Jobs from "@/components/home/jobs-platform/jobs";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';



export default function Home() {

   useEffect(() => {
    AOS.init(); // duration in ms
  }, []);
  return (
    <>
    <CarouselSlider/>
    <CourseDetails/>
    <OurGoals/>
    <CertificationSections/>
    <BlogsCard/>
    <AboutUs/>
    <GlobalPayScale/>
    <FreelancingPlatform/>
    <Jobs/>
    <BootCamp/>
    <JobPosting/>
    </>
  );
}
