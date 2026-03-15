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
      image: "public/images/quiz.png",
      shortDescription: 'A modern React-based Quiz Dashboard featuring timed assessments, progress visualization, and responsive design for an optimized learning experience.',
      description:
        'Interactive Quiz Platform with a seamless user flow—from signup and instructions to a timed assessment. Optimized with Tailwind CSS for a smooth UI, featuring global state management via React Context.',
      techStack: ['React', 'Vite', 'Tailwind CSS'],
      demo: 'https://elearn-quiz.netlify.app',
      github: 'https://github.com/Safif2000/Quiz-Modern-Interactive-Quiz-Platform',
    },
    {
      title: 'Soniq-Music-Streaming ',
      image: "public/images/soniq.png",
      shortDescription: 'Collaborative task management with real-time updates, drag-and-drop, and team collaboration.',
      description:
        'A modern task management application designed for teams. Features real-time collaboration, intuitive drag-and-drop interface, advanced filtering, and seamless integration with popular tools.',
      techStack: ['React', 'TypeScript', 'Framer Motion', 'Zustand', 'WebSockets'],
      demo: 'https://soniq-music-streaming.netlify.app/',
      github: 'https://github.com/Safif2000/SONIQ-Music-Streaming-App',
    },
    
    {
      title: 'Todo-Task-Manager',
      shortDescription: 'Modern social platform with real-time feeds, messaging, and content creation tools.',
      description:
        'A feature-rich social media platform with real-time updates, direct messaging, content creation tools, and advanced privacy controls. Built for scalability and performance.',
      techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis'],
      demo: 'https://todo-tasks-manage.netlify.app/',
      github: 'https://github.com/Safif2000/Todo-Task-manager',
    },
    {
      title: 'Weather-Dashboard',
      shortDescription: 'Educational platform with course management, progress tracking, and interactive content.',
      description:
        'A comprehensive LMS platform that enables educators to create, manage, and deliver courses. Features include progress tracking, interactive quizzes, video streaming, and certificate generation.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
      demo: 'https://weatherweb-dashboard.netlify.app/',
      github: 'https://github.com/Safif2000/Weather-Dashboard-',
    },
    {
      title: 'Snake-Game',
      shortDescription: 'Personal finance tracker with budgeting, expense analysis, and investment insights.',
      description:
        'A sophisticated financial dashboard for managing personal finances. Features include budget tracking, expense categorization, investment portfolio analysis, and financial goal setting.',
      techStack: ['React', 'TypeScript', 'Recharts', 'Firebase', 'Plaid API'],
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
