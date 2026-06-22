import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import LazyBackground from "./LazyBackground";
import "./ProductHighlightCard.css";

export const ProductHighlightCard = React.forwardRef(
  ({ className, categoryIcon, category, title, description, imageSrc, imageAlt, to, ...props }, ref) => {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      mouseX.set((clientX - left) / width);
      mouseY.set((clientY - top) / height);
    };

    const handleMouseLeave = () => {
      mouseX.set(0.5);
      mouseY.set(0.5);
    };

    const glowX = useTransform(mouseX, [0, 1], [0, 100]);
    const glowY = useTransform(mouseY, [0, 1], [0, 100]);
    const glowOpacity = useTransform(
      mouseX,
      [-0.2, 0, 1, 1.2],
      [0, 0.35, 0.35, 0]
    );

    const springGlowX = useSpring(glowX, { stiffness: 120, damping: 20 });
    const springGlowY = useSpring(glowY, { stiffness: 120, damping: 20 });
    const springGlowOpacity = useSpring(glowOpacity, { stiffness: 120, damping: 20 });

    const card = (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("highlight-card", className)}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      >
        <div className="highlight-card-inner">
          {imageSrc && (
            <div className="highlight-card-bg-wrapper">
              <LazyBackground src={imageSrc} className="highlight-card-bg" />
            </div>
          )}
          <div className="highlight-card-overlay" />

          <motion.div
            className="highlight-card-glow"
            style={{
              opacity: springGlowOpacity,
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)',
              left: springGlowX,
              top: springGlowY,
              translate: '-50% -50%',
            }}
          />

          <div className="highlight-card-content">
            <div className="highlight-card-header">
              {categoryIcon}
              <span className="highlight-card-category">{category}</span>
            </div>

            <div className="highlight-card-body">
              <h3 className="highlight-card-title">{title}</h3>
              <p className="highlight-card-desc">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );

    if (to) {
      return <Link to={to} className="highlight-card-link">{card}</Link>;
    }

    return card;
  }
);

ProductHighlightCard.displayName = "ProductHighlightCard";
