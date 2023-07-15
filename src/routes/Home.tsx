import "./Home.css";
import vertexShader from "../glsl/vertex";
import fragmentShader from "../glsl/fragment";
import { useRef, useMemo, useState, useEffect, Ref } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";

// import * as THREE from "three";
import { ShaderMaterial, TextureLoader } from "three";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Mousetrack, Spring } from '../components/Mousetrack';
import Hometext from "../components/Hometext";



export default function Home() {
  
  const [clickfortext, setclickfortext] = useState(false);
  const [cursorState, setcursorState] = useState("default");

  // const cursorRef = useRef({x:0,y:0});
  const ref = useRef(null);
  const variants = Mousetrack(ref);
  const click = useRef(1);
  const handle_texthover = ()=>{
    setcursorState("changehover");
  }
  const handle_textout =()=>{
    setcursorState("change");
  }
  

  const clicktransition = () => {
    gsap.to(click, { current: 0 })
    setclickfortext(true);
    setcursorState("change")
  };
  const Back = () => {
    const mesh = useRef<ShaderMaterial | null>(null);
    const { size } = useThree();
    const [background,afterbackground,noiseimg] = useLoader(TextureLoader,[process.env.PUBLIC_URL+"/test3.jpg",process.env.PUBLIC_URL+"/test4.jpg",process.env.PUBLIC_URL+"/noise5.jpg"]);
    
    const uniforms = useMemo(
      () => ({
        uTime: {
          value: 0.0,
        },
        uTexture1: {
          value: background,
        },
        uTexture2: {
          value: afterbackground,
        },
        uClickState: {
          value: click.current,
        },
        uDisp: {
          value: noiseimg,
        },
      }),
      []
    );

    useFrame((state, delta) => {
      const { clock } = state;
      
      
      // if (!mesh.current) {
      //   return;
      // }
      
      mesh.current.uniforms.uClickState.value = click.current;
      mesh.current.uniforms.uTime.value = clock.getElapsedTime();
    });

    // useEffect(() => {
    //   click.current
    //     ? gsap.to(mesh.current.uniforms.uClickState, { value: 0 })
    //     : gsap.to(mesh.current.uniforms.uClickState, { value: 1 });
      
    // }, []);

    return (
      <mesh scale={[1, 1, 1]} >
        <planeGeometry args={[size.width, size.height, 5, 3]} />

        <shaderMaterial
          ref={mesh}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
        
        
      </mesh>
    );
  };

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      onClick={() => clicktransition()}
    >
      <div 
        className="home_container" 
        ref={ref}
        >
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorState}
        transition={Spring}
        
      >
        <span className="cursortext">{clickfortext? "":"Click"}</span>
        
      </motion.div>
      
      
      <div className="home_canvas">
        <Canvas orthographic={true} dpr={window.devicePixelRatio}>
          <Back />
          
        </Canvas>
      </div>
      
      <div className="home_text">
        <Hometext click={clickfortext} hover={cursorState}/>
      </div>

      </div>
    </motion.div>
  );
}
