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
      title: 'E-Commerce Platform',
      shortDescription: 'Full-featured e-commerce solution with advanced cart, payment integration, and admin dashboard.',
      description:
        'A comprehensive e-commerce platform built with React and TypeScript. Features include shopping cart management, secure payment processing, real-time inventory tracking, and a powerful admin dashboard for managing products, orders, and customers.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Stripe'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      title: 'Task Management SaaS',
      shortDescription: 'Collaborative task management with real-time updates, drag-and-drop, and team collaboration.',
      description:
        'A modern task management application designed for teams. Features real-time collaboration, intuitive drag-and-drop interface, advanced filtering, and seamless integration with popular tools.',
      techStack: ['React', 'TypeScript', 'Framer Motion', 'Zustand', 'WebSockets'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      title: 'Analytics Dashboard',
      shortDescription: 'Comprehensive analytics dashboard with data visualization, metrics, and reporting features.',
      description:
        'A powerful analytics dashboard that transforms complex data into actionable insights. Features interactive charts, customizable reports, real-time updates, and export capabilities.',
      techStack: ['React', 'TypeScript', 'D3.js', 'Chart.js', 'Material-UI'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      title: 'Social Media Platform',
      shortDescription: 'Modern social platform with real-time feeds, messaging, and content creation tools.',
      description:
        'A feature-rich social media platform with real-time updates, direct messaging, content creation tools, and advanced privacy controls. Built for scalability and performance.',
      techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      title: 'Learning Management System',
      shortDescription: 'Educational platform with course management, progress tracking, and interactive content.',
      description:
        'A comprehensive LMS platform that enables educators to create, manage, and deliver courses. Features include progress tracking, interactive quizzes, video streaming, and certificate generation.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      title: 'Financial Dashboard',
      shortDescription: 'Personal finance tracker with budgeting, expense analysis, and investment insights.',
      description:
        'A sophisticated financial dashboard for managing personal finances. Features include budget tracking, expense categorization, investment portfolio analysis, and financial goal setting.',
      techStack: ['React', 'TypeScript', 'Recharts', 'Firebase', 'Plaid API'],
      demo: 'https://example.com',
      github: 'https://github.com',
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
