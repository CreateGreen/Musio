import { Text, TrackballControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import * as THREE from "three";
import "./Profile.css";

const Profile = () => {
  function Word({ children, ...props }: any) {
    const color = new THREE.Color();
    const fontProps = {
      font: "/Musio/Staatliches-Regular.ttf",
      fontSize: 2.5,
      letterSpacing: -0.05,
      lineHeight: 1,
      "material-toneMapped": false,
    };
    const ref = useRef<any>();
    const [hovered, setHovered] = useState(false);
    const over = (e: any) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    // Change the mouse cursor on hover
    // useEffect((): any => {
    //   if (hovered) document.body.style.cursor = "pointer";
    //   return (document.body.style.cursor = "auto");
    // }, [hovered]);
    // Tie component to the render-loop

    useFrame(({ camera }) => {
      if (!ref.current) return;
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion);
      // Animate font color
      ref.current.material.color.lerp(
        color.set(hovered ? "cadetblue" : "white"),
        0.1
      );
    });
    return (
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("clicked")}
        {...props}
        {...fontProps}
        children={children}
      />
    );
  }

  function Cloud({ count = 4, radius = 20 }): any {
    // Create a count x count random words with spherical distribution
    const wordset = [
      "React",
      "Typescript",
      "JavaScript",
      "Node.js",
      "Three.js",
    ];
    const words = useMemo(() => {
      const temp = [];
      const spherical = new THREE.Spherical();
      const phiSpan = Math.PI / (count + 1);
      const thetaSpan = (Math.PI * 2) / count;
      for (let i = 1; i < count + 1; i++)
        for (let j = 0; j < count; j++)
          temp.push([
            new THREE.Vector3().setFromSpherical(
              spherical.set(radius, phiSpan * i, thetaSpan * j)
            ),
            wordset[i - 1],
          ]);
      return temp;
    }, [count, radius]);
    return words.map(([pos, word], index) => (
      <Word key={index} position={pos} children={word} />
    ));
  }

  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={["#202025", 0, 80]} />
        <Cloud count={5} radius={20} />
        <TrackballControls maxDistance={40} minDistance={10} />
      </Canvas>
    </motion.div>
  );
};
export default Profile;
