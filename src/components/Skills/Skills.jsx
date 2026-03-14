import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiGit,
  SiNodedotjs,
  SiRedux,
  SiFigma,
} from 'react-icons/si';
import styles from './Skills.module.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const skillCategories = [
    {
      title: 'Core Technologies',
      skills: [
        { name: 'React', icon: SiReact, level: 95, color: '#61dafb' },
        { name: 'TypeScript', icon: SiTypescript, level: 92, color: '#3178c6' },
        { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#f7df1e' },
        { name: 'HTML5', icon: SiHtml5, level: 98, color: '#e34c26' },
        { name: 'CSS3', icon: SiCss3, level: 96, color: '#1572b6' },
      ],
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 94, color: '#06b6d4' },
        { name: 'Next.js', icon: SiNextdotjs, level: 88, color: '#000000' },
        { name: 'Vite', icon: SiVite, level: 90, color: '#646cff' },
        { name: 'Redux', icon: SiRedux, level: 85, color: '#764abc' },
        { name: 'Node.js', icon: SiNodedotjs, level: 82, color: '#339933' },
        { name: 'Git', icon: SiGit, level: 92, color: '#f05032' },
      ],
    },
    {
      title: 'Design & Others',
      skills: [
        { name: 'Figma', icon: SiFigma, level: 80, color: '#f24e1e' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="skills" ref={ref} className={styles.skills}>
      {/* Floating particles effect */}
      <motion.div
        className={styles.floatingParticles}
        style={{ scale, rotate }}
      >
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
      </motion.div>

      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className={styles.header}>
            <span className={styles.sectionLabel}>Skills & Technologies</span>
            <h2 className={styles.title}>
              Technologies I<br />
              work with
            </h2>
            <p className={styles.subtitle}>
              A curated collection of tools and technologies I use to build
              exceptional digital experiences
            </p>
          </motion.div>

          <div className={styles.categories}>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={styles.category}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillsGrid}>
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className={styles.skillCard}
                        whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
                        initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: -20 }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.08, duration: 0.5, type: 'spring' }}
                      >
                        <div className={styles.skillHeader}>
                          <motion.div
                            className={styles.skillIcon}
                            style={{ color: skill.color }}
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon size={32} />
                          </motion.div>
                          <div className={styles.skillInfo}>
                            <h4 className={styles.skillName}>{skill.name}</h4>
                            <span className={styles.skillLevel}>{skill.level}%</span>
                          </div>
                        </div>
                        <div className={styles.progressBar}>
                          <motion.div
                            className={styles.progressFill}
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.2, delay: categoryIndex * 0.2 + index * 0.08 + 0.3, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
