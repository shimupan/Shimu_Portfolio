'use client';

import { About, FloatingHeader, Hero, Projects, Contact } from '@/components';
import { IoMdHome, IoMdPerson, IoMdListBox, IoMdMail } from 'react-icons/io';
import { useState } from 'react';
import { TracingBeam } from '@/components/ui/tracing-beam';

export default function Home() {
   const [activeSection, setActiveSection] = useState('Home');
   return (
      <main>
         <FloatingHeader
            navItems={HeaderItems}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
         />

         <Hero setActiveSection={setActiveSection} />
         <TracingBeam>
            <About setActiveSection={setActiveSection} />
            <Projects setActiveSection={setActiveSection} />
            <Contact setActiveSection={setActiveSection} />
         </TracingBeam>
      </main>
   );
}

const HeaderItems = [
   {
      name: 'Home',
      link: 'hero',
      icon: <IoMdHome></IoMdHome>,
   },
   {
      name: 'About',
      link: 'about',
      icon: <IoMdPerson></IoMdPerson>,
   },
   {
      name: 'Projects',
      link: 'Project',
      icon: <IoMdListBox></IoMdListBox>,
   },
   {
      name: 'Contact',
      link: 'Contact',
      icon: <IoMdMail></IoMdMail>,
   },
];
