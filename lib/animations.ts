export const menuSlide = {
  initial: { x: "100%" },
  enter: { x: 0, transition: { duration: 0.25, ease: "easeInOut" } },
  exit: { x: "100%", transition: { duration: 0.25, ease: "easeInOut" } },
};

export const slide = {
  initial: { x: -100 },
  enter: { x: 0, transition: { duration: 0.25, ease: "easeInOut" } },
  exit: { x: -100, transition: { duration: 0.25, ease: "easeInOut" } },
};
