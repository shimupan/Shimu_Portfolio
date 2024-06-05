'use client';

import { Dispatch, SetStateAction } from 'react';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import React, {
   createContext,
   useState,
   useContext,
   useRef,
   useEffect,
} from 'react';
import { FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const MouseEnterContext = createContext<
   [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardWrapper = ({
   project,
   setActiveSection,
}: {
   project: {
      id: number;
      name: string;
      description: string;
      image: string;
      link?: string;
      github: string;
   };
   setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
   const { ref, inView } = useInView();
   useEffect(() => {
      if (inView) {
         setActiveSection('Projects');
      }
   }, [setActiveSection, inView]);

   return (
      <div ref={ref}>
         <CardContainer>
            <CardBody className='bg-[#21293b] relative group/card border-black/[0.1] w-auto lg:w-[25rem] lg:h-[25rem] h-auto rounded-xl p-6 border'>
               <CardItem
                  translateZ='50'
                  className='text-xl font-bold text-white'
               >
                  {project.name}
               </CardItem>
               <CardItem
                  as='p'
                  translateZ='60'
                  className='text-[#808ea3] text-sm max-w-sm mt-2'
               >
                  {project.description}
               </CardItem>
               <CardItem translateZ='100' className='w-full mt-4'>
                  <Image
                     src={project.image}
                     height='1000'
                     width='1000'
                     className='h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                     alt='thumbnail'
                  />
               </CardItem>
               <div className='flex justify-between items-center mt-6'>
                  {project.link && (
                     <CardItem
                        translateZ={20}
                        as='button'
                        className='px-4 py-2 rounded-xl text-s font-normal text-[#808ea3] hover:text-purple-600'
                     >
                        {project.link ? (
                           <a href={project.link} target='_blank'>
                              Demo →
                           </a>
                        ) : (
                           <p>
                              Demo →
                           </p>
                        )}
                     </CardItem>
                  )}

                  <CardItem
                     translateZ={20}
                     as='button'
                     className='px-4 py-2 rounded-x dark:bg-white hover:bg-purple-600 rounded-lg dark:text-black text-white text-xs font-bold'
                  >
                     {project.github ? (
                        <a href={project.github} target='_blank'>
                           <FaGithub size={25} />
                        </a>
                     ) : (
                        'Private'
                     )}
                  </CardItem>
               </div>
            </CardBody>
         </CardContainer>
      </div>
   );
};

const CardContainer = ({
   children,
   className,
   containerClassName,
}: {
   children?: React.ReactNode;
   className?: string;
   containerClassName?: string;
}) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const [isMouseEntered, setIsMouseEntered] = useState(false);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
         containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
   };

   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsMouseEntered(true);
      if (!containerRef.current) return;
   };

   const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      setIsMouseEntered(false);
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
   };
   return (
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
         <div
            className={cn(
               'pt-5 flex items-center justify-center',
               containerClassName
            )}
            style={{
               perspective: '1000px',
            }}
         >
            <div
               ref={containerRef}
               onMouseEnter={handleMouseEnter}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               className={cn(
                  'flex items-center justify-center relative transition-all duration-200 ease-linear',
                  className
               )}
               style={{
                  transformStyle: 'preserve-3d',
               }}
            >
               {children}
            </div>
         </div>
      </MouseEnterContext.Provider>
   );
};

const CardBody = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return (
      <div
         className={cn(
            'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
            className
         )}
      >
         {children}
      </div>
   );
};

const CardItem = ({
   as: Tag = 'div',
   children,
   className,
   translateX = 0,
   translateY = 0,
   translateZ = 0,
   rotateX = 0,
   rotateY = 0,
   rotateZ = 0,
   ...rest
}: {
   as?: React.ElementType;
   children: React.ReactNode;
   className?: string;
   translateX?: number | string;
   translateY?: number | string;
   translateZ?: number | string;
   rotateX?: number | string;
   rotateY?: number | string;
   rotateZ?: number | string;
}) => {
   const ref = useRef<HTMLDivElement>(null);
   const [isMouseEntered] = useMouseEnter();

   useEffect(() => {
      handleAnimations();
   }, [isMouseEntered]);

   const handleAnimations = () => {
      if (!ref.current) return;
      if (isMouseEntered) {
         ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
         ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
   };

   return (
      <Tag
         ref={ref}
         className={cn('w-fit transition duration-200 ease-linear', className)}
         {...rest}
      >
         {children}
      </Tag>
   );
};

// Create a hook to use the context
export const useMouseEnter = () => {
   const context = useContext(MouseEnterContext);
   if (context === undefined) {
      throw new Error('useMouseEnter must be used within a MouseEnterProvider');
   }
   return context;
};
