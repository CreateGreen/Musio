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
      <div className="amazon_left">
        <h2>Amazon Copy</h2>
        <Link to={"https://creategreen.github.io/Amazoncopy/"}>
          <p>Visit</p>
        </Link>
      </div>
      <div className="amazon_right">
        <h2
          onPointerOver={() => gradienthover()}
          onPointerOut={() => gradienthover()}
        >
          Stack
        </h2>
        <div className="icon_box" style={{ opacity: 0 }}>
          <img src={process.env.PUBLIC_URL + "/react.png"} />
          <img src={process.env.PUBLIC_URL + "/typescript.png"} />
          <img src={process.env.PUBLIC_URL + "/stripe.png"} />
          <img src={process.env.PUBLIC_URL + "/material-ui.png"} />

          <img src={process.env.PUBLIC_URL + "/node-js.png"} />
          <img src={process.env.PUBLIC_URL + "/firebase.png"} />
        </div>
      </div>
    </div>
  );
}
export default Amazon;
