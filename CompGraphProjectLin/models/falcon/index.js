import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";
import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";

//Adding Falcon as a model into our story, he is the protagonist and has stolen an item from the imperial destroyer and is returning it to earth. 
//https://sketchfab.com/3d-models/star-wars-halcon-milenario-d2be38faf4124fb9839853bedce5bcce
const falcon= new Group(); //defined falcon as group so we can export it.
const loader = new GLTFLoader();
loader.load(
	'./models/falcon/scene.gltf',
	function ( gltf ) {
    let obj = gltf.scene;
    falcon.add(obj);
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {

		console.log( 'An error happened', error );

	}
  
);
export { falcon }
export default falcon;
