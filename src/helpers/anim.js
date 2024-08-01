export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};


const transition = {
  duration: 1,
  ease: [0.76, 0, 0.24, 1],
};

export const MenuAnim = {
  menuOpen: {
    initial: {
      opacity: 0,
      clipPath: "inset(0 0 30% 0)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        ...transition,
      },
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 0 30% 0)",
      transition: {
        ...transition,
        duration: .8,
        delay: 0.12,
      },
    },
  },
  linksList: {
    initial: {
      opacity: 0.2,
      transition: {
        duration: .4,
        delay: 1,
      },
    },
    animate: (i) => ({
      opacity: 1,
      transition: { 
        duration: .4,
        delay: i
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: .4,
      },
    },
  },
  background: {
    initial: {
      opacity: 0,
      transition: {
        duration: .4,
      },
    },
    animate: {
      opacity: 0.3,
      transition: { 
        duration: .5,
        delay: .1
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .4,
        delay: .8,
      },
    },
  },
  backgroundFilter: {
    initial: {
      opacity: 0,
      transition: {
        duration: .4,
      },
    },
    animate: {
      opacity: 1,
      transition: { 
        duration: .5,
        delay: .1
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .4,
        delay: .8,
      },
    },
  }
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
      transitionEnd: {
        clipPath: "none",
      }
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
    transitionEnd: {
      filter: 'none',
    }
  },
  exit: {
    opacity: 0,
    filter: 'blur(1vw)',
    scale: 0.9,
    transition,
  }
}