import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";
import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";

//Adding Earth as a model into our story, it is the destination for the Millenium Falcon and is sanctuary for our story. 
//https://sketchfab.com/3d-models/earth-f2e03160786c4213b0b137dc3cabe8d1#download
const earth= new Group(); //defined earth as group so we can export it.
const loader = new GLTFLoader();
loader.load(
	'./models/earth/scene.gltf',
	function ( gltf ) {
    let obj = gltf.scene;
    
    earth.add(obj);
	},
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	function ( error ) {

		console.log( 'An error happened', error );

	}
);
export { earth }
export default earth;
