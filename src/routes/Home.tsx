import "./Home.css";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import vertexShader from "../glsl/vertex";
import fragmentShader from "../glsl/fragment";
import * as THREE from "three";
import { ShaderMaterial, TextureLoader } from "three";
import image from "../img/test3.jpg";
import afterimg from "../img/test4.jpg";
import noise from "../img/noise4.jpg";
import Hometext from "../components/Hometext";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function Home() {
  const [clickfortext, setclickfortext] = useState(false);

  const click = useRef(false);

  const transition = () => {
    click.current = true;
    setclickfortext(true);
  };
  const Back = () => {
    const mesh = useRef<ShaderMaterial | null>(null);
    const { size } = useThree();
    const background = useLoader(TextureLoader, image);
    const afterbackground = useLoader(TextureLoader, afterimg);
    const noiseimg = useLoader(TextureLoader, noise);

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
      const { clock } = state;
      if (!mesh.current) {
        return;
      }
      mesh.current.uniforms.uTime.value = clock.getElapsedTime();
    });

    useEffect(() => {
      click.current
        ? gsap.to(mesh.current.uniforms.uClickState, { value: 0 })
        : gsap.to(mesh.current.uniforms.uClickState, { value: 1 });
    }, [click.current]);

    return (
      <mesh scale={[1, 1, 1]} onClick={() => transition()}>
        <planeGeometry args={[size.width, size.height, 10, 5]} />

        <shaderMaterial
          ref={mesh}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          // transparent={true}
          // opacity={0}
          // wireframe={true}
          // side={THREE.DoubleSide}
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
    >
      <div className="home_text">
        <Hometext click={clickfortext} />
      </div>

      <div className="home_canvas">
        <Canvas orthographic={true} dpr={window.devicePixelRatio}>
          <Back />
        </Canvas>
      </div>
    </motion.div>
  );
}