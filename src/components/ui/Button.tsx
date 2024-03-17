"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const Button = ({ className }: { className?: string }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.7 }}}
      className={`flex justify-center items-centergap-x-2 py-2.5 px-4 mt-3 w-full text-base uppercase text-white font-medium bg-[#6f1ecc] hover:bg-[#9040ec] active:bg-bg-[#6b90bd] duration-150 rounded-lg sm:mt-0 sm:w-auto transition-all ${className}`}
    >
      <div className="flex items-center justify-center">
         View My Resume
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
         </svg>
      </div>
    </motion.button>
  );
};
