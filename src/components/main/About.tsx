'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';
import { SkillCards } from '@/components';
import { motion } from 'framer-motion';
import { FaPython } from 'react-icons/fa';
import {
   SiMongodb,
   SiCplusplus,
   SiMysql,
   SiReact,
   SiTailwindcss,
   SiExpress,
   SiNodedotjs,
   SiTypescript,
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
                  className={
                     'text-gray-400 text-md mt-12 flex-1 ' + roboto.className
                  }
               >
                  <p className='pb-3'>
                     Hi, I'm <span className='text-purple-400'>Shimu Pan.</span>{' '}
                     I am a dedicated and passionate 2nd year{' '}
                     <span className='text-purple-400'>Computer Science</span>{' '}
                     student at{' '}
                     <span className='text-purple-400'>
                        Rensselaer Polytechnic Institute
                     </span>
                     , pursuing a Bachelor of Science in {' '}
                     <span className='text-purple-400'>
                        Computer Science
                     </span>
                     {' '}
                     with a dual major in{' '}
                     <span className='text-purple-400'>
                        Information Technology and Web Science.
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
                     instructors and fellow students. And taught in courses such
                     as{' '}
                     <span className='text-purple-400'>
                        Data Structures and F.O.C.S
                     </span>{' '}
                     (Foundation of Computer Science).
                  </p>
                  <p className='pb-3'>
                     In addition to my academic pursuits, I am deeply passionate
                     about leveraging technology to create innovative solutions.
                     I am currently a{' '}
                     <span className='text-purple-400'>tech lead</span> for the
                     Open Source project{' '}
                     <a
                        className='text-purple-200'
                        href='https://lineupx.net/'
                        target='_blank'
                     >
                        LineupX
                     </a>{' '}
                     and have{' '}
                     <span className='text-purple-400'>contributed</span> to
                     multiple open source projects such as{' '}
                     <a
                        className='text-purple-200'
                        href='https://yacs.cs.rpi.edu/'
                        target='_blank'
                     >
                        Y.A.C.S.
                     </a>{' '}
                     and{' '}
                     <a
                        className='text-purple-200'
                        href='https://opencircuits.io/'
                        target='_blank'
                     >
                        Open Ciruits.
                     </a>
                  </p>
                  <p className='pb-3'>
                     I am currently{' '}
                     <span className='text-purple-400'>
                        seeking new opportunities
                     </span>{' '}
                     between{' '}
                     <span className='text-purple-400'>
                        Fall 2025 and Summer 2026.
                     </span>{' '}
                     I am open to both{' '}
                     <span className='text-purple-400'>
                        internships and co-ops
                     </span>{' '}
                     and passionate about learning new technologies and working
                     on projects that have a positive impact on the world. I am
                     open to working in a variety of roles,{' '}
                     <span className='text-purple-400'>
                        including software engineering, web development, and
                        data science.
                     </span>
                  </p>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex-1'
               >
                  <SkillCards items={skills} />
               </motion.div>
            </div>
         </section>
      </>
   );
};

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
