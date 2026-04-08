import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const projects = [
    {
      title: 'eLearn-Quiz Dashboard',
      image: "/images/quiz.png",
      shortDescription: 'A modern React-based Quiz Dashboard featuring timed assessments, progress visualization, and responsive design for an optimized learning experience.',
      description:
        'Interactive Quiz Platform with a seamless user flow—from signup and instructions to a timed assessment. Optimized with Tailwind CSS for a smooth UI, featuring global state management via React Context.',
      techStack: ['React', 'Vite', 'Tailwind CSS'],
      demo: 'https://elearn-quiz.netlify.app',
      github: 'https://github.com/Safif2000/Quiz-Modern-Interactive-Quiz-Platform',
    },
    {
      title: 'Soniq-Music-Streaming ',
      image: "/images/soniq.png",
      shortDescription: 'A fully responsive music player with real-time MP3 streaming, Context API state management, and localStorage persistence for themes, likes, and playlists—all styled with pure CSS Custom Properties.',
      description:
        'A high-performance music streaming platform with Neumorphic design, featuring Live Search, Shuffle/Repeat logic, and a unique fullscreen vinyl-animated mobile player.',
      techStack: ['Nextjs', 'TypeScript', 'Framer Motion','Tailwind'],
      demo: 'https://soniq-music-streaming.netlify.app/',
      github: 'https://github.com/Safif2000/SONIQ-Music-Streaming-App',
    },
    
    {
      title: 'Todo-Task-Manager',
      image: "/images/todo-task.webp",
      shortDescription: 'A premium, accessible task management tool with drag-and-drop, priority filters, and animated stats, designed with a sophisticated glassmorphism UI.',
      description:
        'A high-performance, glassmorphism-styled React task manager featuring a three-level priority system, drag-and-drop reordering, and full localStorage persistence for a seamless productivity experience.',
      techStack: ['Next.js', 'TypeScript','Tailwind'],
      demo: 'https://todo-tasks-manage.netlify.app/',
      github: 'https://github.com/Safif2000/Todo-Task-manager',
    },
    {
      title: 'Weather-Dashboard',
      image: "/images/weather-dashboard.webp",
      shortDescription: 'A fully responsive weather application built with Tailwind CSS and WeatherAPI.com, offering live search functionality, animated SVG gauges, and a sophisticated glassmorphism UI with a live updating sidebar clock.',
      description:
        'A premium weather analytics platform with interactive charts, real-time geolocation search, and customized data visualization cards for wind, humidity, and UV metrics.',
      techStack: ['React',],
      demo: 'https://weatherweb-dashboard.netlify.app/',
      github: 'https://github.com/Safif2000/Weather-Dashboard-',
    },
    {
      title: 'Snake-Game',
      image: "/images/snake-game.webp",
      shortDescription: 'A dynamic and interactive Snake Game featuring a custom gaming theme, real-time score tracking, and seamless start/pause/stop controls for an engaging user experience.',
      description:
        'A logic-based arcade application built with a focus on state management, featuring an end-game results dashboard and a "Try Again" system for continuous play.',
      techStack: ['React', 'Tailwind'],
      demo: 'https://snake-games101.netlify.app/',
      github: 'https://github.com/Safif2000/snake-game',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className={styles.projects}>
      {/* Parallax background grid */}
      <motion.div
        className={styles.backgroundGrid}
        style={{ y, opacity }}
      />

      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.header}>
            <span className={styles.sectionLabel}>Featured Projects</span>
            <h2 className={styles.title}>
              Work that speaks<br />
              for itself
            </h2>
            <p className={styles.subtitle}>
              A selection of projects showcasing my expertise in building
              scalable, user-focused applications
            </p>
          </motion.div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
