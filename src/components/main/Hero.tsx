'use client';

import { PFP } from '@/components';
import { BG } from '@/components/index';
import { cn } from '@/utils/cn';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import Image from 'next/image';
import hs from '../../../public/hs.jpeg';

export const Hero = () => {
   return (
      <>
         <div className='h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center'>
            <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
            <PFP
               items={[
                  {
                     id: 1,
                     name: 'Shimu Pan',
                     designation: 'Connect With Me :)',
                     image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1709337895/profile_pictures/jaiqroe63z8hczzperbg.jpg',
                  },
               ]}
            />
            <BG />
            <img src={''} />
            <h1
               className={cn(
                  'md:text-4xl text-xl text-white relative z-20 pointer-events-none'
               )}
            >
               Hi, I'm <span className='text-purple-400'>Shimu Pan.</span>
            </h1>
            <div className='text-center mt-2 text-neutral-300 relative z-20 pointer-events-none'>
               Student and{' '}
               <span className='text-purple-400'>Software Developer</span>
            </div>
            <div className='flex items-center relative z-20 mt-3'>
               <a href='https://www.linkedin.com/in/shimupan/' target='_blank'>
                  <FaLinkedin
                     color='white'
                     className='mr-2 cursor-pointer'
                     size={25}
                  />
               </a>
               <a href='https://github.com/shimupan' target='_blank'>
                  <FaGithub
                     color='white'
                     className='ml-2 cursor-pointer'
                     size={25}
                  />
               </a>
            </div>
         </div>
         <div
            className='absolute inset-0 ml-36 mt-44 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg pointer-events-none'
            style={{
               background:
                  'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
            }}
         ></div>
      </>
   );
};
