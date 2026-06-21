import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import "./ProductHighlightCard.css";

export const ProductHighlightCard = React.forwardRef(
  ({ className, categoryIcon, category, title, description, imageSrc, imageAlt, to, ...props }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    const rotateX = useTransform(mouseY, [0, 350], [10, -10]);
    const rotateY = useTransform(mouseX, [0, 350], [-10, 10]);

    const springConfig = { stiffness: 300, damping: 20 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const glowX = useTransform(mouseX, [0, 350], [0, 100]);
    const glowY = useTransform(mouseY, [0, 350], [0, 100]);
    const glowOpacity = useTransform(mouseX, [0, 350], [0, 0.5]);

    const card = (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "highlight-card",
          className
        )}
        {...props}
      >
        <div className="highlight-card-inner">
          {imageSrc && (
            <div className="highlight-card-bg-wrapper">
              <motion.div
                className="highlight-card-bg"
                style={{ backgroundImage: `url(${imageSrc})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          )}
          <div className="highlight-card-overlay" />

          <motion.div
            className="highlight-card-glow"
            style={{
              opacity: glowOpacity,
              background: '#404088',
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
