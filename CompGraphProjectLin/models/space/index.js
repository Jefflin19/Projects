import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js"; 
import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";

//Adding Space as a setting model into our story
//https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303
const space = new Group(); //defined space as group so we can export it.
const loader = new GLTFLoader();
loader.load(
	'./models/space/scene.gltf',
	function ( gltf ) {
    let obj = gltf.scene;
    
    space.add(obj);
	},
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	function ( error ) {

		console.log( 'An error happened', error );

	}
);
export { space }
export default space;
