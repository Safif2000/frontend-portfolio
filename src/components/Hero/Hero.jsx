import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // ✅ Resume open function
  const handleOpenResume = () => {
    window.open('/SYED MUHAMMAD AFIF-RESUME.pdf', '_blank');
  };

  return (
    <section id="home" className={styles.hero}>
      
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.gradientOrb1}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className={styles.gradientOrb2}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className={styles.container}>
        
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div variants={itemVariants} className={styles.greeting}>
            <Sparkles className={styles.sparkleIcon} />
            <span>Hello, I'm</span>

            <motion.span
              className={styles.roleBadge}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
            >
              Frontend Developer
            </motion.span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.name}>
            <span className={styles.nameFirst}>Syed </span>
            <span className={styles.nameLast}>Muhammad Afif</span>
          </motion.h1>

          <motion.div variants={itemVariants} className={styles.roleContainer}>
            <motion.h2
              className={styles.role}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React Developer',
                  2000,
                  'Next.js Developer',
                  2000,
                  'UI Engineer',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.intro}>
            I craft exceptional digital experiences through thoughtful design,
            clean architecture, and cutting-edge technology. Specializing in
            building scalable frontend systems that users love.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className={styles.ctaButtons}
          >
            <motion.button
              className={`${styles.button} ${styles.primary}`}
              onClick={() => handleScrollToSection('projects')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className={styles.buttonIcon} />
            </motion.button>

            <motion.button
              className={`${styles.button} ${styles.secondary}`}
              onClick={handleOpenResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className={styles.buttonIcon} />
              Get Resume
            </motion.button>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            variants={itemVariants}
            className={styles.stats}
          >
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Projects Shipped</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </motion.div> */}

        </motion.div>

        {/* Code Window Visual */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.codeWindow}>

            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className={styles.codeTitle}>portfolio.tsx</span>
            </div>

            <div className={styles.codeContent}>
              <div className={styles.codeLine}>
                <span className={styles.codeKeyword}>const</span>{' '}
                <span className={styles.codeVariable}>developer</span> = {'{'}
              </div>

              <div className={styles.codeLine}>
                <span className={styles.codeIndent}>  </span>
                <span className={styles.codeProperty}>passion</span>: 
                <span className={styles.codeString}> 'frontend'</span>,
              </div>

              <div className={styles.codeLine}>
                <span className={styles.codeIndent}>  </span>
                <span className={styles.codeProperty}>focus</span>: 
                <span className={styles.codeString}> 'excellence'</span>,
              </div>

              <div className={styles.codeLine}>
                <span className={styles.codeIndent}>  </span>
                <span className={styles.codeProperty}>mindset</span>: 
                <span className={styles.codeString}> 'product-first'</span>
              </div>

              <div className={styles.codeLine}>{'}'}</div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => handleScrollToSection('about')}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </motion.div> */}

    </section>
  );
};

export default Hero;