'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function BootCamp() {
  const [activeSidebarItem, setActiveSidebarItem] = useState('Actualize');
  const [activeTab, setActiveTab] = useState(0);

  const sidebarItems = {
    Actualize: {
      color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
      tabs: ['AI Engineer'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'AI Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-actualize-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-actualize-2.png',
            imagePath3: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-actualize-3.png',
          },
        };

        return {
          title: `Actualize in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Actualize ',
              image1: platformData[platform].imagePath1,
              image2: platformData[platform].imagePath2,
              image3: platformData[platform].imagePath3,
            },
          ],
        };
      },
    },

    'App Academy': {
      color: 'linear-gradient(-90deg, #6929C5,rgb(194, 173, 223))',
      tabs: ['AI Engineer', 'Full Stack'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'AI Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-appAcademy-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-appAcademy-2.png',
          },
          'Full Stack': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/fullStack-appAcademy-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/fullStack-appAcademy-2.png',
          },
        };

        return {
          title: `App Academy in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About App Academy ',
              image1: platformData[platform].imagePath1, // Moved image links here
              image2: platformData[platform].imagePath2, // Moved image links here
            },
          ],
        };
      },
    },

    'Career Karma': {
      color: 'linear-gradient(-90deg, #2B5E5E,rgb(110, 187, 187))',
      tabs: [
        'Data Analytics',
        'Front-End Development',
        'Full-Stack Development',
        'Full-Stack Software Engineer',
      ],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Data Analytics': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataAnalytics-careerKarma-1.png',
          },
          'Front-End Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/frontend-careerKarma-1.png',
          },
          'Full-Stack Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/fullStackDev-careerKarma-1.png',
          },
          'Full-Stack Software Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/fullStackSoft-careerKarma-1.png',
          },
        };

        return {
          title: `Career Karma in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Career Karma ',
              image1: platformData[platform].imagePath1, // Moved image links here
              image2: platformData[platform].imagePath2, // Moved image links here
            },
          ],
        };
      },
    },
    'Code Fellows': {
      color: 'linear-gradient(-90deg, #4B93E9,rgb(135, 179, 232))',
      tabs: [
        'Cybersecurity Engineer',
        'Software Development in Python',
        'Software Development in ASP.net',
        'Networking',
      ],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Cybersecurity Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/cybersecurity-codeFellows-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/cybersecurity-codeFellows-2.png',
          },
          'Software Development in Python': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/soft-dev-py-codeFellows-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/soft-dev-py-codeFellows-2.png',
          },
          'Software Development in ASP.net': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/soft-dev-asp.Net-codeFellows-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/soft-dev-asp.Net-codeFellows-2.png',
          },
          Networking: {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/networking-codeFellows-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/networking-codeFellows-2.png',
          },
        };

        return {
          title: `Code Fellows in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Code Fellows ',
              image1: platformData[platform].imagePath1,
              image2: platformData[platform].imagePath2,
            },
          ],
        };
      },
    },

    'Code Platoon': {
      color: 'linear-gradient(-90deg, #9F1D53,rgb(206, 122, 157))',
      tabs: ['Dev Ops Engineer', 'Full-Stack Software Engineer'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Dev Ops Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/devOps-codePlatoon-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/devOps-codePlatoon-2.png',
          },
          'Full-Stack Software Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/fullStack-codePlatoon-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/fullStack-codePlatoon-2.png',
          },
        };

        return {
          title: `Code Platoon in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Code Platoon ',
              image1: platformData[platform].imagePath1,
              image2: platformData[platform].imagePath2,
            },
          ],
        };
      },
    },

    'Code Smith': {
      color: 'linear-gradient(-90deg, #E74B54,rgb(225, 173, 176))',
      tabs: [
        'AI & ML Technical',
        'Software Engineer + AI/ML',
      ],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'AI & ML Technical': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-ml-codeSmith-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-ml-codeSmith-2.png',
          },
          'Software Engineer + AI/ML': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/soft-ai-ml-codeSmith-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/soft-ai-ml-codeSmith-2.png',
          },
        };

        return {
          title: `Code Smith in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Code Smith ',
              image1: platformData[platform].imagePath1,
              image2: platformData[platform].imagePath2,
            },
          ],
        };
      },
    },

    'Full Stack Academy': {
      color: 'linear-gradient(-90deg, #520A09,rgb(183, 121, 120))',
      tabs: ['AI & Machine Learning', 'Cybersecurity Analytics', 'Data Analytics'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'AI & Machine Learning': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-ml-fullStackAcademy-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-ml-fullStackAcademy-2.png',
          },
          'Cybersecurity Analytics': {
            imagePath1:
              'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/cybersecurity-fullStackAcademy-1.png',
            imagePath2:
              'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/cybersecurity-fullStackAcademy-2.png',
          },
          'Data Analytics': {
            imagePath1:
              'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataAnalytics-fullStackAcademy-1.png',
            imagePath2:
              'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataAnalytics-fullStackAcademy-2.png',
          },
        };

        return {
          title: `Full Stack Academy in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Full Stack Academy ',
              image1: platformData[platform].imagePath1, // Moved image links here
              image2: platformData[platform].imagePath2, // Moved image links here
            },
          ],
        };
      },
    },

    'General Assembly': {
      color: 'linear-gradient(-90deg, #3B7F39,rgb(144, 200, 143))',
      tabs: [
        'Data Analytics',
        'Data Science',
        'Information Technology',
        'Software Engineer',
        'UX Design',
      ],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Data Analytics': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataAnalytics-generalAssembly-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataAnalytics-generalAssembly-2.png',
          },
          'Data Science': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataScience-generalAssembly-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataScience-generalAssembly-2.png',
          },
          'Information Technology': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/it-generalAssembly-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/it-generalAssembly-2.png',
          },
          'Software Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/softEng-generalAssembly-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/softEng-generalAssembly-2.png',
          },
          'UX Design': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ux-generalAssembly-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ux-generalAssembly-2.png',
          },
        };

        return {
          title: `General Assembly in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About General Assembly',
              image1: platformData[platform].imagePath1,
              image2: platformData[platform].imagePath2,
            },
          ],
        };
      },
    },

    'Iron Hack': {
      color: 'linear-gradient(-90deg,rgb(107, 120, 198), #192D9D )',
      tabs: ['AI Engineer', 'Data Science & ML', 'Dev Ops', 'Web Development'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'AI Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-ironHack-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-ironHack-2.png',
          },
          'Data Science & ML': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataScience-ml-ironHack-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataScience-ml-ironHack-2.png',
          },
          'Dev Ops': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/devOps-ironHack-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/devOps-ironHack-2.png',
          },
          'Web Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/webDev-ironHack-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/webDev-ironHack-2.png',
          },
        };

        return {
          title: `Iron Hack in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Iron Hack ',
              image1: platformData[platform].imagePath1,
              image2: platformData[platform].imagePath2,
            },
          ],
        };
      },
    },
    'Juno College': {
      color: 'linear-gradient(-90deg,rgb(218, 124, 215),rgb(226, 131, 175) )',
      tabs: ['Web Development'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Web Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/webDev-junoCollege-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/webDev-junoCollege-2.png',
          },
        };

        return {
          title: `Juno College in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Juno College ',
              image1: platformData[platform].imagePath1, // Moved image links here
              image2: platformData[platform].imagePath2, // Moved image links here
            },
          ],
        };
      },
    },

    'Noble Desktop': {
      color: 'linear-gradient(-90deg, #B2850D,rgb(232, 207, 139))',
      tabs: [
        'Data Science',
        'Front-End Development',
        'Full-Stack Development',
        'Jam-Stack Development',
        'Python Development',
        'Software Engineering',
      ],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Data Science': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataScience-ai-nobleDesktop-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataScience-ai-nobleDesktop-2.png',
          },
          'Front-End Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/frontend-nobleDesktop-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/frontend-nobleDesktop-2.png',
          },
          'Full-Stack Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/fullStack-nobleDesktop-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/fullStack-nobleDesktop-2.png',
          },
          'Jam-Stack Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/jamStack-nobleDesktop-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/jamStack-nobleDesktop-2.png',
          },
          'Software Engineering': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/softEng-nobleDesktop-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/softEng-nobleDesktop-2.png',
          },
          'Python Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/py-nobleDesktop-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/py-nobleDesktop-2.png',
          },
        };

        return {
          title: `Noble Desktop in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Noble Desktop',
              image1: platformData[platform].imagePath1, // Moved image links here
              image2: platformData[platform].imagePath2, // Moved image links here
            },
          ],
        };
      },
    },

    'Digital Crafts': {
      color: 'linear-gradient(-90deg,rgb(182, 120, 93), #8A3814 )',
      tabs: ['AI & ML Engineer', 'Cybersecurity', 'Software Development'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'AI & ML Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-digitalCrafts-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ai-digitalCrafts-2.png',
          },
          Cybersecurity: {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/cybersecurity-digitalCrafts-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/cybersecurity-digitalCrafts-2.png',
          },
          'Software Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/softDev-digitalCrafts-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/softDev-digitalCrafts-2.png',
          },
        };

        return {
          title: `Digital Crafts in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Digital Crafts ',
              image1: platformData[platform].imagePath1, // Moved image links here
              image2: platformData[platform].imagePath2, // Moved image links here
            },
          ],
        };
      },
    },

    'Rithm School': {
      color: 'linear-gradient(-90deg, #A66EFF,rgb(217, 193, 255))',
      tabs: ['Web Development'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Web Development': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/webDev-rithmSchool-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/webDev-rithmSchool-2.png',
          },
        };

        return {
          title: `Rithm School in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Rithm School ',
              image1: platformData[platform].imagePath1, // Moved image links here
              image2: platformData[platform].imagePath2, // Moved image links here
            },
          ],
        };
      },
    },

    'The Software Guild': {
      color: 'linear-gradient(-90deg, #3B7D7A,rgb(158, 201, 199) )',
      tabs: ['Java Software Engineer', '.Net/C# Software Engineer'],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Java Software Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/java-theSoftwareGuild-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/java-theSoftwareGuild-2.png',
          },
          '.Net/C# Software Engineer': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dotNet-theSoftwareGuild-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dotNet-theSoftwareGuild-2.png',
          },
        };

        return {
          title: `The Software Guild in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About The Software Guild ',
              image1: platformData[platform].imagePath1, // Moved image links here
              image2: platformData[platform].imagePath2, // Moved image links here
            },
          ],
        };
      },
    },

    Thinkful: {
      color: 'linear-gradient(-90deg,rgb(233, 185, 90),rgb(231, 156, 5) )',
      tabs: [
        'Data Analytics',
        'Data Science',
        'Software Engineering',
        'UI/UX Design',
      ],
      content: (platform) => {
        // platform-specific data
        const platformData = {
          'Data Analytics': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataAnalytics-thinkfull-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/course-common-thinkfull-2.png',
          },
          'Data Science': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/dataScience-thinkfull-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/course-common-thinkfull-2.png',
          },
          'Software Engineering': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/softEng-thinkfull-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/course-common-thinkfull-2.png',
          },
          'UI/UX Design': {
            imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/ui-thinkfull-1.png',
            imagePath2: 'https://vveba.s3.eu-north-1.amazonaws.com/bootcamps/course-common-thinkfull-2.png',
          },
        };
        return {
          title: `Thinkful in ${platform}`,
          data: [
            {
              shortDescription: platformData[platform].shortDescription,
              heading: 'About Thinkful ',
              image1: platformData[platform].imagePath1,
              image2: platformData[platform].imagePath2,
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
        <h3 className="text-3xl md:text-4xl text-[#e92e3e] lg:text-[42px] font-bold">Top BootCamps Fee</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Mobile Dropdown Selector - Only visible on mobile */}
        <div className="block md:hidden w-full">
          <Card className="p-4">
            <CardTitle className="text-lg font-bold mb-4">Global BootCamps</CardTitle>
            <Select
              value={activeSidebarItem}
              onValueChange={(value) => {
                setActiveSidebarItem(value);
                setActiveTab(0);
              }}
            >
              <SelectTrigger className="w-full !bg-[#909599] hover:bg-[#909599] !text-white !border-l-3 rounded-sm !border-l-[#e92e3e]">
                <SelectValue placeholder="Select a bootcamp" />
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
              <CardTitle className="text-lg font-bold">Globel BootCamps</CardTitle>
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
                        <div key={index} className="mb-6 space-y-4">
                          {row.image1 && (
                            <Image
                              src={row.image1}
                              alt="Bootcamp"
                              width={1000}
                              height={300}
                              className="w-full h-auto"
                            />
                          )}
                          {row.image2 && (
                            <Image
                              src={row.image2}
                              alt="Bootcamp"
                              width={1000}
                              height={300}
                              className="w-full h-auto"
                            />
                          )}
                          {row.image3 && (
                            <Image
                              src={row.image3}
                              alt="Bootcamp"
                              width={1000}
                              height={300}
                              className="w-full h-auto"
                            />
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