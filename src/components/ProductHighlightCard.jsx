import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import LazyBackground from "./LazyBackground";
import "./ProductHighlightCard.css";

export const ProductHighlightCard = React.forwardRef(
  ({ className, categoryIcon, category, title, description, imageSrc, imageAlt, to, ...props }, ref) => {
    const card = (
      <motion.div
        ref={ref}
        className={cn("highlight-card", className)}
        {...props}
      >
        <div className="highlight-card-inner">
          {imageSrc && (
            <div className="highlight-card-bg-wrapper">
              <LazyBackground src={imageSrc} className="highlight-card-bg" />
            </div>
          )}
          <div className="highlight-card-overlay" />

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
