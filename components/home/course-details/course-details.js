'use client';
import { useState } from 'react';
import { CoursesData as data } from '@/constants/webDevelopemt';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

export const CourseDetails = () => {
  const [selectedCourse, setSelectedCourse] = useState(data.courses[0]);
  const [selectedNav, setSelectedNav] = useState(data.courses[0].navigation[0].id);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [currentVideo, setCurrentVideo] = useState('');

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setSelectedNav(course.navigation[0].id);
  };

  const handleNavSelect = (navId) => {
    setSelectedNav(navId);
    setSelectedTool(null); // Reset selected tool when changing tabs
  };

  const handleClickOpen = (weekIndex) => {
    const weeks = selectedCourse.navigation.find((nav) => nav.id === 'detail')?.content || [];
    setSelectedWeek(weeks[weekIndex]);
    setDialogOpen(true);
  };

  const handleVideoDialog = (videoLink) => {
    setDialogOpen(true);
    setCurrentVideo(videoLink);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const renderContent = () => {
    const navContent = selectedCourse.navigation.find((nav) => nav.id === selectedNav);
    
    switch (selectedNav) {
      case 'detail':
        return (
          <div>
            {navContent?.content?.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">
                  {item.content}...
                  <span
                    onClick={() => handleClickOpen(index)}
                    className="text-purple-600 cursor-pointer ml-1"
                  >
                    Read More
                  </span>
                </p>
                {item.link && (
                  <p className="text-blue-600">
                    <Link href={item.link} target="_blank">
                      {item.link}
                    </Link>
                  </p>
                )}
              </div>
            ))}

            <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
              <DialogContent className="w-full z-100 sm:max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedWeek?.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  {selectedWeek?.days?.map((day) => (
                    <div key={day.day} className="mb-6">
                      <h4 className="text-lg font-semibold">{day.title}</h4>
                      <p className="text-gray-700">{day.content}</p>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        );

      case 'earning-potential':
      case 'team':
      case 'training':
      case 'requirement':
      case 'faq':
      case 'agreement':
        return (
          <div>
            {navContent?.content?.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description || item.content}</p>
              </div>
            ))}
          </div>
        );

      case 'profile':
      case 'projects':
        return (
          <div>
            {selectedNav === 'profile' && (
              <h3 className="text-xl font-bold text-center underline mb-6">
                An Individual Profile After completing 8 Months
              </h3>
            )}
            
            {navContent?.content?.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{item.title}:</h3>
                <p className="text-gray-600">{item.description}</p>

                {item.VideoLink && (
                  <div
                    onClick={() => handleVideoDialog(item.VideoLink)}
                    className="flex flex-col sm:flex-row items-center gap-6 mt-6 border border-gray-300 p-4 cursor-pointer hover:bg-gray-50"
                  >
                    {item.imageLink && (
                      <Image
                        src={item.imageLink}
                        width={200}
                        height={200}
                        alt={item.title}
                        className="w-auto h-auto"
                      />
                    )}
                    <p className="text-blue-600">
                      Click Here to Watch project detail
                    </p>
                  </div>
                )}

                {item.link && (
                  <Button className="w-full mt-6 bg-[#363f46] hover:bg-[#e92e3e]">
                    <Link
                      href={item.link}
                      target="_blank"
                      className="text-white no-underline w-full"
                    >
                      Click Here to Watch Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            ))}

            <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
              <DialogContent className="w-full z-100 sm:max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="relative h-full w-full">
                  {currentVideo && (
                    <iframe
                      src={currentVideo}
                      width="100%"
                      height="100%"
                      className="border-0"
                      allowFullScreen
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        );

      case 'authentication':
        return (
          <div className="p-6">
            {navContent?.content && (
              <>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {navContent.content.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() => setSelectedTool(item)}
                      variant={selectedTool?.title === item.title || (index === 0 && !selectedTool) ? 'default' : 'outline'}
                      className={`min-w-[90px] ${selectedTool?.title === item.title || (index === 0 && !selectedTool) ? 'bg-[#e92e3e] text-white' : ''}`}
                    >
                      {item.title}
                    </Button>
                  ))}
                </div>

                <div className="flex justify-center">
                  <div className="max-w-full">
                    <Image
                      src={selectedTool?.imageLink || navContent.content[0]?.imageLink}
                      width={1345}
                      height={300}
                      alt={selectedTool?.title || navContent.content[0]?.title}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        );

      default:
        return <p className="text-gray-600">{selectedCourse.content}</p>;
    }
  };

  return (
    <div className="mx-auto sm:px-5 px-3 max-w-7xl" id='coursedetails'>
      <div className="text-center mt-16">
        {/* <span className="text-[#363f46] text-lg font-medium uppercase tracking-wider">Latest Insights</span> */}
        <h2 className="text-3xl md:text-4xl text-[#e92e3e] lg:text-[42px] font-bold mt-2">Course Details</h2>
      </div>

      <div className="w-full bg-gray-100 rounded p-2 mt-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        {/* Course Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full md:w-auto justify-between bg-[#363f46] text-white hover:text-white hover:bg-[#363f46]/90"
            >
              <span className="truncate max-w-[180px]">{selectedCourse.title}</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            {data.courses.map((course) => (
              <DropdownMenuItem 
                key={course.id}
                onClick={() => handleCourseSelect(course)}
                className={course.id === selectedCourse.id ? 'bg-gray-100' : ''}
              >
                {course.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Navigation Tabs */}
        <div className="w-full md:w-auto overflow-x-auto whitespace-nowrap scrollbar-hide pb-2 md:pb-0">
          <div className="inline-flex space-x-2">
            {selectedCourse.navigation.map((nav) => (
              <Button
                key={nav.id}
                onClick={() => handleNavSelect(nav.id)}
                variant={selectedNav === nav.id ? 'default' : 'none'}
                className={`min-w-max ${selectedNav === nav.id ? 'bg-[#e92e3e] hover:bg-[#e92e3e] text-white' : ''}`}
              >
                {nav.title}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-4 h-[400px] overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};