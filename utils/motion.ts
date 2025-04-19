// Animation variants for Framer Motion

/**
 * Fade in animation variant
 * @param direction - The direction to fade in from (up, down, left, right)
 * @param type - The type of animation (tween, spring, etc.)
 * @param delay - The delay before the animation starts
 * @param duration - The duration of the animation
 * @returns Framer Motion variants object
 */
export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Staggered container animation variant
 * @param staggerChildren - The delay between each child animation
 * @param delayChildren - The delay before any children start animating
 * @returns Framer Motion variants object
 */
export const staggerContainer = (staggerChildren: number, delayChildren: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

/**
 * Text variant for animating characters
 * @param delay - Delay before animation starts
 * @returns Framer Motion variants object
 */
export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

/**
 * Zoom in animation variant
 * @param delay - Delay before animation starts
 * @param duration - Duration of animation
 * @returns Framer Motion variants object
 */
export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Slide in animation variant
 * @param direction - Direction to slide from (up, down, left, right)
 * @param type - Animation type
 * @param delay - Delay before animation starts
 * @param duration - Duration of animation
 * @returns Framer Motion variants object
 */
export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
}; 