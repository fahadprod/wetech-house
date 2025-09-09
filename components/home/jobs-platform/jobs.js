'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Jobs() {
    const [activeSidebarItem, setActiveSidebarItem] = useState('Web Development');
    const [activeTab, setActiveTab] = useState(0);

    // Data structure for sidebar items and their associated tab content
    const sidebarItems = {
        'Web Development': {
            color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1:
                            'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/web-rozee-1.png',
                        imagePath2:
                            'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/web-rozee-2.png',
                        jobNum: '9,208',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/web-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/web-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/web-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/web-indeed-1.png',
                    },
                };

                return {
                    title: `Web Development in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Web Developer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'JavaScript Developer': {
            color: 'linear-gradient(-90deg, #6929C5,rgb(194, 173, 223))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/js-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/js-rozee-2.png',
                        jobNum: '7,112',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/js-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/js-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/js-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/js-indeed-1.png',
                    },
                };

                return {
                    title: `JavaScript Developer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About JavaScript Developer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'Front-End Developer': {
            color: 'linear-gradient(-90deg, #2B5E5E,rgb(110, 187, 187))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/frontend-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/frontend-rozee-2.png',
                        jobNum: '3,346',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/frontend-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/frontend-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/frontend-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/frontend-indeed-1.png',
                    },
                };

                return {
                    title: `Front-End Developer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Front-End Developer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'JAM-stack Developer': {
            color: 'linear-gradient(-90deg, #4B93E9,rgb(135, 179, 232))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/jamStack-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/jamStack-rozee-2.png',
                        jobNum: '117',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/jamStack-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/jamStack-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/jamStack-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/jamStack-indeed-1.png',
                    },
                };

                return {
                    title: `JAM-stack Developer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About JAM-stack Developer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'MERN-Stack Developer': {
            color: 'linear-gradient(-90deg, #9F1D53,rgb(206, 122, 157))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/mern-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/mern-rozee-2.png',
                        jobNum: '673'
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/mern-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/mern-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/mern-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/mern-indeed-1.png',
                    },
                };

                return {
                    title: `MERN-Stack Developer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About MERN-Stack Developer ',
                            image1: platformData[platform].imagePath1,
                            image2: platformData[platform].imagePath2,
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'Next.js Specialist': {
            color: 'linear-gradient(-90deg, #E74B54,rgb(225, 173, 176))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/next-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/next-rozee-2.png',
                        jobNum: '1,336',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/next-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/next-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/next-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/next-indeed-1.png',
                    },
                };

                return {
                    title: `Next.js Specialist in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Next.js Specialist ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'React Native Developer': {
            color: 'linear-gradient(-90deg, #520A09,rgb(183, 121, 120))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/reactN-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/reactN-rozee-2.png',
                        jobNum: '1,709',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/reactN-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/reactN-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/reactN-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/reactN-indeed-1.png',
                    },
                };

                return {
                    title: `React Native Developer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About React Native Developer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'DevOps Engineer': {
            color: 'linear-gradient(-90deg, #3B7F39,rgb(144, 200, 143))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/devOps-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/devOps-rozee-2.png',
                        jobNum: '2,278',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/devOps-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/devOps-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/devOps-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/devOps-indeed-1.png',
                    },
                };

                return {
                    title: `DevOps Engineer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About DevOps Engineer ',
                            image1: platformData[platform].imagePath1,
                            image2: platformData[platform].imagePath2,
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'Salesforce Specialist': {
            color: 'linear-gradient(-90deg,rgb(107, 120, 198), #192D9D )',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/salesforce-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/salesforce-rozee-2.png',
                        jobNum: '894',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/salesforce-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/salesforce-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/salesforce-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/salesforce-indeed-1.png',
                    },
                };

                return {
                    title: `Salesforce Specialist in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Salesforce Specialist ',
                            image1: platformData[platform].imagePath1,
                            image2: platformData[platform].imagePath2,
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'Microservices Developer': {
            color: 'linear-gradient(-90deg,rgb(218, 124, 215),rgb(226, 131, 175) )',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/microservices-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/microservices-rozee-2.png',
                        jobNum: '781',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/microservices-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/microservices-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/microservices-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/microservices-indeed-1.png',
                    },
                };

                return {
                    title: `Microservices Developer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Microservices Developer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'Blockchain Developer': {
            color: 'linear-gradient(-90deg, #B2850D,rgb(232, 207, 139))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/blockchain-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/blockchain-rozee-2.png',
                        jobNum: '643',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/blockchain-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/blockchain-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/blockchain-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/blockchain-indeed-1.png',
                    },
                };

                return {
                    title: `Blockchain Developer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Blockchain Developer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'Data Scientist': {
            color: 'linear-gradient(-90deg,rgb(182, 120, 93), #8A3814 )',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/dataScientist-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/dataScientist-rozee-2.png',
                        jobNum: '784',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/dataScientist-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/dataScientist-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/dataScientist-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/dataScientist-indeed-1.png',
                    },
                };

                return {
                    title: `Data Scientist in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Data Scientist ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'Machine Learning Engineer': {
            color: 'linear-gradient(-90deg, #A66EFF,rgb(217, 193, 255))',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ml-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ml-rozee-2.png',
                        jobNum: '957',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ml-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ml-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ml-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ml-indeed-1.png',
                    },
                };

                return {
                    title: `Machine Learning Engineer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Machine Learning Engineer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'AI Engineer': {
            color: 'linear-gradient(-90deg, #3B7D7A,rgb(158, 201, 199) )',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ai-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ai-rozee-2.png',
                        jobNum: '412',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ai-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ai-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ai-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ai-indeed-1.png',
                    },
                };

                return {
                    title: `AI Engineer in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About AI Engineer ',
                            image1: platformData[platform].imagePath1, // Moved image links here
                            image2: platformData[platform].imagePath2, // Moved image links here
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },

        'Certified Ethical Hacker (CEH v13)': {
            color: 'linear-gradient(-90deg,rgb(233, 185, 90),rgb(231, 156, 5) )',
            tabs: [
                'ROZEE.pk',
                'CAREERJET.com',
                'SIMPLYHIRED.com',
                'GLASSDOOR.com',
                'INDEED.com',
            ],
            content: (platform) => {
                // platform-specific data
                const platformData = {
                    'ROZEE.pk': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ceh-rozee-1.png',
                        imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ceh-rozee-2.png',
                        jobNum: '946',
                    },
                    'CAREERJET.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ceh-career-1.png',
                    },
                    'SIMPLYHIRED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ceh-simplyHired-1.png',
                    },
                    'GLASSDOOR.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ceh-glassdoor-1.png',
                    },
                    'INDEED.com': {
                        imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/jobs-platforms/ceh-indeed-1.png',
                    },
                };
                return {
                    title: `Certified Ethical Hacker (CEH v13) in ${platform}`,
                    data: [
                        {
                            shortDescription: platformData[platform].shortDescription,
                            heading: 'About Certified Ethical Hacker (CEH v13) ',
                            image1: platformData[platform].imagePath1,
                            image2: platformData[platform].imagePath2,
                            totalJob: platformData[platform].jobNum,
                        },
                    ],
                };
            },
        },
    };

    const handleSidebarItemClick = (item) => {
        setActiveSidebarItem(item);
        setActiveTab(0);
    };

    const handleTabChange = (value) => {
        setActiveTab(parseInt(value));
    };

    return (
        <div className="container mx-auto p-4 my-12">
            <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl text-[#e92e3e] lg:text-[42px] font-bold">Top Jobs Market Platforms</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                 {/* Mobile Dropdown Selector - Only visible on mobile */}
                <div className="block md:hidden w-full">
                    <Card className="p-4">
                        <CardTitle className="text-lg font-bold mb-4">Tech Stacks</CardTitle>
                        <Select
                            value={activeSidebarItem}
                            onValueChange={(value) => {
                                setActiveSidebarItem(value);
                                setActiveTab(0);
                            }}
                        >
                            <SelectTrigger className="w-full !bg-[#909599] hover:bg-[#909599] !text-white !border-l-3 rounded-sm !border-l-[#e92e3e]">
                                <SelectValue placeholder="Select a tech stack" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="max-h-[var(--radix-select-content-available-height)]">
                                {Object.keys(sidebarItems).map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Card>
                </div>

                {/* Sidebar Column */}
                <div className="hidden md:block md:col-span-1">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold">Tech Stacks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-1">
                                {Object.keys(sidebarItems).map((item) => (
                                    <Button
                                        key={item}
                                        variant="ghost"
                                        className={`w-full justify-start px-3 py-2 rounded-md text-left ${activeSidebarItem === item
                                                ? '!bg-[#909599] hover:!bg-[#909599] text-white border-l-3 rounded-sm border-l-[#e92e3e]'
                                                : 'text-gray-800'
                                            }`}
                                        onClick={() => handleSidebarItemClick(item)}
                                    >
                                        {item}
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Column */}
                <div className="md:col-span-3">
                    <Card className="h-full py-0">
                        <Tabs value={activeTab.toString()} onValueChange={handleTabChange}>
                            <TabsList className="w-full bg-gray-100 sm:pl-0 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
                                {sidebarItems[activeSidebarItem].tabs.map((tab, index) => (
                                    <TabsTrigger
                                        key={index}
                                        value={index.toString()}
                                        className={`data-[state=active]:bg-[#909599] 
                                            data-[state=active]:border-b-3 
                                            data-[state=active]:rounded-sm 
                                            data-[state=active]:border-b-[#e92e3e] 
                                            data-[state=active]:text-white 
                                            flex-shrink-0 
                                            text-nowrap sm:ml-3
                                            p-2`}
                                    >
                                        {tab}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-4">
                                    {sidebarItems[activeSidebarItem].content(
                                        sidebarItems[activeSidebarItem].tabs[activeTab]
                                    ).title}
                                </h2>

                                <Card className="shadow-none border-none">
                                    <CardContent className="p-4">
                                        {sidebarItems[activeSidebarItem]
                                            .content(sidebarItems[activeSidebarItem].tabs[activeTab])
                                            .data.map((row, index) => (
                                                <div key={index} className="mb-6">
                                                    <div className={`grid grid-cols-1 ${row.image2 && 'md:grid-cols-2'} gap-4`}>
                                                        {row.image1 && (
                                                            <div>
                                                                <Image
                                                                    src={row.image1}
                                                                    alt="Job Platform"
                                                                    width={1000}
                                                                    height={300}
                                                                    className="w-full h-auto"
                                                                />
                                                            </div>
                                                        )}
                                                        {row.image2 && (
                                                            <div>
                                                                <Image
                                                                    src={row.image2}
                                                                    alt="Job Platform"
                                                                    width={1000}
                                                                    height={300}
                                                                    className="w-full h-auto"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {row.totalJob && (
                                                        <div className="flex justify-between items-center px-2 py-2 mt-4">
                                                            <p className="text-sm text-gray-600">
                                                                Total Jobs: {row.totalJob}
                                                            </p>

                                                            <div className="flex space-x-1">
                                                                {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                                                                    <Button
                                                                        key={page}
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        disabled
                                                                        className={`text-xs h-6 px-2 ${page === 1
                                                                                ? 'font-bold text-black'
                                                                                : 'text-blue-600'
                                                                            }`}
                                                                    >
                                                                        {page}
                                                                    </Button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </Tabs>
                    </Card>
                </div>
            </div>
        </div>
    );
}