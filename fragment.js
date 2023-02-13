const fragmentShader =`


precision mediump float;

varying vec2 vUv;
varying float vWave;
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform sampler2D uDisp;
uniform float uClickState;
 

void main() {
  float wave = vWave * 0.25;
  vec3 texture1 = texture2D(uTexture1, vUv + wave).rgb;
  
  vec3 texture2 = texture2D(uTexture2, vUv + wave).rgb;
  vec3 disp = texture2D(uDisp, vUv+wave).rgb;

  float pct = clamp((disp.g - uClickState)*100. , 0. , 1.);
  vec3 color = mix(texture1 ,texture2, pct);
  
  gl_FragColor = vec4(color , 1.);
}
` 
export default fragmentShader;
