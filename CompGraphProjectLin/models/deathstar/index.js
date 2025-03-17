import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";
import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";

//Adding Deathstar as a model into our story, an stationary model but is a space station that can destroy planets and stars. 
//https://sketchfab.com/3d-models/death-star-star-wars-699e5f635f7a4b21a4c0d2e3f5b68324
const deathstar= new Group(); //defined deathstar as group so we can export it.
const loader = new GLTFLoader();
loader.load(
	'./models/deathstar/scene.gltf',
	function ( gltf ) {
    let obj = gltf.scene;
    
   deathstar.add(obj);
	},
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	function ( error ) {

		console.log( 'An error happened', error );

	}
);
export { deathstar }
export default deathstar;
