import { stagger } from "framer-motion";

export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Reducing this value creates a more seamless stagger
      duration: 1, // Shorter duration for each element
      ease: [0.25, 0.8, 0.25, 1], // Using a custom cubic bezier for smoother easing
    },
  },
};


export const zoomInVariants = {
  hidden: { scale: 0.8, opacity: 0 },  // Slightly larger starting scale for smoother entry
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,  // Increased duration for smoother effect
      ease: [0.25, 0.8, 0.25, 1],  // Custom cubic bezier for smooth easing
    },
  },
};

export const slideInFromTopVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren:2,
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  export const rotateInVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  export const slideInFromLeftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

  export const slideInFromRightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

 export const hoverVariants = {
    hover: {
      scale: 1.1, // Increase the scale by 10%
      transition: {
        duration: 0.3, // Adjust the animation duration as needed
        ease: 'easeInOut',
      },
    },
  };