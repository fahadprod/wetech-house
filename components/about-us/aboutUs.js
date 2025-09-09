'use client'

import { teamMembers } from '@/constants/teamdata';
import Image from 'next/image';

export const AboutUs = () => {
  return (
    <section className="bg-white">
     <div className='max-w-6xl mx-auto'>
         {/* Introduction Section */}
      <div className="px-4 md:px-30 lg:px-40 py-12 md:py-16">
        <p className="text-justify text-gray-700">
          VVEBA Pvt Ltd is a career-focused tech bootcamp platform that transforms
          passionate learners into skilled professionals ready for the global digital
          economy. We focus on real-world learning, offering a structured path that
          leads from education to income. With a strong emphasis on practical skills,
          mentorship, and results, VVEBA stands as a bridge between talent and
          opportunity. Our mission is to create opportunities, build talent, and
          shape the next generation of tech leaders from the ground up.
        </p>
      </div>

      {/* Who We Are / What We Do Section */}
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Who We Are */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#363f46] text-center py-2 mb-4">
              <h5 className="text-white font-medium">WHO WE ARE</h5>
            </div>
            <p className="text-justify text-gray-700">
              VVEBA Pvt Ltd is a tech bootcamp platform dedicated to helping students
              become skilled, job-ready professionals. We are a passionate team of
              developers, instructors, and mentors committed to delivering real-world,
              practical tech education that drives career growth.
            </p>
          </div>

          {/* What We Do */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#363f46] text-center py-2 mb-4">
              <h5 className="text-white font-medium">WHAT WE DO</h5>
            </div>
            <p className="text-justify text-gray-700">
              VVEBA Pvt Ltd We provide hands-on training in 15 high-demand tech
              stacks, along with 4 global certifications. After 6 months of training
              and 2 months of profile projects building, students start earning
              through real world projects, and freelance work at our company.
            </p>
          </div>
        </div>
      </div>

      {/* Road to $10,000 Section */}
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="flex justify-center">
          <div className="w-full md:w-2/5">
            <div className="bg-[#e92e3e] text-center py-2">
              <h5 className="text-white font-medium">ROAD TO $10,000</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-16 md:mb-24 bg-white shadow-lg rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border-r-2 border-[#e92e3e] pr-4">
            <div className="font-bold text-3xl pb-5">14</div>
            <div className="pb-2">Tech Stacks</div>
          </div>
          <div className="border-r-2 border-[#e92e3e] pr-4">
            <div className="font-bold text-3xl pb-5">4</div>
            <div className="pb-2">Certifications</div>
          </div>
          <div className="border-r-2 border-[#e92e3e] pr-4">
            <div className="font-bold text-3xl pb-5">10,000</div>
            <div className="pb-2">Hours</div>
          </div>
          <div>
            <div className="font-bold text-3xl pb-5">7</div>
            <div className="pb-2">Years</div>
          </div>
        </div>
      </div>

      {/* Chairmen Section */}
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Chairman 1 */}
          <div className="w-full md:w-1/2">
            <div className="clip-polygon">
              <Image
                src="https://vveba.s3.eu-north-1.amazonaws.com/about/muhammad-sharif.jpg"
                alt="Muhammad Sharif"
                width={500}
                height={350}
                loading="lazy"
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="bg-[#e92e3e] text-white py-2 mt-4 font-bold text-center">
              Muhammad Sharif <br />
              <small className="text-sm">The Company Chairman</small>
            </div>
          </div>

          {/* Chairman 2 */}
          <div className="w-full md:w-1/2">
            <div className="clip-polygon">
              <Image
                src="https://vveba.s3.eu-north-1.amazonaws.com/about/shahid-khalid.jpg"
                alt="Shahid Khalid"
                width={500}
                height={350}
                loading="lazy"
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="bg-[#e92e3e] text-white py-2 mt-4 font-bold text-center">
              Shahid Khalid <br />
              <small className="text-sm">The Company Co-Chairman</small>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="flex flex-col md:flex-row gap-8 my-8">
          {/* Mission */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/svg/mission-01.svg"
                alt="Mission Icon"
                width={40}
                height={40}
              />
              <h4 className="text-[#e92e3e] text-xl font-bold">MISSION</h4>
            </div>
            <p className="text-gray-600 mt-3 text-justify">
              We aim to bring $450 billion annually into Pakistan&apos;s economy by tapping
              into global markets while staying within our own country. We train our
              youth in 15 highdemand tech stacks and offer 4 globally recognized
              certifications to equip them with cutting-edge digital skills. Our
              students learn to create fungible tokens, master cybersecurity, and
              build real-world projects. Instead of sending our talent abroad, we&apos;ll
              establish a software house of our own to provide work opportunities and
              hands-on experience. Earnings begin at $200 and grow step by step —
              $500, $1,000, $1,500, and beyond — reaching up to $10,000/month. With
              every bootcamp, their skills improve and their income multiplies. Our
              vision is to transform Pakistan into a global tech hub by nurturing
              local talent and channeling it into the international digital economy.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/svg/vision.svg"
                alt="Vision Icon"
                width={40}
                height={40}
              />
              <h4 className="text-[#e92e3e] text-xl font-bold">VISION</h4>
            </div>
            <p className="text-gray-600 mt-3 text-justify">
              We aim to bring $450 billion annually into Pakistan&apos;s economy by tapping
              into global markets while staying within our own country. We train our
              youth in 15 highdemand tech stacks and offer 4 globally recognized
              certifications to equip them with cutting-edge digital skills. Our
              students learn to create fungible tokens, master cybersecurity, and
              build real-world projects. Instead of sending our talent abroad, we&apos;ll
              establish a software house of our own to provide work opportunities and
              hands-on experience. Earnings begin at $200 and grow step by step —
              $500, $1,000, $1,500, and beyond — reaching up to $10,000/month. With
              every bootcamp, their skills improve and their income multiplies. Our
              vision is to transform Pakistan into a global tech hub by nurturing
              local talent and channeling it into the international digital economy.
            </p>
          </div>
        </div>
      </div>

      {/* Team Vveba Section */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold pb-10">Team Vveba</h2>
      </div>

      {/* Team Members */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-lg mx-auto"
                loading="lazy"
              />
              <div className="mt-4">
                <h5 className="text-lg font-semibold">{member.name}</h5>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Polygon clip-path style */}
      <style jsx>{`
        .clip-polygon {
          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 77%);
        }
      `}</style>
     </div>
    </section>
  );
};