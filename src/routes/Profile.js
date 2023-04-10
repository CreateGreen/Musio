import { Text, TrackballControls, Text3D ,Center} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useMemo, useLayoutEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import "./Profile.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  function Word({ children, ...props }) {
    const color = new THREE.Color();

    const fontProps = {
      font: "/Musio/Staatliches_Regular.json",
      size: 2,
      letterSpacing: -0.05,
      lineHeight: 1,
      "material-toneMapped": false,
      anchorX:"center",
      anchorY:"middle"
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
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
        0.5
      );
    });
    
    return (
      <Center position ={props.position}>
      <Text3D
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log(children.toLowerCase())}
        smooth={0}
        {...props}
        {...fontProps}
        children={children}
      />
    </Center>
    );
  }

  function Cloud({ count = 4, radius = 20 }) {
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
      const phiSpan = Math.PI / (count +1);
      const thetaSpan = (Math.PI * 2) / (count);
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

  const main = useRef();
  
  useLayoutEffect(() => {
    const tl = gsap.context((self) => {
      gsap.to(".profile_text", {
        scale: 0.1,
        ease: "sign.out",

        scrollTrigger: {
          trigger: ".section_one",
          start: "top top",
          end: () => "+=" + window.innerHeight,
          scrub: 5,
          pin: true,
        },
      });
    }, main);

    const tl2 = gsap.context((self) => {
      gsap.to(".section_two", {
        opacity: 1,
        ease: "sign.out",

        scrollTrigger: {
          trigger: ".section_two",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          
          
        },
      });
    },main);

    gsap.fromTo(".text", { y: -100 }, { stagger: 0.1, duration: 1.5, y: 0 });
    return () => {
      tl.revert();
      tl2.revert();
    };
  }, []);

  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={main}
    >
      <section className="section_one">
        <h1 className="text_container">
          <div className="profile_text">
            <div className="text">H</div>
            <div className="text">E</div>
            <div className="text">L</div>
            <div className="text">L</div>
            <div className="text">O</div>
          </div>
        </h1>
      </section>

      <section className="section_two" style={{opacity:0.4}}>
        <Canvas dpr={window.devicePixelRatio} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={["#202025", 0, 80]} />
          <Cloud count={5} radius={20} />
          <TrackballControls noZoom={true} />
        </Canvas>
      </section>
    </motion.div>
  );
};
export default Profile;
