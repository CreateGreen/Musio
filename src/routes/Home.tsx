import './Home.css';
import {useRef,useMemo} from 'react';
import {Canvas,useFrame,useLoader,useThree} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import vertexShader from '../glsl/vertex';
import fragmentShader from '../glsl/fragment';
import * as THREE from 'three';
import { ShaderMaterial, TextureLoader } from 'three';
import image from '../img/test3.jpg'
import Hometext from "../components/Hometext";





export default function Home() {
  
  const Back=()=>{
    const mesh =useRef<ShaderMaterial | null>(null);
    const {size} =useThree();
    const background = useLoader(TextureLoader,image)
    const uniforms=useMemo(
      ()=>({
      uTime:{
        value:0.0
      }, 
      uTexture:{
        value:background
      },
      

    }),[]);

    useFrame((state)=>{
      const {clock} =state;
      if(!mesh.current){
        return;
      }
      mesh.current.uniforms.uTime.value = clock.getElapsedTime();
    });

    return(

      <mesh scale={[1,1,1]}
      
  
      >
        <planeGeometry args={[size.width,size.height,10,5]}/>
        <shaderMaterial 
        ref={mesh}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      
        // wireframe={true}
        // side={THREE.DoubleSide}
        
        />
      </mesh>
    )


  };




  
  return (
    <>
      <div className="home">
        <div className="home_text">
          <Hometext />
        </div>
        <div className="home_canvas">
           <Canvas 
            orthographic={true}
          
            dpr={window.devicePixelRatio}
            >
            
              <Back />
            </Canvas>

        </div>
        

      </div>
    </>
  );
}
