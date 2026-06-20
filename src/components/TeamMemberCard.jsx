import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import './TeamMemberCard.css';

export default function TeamMemberCard({ name, role, bio, image, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = !shouldReduceMotion;

  const containerVariants = {
    rest: { scale: 1, y: 0, filter: 'blur(0px)' },
    hover: shouldAnimate ? {
      scale: 1.02,
      y: -4,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 400, damping: 28, mass: 0.6 }
    } : {},
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 400, damping: 28, mass: 0.6, staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95, filter: 'blur(2px)' },
    visible: {
      opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 400, damping: 25, mass: 0.5 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1, scale: 1,
      transition: { type: 'spring', damping: 8, stiffness: 200, mass: 0.8 },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className="team-card"
    >
      <motion.img
        src={image || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=404088&color=fff&size=400`}
        alt={name}
        className="team-card-image"
        variants={imageVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      <div className="team-card-overlay" />
      <div className="team-card-gradient" />
      <div className="team-card-blur" />

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="team-card-content"
      >
        <motion.div variants={itemVariants}>
          <motion.h3 className="team-card-name">
            {name.split('').map((letter, i) => (
              <motion.span key={i} variants={letterVariants} className="team-card-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h3>
        </motion.div>

        <motion.span variants={itemVariants} className="team-card-role">{role}</motion.span>

        <motion.p variants={itemVariants} className="team-card-bio">{bio}</motion.p>
      </motion.div>
    </motion.div>
  );
}
