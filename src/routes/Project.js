import "./Project.css";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Preload,
  Image,
} from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Images(props) {
  const [hover, sethover] = useState(false);
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  const navigate = useNavigate();
  const todetail = (url) => {
    let paramdata = url.substring(0, url.length - 4);

    navigate(`/project/detail/${paramdata}`);
  };
  useFrame((state, delta) => {
    if (!group.current) return;
    if (!ref.current) return;

    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );

    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      Math.max(0, 1 - data.delta * 1000),
      4,
      delta
    );

    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      hover ? 3 : 1,
      4,
      delta
    );
    // ref.current.material.scale[0] =THREE.MathUtils.damp(
    //   ref.current.material.scale[0],
    //   click?width:,
    //   4,delta
    // );
  });
  return (
    <group ref={group}>
      <Image
        ref={ref}
        {...props}
        onClick={(e) => todetail(props.url)}
        onPointerOver={() => sethover(true)}
        onPointerOut={() => sethover(false)}
      />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width, height } = useThree((state) => state.viewport);

  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Images
        position={[-width * w, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[0]}
      />
      <Images
        position={[0, 0, 0]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[1]}
      />
      <Images
        position={[width * w, 0, 1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[2]}
      />
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Page
        position={[-width * 1, 0, 0]}
        urls={["./trip1.jpg", "./trip2.jpg", "./trip3.jpg"]}
      />
      <Page
        position={[width * 0, 0, 0]}
        urls={["./img1.jpg", "./img2.jpg", "./img3.jpg"]}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={["./img4.jpg", "./img5.jpg", "./img6.jpg"]}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={["./trip1.jpg", "./trip2.jpg", "./trip3.jpg"]}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={["./img1.jpg", "./img2.jpg", "./img3.jpg"]}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={["./img4.jpg", "./img5.jpg", "./img6.jpg"]}
      />
    </>
  );
}

const Project = () => {
  return (
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <ScrollControls
          infinite
          horizontal
          damping={4}
          pages={4}
          distance={1}
          
          style={{msScrollbarTrackColor:"black"}}
        >
          <Scroll>
            <Pages />
          </Scroll>
          <Scroll html>
            <div className="container">
              <h1 style={{ position: "absolute", top: "7vh", left: "10vw" }}>
                Project
              </h1>
              <h1 style={{ position: "absolute", top: "60vh", left: "40vw" }}>
                Gallery
              </h1>
              <h1 style={{ position: "absolute", top: "35vh", left: "38vw" }}>
                *
              </h1>
              <h1 style={{ position: "absolute", top: "10vh", left: "225vw" }}>
                Project
              </h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}>
                *
              </h1>
              <h1 style={{ position: "absolute", top: "60vh", left: "275vw" }}>
                Gallery
              </h1>
            </div>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Canvas>
    </motion.div>
  );
};

export default Project;
