export const variants = {
  hidden: { opacity: 0, transition: { when: "afterChildren" } },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}
const itemAnimate = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
  }
}

export const h1Variants = itemAnimate
export const pVariants = itemAnimate
export const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5
    }
  },
  // tap: {
  //   scale: 0.9
  // },
  // hover: {
  //   scale: 1.1
  // }
}


export const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  }
}
