import "./Loading.css";
import { motion } from "framer-motion";

function Loading() {
  return (
    <>
      <motion.div
        className="loading"
        initial={{ opacity: 1, visibility: "visible" }}
        animate={{
          opacity: 0,
          visibility: "hidden",
          transition: { duration: 1 },
        }}
      ></motion.div>
      <motion.div className="layer" initial={{ opacity: 1 }}></motion.div>
    </>
  );
}

export default Loading;
