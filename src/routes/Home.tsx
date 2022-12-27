import './Home.css';
import {useRef,useMemo} from 'react';
import {Canvas,useFrame,useLoader} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import vertexShader from '../glsl/vertex';
import fragmentShader from '../glsl/fragment';
import * as THREE from 'three';
import { ShaderMaterial, TextureLoader } from 'three';






export default function Home() {
  const w = window.innerWidth;
  const h= window.innerHeight;

  const Back=()=>{
    const mesh =useRef<ShaderMaterial | null>(null);
    
    const uniforms=useMemo(
      ()=>({
      uTexture:{
        value:new TextureLoader().load('../../public/back1.png')
      },
      uTime:{
        value:0.0
      },

    }),[]);

    useFrame((state)=>{
      const {clock} =state;
      mesh.current.uniforms.uTime.value = state.clock.getElapsedTime();
    });

    return(

      <mesh
      ref={mesh}
      position={[0,0,0]}
      >
        <planeGeometry args={[1,1,32,32]}/>
        <shaderMaterial 
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
        side={THREE.DoubleSide}
        
        />
      </mesh>
    )


  };




  
  return (
    <>
      <div className="home">
        <Canvas camera={{fov:10}}>
          <OrbitControls />
          
          <Back />
          
        </Canvas>
      </div>
    </>
  );
}
