import { useFrame } from '@react-three/fiber';


export const Mousetrack =()=>{
    
    useFrame(({mouse})=>{
        const {} = mouse;

    })

    
        let mouseY=0;
        let mouseX =0;
        

    return{
        default:{
            opacity:1,
            height:10,
            width:10,
            fontsize:"20px",
            backgroundColor:"#212129",
            x:mouseX,
            y:mouseY,
            transition:{
                type:"spring",
                mass:0.6,
            },
        },


    }
};

export const Spring={
    type:"spring",
    stiffness:500,
    damping:28,
}

