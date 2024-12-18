'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SkillCards } from '@/components';
import { motion } from 'framer-motion';
import { FaPython } from 'react-icons/fa';
import {
   SiMongodb, SiCplusplus, SiMysql, SiReact, 
   SiTailwindcss, SiExpress, SiNodedotjs, SiTypescript,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const About = ({
   setActiveSection,
}: {
   setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
   const { ref, inView } = useInView();
   const [activeTab, setActiveTab] = useState('work');

   useEffect(() => {
      if (inView) {
         setActiveSection('About');
      }
   }, [setActiveSection, inView]);

   return (
      <>
         <section className='h-auto md:h-screen max-w-5xl mx-auto' id='about'>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className='flex justify-center'
            >
               <div className='text-4xl text-white mt-24'>About</div>
            </motion.div>
            <div className='md:flex flex-row gap-16 px-4 lg:px-0' ref={ref}>
               <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex-1'
               >
                  <div
                     className={`text-gray-400 text-md mt-12 ${roboto.className}`}
                  >
                     <p className='pb-3'>
                        Hi, I'm{' '}
                        <span className='text-purple-400'>Shimu Pan.</span> I am
                        a dedicated and passionate senior{' '}
                        <span className='text-purple-400'>
                           Computer Science
                        </span>{' '}
                        student at{' '}
                        <span className='text-purple-400'>
                           Rensselaer Polytechnic Institute
                        </span>
                        , pursuing a Bachelor of Science in{' '}
                        <span className='text-purple-400'>
                           Computer Science.
                        </span>
                     </p>
                     <p className='pb-3'>
                        Currently, I work as an{' '}
                        <span className='text-purple-400'>
                           Undergraduate Computer Science TA
                        </span>{' '}
                        at Rensselaer Polytechnic Institute, I have honed my{' '}
                        <span className='text-purple-400'>
                           communication, leadership, and problem solving
                        </span>{' '}
                        skills while providing invaluable support to both
                        instructors and fellow students. And taught in courses
                        such as{' '}
                        <span className='text-purple-400'>
                           Data Structures and F.O.C.S
                        </span>{' '}
                        (Foundation of Computer Science).
                     </p>
                  </div>

                  <div className='mt-8'>
                     <div className='flex space-x-4 mb-6'>
                        <button
                           onClick={() => setActiveTab('work')}
                           className={`px-4 py-2 rounded ${
                              activeTab === 'work'
                                 ? 'bg-purple-500 text-white'
                                 : 'bg-gray-700 text-gray-300'
                           }`}
                        >
                           Work History
                        </button>
                        <button
                           onClick={() => setActiveTab('education')}
                           className={`px-4 py-2 rounded ${
                              activeTab === 'education'
                                 ? 'bg-purple-500 text-white'
                                 : 'bg-gray-700 text-gray-300'
                           }`}
                        >
                           Education
                        </button>
                     </div>

                     <div className='mt-4'>
                        {activeTab === 'work' ? (
                           <Timeline items={workHistory} />
                        ) : (
                           <Timeline items={education} />
                        )}
                     </div>
                     <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='flex-1'
                     >
                        <SkillCards items={skills} />
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </section>
      </>
   );
};

const Timeline = ({ items }: { items: TimelineItem[] }) => {
   return (
      <div className="relative border-l border-gray-700 ml-3">
         {items.map((item, index) => (
            <div key={index} className="mb-8 ml-6">
               <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px]" />
               <div className="text-purple-400">{item.date}</div>
               <div className="text-white font-medium">{item.title}</div>
               <div className="text-gray-400">{item.location}</div>
               <div className="text-gray-400 mt-2 whitespace-pre-line">{item.description}</div>
            </div>
         ))}
      </div>
   );
};

interface TimelineItem {
   date: string;
   title: string;
   location: string;
   description: string;
}

const workHistory: TimelineItem[] = [
   {
      date: 'May 2025 - Aug 2025',
      title: 'Datadog',
      location: 'Software Engineer Intern',
      description: 'Incoming Summer 2025 Intern.',
   },
   {
      date: 'Aug 2023 - May 2024',
      title: 'Rensselaer Polytechnic Institute',
      location: 'Undergraduate Computer Science TA',
      description:
         'Taught Data Structures and F.O.C.S courses, providing support to students and instructors.',
   },
];

const education: TimelineItem[] = [
   {
      date: '2022 - 2026',
      title: 'Rensselaer Polytechnic Institute',
      location: 'B.S. in Computer Science',
      description: `3.87 GPA
Coursework: Data Structures, Algorithms, Operating Systems, Principle of Software`
   },
];

const skills = [
   {
      title: <SiTypescript size={50} color='white' />,
   },
   {
      title: <SiNodedotjs size={50} />,
   },
   {
      title: <SiExpress size={50} />,
   },
   {
      title: <SiMongodb size={50} />,
   },
   { title: <SiReact size={50} /> },
   {
      title: <SiTailwindcss size={50} />,
   },
   {
      title: <SiMysql size={50} />,
   },
   {
      title: <FaPython size={50} />,
   },
   {
      title: <SiCplusplus size={50} />,
   },
];
