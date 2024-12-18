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
   const featuredProjects = ProjectList.filter(project => project.featured);
   const otherProjects = ProjectList.filter(project => !project.featured);

   return (
      <>
         <section className='min-h-screen max-w-4xl mx-auto' id='Project'>
            <div className='text-4xl text-white text-center'>Projects</div>
            
            {/* Featured Projects */}
            <div className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mt-9 mb-4 px-5 md:px-0'>
               Featured Projects
            </div>
            <div className={
               'grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5 ' +
               roboto.className
            }>
               {featuredProjects.map((project) => (
                  <CardWrapper
                     key={project.id}
                     project={project}
                     setActiveSection={setActiveSection}
                  />
               ))}
            </div>

            {/* Other Projects */}
            <div className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-4 px-5 md:px-0'>
               Other Projects
            </div>
            <div className={
               'grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5 ' +
               roboto.className
            }>
               {otherProjects.map((project) => (
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
         'LineupX is a open-source project aimed at enhancing understanding of FPS games.',
      image: 'https://raw.githubusercontent.com/shimupan/lineupx/main/public/HomeScreen.png',
      link: 'https://lineupx.net',
      github: 'https://github.com/shimupan/lineupx',
      technologies: [
         'React',
         'TypeScript',
         'Tailwind',
         'Express',
         'MongoDB',
         'Node.js',
         'Docker',
         'Riot API',
      ],
      featured: true,
   },
   {
      id: 2,
      name: 'AI Chess',
      description:
         'A Chess program made in Java following OOP design patterns. Utilized Minimax algorithm w/ Alpha-Beta pruning to create a competent Chess AI.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1717555457/profile_pictures/yxye6hqgembo9fkao62c.png',
      github: 'https://github.com/shimupan/Chess',
      technologies: ['Java', 'Java Swing', 'JUnit'],
      featured: true,
   },
   {
      id: 12,
      name: 'CustomGPT (GPT 2)',
      description:
         'Recreation of the output embedding in the paper "Attention is all you need". Simple remake of GPT 2 that will be trained on your discord messages.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1734549612/profile_pictures/oskss0vy23rxfagpaqhj.png',
      github: 'https://github.com/shimupan/CustomGPT',
      technologies: ['Python', 'PyTorch'],
   },
   {
      id: 16,
      name: 'Wayk',
      description:
         'A walking-focused navigation app that helps users find and navigate safer walking routes.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1734553199/profile_pictures/xbazficww3baefe7bzug.png',
      github: 'https://github.com/WaykRPI/Wayk',
      technologies: [
         'React Native',
         'TypeScript',
         'Expo',
         'Supabase',
         'Gemini',
      ],
      featured: true,
   },
   {
      id: 13,
      name: 'Jackpot',
      description:
         'Online casino simulator built to help people struggling with gambling addiction. Aimed to expose the scam of online casinos',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1734552248/profile_pictures/dqqib8w4g1cksld1ma5n.png',
      link: 'jackpot.shimupan.com',
      github: 'https://github.com/shimupan/Jackpot',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
   },
   {
      id: 3,
      name: 'Watchey',
      description:
         'Fullstack e-commerce Store where you can search and purchase expensive luxury watches. Complete with Stripe Payment and Checkout.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1709409543/profile_pictures/aei6lvtznrolhczhjwpe.png',
      link: 'https://watchey-live.vercel.app/',
      github: 'https://github.com/shimupan/Watchey',
      technologies: ['Next.js', 'TypeScript', 'Stripe'],
   },
   {
      id: 4,
      name: 'Guess The Imposter',
      description:
         'Online Multiplayer game based off the popular game Guess the Imposter and website JKLM. Utilized Web Sockets to provide real-time gameplay functionality.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1714794528/profile_pictures/btn8m2n1nznaxoggsahb.png',
      link: 'https://game.shimupan.com/',
      github: 'https://github.com/shimupan/GuessTheImposter',
      technologies: ['React', 'Socket.IO', 'Node.js', 'MongoDB'],
   },
   {
      id: 10,
      name: 'YouTube Clone',
      description:
         'Simple YouTube clone built with React and supports video playback.',
      image: 'https://raw.githubusercontent.com/shimupan/YT_Clone/main/public/home_screen.png',
      link: 'https://yt-clone-jade.vercel.app',
      github: 'https://github.com/shimupan/YT_Clone',
      technologies: ['React', 'Node.js'],
   },
   {
      id: 10,
      name: 'CloneGPT',
      description: 'Simple Chat GPT Clone.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1734553449/profile_pictures/lrezlvxitxhnalwceqnc.png',
      github: 'https://github.com/shimupan/CloneGPT',
      technologies: ['Javascript', 'OpenAI API'],
   },
   {
      id: 5,
      name: 'Y.A.C.S (Opensource Contribution)',
      description:
         'Yet Another Course Scheduler is a web application that allows RPI students to plan their course schedules.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1709398512/profile_pictures/wpuztta9dgxotmgfsxps.png',
      link: 'https://yacs.cs.rpi.edu/',
      github: 'https://github.com/YACS-RCOS/yacs.n',
      technologies: ['Vue', 'Python', 'PostgreSQL'],
   },
   {
      id: 6,
      name: 'Open Circuits (Opensource Contribution)',
      description:
         'OpenCircuits is a web-based circuit simulator that allows users to create and simulate electronic circuits.',
      image: 'https://res.cloudinary.com/ddwqqjmyo/image/upload/v1734552825/profile_pictures/vtpnsoyrdvlmtzq1foz4.png',
      link: 'https://opencircuits.io/',
      github: 'https://github.com/OpenCircuits/OpenCircuits/',
      technologies: ['React', 'Typescript', 'Go', 'SQLite'],
   },
];
