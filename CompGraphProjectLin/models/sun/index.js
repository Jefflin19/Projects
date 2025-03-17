import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";
import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";

//Adding Sun as a model into our story, a stationary model that the earth orbits around.  
//https://sketchfab.com/3d-models/sun-9ef1c68fbb944147bcfcc891d3912645
const sun = new Group(); //defined sun as group so we can export it.
const loader = new GLTFLoader();
loader.load(
	'./models/sun/scene.gltf',
	function ( gltf ) {
    let obj = gltf.scene;
    
 
    sun.add(obj);
	},

	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},

	function ( error ) {

		console.log( 'An error happened', error );

	}
);

export { sun }
export default sun;
