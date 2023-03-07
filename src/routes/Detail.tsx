import { useParams } from "react-router-dom";
import "./Detail.css";
import Amazon from "../components/project/Amazon";
import { motion } from "framer-motion";

function Detail() {
  const urldata = useParams();
  const getDetail = (data: string) => {
    switch (data) {
      case "img2":
        return <Amazon />;
    }
  };
  return (
    <motion.div
      className="detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="detail_img">
        <img src={process.env.PUBLIC_URL + `/${urldata.url}.jpg`} />
      </div>
      <div className="detail_text">{getDetail(urldata.url)}</div>
    </motion.div>
  );
}

export default Detail;
