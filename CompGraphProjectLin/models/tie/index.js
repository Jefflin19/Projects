
import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";

//Adding Tie fighter as a model into our story, it is part of the empire and is trying to destroy the millenium Falcon after it stole something from the Destroyer. 
//https://sketchfab.com/3d-models/3d-tie-fighter-star-wars-model-5375de94c2484ab0b2a2bd75aa63c2b4
const tie = new Group(); //defined tie as group so we can export it.

const loader = new GLTFLoader();
//Modified phong model
//The original tie fighter was very dark(black) so it was hard to see it in the galaxy, we brightened up the color for it to be more observable. 

function vertexShader() {
  return `
  
varying vec3 normalInterp; //normal
varying vec3 vertPos; //vertex positions
  
  uniform float Ka;   // Ambient reflection coefficient
  uniform float Kd;   // Diffuse reflection coefficient
  uniform float Ks;   // Specular reflection coefficient
  uniform float shininessVal; // Shininess


  uniform vec3 ambientColor;
  uniform vec3 diffuseColor;
  uniform vec3 specularColor;
  uniform vec3 lightPos; 
  varying vec4 color; 

  void main(){ 
    vec4 vertPos4 = modelViewMatrix * vec4(position, 1.0); 
    vertPos = vertPos4.xyz;
    normalInterp = normalMatrix * normal;
    gl_Position = projectionMatrix * vertPos4;
vec3 lightPosition = (modelViewMatrix * vec4(lightPos, 1.0)).xyz; 

    vec3 N = normalize(normalInterp);
    vec3 L = normalize(lightPos - vertPos); 
    float lambertian = max(dot(N, L), 0.0);
    float specular = 0.0;
    if(lambertian > 0.0) {      

vec3 V = normalize(-vertPos); // Vector to viewer
      vec3 H = normalize(L+V); 
      float specAngle = max(dot(N, H), 0.0); 
      specular = pow(specAngle, shininessVal);
    }
    color = vec4(Ka * ambientColor +
                 Kd * lambertian * diffuseColor +
                 Ks * specular * specularColor, 1.0);
  }
  `;
}

function fragmentShader() {
  return `
  precision mediump float; //highp(high precision); mediump (medium precision) and lowp (low precision)
  varying vec4 color;
  void main() {
    gl_FragColor = color;
  }
  `;
}

//Phong model starts

//values are adjusted to make tie fighter a bright color; more visible in the scene Black--> White (assignment 3)
let material =  new THREE.ShaderMaterial({
  vertexShader: vertexShader(),
  fragmentShader: fragmentShader(),
  uniforms: {
		Ka: { value: 0.1 }, // Ambient reflection coefficient
		Kd: { value: 0.5 }, // Diffuse reflection coefficient
    Ks: { value: 0.9 }, // Specular reflection coefficient
    shininessVal: {value: 5}, // Shininess
    ambientColor: {value: new THREE.Vector3(1,1,1)}, // ambient color
    diffuseColor: {value: new THREE.Vector3(1,1,1)}, // diffuse color
    specularColor: {value: new THREE.Vector3(1,1,1)}, // specular color
    lightPos: {value: new THREE.Vector3(0,1,1)} // light position
	}
});

//Phong model ends

loader.load(
	'./models/tie/scene.gltf',
	function ( gltf ) {
    let obj = gltf.scene;
    console.log(obj);
    console.log(gltf);
    obj.traverse((child) => {
      console.log(child);
      if (child.isMesh) child.material = material; 
    });

    tie.add(obj);
	},

	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},

	function ( error ) {

		console.log( 'An error happened', error );

	}
);

export { tie }
export default tie;