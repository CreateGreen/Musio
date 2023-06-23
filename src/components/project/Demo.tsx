import "./Demo.css";
import { useState } from "react";

interface PropsType {
  url: string;
}

function Demo({ url }: PropsType) {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };
  return (
    <div className="demo">
      <div className={"demo_img" + (click ? "_active" : "")}>
        <img
          onClick={() => handleClick()}
          src={process.env.PUBLIC_URL + `/${url}.jpg`}
          alt="바다유화그림"
        />
        <p className="previewtext">See Detail</p>
      </div>
      <div className="demo_text">
        <p className="left">
          Foggy Seas Painting <p/>
          Ann Marie Coolick
        </p>
        <p className="right">
          Oil on Canvas Heavily <br />
          textured seascape inspired by
          <br /> a foggy morning on a choppy open ocean. <br />
          Edges painted and wired.
        </p>
      </div>
    </div>
  );
}
export default Demo;
