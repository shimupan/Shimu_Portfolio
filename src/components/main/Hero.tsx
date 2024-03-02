'use client';

import { PFP, BG, WordAnimation } from '@/components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Hero = () => {
   return (
      <>
         <div className='h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center' id='hero'>
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
            <WordAnimation
               text="Hi, I'm Shimu Pan."
               coloredText='Shimu Pan.'
               className='text-4xl text-white relative z-20 pointer-events-none mt-1'
               color={true}
            />
            <WordAnimation
               text='Student and Software Developer'
               coloredText='Software Developer'
               className='text-center mt-2 text-neutral-300 relative z-20 pointer-events-none'
               color={true}
            />
            <div className='flex items-center relative z-20 mt-3'>
               <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href='https://www.linkedin.com/in/shimupan/'
                  target='_blank'
               >
                  <FaLinkedin
                     color='white'
                     className='mr-2 cursor-pointer'
                     size={25}
                  />
               </motion.a>
               <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  href='https://github.com/shimupan'
                  target='_blank'
               >
                  <FaGithub
                     color='white'
                     className='ml-2 cursor-pointer'
                     size={25}
                  />
               </motion.a>
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
