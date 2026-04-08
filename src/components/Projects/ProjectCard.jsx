import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  const handleArrowClick = () => {
    if (project.demo) {
      window.open(project.demo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
    >
      <div className={styles.imageContainer}>
        
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}

        <div className={styles.imagePlaceholder} style={project.image ? { display: 'none' } : {}}>
          <div className={styles.imageGradient} />
          <div className={styles.imagePattern}>
            <div className={styles.patternLine} />
            <div className={styles.patternLine} />
            <div className={styles.patternLine} />
          </div>
        </div>

        {/* Desktop Overlay */}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <p className={styles.overlayDescription}>
              {project.description}
            </p>

            <div className={styles.overlayButtons}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayButton}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.overlayButton} ${styles.secondary}`}
                >
                  <Github size={18} />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className={styles.mobileButtons}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayButton}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.overlayButton} ${styles.secondary}`}
            >
              <Github size={18} />
              Code
            </a>
          )}
        </div>

      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>

          <motion.div
            className={`${styles.arrowIcon} ${project.demo ? styles.arrowClickable : ''}`}
            whileHover={{ x: 5 }}
            onClick={handleArrowClick}
            title={project.demo ? 'Open Live Demo' : ''}
            style={{ cursor: project.demo ? 'pointer' : 'default' }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>

        <p className={styles.description}>
          {project.shortDescription}
        </p>

        <div className={styles.tags}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;