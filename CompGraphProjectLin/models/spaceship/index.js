import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";
import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";

//Adding Spaceship as a model into our story, it is part of the ally group and protects earth. 
//https://sketchfab.com/3d-models/spaceship-70e786969e70447c86bc4168df8ccbcd#download
const spaceship = new Group(); //defined spaceship as group so we can export it.
const loader = new GLTFLoader();

//Change the color/brightness of the Spaceship with the Phong Model 
function vertexShader() {
  return `

  varying vec3 normalInterp; //normal
  varying vec3 vertPos; //vertex positions
  
  //for texturing
  varying vec2 vUv; // pass uv to fragment shader using this variable
  
  uniform float Ka;   // Ambient reflection coefficient
  uniform float Kd;   // Diffuse reflection coefficient
  uniform float Ks;   // Specular reflection coefficient
  uniform float shininessVal; // Shininess
 
 
 // Material color
  uniform vec3 ambientColor;
  uniform vec3 diffuseColor;
  uniform vec3 specularColor;
  uniform vec3 lightPos; // Light position
  varying vec4 color;

  void main(){
    //for texturing
    vUv = uv;
    
    vec4 vertPos4 = modelViewMatrix * vec4(position, 1.0);
    vertPos = vertPos4.xyz;
    normalInterp = normalMatrix * normal;
    gl_Position = projectionMatrix * vertPos4;
    vec3 lightPosition = (modelViewMatrix * vec4(lightPos, 1.0)).xyz; // lightPos is the position of the light in (x,y,z)
   
    vec3 N = normalize(normalInterp);
    
    vec3 L = normalize(lightPos - vertPos);
    
    float lambertian = max(dot(N, L), 0.0);
    float specular = 0.0;
    if(lambertian > 0.0) {      

      vec3 V = normalize(-vertPos); // Vector to viewer
      vec3 H = normalize(L+V); // halfway vector, no reflection in Blinn-phong
      
      float specAngle = max(dot(N, H), 0.0); 
      
      specular = pow(specAngle, shininessVal);
    }
    
    color = vec4(Ka * ambientColor +
                 Kd * lambertian * diffuseColor +
                 Ks * specular * specularColor, 1.0);
  }
  `;
}

//Added two pictures for textures, then applied the two jpg to the spaceship. 
function fragmentShader() {
  return `
  // precision mediump float;
  #ifdef GL_ES
  precision highp float; //highp(high precision); mediump (medium precision) and lowp (low precision)
  #endif
  
  //for texturing   
  uniform sampler2D u_image0;
  uniform sampler2D u_image1;
  varying vec2 vUv;
  varying vec4 color;
  void main() {
    vec4 Ca = texture2D(u_image0, vUv); // get color texture from ripple
    vec4 Cb = texture2D(u_image1, vUv); // get color texture from bright

    vec4 mix_c = Cb + color * Cb.a;
    
    gl_FragColor = vec4( mix( Ca.rgb, mix_c.xyz, Cb.a ), 1.0 ); //blending


  }
  `;
}

//Phong Model starts (assignment 3)
const tLoader = new THREE.TextureLoader();

//Values are adjusted to better accomodate multitextured spaceship model
let material =  new THREE.ShaderMaterial({
  vertexShader: vertexShader(),
  fragmentShader: fragmentShader(),
  uniforms: {
		Ka: { value: 0.1 }, // Ambient reflection coefficient
		Kd: { value: 0.5 }, // Diffuse reflection coefficient
    Ks: { value: 0.9 }, // Specular reflection coefficient
    shininessVal: {value: 200.0}, // Shininess
    ambientColor: {value: new THREE.Vector3(0,0,1)}, // ambient color
    diffuseColor: {value: new THREE.Vector3(0,1,0)}, // diffuse color
    specularColor: {value: new THREE.Vector3(0,1,0)}, // specular color
    lightPos: {value: new THREE.Vector3(0,1,1)}, // light position
    
    //Multitexturing (assignment 5)
    u_image0: { value: tLoader.load( './models/spaceship/textures/ripple.jpg' ) }, //Ripple texture
    u_image1: { value: tLoader.load( './models/spaceship/textures/bright.jpg' ) } //Brighter color scheme texture to make ship more visible

	},
});
//Phong model ends


loader.load(
	'./models/spaceship/scene.gltf',
	function ( gltf ) {
    
    let obj = gltf.scene;
    console.log(obj);
    console.log(gltf);
    obj.traverse((child) => {
      console.log(child);
      if (child.isMesh) child.material = material; 
    });
    
    spaceship.add(obj);
	},

	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},

	function ( error ) {

		console.log( 'An error happened', error );

	}
);

export { spaceship }
export default spaceship;
