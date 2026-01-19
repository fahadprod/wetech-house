'use client';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const CarouselSlider = () => {
    const router = useRouter();
    const items = useMemo(
        () => [
            {
                id: 0,
                thumbIcon:
                    'https://template.canva.com/EAGSVDF6hSk/1/0/1600w-ryMlOVBL5JE.jpg',
                image:
                    '/carousel/generated/bg-01-v2.png',
                details: `The Six-Month Intensive Graphic Design + UI/UX Course is a future-ready, professional diploma program that transforms beginners and career-switchers into job-ready designers equipped with both traditional graphic design mastery and cutting-edge AI-enriched workflows. Delivered over 24–26 weeks (approximately 600–800 hours including live sessions, assignments, and portfolio projects), the curriculum focuses exclusively on the Adobe Creative Cloud ecosystem (Photoshop, Illustrator, InDesign, XD/Figma integration, and After Effects basics) while seamlessly integrating generative AI tools such as Midjourney, Adobe Firefly, DALL·E, Runway, Magnific.ai, and Uizard. Graduates complete the program with a competitive portfolio of 10–15 projects spanning branding, digital design, and user interface design, positioning them for high-demand roles in agencies, startups, tech companies, and freelance markets where junior designers now commonly earn projected $3,000–$5,000+ annually (or equivalent).																									
     
                Course 01: Students will master visual communication principles, professional Adobe workflows, AI-accelerated ideation and asset creation, and user-centered UI/UX design processes. The program emphasizes ethical AI usage, prompt engineering, iterative prototyping, and human-AI collaboration, ensuring graduates are not replaced by AI but empowered to lead with it.																									

       Month 01: Design Foundations & AI-Powered Ideation Core principles of design (composition, color theory, typography, hierarchy) combined with immediate AI integration. Students learn prompt engineering fundamentals using Midjourney and Adobe Firefly to generate mood boards, color palettes, reference imagery, and typography explorations in minutes. Traditional sketching is paired with AI tools to accelerate concept development. Outcome: Rapid visual thinking and professional-grade reference libraries.																									
																									
Month 02: Advanced Raster Workflows – Photoshop + AI Enhancement Deep mastery of Photoshop (layers, masking, retouching, compositing) enriched with AI tools: Adobe Firefly generative fill/remove, Topaz Gigapixel/Magnific for upscaling, and automated selection/refinement. Students create photorealistic mockups, editorial spreads, and social media assets 5–10× faster than traditional methods while maintaining full creative control.																									
																									
Month 03: Vector Precision & Scalable Branding – Illustrator + AI Complete Illustrator training (Pen tool, shapes, patterns, symbols, branding systems) turbocharged with AI vector generation (Adobe Illustrator’s Text-to-Vector, Vectorize, Recolor) and third-party tools like Vectorminator AI and Kittl. Projects include logo suites, icon systems, packaging, and illustration—delivered with both manual precision and AI-assisted speed.																									
																									
Month 04: Layout, Editorial & Motion – InDesign + After Effects Intro Professional multi-page layout design using InDesign (magazines, brochures, annual reports, interactive PDFs). Students integrate AI-generated imagery and illustrations directly into layouts. Introduction to motion graphics via After Effects for animated logos, social reels, and UI micro-interactions, using plugins like Rubberhose and AI-assisted rotoscoping.																									
																									
Month 05: UI/UX Design & Prototyping – Adobe XD / Figma + AI Tools Dedicated UI/UX module covering user research basics, wireframing, high-fidelity prototyping, design systems, and responsive design. Heavy integration of AI tools: Uizard (sketch/image-to-prototype), Visily, Galileo AI for instant wireframes and component generation, and Relume for site mapping. Students design mobile apps, responsive websites, and SaaS dashboards, learning to refine AI outputs into polished, accessible interfaces.																									
																									
Month 06: Portfolio, AI Workflow Mastery & Professional Launch Capstone month focuses on building a world-class portfolio (Behance + personal site). Students complete a full rebranding project or UI/UX case study from research to final prototype, documenting both traditional and AI-enriched workflows. Topics include prompt libraries, upscaling pipelines, ethical AI attribution, client presentation decks, rate negotiation, and freelancing on platforms like Upwork and Contra. Final deliverables: interactive portfolio, case studies with before/after AI comparisons, and job/interview preparation.																									
																									
By graduation, students are fluent in the entire Adobe Suite, proficient with leading generative AI tools, and capable of delivering production-ready work at 3–5× the speed of traditional designers—making them exceptionally competitive in 2025–2026 job markets that increasingly demand “AI-fluent” creatives.																									`,
                avatar:
                    'https://template.canva.com/EAGSVDF6hSk/1/0/1600w-ryMlOVBL5JE.jpg',
                title: 'Graphic Designer',
                modelTitle: 'Six-Month Graphic Design Course (AI-Enriched with Full Adobe Suite & UI/UX Focus)',
                topic: '$100/month Guaranteed',
                description: [
                    'We train you and ensure a job placement at WETECHHOUSE Pvt. Ltd.',
                    'Join our FREE Seminar – Reserve your seat now: 📞 +92 309 2977716',
                    'Appointments Required for Entry',
                    'Eligibility: Matric or Higher',
                ],
            },
            {
                id: 1,
                thumbIcon:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-2.jpg',
                image:
                    '/carousel/generated/bg-02-v2.png',
                details: `
          To qualify for Stage 02, students must complete all three levels of Stage 01, which provides the essential foundation for modern frontend development:
          
          Level 01: Students undergo 6 months of paid training, mastering HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures—followed by 2 months of free profile project building.
          
          Level 02: Covers the fundamentals of JavaScript, sharpening logic and scripting confidence.
          
          Level 03: Focuses entirely on React.js and Next.js, equipping students with the tools to build high-performance user interfaces and static/dynamic web apps.
          
          Once Stage 01 is completed, students enter Stage 02, a deeper full-stack journey spread across three structured levels—each 6 months long, free, and 4 hours per day:
          
          Level 04: JAMstack Developer – Learn to build fast, secure, and SEO-friendly web applications using modern tools and static-first architecture.
          
          Level 05: MERN Stack Developer – Dive into full-stack development using MongoDB, Express.js, React, and Node.js to build scalable applications.
          
          Level 06: Next.js (Basic) – Specialize in professional-grade web development with a focus on performance, routing, rendering, and real-world deployment using Next.js.
          
          Every student completing Stage 02 earns a guaranteed job in our company with a $500/month salary, unlocking career-ready expertise and access to Stage 03 and beyond.`,
                avatar:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-02.jpg',
                title: 'Full Stack Developer',
                topic: '$500/month Guaranteed',
                description: [
                    'We train you and ensure a job placement at WETECHHOUSE Pvt. Ltd.',
                    'Join our FREE Seminar – Reserve your seat now: 📞 +92 309 2977716',
                    'Appointments Required for Entry',
                    'Eligibility: Intermediate or equivalent',
                ],
            },
            {
                id: 2,
                thumbIcon:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-3.jpg',
                image:
                    '/carousel/generated/bg-03-v2.png',
                details: `To become a Next.js Specialist in Stage 03, students must first complete all levels of Stage 01 and Stage 02, which together provide the essential groundwork for advanced frontend and full-stack development.
          
          Level 01: 6 months of paid training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures, followed by 2 months of free profile project work.
          
          Level 02: Deep dive into the fundamentals of JavaScript, focusing on scripting, logical thinking, and foundational concepts.
          
          Level 03: Introduction to React.js and Next.js, covering components, UI rendering, and static/dynamic web experiences.
          
          Level 04: JAMstack Developer – Build fast, secure, and SEO-optimized web applications using modern frontend architecture.
          
          Level 05: MERN Stack Developer – Create full-stack web apps using MongoDB, Express.js, React, and Node.js.
          
          Level 06: Next.js (Basic) – Initial exposure to professional-grade routing, rendering, and performance optimizations using Next.js.
          
          <br/ > <br/ ><b>Now Entering Stage 03: Next.js Specialist</b>
          
          After mastering the fundamentals across both previous stages, students now begin Stage 03:
          
          Level 07: Next.js Specialist, a dedicated 6-month free training (4 hours/day) designed to sharpen expertise in building production-grade, high-performance web applications using Next.js. This stage focuses on real-world development scenarios, working in collaborative environments, and preparing for roles in modern web product teams.
          
          Upon successful completion, every graduate is guaranteed a job at our company with a $1000/month salary, proving their capability to deliver fast, scalable, and professional web applications with industry-ready confidence.`,
                avatar:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-03.jpg',
                title: 'Next.js Specialist',
                topic: '$1,000/month Guaranteed',
                description: [
                    'We train you and ensure a job placement at WETECHHOUSE Pvt. Ltd.',
                    'Join our FREE Seminar – Reserve your seat now: 📞 +92 309 2977716',
                    'Appointments Required for Entry',
                    'Eligibility: Intermediate or equivalent',
                ],
            },
            {
                id: 3,
                thumbIcon:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-4.jpg',
                image:
                    '/carousel/generated/bg-04-v2.png',
                details: `Before entering Stage 04, students must successfully complete all levels of Stage 01, Stage 02, and Stage 03. These foundational stages are essential to prepare learners with the practical development mindset, coding discipline, and real-world project experience required for advanced infrastructure and deployment roles.
          
          Level 01: 6 months of paid training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures, followed by 2 months of free profile projects.
          
          Level 02: Focused on the fundamentals of JavaScript, helping students build strong logical thinking and scripting foundations.
          
          Level 03: Introduces React.js and Next.js, allowing students to build modern, interactive web interfaces and static/dynamic web experiences.
          
          Level 04: JAMstack Developer – Learn static-first, API-driven development focused on speed, security, and scalability.
          
          Level 05: MERN Stack Developer – Build full-stack applications using MongoDB, Express, React, and Node.js.
          
          Level 06: Next.js (Basic) – Advance your skills in professional-level routing, performance, and full-stack rendering using Next.js.
          
          Level 07: A 6-month specialist-level training focused entirely on mastering high-performance, production-grade applications with Next.js. Students work on real business-grade systems in collaborative environments, readying them for enterprise roles with full deployment capability.
          
          Upon completion: Guaranteed job with $1000/month salary
          
          Now Entering Stage 4: DevOps Engineer
          
          With a strong full-stack and frontend foundation in place, learners now begin Stage 4: DevOps Engineer.
          
          Level 08: This 01-year free training (4 hours/day) is designed to train students in system reliability, automation, deployment workflows, infrastructure management, and operational readiness. Students work in simulated production environments where precision, ownership, and uptime matter most. This stage is structured to develop a DevOps mindset—where students move beyond just writing code and into building the systems that support it. Real-time collaboration, performance monitoring, CI/CD practices, and environment handling are all approached through real-world simulations. 
         
         Alongside job placement, students also become eligible to pursue two globally recognized certifications by Amazon Web Services (AWS):
         🔹 AWS Certified Solutions Architect – Associate, which validates the ability to design and deploy scalable systems on AWS
         🔹 AWS Certified DevOps Engineer – Professional, which confirms expertise in automating infrastructure, monitoring, and continuous delivery in complex cloud environments
         
         These certifications further enhance students' credibility, preparing them for international DevOps roles in high-demand enterprise and cloud-native environments.
         
         Upon successful completion, every student is guaranteed a job at our company with a $1500/month salary, officially stepping into their role as a DevOps Engineer equipped to support global tech ecosystems.`,
                avatar:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-04.jpg',
                title: 'DevOps Engineer',
                topic: '$1,500/month Guaranteed',
                description: [
                    'We train you and ensure a job placement at WETECHHOUSE Pvt. Ltd.',
                    'Join our FREE Seminar – Reserve your seat now: 📞 +92 309 2977716',
                    'Appointments Required for Entry',
                    'Eligibility: Intermediate or equivalent',
                ],
            },
            {
                id: 4,
                thumbIcon:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-1.jpg',
                image:
                    '/carousel/generated/digital_marketing_real.png',
                details: `Digital Marketing is one of the fastest-growing industries, essential for every business today. Our Digital Marketing Specialist program is designed to transform you into a data-driven marketer capable of scaling brands and driving revenue.

Level 01: Fundamentals of Marketing & Branding – Understanding consumer psychology, brand identity, and market research.

Level 02: Search Engine Optimization (SEO) – Master On-Page, Off-Page, and Technical SEO to rank websites on Google's top results.

Level 03: Social Media Marketing (SMM) – Advanced strategies for Facebook, Instagram, LinkedIn, and TikTok to build communities and drive engagement.

Level 04: Performance Marketing (PPC & Ads) – Expert training in Google Ads, Meta Ads, and programmatic advertising to maximize ROI.

Level 05: Content Marketing & Copywriting – Learn to craft compelling narratives that convert visitors into loyal customers.

Level 06: Data Analytics & Automation – Master Google Analytics 4 (GA4), heatmaps, and CRM automation tools like HubSpot and Mailchimp.

Upon completion, every student is guaranteed a job with a $2,500/month salary, ready to lead digital campaigns for global brands.`,
                avatar:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-05.jpg',
                title: 'Digital Marketing Specialist',
                topic: '$2,500/month Guaranteed',
                description: [
                    'We train you and ensure a job placement at WETECHHOUSE Pvt. Ltd.',
                    'Join our FREE Seminar – Reserve your seat now: 📞 +92 309 2977716',
                    'Appointments Required for Entry',
                    'Eligibility: Intermediate or equivalent',
                ],
            },
            {
                id: 5,
                thumbIcon:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-6.jpg',
                image:
                    '/carousel/generated/bg-06-v2.png',
                details: `Before entering Stage 06, students must successfully complete all levels of Stage 01, Stage 02, Stage 03, Stage 04, and Stage 05. These prior stages are essential for shaping a well-rounded tech expert skilled in frontend development, backend architecture, system deployment, and operational engineering.
          
          Level 01: 6 months of paid foundational training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures, followed by 2 months of free portfolio project building
          
          Level 02: Focuses purely on JavaScript fundamentals, covering the essential building blocks of logic and scripting
          
          Level 03: Introduction to React.js and Next.js, enabling development of interactive UIs and dynamic/static websites
          
          Level 04: JAMstack Developer – Learn fast, secure static-first architecture using modern APIs
          
          Level 05: MERN Stack Developer – Build full-stack apps using MongoDB, Express, React, and Node.js
          
          Level 06: Next.js (Basic) – Dive deeper into routing, server-side rendering, and optimization using Next.js
          
          Level 07: An expert-level 6-month track focused on full product delivery using Next.js, performance tuning, and live deployment strategies
          
          Level 08: 01-year free training in automation, CI/CD pipelines, infrastructure as code, and monitoring systems in production and AWS Certified Solutions Architect – Associate & AWS certified DevOps Engineer.
          
          Level 09: Professional 01-year track focused on scalable, distributed backend systems and service-oriented design, including Spring Boot Java Microservices Certification.
          <br/> <br/>
          Now Entering Stage 06: Blockchain Developer With full-stack, DevOps, and architecture mastery in place, students are now eligible for Stage 6:
          
          Level 10: Blockchain Developer—a highly specialized 04-years track (free, 4 hours/day) focused on building secure, decentralized, and tamper-proof systems that power Web3, fintech, NFTs, smart contracts, and digital identity. This program is not limited to a single certificate or training cycle.
         
         Stage 06 is designed to formally certify students as blockchain professionals, positioning them for leadership roles in the global blockchain industry. After hands-on experience in real-world simulations and decentralized systems, students advance into Level 10, where they earn four globally recognized certifications issued by EC-Council, tailored to diverse professional roles in the blockchain ecosystem:
         
            ECBP – EC-Council Certified Blockchain Professional
            Recommended for: Developers, consultants, architects, and technical managers
            This certification validates end-to-end knowledge of blockchain infrastructure, cryptography, smart contracts, and ecosystem design.
         
            EC-Council Certified Blockchain Developer (CBD)
            Recommended for: Developers, coders, and smart contract engineers
            Focuses on the practical development of blockchain applications, emphasizing security, scalability, and real-world deployment.
         
            CHFI – Computer Hacking Forensic Investigator (Blockchain Forensics Specialization)
            Recommended for: Forensic analysts, law enforcement, and auditors
            Covers blockchain-specific forensic techniques used in investigations, fraud detection, and incident response.
         
            Blockchain for Business Leaders
            Recommended for: CTOs, CEOs, project managers, and innovators
            Equips decision-makers with a strategic understanding of blockchain applications, risks, and opportunities in business.
         
         With these four certifications, our students not only master blockchain technology but also position themselves across technical, forensic, developmental, and executive roles in the industry.
         
         Upon successful completion of all levels and certifications, every student is guaranteed a $4000/month job in our company, marking their entry into the global blockchain economy as a certified, job-ready, and trusted developer.`,
                avatar:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-06.jpg',
                title: 'Blockchain Developer',
                topic: '$4,000/month Guaranteed',
                description: [
                    'We train you and ensure a job placement at WETECHHOUSE Pvt. Ltd.',
                    'Join our FREE Seminar – Reserve your seat now: 📞 +92 309 2977716',
                    'Appointments Required for Entry',
                    'Eligibility: Intermediate or equivalent',
                ],
            },
            {
                id: 6,
                thumbIcon:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-7.jpg',
                image:
                    '/carousel/generated/bg-07-v2.png',
                details: `
          To qualify for Stage 07: AI Engineer, students must complete all levels of Stage 01 through Stage 06. These stages build the full journey—from frontend foundations to backend mastery, system deployment, microservices, and secure blockchain development—equipping learners with the technical depth and real-world experience needed to move into the high-demand field of Artificial Intelligence.
          
          Level 01: Paid 6-month training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures, followed by 2 months of free profile projects
          
          Level 02: Focused solely on the fundamentals of JavaScript
          
          Level 03: Mastering modern UI with React.js and Next.js
          
          Level 04: JAMstack Developer – static-first, API-powered apps
          
          Level 05: MERN Stack Developer – full-stack web apps
          
          Level 06: Next.js – server-side and hybrid rendering
          
          Level 07: Full product delivery using Next.js as a Next.js Specialist in a real-world team environment Completion Reward: $1000/month job
          
          Level 08: Hands-on deployment, infrastructure automation, monitoring and get Certified Solutions Architect – Associate & certified DevOps Engineer from AWS.
          
          Level 09: Distributed backend systems and certification in Spring Boot Java Microservices
          
          Level 10: Real-world blockchain apps and 4 EC-Council Blockchain certifications 
          
          Now Entering Stage 07: AI Engineer
          
          With a deeply layered skill set built over six progressive stages, students now begin Stage 07:
          
          Level 11: AI Engineer, a specialized 01-Year free training (4 hours/day) designed for those who are ready to build, optimize, and deploy intelligent systems in real production environments. This stage is structured to simulate the workflows of modern AI teams, where engineers are expected to think beyond code—analyzing data, solving abstract problems, and deploying smart, scalable solutions. You’ll face project-level challenges that prepare you for roles in global tech companies working on automation, intelligent products, and decision-making engines. 
         
         This level culminates in a globally respected certification:
         
         🔹 AWS Certified Machine Learning – Specialty
         
         Issued by Amazon Web Services (AWS), this certification validates the ability to design, implement, deploy, and maintain machine learning solutions across the AWS Cloud. It demonstrates deep understanding of data engineering, model training, tuning, and operationalization in real-world environments.
         
         By achieving this credential, students position themselves as AI professionals equipped for global roles in ML engineering, data science, and intelligent product development.
         
         Upon completion of Stage 07, every graduate is guaranteed a job at our company with a $6000/month salary, launching them into one of the most respected, high-paying roles in the global software industry.`,
                avatar:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-07.jpg',
                title: 'AI Engineer',
                topic: '$6,000/month Guaranteed',
                description: [
                    'We train you and ensure a job placement at WETECHHOUSE Pvt. Ltd.',
                    'Join our FREE Seminar – Reserve your seat now: 📞 +92 309 2977716',
                    'Appointments Required for Entry',
                    'Eligibility: Intermediate or equivalent',
                ],
            },
            {
                id: 7,
                thumbIcon:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-8.jpg',
                image:
                    '/carousel/generated/bg-08-v2.png',
                details: `
          Stage 08 represents one of the most critical, high-responsibility roles in today’s digital world—Cybersecurity Expert. To be eligible for this elite training, students must complete all previous stages (Stage 01 through Stage 07), which collectively equip them with the deep technical foundation, system understanding, and secure development practices required to defend against cyber threats in modern enterprises.
          
          Level 01: Paid 6-month foundation in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures
          
          Level 02: Focus on JavaScript fundamentals
          
          Level 03: UI mastery with React.js and Next.js
          Followed by 2 months of free portfolio project building
          
          Level 04: JAMstack Developer – static-first, modern APIs
          
          Level 05: MERN Stack Developer – dynamic full-stack apps
          
          Level 06: Next.js (Basic) – hybrid rendering and scalability
          
          Level 07: Product-grade application building with real-world teamwork using Next.js as a Next.js Specialist
          
          Level 08: CI/CD, automation, infrastructure monitoring, system uptime and AWS Certified Solutions Architect – Associate & AWS certified DevOps Engineer
          
          Level 09: Backend system design, containerization, scalable services with Spring Boot Java Microservices Certification
          
          Level 10: Decentralized systems and smart contract mastery, including 4 Blockchain Certifications from EC-Council
          
          Level 11: Real-world intelligent systems simulation, smart automation logic, working as an AI Engineer and AWS Certified Machine Learning – Specialty
         
          
          Now Entering Stage 8: Cybersecurity Expert
          
          Cybersecurity isn’t optional—it’s the backbone of modern digital ecosystems.
          
         Level 12: Students take on one of the most sensitive and respected roles in tech: defending systems, networks, and organizations from cyber threats. This 05-years free program (4 hours/day) prepares learners to operate in high-risk, high-stakes environments where ethical hacking, penetration testing, and threat response are core responsibilities.
          
         Stage 08, marks the highest achievement in our cybersecurity engineering pathway. This level transforms students into elite cybersecurity experts—equipped to protect digital infrastructures at enterprise and government levels. Upon reaching this stage, students will enter intensive training, live simulations, and red/blue/purple team operations to prepare for a suite of globally recognized certifications issued by EC-Council.
         
            <br/ > <br/ >
            <ul style="margin-left: 20px;">
  <li>
    <strong>CSC – Certified Secure Computer User</strong>
    <p>Fundamental digital safety awareness for end-users.</p>
  </li>
  <li>
    <strong>CND – Certified Network Defender</strong>
    <p>In-depth skills for protecting, detecting, and responding to network threats.</p>
  </li>
  <li>
    <strong>CEH v13 – Certified Ethical Hacker</strong>
    <p>The world’s most respected ethical hacking certification.</p>
  </li>
  <li>
    <strong>CEH Practical – Certified Ethical Hacker (Practical)</strong>
    <p>A performance-based extension of CEH that validates hands-on skills.</p>
  </li>
  <li>
    <strong>ECIH – EC-Council Certified Incident Handler</strong>
    <p>Skills to respond to and manage security incidents in real time.</p>
  </li>
  <li>
    <strong>CHFI – Computer Hacking Forensic Investigator</strong>
    <p>Digital forensics and investigation training for law enforcement, enterprises, and analysts.</p>
  </li>
  <li>
    <strong>CPENT – Certified Penetration Testing Professional</strong>
    <p>Advanced penetration testing certification with live exploit challenges.</p>
  </li>
  <li>
    <strong>LPT – Licensed Penetration Tester</strong>
    <p>One of EC-Council’s most elite red team certifications, reserved for proven professionals.</p>
  </li>
  <li>
    <strong>CCISO – Certified Chief Information Security Officer</strong>
    <p>Strategic leadership certification focused on governance, risk, and enterprise security.</p>
  </li>
  <li>
    <strong>E|CDE – EC-Council Certified DevSecOps Engineer</strong>
    <p>Security automation and DevSecOps specialization across CI/CD pipelines.</p>
  </li>
  <li>
    <strong>CSA (AI Labs) – Certified SOC Analyst</strong>
    <p>Focused on real-time security operations, monitoring, threat hunting, and incident analysis using advanced tools and AI-based SOC platforms.</p>
  </li>
</ul>

          <br/ >
         Upon successful completion of Stage 08, every student is guaranteed a $10,000/month job at our company, entering the global cybersecurity space as a certified, trusted, and battle-tested expert.`,
                avatar:
                    'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-08.jpg',
                title: ' Cybersecurity Expert',
                topic: '$10,000/month Guaranteed',
                description: [
                    'We train you and ensure a job placement at WETECHHOUSE Pvt. Ltd.',
                    'Join our FREE Seminar – Reserve your seat now: 📞 +92 309 2977716',
                    'Appointments Required for Entry',
                    'Eligibility: Intermediate or equivalent',
                ],
            },
        ],
        []
    );

    const [isNext, setIsNext] = useState(false);
    const [isPrev, setIsPrev] = useState(false);
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeRunningRef = useRef();
    const runNextAutoRef = useRef();

    const timeRunning = 3000;
    const timeAutoNext = 10000;

    const showSlider = useCallback((type) => {
        if (!sliderRef.current || !thumbnailBorderRef.current || !carouselRef.current) return;

        const sliderItems = sliderRef.current.children;
        const thumbnailItems = thumbnailBorderRef.current.children;

        if (type === 'next') {
            sliderRef.current.appendChild(sliderItems[0]);
            thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
            setIsNext(true);
        } else {
            const lastSliderIndex = sliderItems.length - 1;
            const lastThumbnailIndex = thumbnailItems.length - 1;

            sliderRef.current.prepend(sliderItems[lastSliderIndex]);
            thumbnailBorderRef.current.prepend(thumbnailItems[lastThumbnailIndex]);
            setIsPrev(true);
        }

        clearTimeout(timeRunningRef.current);
        clearTimeout(runNextAutoRef.current);

        timeRunningRef.current = setTimeout(() => {
            setIsNext(false);
            setIsPrev(false);
        }, timeRunning);

        runNextAutoRef.current = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);
    }, []);

    const thumbnailNavigation = useCallback((e) => {
        const clickedEl = e.currentTarget;
        const thumbs = thumbnailBorderRef.current.children;
        const currentIndex = Array.from(thumbs).indexOf(clickedEl);

        if (currentIndex === -1) return;

        for (let i = 0; i < currentIndex; i++) {
            sliderRef.current.appendChild(sliderRef.current.children[0]);
            thumbnailBorderRef.current.appendChild(thumbnailBorderRef.current.children[0]);
        }

        setIsNext(true);

        clearTimeout(timeRunningRef.current);
        clearTimeout(runNextAutoRef.current);

        timeRunningRef.current = setTimeout(() => {
            setIsNext(false);
        }, timeRunning);

        runNextAutoRef.current = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);
    }, [showSlider]);

    useEffect(() => {
        runNextAutoRef.current = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);

        return () => {
            clearTimeout(timeRunningRef.current);
            clearTimeout(runNextAutoRef.current);
        };
    }, [showSlider]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleDialogOpen = useCallback((item) => {
        setSelectedItem(item);
        setDialogOpen(true);
    }, []);

    const handleDialogClose = useCallback(() => {
        setDialogOpen(false);
        setSelectedItem(null);
    }, []);

    const processedDetails = useMemo(() => {
    if (!selectedItem) return '';
    return selectedItem.details
        .replace(/Course (\d{2}):/g, '<br /><br /><strong>Course Objectives:</strong>')
        .replace(/Month (\d{2}):/g, '<br /><br /><strong>Month $1:</strong>')
        .replace(/Month (\d):/g, '<br /><br /><strong>Month 0$1:</strong>');
}, [selectedItem]);

    const buttonStyles = useMemo(() => ({
        boxShadow: 'none',
        borderRadius: '50px',
        backgroundColor: '#e92e3e',
        '&:hover': {
            backgroundColor: '#363f46',
            color: '#ffffff',
        },
    }), []);

    return (
        <div
            ref={carouselRef}
            className={`carousel ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`}
        >
            <div ref={sliderRef} className="list">
                {items.map((item, index) => (
                    <div key={item.id} className="item">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="carousel-image"
                            loading={index === 0 ? "eager" : "lazy"}
                            fetchPriority={index === 0 ? "high" : "low"}
                            priority={index === 0}
                        />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <ul className="des">
                                {item.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                            <div className="buttons">
                                <Button
                                    style={buttonStyles}
                                    onClick={() => router.push('/seminar')}
                                >
                                    Book Seminar
                                </Button>
                                <Button
                                    style={buttonStyles}
                                    onClick={() => handleDialogOpen(item)}
                                >
                                    Details
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div ref={thumbnailBorderRef} className="thumbnail">
                {items.map((item) => (
                    <div key={item.id} className="item" onClick={thumbnailNavigation}>
                        <Image
                            src={item.thumbIcon}
                            alt={item.title}
                            width={200}
                            height={120}
                            className="thumbnail-image"
                            loading="lazy"
                            fetchPriority="low"
                        />
                        <div className="content">
                            <div className="title" style={{ color: '#363f46' }}>
                                {item.title}
                            </div>
                            <div className="description">{item.topic}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button id="prev" onClick={() => showSlider('prev')}>
                    ‹
                </button>
                <button id="next" onClick={() => showSlider('next')}>
                    ›
                </button>
            </div>

            <div className="time"></div>
            <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
                <DialogContent className="w-full z-100 sm:max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        {selectedItem && (
                            <>
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-14 h-14">
                                        <AvatarImage src={selectedItem.avatar} alt={selectedItem.title} />
                                    </Avatar>
                                    <div>
                                        <DialogTitle>
                                            {selectedItem.modelTitle || selectedItem.title}
                                        </DialogTitle>
                                        <DialogDescription>
                                            {selectedItem.topic}
                                        </DialogDescription>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div
                                        className="prose max-w-none"
                                        dangerouslySetInnerHTML={{ __html: processedDetails }}
                                    />
                                </div>
                            </>
                        )}
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default React.memo(CarouselSlider);