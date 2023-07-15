import useMouse from "@react-hook/mouse-position";

export const Mousetrack = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 70,
    leaveDelay: 200,
  });

  let mouseY = 0;
  let mouseX = 0;
  if (mouse.clientX != null) {
    mouseX = mouse.clientX;
  }
  if (mouse.clientY != null) {
    mouseY = mouse.clientY;
  }

  return {
    default: {
      opacity: 1,
      height: 35,
      width: 35,
      fontsize: "20px",
      backgroundColor: "#212129",
      x: mouseX,
      y: mouseY,
      transition: {
        type: "spring",
        mass: 0.2,
      },
    },
    change: {
      opacity: 1,
      height: 25,
      width: 25,
      fontsize: "20px",
      backgroundColor: "#ffffff",
      x: mouseX,
      y: mouseY,

      transition: {
        type: "spring",
        mass: 0.2,
      },
    },
    changehover: {
        opacity: 0.5,
        height: 30,
        width: 30,
        fontsize: "20px",
        backgroundColor: "#ffffff",
        x: mouseX,
        y: mouseY,
        transition: {
          type: "spring",
          mass: 0.2,
        },
      },


  };
};

export const Spring = {
  type: "spring",
  stiffness: 500,
  damping: 10,
};
