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
                     I am a dedicated and passionate senior{' '}
                     <span className='text-purple-400'>Computer Science</span>{' '}
                     student at{' '}
                     <span className='text-purple-400'>
                        Rensselaer Polytechnic Institute
                     </span>
                     , pursuing a Bachelor of Science in {' '}
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
                     instructors and fellow students. And taught in courses such
                     as{' '}
                     <span className='text-purple-400'>
                        Data Structures and F.O.C.S
                     </span>{' '}
                     (Foundation of Computer Science).
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
