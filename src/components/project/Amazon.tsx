import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Amazon.css";

function Amazon() {
  const [hover, sethover] = useState(false);
  const gradienthover = () => {
    sethover(!hover);
    hover
      ? gsap.to(".icon_box", { opacity: 0 })
      : gsap.to(".icon_box", { opacity: 1 });
  };
  return (
    <div className="amazon">
      <motion.div
        className="amazon_left"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        exit={{ x: -500 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7 }}
        >
          Amazon Copy
        </motion.h2>
        <Link to={"https://creategreen.github.io/Amazoncopy/"}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7 }}
          >
            Visit
          </motion.p>
        </Link>
      </motion.div>
      <motion.div
        className="amazon_right"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        exit={{ x: 500 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          onPointerOver={() => gradienthover()}
          onPointerOut={() => gradienthover()}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7 }}
        >
          Stack
        </motion.h2>
        <div className="icon_box" style={{ opacity: 0 }}>
          <img src={process.env.PUBLIC_URL + "/react.png"} />
          <img src={process.env.PUBLIC_URL + "/typescript.png"} />
          <img src={process.env.PUBLIC_URL + "/stripe.png"} />
          <img src={process.env.PUBLIC_URL + "/material-ui.png"} />

          <img src={process.env.PUBLIC_URL + "/node-js.png"} />
          <img src={process.env.PUBLIC_URL + "/firebase.png"} />
        </div>
      </motion.div>
    </div>
  );
}
export default Amazon;
