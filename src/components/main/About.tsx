'use client';

import { SkillCards } from '@/components';
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
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const About = () => {
   return (
      <>
         <section className='h-screen max-w-5xl mx-auto' id='about'>
            <div className='flex justify-center'>
               <div className='text-4xl text-white mt-24'>About</div>
               <div></div>
            </div>
            <div className='md:flex flex-row gap-16 px-4 md:px-0'>
               <div
                  className={
                     'text-gray-400 text-md mt-12 flex-1 ' + roboto.className
                  }
               >
                  <p className='pb-3'>
                     Hi, I'm Shimu Pan. I'm currently a 2nd year student at
                     Rensselaer Polytechnic Institute!
                  </p>
                  <p className='pb-3'>
                     I love to build things and learn new technologies. Weither
                     its a Web Application or a Machine Learning Project, I'm
                     always interested and existed to learn.
                  </p>
               </div>
               <div className='flex-1'>
                  <SkillCards
                     items={[
                        {
                           title: <SiTypescript size={50} color='white'/>,
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
                     ]}
                  />
               </div>
            </div>
         </section>
      </>
   );
};
