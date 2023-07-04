import "./Home.css";
import vertexShader from "../glsl/vertex";
import fragmentShader from "../glsl/fragment";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";

import * as THREE from "three";
import { ShaderMaterial, TextureLoader } from "three";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import Hometext from "../components/Hometext";



export default function Home() {
  
  const [clickfortext, setclickfortext] = useState(false);
  
  const cursorRef = useRef({x:0,y:0});
 
  const click = useRef(false);

  

  const transition = () => {
    click.current = true;
    setclickfortext(true);
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
          value: 1,
        },
        uDisp: {
          value: noiseimg,
        },
      }),
      []
    );

    useFrame((state, delta) => {
      const { clock,mouse } = state;
      
      
      // if (!mesh.current) {
      //   return;
      // }
      cursorRef.current.x= mouse.x;
      cursorRef.current.y= mouse.y;
      console.log(cursorRef.current);
      mesh.current.uniforms.uTime.value = clock.getElapsedTime();
    });

    useEffect(() => {
      click.current
        ? gsap.to(mesh.current.uniforms.uClickState, { value: 0 })
        : gsap.to(mesh.current.uniforms.uClickState, { value: 1 });
      
    }, []);

    return (
      <mesh scale={[1, 1, 1]} onClick={() => transition()}>
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
      className={"home"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      
    >
      
      <div className="home_canvas">
        <Canvas orthographic={true} dpr={window.devicePixelRatio}>
          <Back />
          
        </Canvas>
      </div>

      
      <div className="home_text">
        <Hometext click={clickfortext} />
      </div>

      
    </motion.div>
  );
}
