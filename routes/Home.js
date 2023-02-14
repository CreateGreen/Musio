import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './Home.css';
import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import vertexShader from '../glsl/vertex';
import fragmentShader from '../glsl/fragment';
import { TextureLoader } from 'three';
import image from '../img/test3.jpg';
import afterimg from '../img/test4.jpg';
import noise from '../img/noise4.jpg';
import Hometext from "../components/Hometext";
import { gsap } from 'gsap';
export default function Home() {
    const Back = () => {
        const mesh = useRef(null);
        const { size } = useThree();
        const background = useLoader(TextureLoader, image);
        const afterbackground = useLoader(TextureLoader, afterimg);
        const noiseimg = useLoader(TextureLoader, noise);
        const [click, setclick] = useState(false);
        const transition = () => {
            if (!mesh.current)
                return;
            setclick(!click);
            if (click) {
                gsap.to(mesh.current.uniforms.uClickState, { value: 1 });
            }
            else {
                gsap.to(mesh.current.uniforms.uClickState, { value: 0 });
            }
        };
        const uniforms = useMemo(() => ({
            uTime: {
                value: 0.0
            },
            uTexture1: {
                value: background
            },
            uTexture2: {
                value: afterbackground
            },
            uClickState: {
                value: 1
            },
            uDisp: {
                value: noiseimg
            }
        }), []);
        useFrame((state) => {
            const { clock } = state;
            if (!mesh.current) {
                return;
            }
            mesh.current.uniforms.uTime.value = clock.getElapsedTime();
        });
        return (_jsxs("mesh", { scale: [1, 1, 1], onClick: (e) => transition(), children: [_jsx("planeGeometry", { args: [size.width, size.height, 10, 5] }), _jsx("shaderMaterial", { ref: mesh, fragmentShader: fragmentShader, vertexShader: vertexShader, uniforms: uniforms })] }));
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "home", children: [_jsx("div", { className: "home_text", children: _jsx(Hometext, {}) }), _jsx("div", { className: "home_canvas", children: _jsx(Canvas, { orthographic: true, dpr: window.devicePixelRatio, children: _jsx(Back, {}) }) })] }) }));
}
//# sourceMappingURL=Home.js.map