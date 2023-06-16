import "./Demo.css";
import { useState } from 'react';

interface PropsType {
  url: string;
}

function Demo({ url }: PropsType) {
    const [click,setclick] = useState(false);
    const handleClick =()=>{
        setclick(!click);
    }
  return (
    <div className="demo">
      <div className={"demo_img"+(click ? "_active":"")}>
        <img onClick={()=>handleClick()} src={process.env.PUBLIC_URL + `/${url}.jpg`} />
        <p className="previewtext">See Detail</p>
      </div>
      <div className="demo_text">

      </div>
    </div>
  );
}
export default Demo;
