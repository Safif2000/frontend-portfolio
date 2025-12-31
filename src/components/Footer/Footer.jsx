import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: '#ffffff' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: '#0a66c2' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: '#1da1f2' },
    { name: 'Email', icon: Mail, url: 'mailto:s.mafif222@gmail.com', color: '#06b6d4' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.brand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.brandHeader}>
              <Code className={styles.brandIcon} />
              <h3 className={styles.brandName}> Syed Muhammad Afif</h3>
            </div>
            <p className={styles.brandTagline}>
              Frontend Developer building exceptional digital experiences
            </p>
          </motion.div>

          <motion.div
            className={styles.links}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#home" className={styles.footerLink}>Home</a>
              </li>
              <li>
                <a href="#about" className={styles.footerLink}>About</a>
              </li>
              <li>
                <a href="#projects" className={styles.footerLink}>Projects</a>
              </li>
              <li>
                <a href="#contact" className={styles.footerLink}>Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.social}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={styles.socialTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    style={{ '--social-color': link.color }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    <Icon size={22} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.copyrightLine} />
          <p className={styles.copyrightText}>
            © {currentYear} Syed Muhammad Afif. All rights reserved.
            <span className={styles.copyrightBuilt}>
              {' '}Built with React, Vite & Tailwind CSS
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
