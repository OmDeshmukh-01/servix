import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FloatingDockProps {
  children: ReactNode;
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
}

interface FloatingDockIconProps {
  children: ReactNode;
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
}

export const FloatingDockIcon = ({
  children,
  size = 40,
  magnification = 60,
  distance = 140,
  mouseX,
  className,
}: FloatingDockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = (mouseX: number) => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const iconCenter = rect.left + rect.width / 2;
    return Math.abs(mouseX - iconCenter);
  };

  const width = useMotionValue(size);
  const height = useMotionValue(size);
  const springConfig = { damping: 20, stiffness: 300 };
  const widthSpring = useSpring(width, springConfig);
  const heightSpring = useSpring(height, springConfig);

  if (mouseX) {
    const mouseDistance = distanceCalc(mouseX.get());
    const isNear = mouseDistance < distance;
    
    const newWidth = isNear 
      ? size + (magnification - size) * (1 - mouseDistance / distance)
      : size;
    const newHeight = isNear 
      ? size + (magnification - size) * (1 - mouseDistance / distance)
      : size;

    width.set(newWidth);
    height.set(newHeight);
  }

  return (
    <motion.div
      ref={ref}
      className={`flex items-center justify-center ${className}`}
      style={{
        width: widthSpring,
        height: heightSpring,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingDock = ({
  children,
  className = "",
  iconSize = 40,
  iconMagnification = 60,
  iconDistance = 140,
}: FloatingDockProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      className={`flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-2 ${className}`}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <FloatingDockIcon
            key={index}
            size={iconSize}
            magnification={iconMagnification}
            distance={iconDistance}
            mouseX={mouseX}
          >
            {child}
          </FloatingDockIcon>
        )) : 
        <FloatingDockIcon
          size={iconSize}
          magnification={iconMagnification}
          distance={iconDistance}
          mouseX={mouseX}
        >
          {children}
        </FloatingDockIcon>
      }
    </motion.div>
  );
};
