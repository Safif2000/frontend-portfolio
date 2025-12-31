import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Send, Linkedin, Github, Twitter, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused({ ...focused, [field]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for your message! (This is a demo - no backend connected)');
      setFormData({ name: '', email: '', message: '' });
      setFocused({ name: false, email: false, message: false });
      setIsSubmitting(false);
    }, 1000);
  };

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

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: '#0a66c2' },
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: '#ffffff' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: '#1da1f2' },
  ];

  return (
    <section id="contact" ref={ref} className={styles.contact}>
      {/* Animated gradient orbs */}
      <motion.div
        className={styles.gradientOrbs}
        style={{ y, opacity }}
      >
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </motion.div>

      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className={styles.header}>
            <span className={styles.sectionLabel}>Get In Touch</span>
            <h2 className={styles.title}>
              Let's build something<br />
              amazing together
            </h2>
            <p className={styles.subtitle}>
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Send me a message and let's start a conversation.
            </p>
          </motion.div>

          <div className={styles.content}>
            <motion.div variants={itemVariants} className={styles.info}>
              <motion.div
                className={styles.infoCard}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className={styles.infoIcon} />
                <div>
                  <h3 className={styles.infoTitle}>Email</h3>
                  <a href="mailto:s.mafif222@gmail.com" className={styles.infoLink}>
                  s.mafif222@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className={styles.infoCard}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className={styles.infoIcon} />
                <div>
                  <h3 className={styles.infoTitle}>Location</h3>
                  <p className={styles.infoText}>San Francisco, CA</p>
                </div>
              </motion.div>

              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Connect with me</h3>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        style={{ '--social-color': social.color }}
                        whileHover={{ scale: 1.15, y: -6, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={itemVariants}
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <motion.div
                className={styles.formGroup}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    className={styles.input}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`${styles.label} ${focused.name || formData.name ? styles.focused : ''}`}
                  >
                    Name
                  </label>
                </div>
              </motion.div>

              <motion.div
                className={styles.formGroup}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    className={styles.input}
                    required
                  />
                  <label
                    htmlFor="email"
                    className={`${styles.label} ${focused.email || formData.email ? styles.focused : ''}`}
                  >
                    Email
                  </label>
                </div>
              </motion.div>

              <motion.div
                className={styles.formGroup}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.inputWrapper}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    className={styles.textarea}
                    required
                    rows="6"
                  />
                  <label
                    htmlFor="message"
                    className={`${styles.label} ${focused.message || formData.message ? styles.focused : ''}`}
                  >
                    Message
                  </label>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
