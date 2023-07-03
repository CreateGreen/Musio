# MUSIO <br/>
#### https://creategreen.github.io/Musio/<br/><br/>

## Portfolio Site 

- 제목: Musio 
- 목적: 제가 진행했던 토이 프로젝트를 웹에서 보여주기 위해 개발하였습니다.
- 기간: 2023/01 ~ 진행중 
- 인원: 개인


## Stack

- 언어
    - JavaScript
    - TypeScript
    
- 프레임워크
    - React
    
- 툴킷/라이브러리
    - GSAP
    - THREE.js(R3F)
    - Framer Motion


## Preview 
- Main page 
<img src="https://user-images.githubusercontent.com/91831423/226843808-f3eacddd-d958-40b5-9131-14fa1ed98246.gif" >

- Project page  
<img src="https://user-images.githubusercontent.com/91831423/226844027-ddf4bb02-cabb-41ad-9482-a1a6a63c99de.gif" >


- Profile page 
<img src="https://user-images.githubusercontent.com/91831423/226844313-578afade-13d5-4270-a94e-f62201df9967.gif">



## Learned

1. React 기초 다지기 - DOM 의 작동방식과 렌더링 상태를 확실히 이해해야 hook을 제대로 사용할 수 있다.

2. Typescript 는 실시간 디버깅을 하기 위함, 고로 정확한 사용법을 알아야 추후에 버그 발생 가능성을 줄일 수 있다. ( 가량 any 타입을 남발한다던지 하는 잘못된 코드 작성)

## Have to

1. 뒤로가기 버튼
2. page transition 이 부드럽게 만들기 (정안되면 화면을 가리면서 나오는식으로 바꿔줘야함)
3. profile page 부분 contents 채우기 
4. home 화면 mouse click 유도 text 필요

## Solved

- 초기 로딩 시간 관련 [https://www.notion.so/2df19fb700cc4504867286fdd4cefb25?pvs=4](https://alluring-stilton-b73.notion.site/2df19fb700cc4504867286fdd4cefb25?pvs=4)<br/>

- function mutiple call 관련 문제로 인한 초기 로딩 지연 https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures <br/>

- scrollbar style 적용 https://alluring-stilton-b73.notion.site/acb94156afcc487aba36df65210b29a2?pvs=4 <br/>

- home 화면 side text 위치 문제(onhover 가 화면을 줄이면 인식x) main 하고 side text가 겹쳐서 화면을 줄일 시 main text area 가 side text의 일부분을 덮어 마우스 hover event 가 적용이 안되었음 , z- index 값으로 해결

--------------
#### References
##### Study webGL
https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/ <br/>
https://codesandbox.io/s/03-adding-the-texture-refnp?from-embed=&file=/src/gl/glsl/vertex.glsl<br/>
https://tympanus.net/codrops/2020/03/17/create-a-wave-motion-effect-on-an-image-with-three-js/<br/>
https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures<br/>
https://velog.io/@kimbyungchan/react-threejs-shader-tutorial<br/>
https://heinleinsgame.tistory.com/8<br/>

##### svg animation<br/>
https://ordinary-code.tistory.com/25 <br/>
https://blog.avada.io/css/text-animations<br/>

##### hometext ex <br/>
https://codepen.io/tutsplus/embed/vdexgK?height=316&theme-id=0&default-tab=result <br/>

##### R3F doc<br/>
https://docs.pmnd.rs/react-three-fiber/api/canvas<br/>
https://docs.pmnd.rs/react-three-fiber/getting-started/examples<br/>
https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance<br/>
https://geekyants.com/blog/introduction-to-react-three-fiber/<br/>

##### three +ts shader bg<br/>
https://dev.to/noprod/create-a-background-with-glsl-shader-threejs-typescript-i31<br/>

##### three+react road uniform texture<br/>
https://velog.io/@kimbyungchan/react-threejs-shader-tutorial<br/>
##### three.js background ex<br/>
https://codepen.io/ykob/pen/BQmLeK<br/>
https://www.awwwards.com/awwwards/collections/three-js/<br/>
https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/<br/>
https://adamkarlsten.com/blog/creating-shader-backgrounds/<br/>
https://tympanus.net/codrops/2019/05/22/creating-grid-to-fullscreen-animations-with-three-js/<br/>
https://varun.ca/modular-webgl/<br/>
https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/<br/>

##### shader to background error solve<br/>
https://github.com/pmndrs/react-three-fiber/issues/79<br/>
https://meetup.nhncloud.com/posts/297<br/>
https://tsh.io/blog/react-three-fiber/<br/>
https://adamkarlsten.com/blog/creating-shader-backgrounds/<br/>
