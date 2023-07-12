import useMouse from "@react-hook/mouse-position";


export const Mousetrack =(ref:React.MutableRefObject<null>)=>{

    const mouse = useMouse(ref,{
        enterDelay:70,
        leaveDelay:200,
    })

    
    let mouseY=0;
    let mouseX =0;
    if(mouse.clientX!=null){
        mouseX=mouse.clientX;
    }
    if(mouse.clientY!=null){
        mouseY=mouse.clientY;
    }

    return{
        default:{
            opacity:1,
            height:25,
            width:25,
            fontsize:"20px",
            backgroundColor:"#212129",
            x:mouseX,
            y:mouseY,
            transition:{
                type:"spring",
                mass:0.5,
            },   
        },
        change:{
            opacity:1,
            height:25,
            width:25,
            fontsize:"20px",
            backgroundColor:"#ffffff",
            x:mouseX,
            y:mouseY,
            transition:{
                type:"spring",
                mass:0.5,
            },   
        },
    }
};

export const Spring={
    type:"spring",
    stiffness:500,
    damping:10,
}

