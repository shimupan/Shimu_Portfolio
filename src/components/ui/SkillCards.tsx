import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const SkillCards = ({
   items,
   className,
}: {
   items: {
      title: JSX.Element;
   }[];
   className?: string;
}) => {
   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   return (
      <div
         className={cn(
            'grid grid-cols-3 md:grid-cols-2  lg:grid-cols-3  py-10',
            className
         )}
      >
         {items.map((item, idx) => (
            <div
               key={idx}
               className='relative group block p-2 h-full w-full'
               onMouseEnter={() => setHoveredIndex(idx)}
               onMouseLeave={() => setHoveredIndex(null)}
            >
               <AnimatePresence>
                  {hoveredIndex === idx && (
                     <motion.span
                        className='absolute inset-0 h-full w-full bg-purple-400 dark:bg-slate-800/[0.8] block  rounded-3xl'
                        layoutId='hoverBackground'
                        initial={{ opacity: 0 }}
                        animate={{
                           opacity: 1,
                           transition: { duration: 0.15 },
                        }}
                        exit={{
                           opacity: 0,
                           transition: { duration: 0.15, delay: 0.2 },
                        }}
                     />
                  )}
               </AnimatePresence>
               <Card>
                  <CardTitle>{item.title}</CardTitle>
               </Card>
            </div>
         ))}
      </div>
   );
};

export const Card = ({
   className,
   children,
}: {
   className?: string;
   children: React.ReactNode;
}) => {
   return (
      <div
         className={cn(
            'rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 z-20 flex items-start justify-center relative',
            className
         )}
      >
         <div className='relative z-50'>
            <div className='p-4'>{children}</div>
         </div>
      </div>
   );
};
export const CardTitle = ({
   className,
   children,
}: {
   className?: string;
   children: React.ReactNode;
}) => {
   return (
      <h4 className={cn('text-zinc-100 font-bold tracking-wide', className)}>
         {children}
      </h4>
   );
};
