export const variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

export const itemVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

export const logoVariants = {
  hover: {
    scale: 1.2,
    transition: {
      // type: "spring",
      // stiffness: 260,
      // damping: 200,
    }
  },
  tap: {
    scale: 1,
    opacity: 0.5
  }
}

export const foldVariants = {
  visible: {
    opacity: 1
  },
  tap: {
    opacity: 0.7,
    scale: 0.9
  },
  hidden: {
    opacity: 0
  }
}

export const ComponentVariants = {
  hide: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: 0.6
    }
  },
  visible: {
    opacity: 1,
    x: 0
  }
}
