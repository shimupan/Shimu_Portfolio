import { Dispatch, SetStateAction } from 'react';
import { useInView } from 'react-intersection-observer';
import { CardWrapper } from '@/components';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['700'] });

export const Projects = ({
   setActiveSection,
}: {
   setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
   return (
      <>
         <section
            className='h-auto md:h-screen max-w-4xl mx-auto'
            id='Project'
         >
            <div className='text-4xl text-white text-center'>Projects</div>
            <div
               className={
                  'grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5 mt-9 ' +
                  roboto.className
               }
            >
               {ProjectList.map((project) => (
                  <CardWrapper key={project.id} project={project} setActiveSection={setActiveSection}/>
               ))}
            </div>
         </section>
      </>
   );
};

const ProjectList = [
   {
      id: 1,
      name: 'LineupX (Tech Lead)',
      description:
         'LineupX is a open-source project aimed at enhancing understanding of FPS games. We provide a platform for rapid sharing and learning of lineups.',
      image: 'https://raw.githubusercontent.com/shimupan/lineupx/main/public/HomeScreen.png',
      link: 'https://lineupx.net',
      github: 'https://github.com/shimupan/lineupx',
   },
   {
      id: 2,
      name: 'Watchey (Personal Project)',
      description:
         'Fullstack e-commerce Store where you can search and purchase expensive luxury watches. Complete with Stripe Payment and Checkout.',
      image: 'https://raw.githubusercontent.com/shimupan/Watchey/main/public/readme/HomePage.png?token=GHSAT0AAAAAACKRXE3BO3Y4TORE5QIVRWIOZPDMJBQ',
      link: 'https://watchey-live.vercel.app/',
      github: 'https://github.com/shimupan/Watchey',
   },
   {
      id: 3,
      name: 'Y.A.C.S (Opensource Contribution)',
      description:
         'Yet Another Course Scheduler is a web application that allows RPI students to plan their course schedules and visualize the course data with a very nice interface.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1709398512/profile_pictures/wpuztta9dgxotmgfsxps.png',
      link: 'https://yacs.cs.rpi.edu/',
      github: 'https://github.com/YACS-RCOS/yacs.n',
   },
   {
      id: 4,
      name: 'Open Circuits (Opensource Contribution)',
      description:
         'OpenCircuits is a web-based circuit simulator that allows users to create and simulate electronic circuits.',
      image: 'https://camo.githubusercontent.com/b270f241f26a6a50eca1a8f8c620b9ac87ee09b3c43e67bd1dae71deb5aa1846/68747470733a2f2f696d6775722e636f6d2f78426337356a4c2e706e67',
      link: 'https://opencircuits.io/',
      github: 'https://github.com/OpenCircuits/OpenCircuits/',
   },
];
