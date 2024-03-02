'use client';
import React, { useState, Dispatch, SetStateAction} from 'react';
import {
   motion,
   AnimatePresence,
   useScroll,
   useMotionValueEvent,
} from 'framer-motion';
import { Link } from 'react-scroll';
import { cn } from '@/utils/cn';

const variants = {
   hidden: { opacity: 0, x: -100 },
   visible: { opacity: 1, x: 0 },
};

export const FloatingHeader = ({
   navItems,
   className,
   activeSection,
   setActiveSection,
}: {
   navItems: {
      name: string;
      link: string;
      icon: JSX.Element;
   }[];
   className?: string;
   activeSection: string;
   setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
   const { scrollYProgress } = useScroll();
   const [visible, setVisible] = useState(true);

   useMotionValueEvent(scrollYProgress, 'change', (current) => {
      // Check if current is not undefined and is a number
      if (typeof current === 'number') {
         let direction = current! - scrollYProgress.getPrevious()!;
         if (direction < 0 || direction == 1) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      }
   });

   return (
      <AnimatePresence mode='wait'>
         <motion.div
            initial={{
               opacity: 1,
               y: -100,
            }}
            animate={{
               y: visible ? 0 : -100,
               opacity: visible ? 1 : 0,
            }}
            transition={{
               duration: 0.2,
            }}
            className={cn(
               'flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4',
               className
            )}
         >
            {navItems.map((navItem: any, idx: number) => (
               <motion.div
                  key={`motion-div-${idx}`}
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                     delay: idx * 0.2,
                     duration: 0.5,
                     type: 'spring',
                     stiffness: 50,
                  }}
               >
                  <Link
                     to={navItem.link}
                     smooth={true}
                     duration={200}
                     spy={true}
                     activeClass='active'
                     key={`link=${idx}`}
                     href={'#' + navItem.link}
                     onClick={() => setActiveSection(navItem.name)}
                     className={cn(
                        'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-purple-400 hover:text-purple-400',
                        {
                           'text-purple-400': activeSection === navItem.name,
                        }
                     )}
                  >
                     <span className='block sm:hidden'>{navItem.icon}</span>
                     <span className='hidden sm:block text-sm'>
                        {navItem.name}
                     </span>
                  </Link>
               </motion.div>
            ))}
            <button className='border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'>
               <span>Shimu Pan </span>
               <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px' />
            </button>
         </motion.div>
      </AnimatePresence>
   );
};
