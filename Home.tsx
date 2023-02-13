import './Home.css';
import {useRef,useMemo,useState} from 'react';
import {Canvas,useFrame,useLoader,useThree} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import vertexShader from './vertex';
import fragmentShader from './fragment';
import * as THREE from 'three';
import { RGBADepthPacking, ShaderMaterial, TextureLoader } from 'three';
import image from './test3.jpg'
import afterimg from './test4.jpg'
import noise from './noise4.jpg'
import Hometext from "./Hometext";
import {gsap} from 'gsap';





export default function Home() {
  
  const Back=()=>{
    const mesh =useRef<ShaderMaterial | null>(null);
    const {size} =useThree();
    const background = useLoader(TextureLoader,image)
    const afterbackground = useLoader(TextureLoader,afterimg)
    const noiseimg = useLoader(TextureLoader,noise)
    const [click,setclick] = useState(false)
    const transition =()=>{
      if(!mesh.current)return
      setclick(!click)
      if(click){
        gsap.to(mesh.current.uniforms.uClickState,{value:1})
      }else{
        gsap.to(mesh.current.uniforms.uClickState,{value:0})
      }
      
      
      
    }
    const uniforms=useMemo(
      ()=>({
      uTime:{
        value:0.0
      }, 
      uTexture1:{
        value:background
      },
      uTexture2:{
        value:afterbackground
      },
      uClickState:{
        value:1
      },
      uDisp:{
        value:noiseimg
      }
      

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
        onClick={(e)=>transition()}

      
  
      >
        
        <planeGeometry args={[size.width,size.height,10,5]}
        />
        
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
