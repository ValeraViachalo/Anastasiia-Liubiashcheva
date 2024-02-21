const transition = {
  duration: 1,
  ease: [0.76, 0, 0.24, 1],
};

export const Menu = {
  menuOpen: {
    initial: {
      height: 0,
      left: 0,
      right: 0,
    },
    enter: {
      height: "max(75lvh, 507px)",
      transition,
    },
    exit: {
      height: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  menuContainer: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  },
};

export const Header = {
  HomePresence: {
    initial: {
      clipPath: "inset(0 0 100% 0)",
      opacity: 0,
      transition,
    },
    animate: {
      clipPath: "inset(0 0 0% 0)",
      opacity: 1,
      transition,
    },
    exit: {
      clipPath: "inset(0 0 100% 0)",
      opacity: 0,
      transition,
    },
  },
  ContactBtn: {
    initial: {
      transform: 'translateY(100%)',
      transition,
    },
    animate: {
      transform: 'translateY(0%)',
      transition,
    },
    exit: {
      transform: 'translateY(100%)',
      transition,
    },

  }
};

export const CounterAnim = {
  initial: {
    opacity: 0,
    transition,
  },
  animate: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
    transition,
  },
};

export const ServicesAnim = {
  Image: {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.3,
        // ease: [0.76, 0, 0.24, 1],
      },
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 0.3,
        // ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        // ease: [0.76, 0, 0.24, 1],
      },
    },
  },
};

export const Transition = {
  initial: {
    opacity: 0,
    filter: 'blur(1vw)',
    scale: 0.9,
    transition,
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0)',
    transition,
  },
  exit: {
    opacity: 0,
    filter: 'blur(1vw)',
    scale: 0.9,
    transition,
  }
}