'use client';

import React from 'react';
import { motion } from 'framer-motion';

type WordAnimationProps = {
   text: string;
   coloredText?: string;
   className?: string;
   color?: boolean;
};

type WordObj = {
   letter: string;
   color: boolean;
}

const container = {
   hidden: { opacity: 0 },
   visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
   }),
};

const child = {
   visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
         type: 'spring',
         damping: 12,
         stiffness: 100,
      },
   },
   hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
         type: 'spring',
         damping: 12,
         stiffness: 100,
      },
   },
};

export const WordAnimation: React.FC<WordAnimationProps> = ({
   text,
   coloredText,
   className,
   color,
}) => {
   const words = Array.from(text);
   const coloredWords = coloredText?.split(' ') || "";

   let wordsObj: WordObj[] = words.map((word) => ({
      letter: word,
      color: false,
   }));

   if(coloredWords) {
      coloredWords.forEach((word) => {
         let startIndex = text.indexOf(word);
         const endIndex = startIndex + word.length;
         while (startIndex != endIndex) {
            wordsObj[startIndex].color = true;
            startIndex++;
         }
      });
   }
   console.log(wordsObj);
   return (
      <motion.div
         style={{ overflow: 'hidden', display: 'flex' }}
         variants={container}
         initial='hidden'
         animate='visible'
         className={className}
      >
         {words.map((letter, index) => (
            <motion.span variants={child} key={index}>
               {letter === ' ' ? (
                  '\u00A0'
               ) : color && wordsObj[index].color == true ? (
                  <span className='text-purple-400'>{letter}</span>
               ) : (
                  letter
               )}
            </motion.span>
         ))}
      </motion.div>
   );
};
