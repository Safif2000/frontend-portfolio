import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Code2, TrendingUp } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const highlights = [
    {
      icon: Target,
      title: 'User-Centered',
      description: 'Every decision is driven by user needs, data, and empathy. I build products that people actually want to use.',
      color: '#06b6d4',
    },
    {
      icon: Zap,
      title: 'Performance First',
      description: 'Optimizing for speed, efficiency, and scalability. Fast experiences create lasting impressions.',
      color: '#3b82f6',
    },
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Writing maintainable, scalable code with clear patterns. Future-proof solutions that teams can build upon.',
      color: '#8b5cf6',
    },
    {
      icon: TrendingUp,
      title: 'Product Mindset',
      description: 'Thinking beyond code. Understanding business goals, user journeys, and how technology enables growth.',
      color: '#10b981',
    },
  ];

  return (
    <section id="about" ref={ref} className={styles.about}>
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={styles.content}
        >
          <motion.div variants={itemVariants} className={styles.textSection}>
            <motion.span
              variants={itemVariants}
              className={styles.sectionLabel}
            >
              About Me
            </motion.span>
            
            <motion.h2 variants={itemVariants} className={styles.title}>
              Building products that
              <span className={styles.titleHighlight}> matter</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className={styles.summary}>
              I'm a <strong>Frontend Developer</strong> with <strong>2+ years</strong> of experience
              crafting exceptional digital experiences. I specialize in building scalable,
              performant applications that users love and teams can maintain.
            </motion.p>
            
         

            <motion.div variants={itemVariants} className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Technologies Mastered</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.highlightsSection}>
            <div className={styles.highlightsGrid}>
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    className={styles.highlightCard}
                    whileHover={{ y: -8, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                  >
                    <div
                      className={styles.highlightIcon}
                      style={{ '--icon-color': highlight.color }}
                    >
                      <Icon size={28} />
                    </div>
                    <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                    <p className={styles.highlightText}>{highlight.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
