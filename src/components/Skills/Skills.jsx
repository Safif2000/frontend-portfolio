import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiNextdotjs, SiVite, SiGit, SiNodedotjs,
  SiRedux, SiFigma,
} from 'react-icons/si';
import styles from './Skills.module.css';

const SkillCard = ({ skill, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const Icon = skill.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      className={styles.skillCard}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Dynamic Glow Effect */}
      <div 
        className={styles.spotlight} 
        style={{ 
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${skill.color}22, transparent 40%)` 
        }} 
      />
      
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper} style={{ '--skill-color': skill.color }}>
          <Icon size={32} />
        </div>
        <h4 className={styles.skillName}>{skill.name}</h4>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'React', icon: SiReact, color: '#61dafb', size: 'large' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', size: 'medium' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', size: 'small' },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', size: 'medium' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4', size: 'small' },
    { name: 'Redux', icon: SiRedux, color: '#764abc', size: 'small' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', size: 'medium' },
    { name: 'Figma', icon: SiFigma, color: '#f24e1e', size: 'small' },
    { name: 'Git', icon: SiGit, color: '#f05032', size: 'small' },
    { name: 'Vite', icon: SiVite, color: '#646cff', size: 'small' },
    { name: 'HTML5', icon: SiHtml5, color: '#e34c26', size: 'small' },
    { name: 'CSS3', icon: SiCss3, color: '#1572b6', size: 'small' },
  ];

  return (
    <section id="skills" ref={ref} className={styles.skills}>
      <div className={styles.container}>
        <header className={styles.header}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.sectionLabel}
          >
            Stack
          </motion.span>
          <h2 className={styles.title}>Technologies I <br></br>work with</h2>
          <p className={styles.subtitle}>
            A curated selection of modern tools used to build high-performance digital solutions.
          </p>
        </header>

        <div className={styles.bentoGrid}>
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;