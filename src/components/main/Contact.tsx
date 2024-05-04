'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Roboto } from 'next/font/google';
import { useInView } from 'react-intersection-observer';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

type ContactFormData = {
   name: string;
   email: string;
   message: string;
};

export const Contact = ({
   setActiveSection,
}: {
   setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
   const { ref, inView } = useInView();
   useEffect(() => {
      if (inView) {
         setActiveSection('Contact');
      }
   }, [setActiveSection, inView]);

   const { register, handleSubmit } = useForm<ContactFormData>();

   function onSubmit(data: ContactFormData) {
      const id = toast.loading('Sending Email...');
      const apiEndpoint = '/api/email';
      fetch(apiEndpoint, {
         method: 'POST',
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((response) => {
            toast.update(id, {
               render: 'Success! Email has been sent!',
               type: 'success',
               isLoading: false,
               autoClose: 1000,
               hideProgressBar: false,
            });
         })
         .catch((err) => {
            toast.update(id, {
               render: 'Something went wrong :(',
               type: 'error',
               isLoading: false,
               autoClose: 1000,
               hideProgressBar: false,
            });
         });
   }
   return (
      <>
         <section
            className=' md:mt-0 h-screen max-w-4xl mx-auto pt-16'
            id='Contact'
         >
            <div className='text-4xl text-white text-center'>Contact</div>
            <div
               className='md:flex flex-row gap-16 px-4 lg:px-0 mt-6'
               ref={ref}
            >
               <div className={'flex-1 text-[#808ea3] ' + roboto.className}>
                  <p>
                     I'm always happy connecting and collaborating with new
                     people. If you have any questions or just want to say hi,
                     feel free to drop me a message or send me a connection
                     request via social media. I'll try my best to get back to
                     you!
                  </p>
                  <div className='mt-10 m-9'>
                     <div className='flex'>
                        <MdEmail size={50} className='text-purple-400' />
                        <div className='flex flex-col ml-1'>
                           <p className='text-base font-medium text-white'>
                              Email
                           </p>
                           <p className='text-base font-medium text-[#808ea3]'>
                              shimupan@gmail.com
                           </p>
                        </div>
                     </div>
                     <div className='flex mt-1'>
                        <a
                           href='https://www.linkedin.com/in/shimupan/'
                           target='_blank'
                           className='text-purple-400 hover:underline'
                        >
                           <FaLinkedin size={50} />
                        </a>
                        <div className='ml-1'>
                           <p className='text-base font-medium text-white'>
                              LinkedIn
                           </p>
                           <p className='text-base font-medium text-[#808ea3]'>
                              @shimupan
                           </p>
                        </div>
                     </div>
                     <div className='flex mt-1'>
                        <a
                           href='https://www.github.com/shimupan'
                           target='_blank'
                           className='text-purple-400 hover:underline'
                        >
                           <FaGithub size={50} />
                        </a>
                        <div className='ml-1'>
                           <p className='text-base font-medium text-white'>
                              Github
                           </p>
                           <p className='text-base font-medium text-[#808ea3]'>
                              @shimupan
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <form onSubmit={handleSubmit(onSubmit)} className='flex-1'>
                  <div className='mb-5'>
                     <label
                        htmlFor='name'
                        className='mb-3 block text-base font-medium text-[#808ea3]'
                     >
                        Full Name
                     </label>
                     <input
                        type='text'
                        placeholder='Full Name'
                        className='w-full rounded-md bg-[#808ea3] py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md'
                        {...register('name', { required: true })}
                     />
                  </div>
                  <div className='mb-5'>
                     <label
                        htmlFor='email'
                        className='mb-3 block text-base font-medium text-[#808ea3]'
                     >
                        Email Address
                     </label>
                     <input
                        type='email'
                        placeholder='example@domain.com'
                        className='w-full rounded-md bg-[#808ea3] py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md'
                        {...register('email', { required: true })}
                     />
                  </div>
                  <div className='mb-5'>
                     <label
                        htmlFor='message'
                        className='mb-3 block text-base font-medium text-[#808ea3]'
                     >
                        Message
                     </label>
                     <textarea
                        rows={4}
                        placeholder='Type your message'
                        className='w-full resize-none rounded-md bg-[#808ea3] py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md'
                        {...register('message', { required: true })}
                     ></textarea>
                  </div>
                  <div>
                     <button className='hover:shadow-form rounded-md bg-purple-500 hover:bg-purple-400 transition-all py-3 px-8 text-base font-semibold text-white outline-none'>
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </section>
         <ToastContainer position='top-center' />
      </>
   );
};
