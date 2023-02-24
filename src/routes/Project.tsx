import "./Project.css";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Preload,
  Image,
  ImageProps,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Images(props: any) {
  const ref = useRef<ImageProps | null>(null);
  const group = useRef<THREE.Group | null>(null);
  const data = useScroll();
  useFrame((state, delta) => {
    if (!group.current) return;
    if (!ref.current) return;

    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );
    ref.current.grayscale = THREE.MathUtils.damp(
      ref.current.grayscale,
      Math.max(0, 1 - data.delta * 1000),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <Image ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }: any) {
  const { width } = useThree((state) => state.viewport);
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
    <div className="project">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
          <Scroll>
            <Pages />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}>
              home
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "25vw" }}>
              to
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}>
              be
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}>
              home
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}>
              to
            </h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}>
              be
            </h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Canvas>
    </div>
  );
};

export default Project;
