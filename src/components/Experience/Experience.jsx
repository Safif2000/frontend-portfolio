import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const experiences = [
    {
      company: ' Sleekhive Technologies Pvt Ltd.',
      role: 'Frontend Developer',
      duration: 'Oct 2023 – Current',
      location: 'Pakistan, Karachi',
      achievements: [
        'Led Frontend Developer for 3 major product launches, serving 500K+ users',
        'Mentored team of 8 developers, improving code quality by 40% through code reviews',
        'Reduced application load time by 60% through performance optimization',
        'Architected design system used across 10+ products, reducing development time by 30%',
      ],
    },
    {
      company: 'UBL Insurers.',
      role: 'Frontend Developer',
      duration: 'Apr 2023 – Jul 2023',
      location: 'Pakistan, Karachi',
      achievements: [
        'Developed 15+ client projects using React, Next.js, and TypeScript',
        'Optimized application performance, improving Lighthouse scores by 50%',
        'Built reusable component library, reducing project setup time by 45%',
        'Collaborated with design teams to implement pixel-perfect UIs',
      ],
    },
    // {
    //   company: 'StartupXYZ',
    //   role: 'Frontend Developer',
    //   duration: '2019 - 2020',
    //   location: 'Remote',
    //   achievements: [
    //     'Built core features for MVP that attracted 10K+ users in first quarter',
    //     'Implemented responsive designs for mobile and desktop platforms',
    //     'Contributed to open-source projects, gaining 500+ GitHub stars',
    //     'Learned modern frontend technologies and best practices',
    //   ],
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="experience" ref={ref} className={styles.experience}>
      {/* Animated background waves */}
      <motion.div
        className={styles.backgroundWaves}
        style={{ scale, rotate }}
      />

      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.header}>
            <span className={styles.sectionLabel}>Professional Experience</span>
            <h2 className={styles.title}>
              Where I've made<br />
              an impact
            </h2>
            <p className={styles.subtitle}>
              Building products and leading teams at innovative companies
            </p>
          </motion.div>

          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className={styles.timelineItem}
                whileHover={{ x: 12 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={styles.timelineMarker}
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <Briefcase className={styles.markerIcon} />
                </motion.div>
                <motion.div
                  className={styles.timelineContent}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                >
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div>
                        <h3 className={styles.company}>{exp.company}</h3>
                        <h4 className={styles.role}>{exp.role}</h4>
                      </div>
                      <div className={styles.meta}>
                        <div className={styles.metaItem}>
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className={styles.achievements}>
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
