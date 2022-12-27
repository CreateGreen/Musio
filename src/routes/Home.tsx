import './Home.css';
import {useRef,useMemo} from 'react';
import {Canvas,useFrame,useLoader} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import vertexShader from '../glsl/vertex';
import fragmentShader from '../glsl/fragment';
import * as THREE from 'three';
import { ShaderMaterial, TextureLoader } from 'three';
import image from '../../public/back1.png'





export default function Home() {

  const Back=()=>{
    const mesh =useRef<ShaderMaterial | null>(null);
    const background = useLoader(TextureLoader,image)
    const uniforms=useMemo(
      ()=>({
      uTexture:{
        value:background
      },
      uTime:{
        value:0.0
      },

    }),[]);

    useFrame((state)=>{
      const {clock} =state;
      if(!mesh.current){
        return;
      }
      mesh.current.uniforms.uTime.value = state.clock.getElapsedTime();
    });

    return(

      <mesh
      
      position={[0,0,0]}
      >
        <planeGeometry args={[1,1,32,32]}/>
        <shaderMaterial 
        ref={mesh}
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
