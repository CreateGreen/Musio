import { motion } from "framer-motion";


const Test =()=>{
    return (
        <motion.div
          className="test"
          initial={{ opacity: 0 , }}
          animate={{ opacity: 1 , }}
          exit={{ opacity: 0 }}
          transition={{ duration:1.3}}
        >
            test component
        </motion.div>
      );
}
export default Test;