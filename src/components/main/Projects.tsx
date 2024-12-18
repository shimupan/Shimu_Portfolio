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
         <section className='min-h-screen max-w-4xl mx-auto' id='Project'>
            <div className='text-4xl text-white text-center'>Projects</div>
            <div
               className={
                  'grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5 mt-9 ' +
                  roboto.className
               }
            >
               {ProjectList.map((project) => (
                  <CardWrapper
                     key={project.id}
                     project={project}
                     setActiveSection={setActiveSection}
                  />
               ))}
            </div>
         </section>
      </>
   );
};

const ProjectList = [
   {
      id: 1,
      name: 'LineupX',
      description:
         'LineupX is a open-source project aimed at enhancing understanding of FPS games. We provide a platform for rapid sharing and learning of lineups.',
      image: 'https://raw.githubusercontent.com/shimupan/lineupx/main/public/HomeScreen.png',
      link: 'https://lineupx.net',
      github: 'https://github.com/shimupan/lineupx',
   },
   {
      id: 2,
      name: 'AI Chess',
      description:
         'A Chess program made in Java following OOP design patterns. Utilized Minimax algorithm w/ Alpha-Beta pruning to create a competent Chess AI.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1717555457/profile_pictures/yxye6hqgembo9fkao62c.png',
      github: 'https://github.com/shimupan/Chess',
   },
   {
      id: 12,
      name: 'CustomGPT (GPT 2)',
      description:
         'Recreation of the output embedding in the paper "Attention is all you need". Simple remake of GPT 2 that will be trained on your discord messages.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1734549612/profile_pictures/oskss0vy23rxfagpaqhj.png',
      github: 'https://github.com/shimupan/CustomGPT',
   },
   {
      id: 13,
      name: 'Jackpot',
      description:
         'Online casino simulator built to help people struggling with gambling addiction. Aimed to expose the scam of online casinos',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1734550214/profile_pictures/dop9yujbxd8zwibdbhhl.png',
      link: 'jackpot.shimupan.com',
      github: 'https://github.com/shimupan/Jackpot',
   },
   {
      id: 3,
      name: 'Watchey',
      description:
         'Fullstack e-commerce Store where you can search and purchase expensive luxury watches. Complete with Stripe Payment and Checkout.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1709409543/profile_pictures/aei6lvtznrolhczhjwpe.png',
      link: 'https://watchey-live.vercel.app/',
      github: 'https://github.com/shimupan/Watchey',
   },
   {
      id: 4,
      name: 'Guess The Imposter',
      description:
         'Online Multiplayer game based off the popular game Guess the Imposter and website JKLM. Utilized Web Sockets to provide real-time gameplay functionality for players.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1714794528/profile_pictures/btn8m2n1nznaxoggsahb.png',
      link: 'https://game.shimupan.com/',
      github: 'https://github.com/shimupan/GuessTheImposter',
   },
   {
      id: 10,
      name: 'YouTube Clone',
      description:
         'Simple YouTube clone built with React and supports video playback.',
      image: 'https://raw.githubusercontent.com/shimupan/YT_Clone/main/public/home_screen.png',
      link: 'https://yt-clone-jade.vercel.app',
      github: 'https://github.com/shimupan/YT_Clone',
   },
   {
      id: 5,
      name: 'Y.A.C.S (Opensource Contribution)',
      description:
         'Yet Another Course Scheduler is a web application that allows RPI students to plan their course schedules.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1709398512/profile_pictures/wpuztta9dgxotmgfsxps.png',
      link: 'https://yacs.cs.rpi.edu/',
      github: 'https://github.com/YACS-RCOS/yacs.n',
   },
   {
      id: 6,
      name: 'Open Circuits (Opensource Contribution)',
      description:
         'OpenCircuits is a web-based circuit simulator that allows users to create and simulate electronic circuits.',
      image: 'https://camo.githubusercontent.com/b270f241f26a6a50eca1a8f8c620b9ac87ee09b3c43e67bd1dae71deb5aa1846/68747470733a2f2f696d6775722e636f6d2f78426337356a4c2e706e67',
      link: 'https://opencircuits.io/',
      github: 'https://github.com/OpenCircuits/OpenCircuits/',
   },
];
