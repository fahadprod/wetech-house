import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const CertificationSections = () => {
    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        {
            id: 1,
            name: 'CEH v13',
            profession: 'Certified Ethical Hacker',
            shortDescription:
                'CEH v13 teaches how to detect and fix cyber threats using real-world tools, labs, and updated modules.',
            description:
                'Certified Ethical Hacker (CEH) v13 is the latest version of the globally recognized cybersecurity certification offered by EC-Council. It equips individuals with advanced knowledge and tools to identify vulnerabilities and secure systems against malicious hackers. CEH v13 includes updated modules on malware analysis, cloud security, IoT threats, and ransomware defense. With a strong focus on hands-on labs and real-world scenarios, it ensures practical skill development. The certification is ideal for cybersecurity professionals, network defenders, and ethical hackers aiming to enhance their career. CEH v13 meets industry standards and helps organizations protect critical data and infrastructures from emerging cyber threats.',
            image: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/01.jpg',
            icon: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/icon-4.jpg',
        },
        {
            id: 2,
            name: 'EDU-1202',
            profession: 'Spring Professional',
            shortDescription:
                'Spring EDU‑1202 certifies skills in Spring Boot, covering REST, JDBC, security, and real-world configs.',
            description:
                'The VMware Spring Professional exam (EDU‑1202) validates in‑depth expertise with the Spring Framework and Spring Boot. It covers core areas such as configuration, component scanning, Aspect‑Oriented Programming, database access using JDBC/JPA and transaction management, REST API development, security, auto‑configuration, observability with the Actuator, and testing. The exam consists of approximately 50 multiple-choice questions to be completed in 90 minutes, with a passing score typically around 76%. Originally launched for Spring 5, it is known as one of the most challenging Java certifications, intended for developers with hands-on Spring Boot experience',
            image: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/02.jpg',
            icon: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/icon-3.jpg',
        },
        {
            id: 3,
            name: 'Salesforce',
            profession: 'Advanced Administrator',
            shortDescription:
                'Validates Salesforce admin skills in automation, security, reports, and deployment for career growth.',
            description:
                'The Salesforce Certified Advanced Administrator exam is designed for experienced professionals seeking to validate a deeper understanding of advanced features in Salesforce, including complex security models, automation, custom objects, advanced reporting, and service cloud applications. The exam includes 60 multiple-choice questions to be completed in 105 minutes, with a passing score of 65%. Key focus areas include process automation, data management, analytics, and deployment strategies. It is ideal for administrators with over a year of hands-on experience looking to enhance their skills and career prospects by demonstrating expertise in managing and optimizing Salesforce environments.',
            image: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/03.jpg',
            icon: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/icon-2.jpg',
        },
        {
            id: 4,
            name: 'AWS Certified',
            profession: 'DevOps Engineer',
            shortDescription:
                'AWS DevOps cert tests skills in CI/CD, automation, security, and cloud ops for expert-level engineers.',
            description:
                'The AWS Certified DevOps Engineer – Professional exam is a challenging, scenario-based certification designed for IT professionals with advanced AWS and DevOps experience. It consists of 75 multiple-choice and multiple-answer questions to be completed in 180 minutes, with a passing score of 750 out of 1,000. The exam covers six key domains: SDLC automation, infrastructure as code, resilient cloud solutions, monitoring and logging, incident response, and security and compliance. Candidates should have at least two years of hands-on experience with AWS, scripting skills, and knowledge of tools like CI/CD pipelines, CloudFormation, IAM, and auto-scaling. This certification validates expert-level AWS DevOps proficiency.',
            image: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/04.jpg',
            icon: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/icon-1.jpg',
        },
    ];


    const handleOpen = (card) => {
        setSelectedCard(card);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCard(null);
    };


    return (
        <section className="py-16 bg-[#363F46]">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-[#e92e3e] md:text-4xl font-bold" data-aos="fade-down">
                        Top Tier Certifications
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`card__article relative h-[400px] w-full perspective-1000`}
                            data-aos="fade-up"
                            data-aos-delay={`${card.id * 100}`}
                        >
                            {/* Front of Card */}
                            <div className="absolute w-full h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform preserve-3d backface-hidden">
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    className="card__img w-full h-full object-cover"
                                />
                                <div className="card__shadow absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <div className="card__data absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h2 className="card__name text-2xl font-bold mb-1">{card.name}</h2>
                                    <span className="card__profession text-sm">{card.profession}</span>
                                </div>


                            </div>

                            <div
                                className="card__clip absolute top-4 right-4 w-10 h-10 bg-[#e92e3e] rounded-full flex items-center justify-center text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
                            </div>
                            {/* Back of Card */}
                            <div className="info rounded-xl shadow-lg">
                                <div className="info__data">
                                    <h2 className="info__name text-2xl font-bold text-white mb-2">{card.name}</h2>
                                    <p className="info__description text-white/90 mb-6">{card.shortDescription}</p>
                                    <Button
                                        onClick={() => handleOpen(card)}
                                        className="info__button bg-[#e92e3e] hover:bg-[#e92e3e] cursor-pointer shadow-lg text-white font-medium"
                                    >
                                        READ MORE
                                    </Button>
                                </div>

                                <div className="info__social flex justify-center gap-4">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="info__link w-10 h-10 bg-[#e92e3e] rounded-full flex items-center justify-center text-white hover:[#e92e3e] transition-colors">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="info__link w-10 h-10 bg-[#e92e3e] rounded-full flex items-center justify-center text-white hover:[#e92e3e] transition-colors">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="info__link w-10 h-10 bg-[#e92e3e] rounded-full flex items-center justify-center text-white hover:[#e92e3e] transition-colors">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Shadcn Dialog */}
            <Dialog open={open} onOpenChange={handleClose}>
                <DialogContent className="w-full z-100 sm:max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <div className="flex items-center gap-4">
                            <Avatar className="w-14 h-14">
                                <AvatarImage src={selectedCard?.icon} alt={selectedCard?.name} />
                                <AvatarFallback>{selectedCard?.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <DialogTitle>{selectedCard?.name}</DialogTitle>
                                <DialogDescription>{selectedCard?.profession}</DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="mt-4">
                        <p className="text-gray-700">{selectedCard?.description}</p>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};