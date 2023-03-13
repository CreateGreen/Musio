import "./Hometext.css";
import { gsap } from "gsap";
import { Power1 } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface PropsType {
  click: boolean;
}

const Hometext = ({ click }: PropsType) => {
  const clicktrans = () => {
    gsap.to(".maintext", {
      opacity: 0,
      ease: Power1.easeOut,
      x: 500,
      stagger:0.1,
      duration: 1,
    });
    gsap.to(".sidetext", {
      opacity: 1,
      ease: Power1.easeIn,
      x: 150,
      duration: 2,
    });
  };

  useEffect(() => {
    if (click) {
      clicktrans();
    }
  }, [click]);

  return (
    <div className="hometext">
      <div className="hometext_main">
        <svg className="hometext_svg" viewBox="0 0 500 400">
          <text
            alignmentBaseline="central"
            x="0"
            y="50%"
            className="maintext"
            opacity={1}
          >
            M
          </text>
          <text
            alignmentBaseline="central"
            x="150"
            y="50%"
            className="maintext"
            opacity={1}
          >
            U
          </text>
          <text
            alignmentBaseline="central"
            x="300"
            y="50%"
            className="maintext"
            opacity={1}
          >
            S
          </text>
          <text
            alignmentBaseline="central"
            x="400"
            y="50%"
            className="maintext"
            opacity={1}
          >
            I
          </text>
          <text
            alignmentBaseline="central"
            x="500"
            y="50%"
            className="maintext"
            opacity={1}
          >
            O
          </text>
        </svg>
      </div>
      <div className="hometext_menu">
        <svg className="hometext_sidesvg" viewBox="0 0 200 400">
          <Link to="/profile">
            <text
              className="sidetext"
              alignmentBaseline="central"
              x="-150"
              y="30%"
              opacity={0}
            >
              Profile
            </text>
          </Link>
          <Link to="/project">
            <text
              className="sidetext"
              alignmentBaseline="central"
              x="-150"
              y="70%"
              opacity={0}
            >
              Project
            </text>
          </Link>
        </svg>
      </div>
    </div>
  );
};

export default Hometext;
