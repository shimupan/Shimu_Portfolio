import { FloatingHeader } from '@/components';
import { IoMdHome, IoMdPerson, IoMdListBox, IoMdMail } from 'react-icons/io';

export default function Home() {
   return (
      <main>
         <FloatingHeader navItems={HeaderItems} />
         hello
      </main>
   );
}

const HeaderItems = [
   {
      name: 'Home',
      link: '/',
      icon: <IoMdHome></IoMdHome>,
   },
   {
      name: 'About',
      link: '/about',
      icon: <IoMdPerson></IoMdPerson>,
   },
   {
      name: 'Projects',
      link: '/projects',
      icon: <IoMdListBox></IoMdListBox>,
   },
   {
      name: 'Contact',
      link: '/contact',
      icon: <IoMdMail></IoMdMail>,
   },
];
