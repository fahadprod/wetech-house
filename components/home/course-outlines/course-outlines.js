'use client';
import React, { useState, useMemo } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';

// Import your course data
import { CoursesData } from '@/constants/courseData';

// Module key mapping
const MODULE_KEY_MAP = {
    'Highlights': 'highlights',
    'Module 1': 'module1',
    'Module 2': 'module2',
    'Module 3': 'module3',
    'Module 4': 'module4',
    'Module 5': 'module5',
    'Module 6': 'module6',
    'Module 7': 'module7',
    'Module 8': 'module8',
    'Module 9': 'module9',
    'Specialization': 'specialization',
    'Team of Ten+': 'teamOfTen',
    'Projects': 'projects',
    'Authentication': 'authentication',
    'Agreement': 'agreement',
};

// Dialog components
const ReadMoreDialog = ({ open, onOpenChange, selectedWeek }) => {
    const contentToShow = selectedWeek;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full z-100 sm:max-w-6xl overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl">{contentToShow?.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <p className="text-gray-700 mb-4">{contentToShow?.content}</p>
                    {contentToShow?.days?.map((day) => (
                        <div key={day.day} className="mb-6 border-b pb-4">
                            <h4 className="text-lg font-semibold">{day.title}</h4>
                            <p className="text-gray-700">
                                {Array.isArray(day.content) ? (
                                    <ul className="list-disc pl-5 space-y-2">
                                        {day.content.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    day.content
                                )}
                            </p>
                            {day.demo && (
                                <p className="text-blue-600 mt-2">
                                    <Link href={day.demo} target="_blank" className="hover:underline">
                                        View Demo Theme
                                    </Link>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

const VideoDialog = ({ open, onOpenChange, currentLink }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full z-100 sm:max-w-6xl h-[calc(100vh-50px)] overflow-y-auto">
                <div className="relative h-full w-full mt-4">
                    {currentLink && (
                        <iframe
                            src={currentLink}
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

// Updated Projects Dialog Component to accept projects list as prop
const ProjectsDialog = ({ open, onOpenChange, projects = [] }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full z-100 sm:max-w-4xl overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl">List of Projects</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <div className="space-y-3">
                        {projects && projects.length > 0 ? (
                            projects.map((project, index) => (
                                <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#e92e3e] text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                                        {index + 1}
                                    </span>{' '}
                                    <span className="text-gray-700">{project}</span>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-4 text-gray-500">
                                No projects available for this week.
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

// Main component
export default function CourseOutlines() {
    const [selectedCourseId, setSelectedCourseId] = useState(CoursesData.courses[0].id);
    const [activeSidebarItem, setActiveSidebarItem] = useState('Highlights');
    const [selectedWeek, setSelectedWeek] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [videoDialogOpen, setVideoDialogOpen] = useState(false);
    const [projectsDialogOpen, setProjectsDialogOpen] = useState(false);
    const [currentLink, setCurrentLink] = useState('');
    const [selectedTool, setSelectedTool] = useState(null);
    const [currentProjects, setCurrentProjects] = useState([]);

    // Get the selected course based on selectedCourseId
    const selectedCourse = useMemo(() => {
        return CoursesData.courses.find(course => course.id === selectedCourseId) || CoursesData.courses[0];
    }, [selectedCourseId]);

    const handleCourseChange = (value) => {
        setSelectedCourseId(value)
        setActiveSidebarItem('Highlights')
    }

    const handleClickOpen = (weekIndex) => {
        const moduleKey = MODULE_KEY_MAP[activeSidebarItem];
        const weeks = selectedCourse.modules[moduleKey]?.content || [];
        setSelectedWeek(weeks[weekIndex]);
        setDialogOpen(true);
    };

    const handleVideoDialog = (link) => {
        setCurrentLink(link);
        setVideoDialogOpen(true);
    };

    const handleProjectsDialog = (projects) => {
        setCurrentProjects(projects || []);
        setProjectsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setVideoDialogOpen(false);
        setProjectsDialogOpen(false);
        setSelectedWeek(null);
        setCurrentLink('');
        setCurrentProjects([]);
    };

    const SIDEBAR_ITEMS = useMemo(() => {
        return [
            'Highlights',
            'Module 1',
            'Module 2',
            'Module 3',
            'Module 4',
            'Module 5',
            'Module 6',
            'Module 7',
            'Module 8',
            'Module 9',
            'Specialization',
            'Team of Ten+',
            'Projects',
            'Authentication',
            'Agreement'
        ];
    }, []);

    // Get current content based on active sidebar item
    const getCurrentContent = () => {
        const moduleKey = MODULE_KEY_MAP[activeSidebarItem];
        return selectedCourse.modules[moduleKey] || null;
    };

    const renderContent = () => {
        const currentModule = getCurrentContent();

        if (!currentModule) {
            return (
                <div className="text-center py-8 text-gray-500">
                    No content available for this module
                </div>
            );
        }

        switch (activeSidebarItem) {
            case 'Highlights':
            case 'Module 1':
            case 'Module 2':
            case 'Module 3':
            case 'Module 4':
            case 'Module 5':
            case 'Module 6':
            case 'Module 7':
            case 'Module 8':
            case 'Module 9':    
                return (
                    <div className="space-y-6">
                        {currentModule.content?.map((item, index) => (
                            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">
                                    {item.content?.substring(0, 200)}...
                                    <span
                                        onClick={() => handleClickOpen(index)}
                                        className="text-purple-600 cursor-pointer ml-1 hover:underline"
                                    >
                                        Read More
                                    </span>
                                </p>

                                {/* Updated: Pass the specific week's listOfProjects to the dialog */}
                               {item.listOfProjects && <div className="w-full mt-6">
                                    <Button
                                        onClick={() => handleProjectsDialog(item.listOfProjects)}
                                        className="text-white bg-[#363f46] hover:bg-[#e92e3e] w-full py-6 text-lg"
                                    >
                                        List of Projects
                                    </Button>
                                </div>}
                            </div>
                        ))}
                    </div>
                );
            case 'Specialization':
            case 'Team of Ten+':
            case 'Projects':
                return (
                    <div className="space-y-6">
                        {activeSidebarItem === 'Specialization' && (
                            <h3 className="text-xl font-bold text-center underline mb-6">
                                An Individual Profile After completing {selectedCourse.title}
                            </h3>
                        )}

                        {currentModule.content?.map((item, index) => (
                            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-2xl text-red-600 mb-2 font-bold">{item.title}</h3>
                                <div className="text-gray-600">{parse(item.description || '')}</div>

                                {item.VideoLink && (
                                    <div
                                        onClick={() => handleVideoDialog(item.VideoLink)}
                                        className="flex flex-col sm:flex-row items-center gap-6 mt-6 border border-gray-300 p-4 cursor-pointer hover:bg-gray-50 rounded-lg"
                                    >
                                        {item.imageLink && (
                                            <Image
                                                src={item.imageLink}
                                                width={200}
                                                height={200}
                                                alt={item.title}
                                                className="w-auto h-auto rounded"
                                            />
                                        )}
                                        <p className="text-blue-600 font-medium">
                                            Click Here to Watch project detail
                                        </p>
                                    </div>
                                )}

                                {item.link && (
                                    <div className="w-full mt-6">
                                        <Button
                                            onClick={() => handleVideoDialog(item.link)}
                                            className="text-white bg-[#363f46] hover:bg-[#e92e3e] w-full py-6 text-lg"
                                        >
                                            Click Here to Watch Live Demo
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );

            case 'Authentication':
                return (
                    <div className="p-6">
                        {currentModule.content && (
                            <>
                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {currentModule.content.map((item, index) => (
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
                                            src={selectedTool?.imageLink || currentModule.content[0]?.imageLink}
                                            width={1345}
                                            height={300}
                                            alt={selectedTool?.title || currentModule.content[0]?.title}
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                );

            case 'Agreement':
                return (
                    <div className="space-y-6">
                        {currentModule.content?.map((item, index) => (
                            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description || item.content}</p>
                            </div>
                        ))}
                    </div>
                );

            default:
                return (
                    <div className="text-center py-8 text-gray-500">
                        Select a module to view content
                    </div>
                );
        }
    };

    return (
        <div className="container mx-auto sm:px-5 px-3 max-w-7xl mt-16" id='coursedetails'>
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl text-[#e92e3e] lg:text-[42px] font-bold">Course Details</h2>
                
                {/* Year/Course Selection Dropdown */}
                <div className="mt-6 sm:max-w-5xl max-w-md mx-auto">
                    <Card className="p-4">
                        <label htmlFor="course-select" className="block text-sm font-medium text-gray-700 mb-2">
                            Select Course/Year
                        </label>
                        <Select
                            value={selectedCourseId}
                            onValueChange={handleCourseChange}
                        >
                            <SelectTrigger className="w-full !bg-[#909599] hover:bg-[#909599] !text-white !border-l-3 rounded-sm !border-l-[#e92e3e]">
                                <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="max-h-[var(--radix-select-content-available-height)]">
                                {CoursesData.courses.map((course) => (
                                    <SelectItem key={course.id} value={course.id}>
                                        {course.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Card>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Mobile Dropdown Selector */}
                <div className="block md:hidden w-full">
                    <Card className="p-4">
                        <h3 className="text-lg font-bold">Course Modules</h3>
                        <Select
                            value={activeSidebarItem}
                            onValueChange={setActiveSidebarItem}
                        >
                            <SelectTrigger className="w-full !bg-[#909599] hover:bg-[#909599] !text-white !border-l-3 rounded-sm !border-l-[#e92e3e]">
                                <SelectValue placeholder="Select a module" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="max-h-[var(--radix-select-content-available-height)]">
                                {SIDEBAR_ITEMS.map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Card>
                </div>

                {/* Desktop Sidebar */}
                <div className="hidden md:block w-full md:w-1/4">
                    <Card className="p-4 h-full">
                        <div className="space-y-2 mt-3">
                            {SIDEBAR_ITEMS.map((item) => (
                                <Button
                                    key={item}
                                    variant={activeSidebarItem === item ? 'default' : 'ghost'}
                                    className={`w-full justify-start ${activeSidebarItem === item ? 'bg-[#909599] hover:bg-[#909599] text-white border-l-3 rounded-sm border-l-[#e92e3e]' : 'text-gray-800 hover:bg-gray-100'}`}
                                    onClick={() => setActiveSidebarItem(item)}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4">
                    <Card className="p-0 min-h-[500px] h-[650px] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold capitalize">
                                    {getCurrentContent()?.title || activeSidebarItem}
                                </h2>
                            </div>
                            <p className="text-gray-600 mb-6">{getCurrentContent()?.description}</p>
                            <div className="overflow-y-auto max-h-[600px]">
                                {renderContent()}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Dialogs */}
            <ReadMoreDialog
                open={dialogOpen}
                onOpenChange={handleDialogClose}
                selectedWeek={selectedWeek}
            />

            <VideoDialog
                open={videoDialogOpen}
                onOpenChange={handleDialogClose}
                currentLink={currentLink}
            />

            {/* Updated Projects Dialog with dynamic projects list */}
            <ProjectsDialog
                open={projectsDialogOpen}
                onOpenChange={handleDialogClose}
                projects={currentProjects}
            />
        </div>
    );
}