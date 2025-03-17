import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";
import { Group } from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/loaders/GLTFLoader.js";

//Adding Destroyer as a model into our story. Destroyer cruiser could also annihalate stars and planets
//https://sketchfab.com/3d-models/destructor-pesado-imperial-isd-1-9f33995184d44b23a9e954482d277b40
const destroyer= new Group();//defined destroyer as group so we can export it.
const loader = new GLTFLoader();
loader.load(
	'./models/destroyer/scene.gltf',
	function ( gltf ) {

    let obj = gltf.scene;
    
    destroyer.add(obj);
	},

	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
  
	function ( error ) {

		console.log( 'An error happened', error );

	}
);
export { destroyer }
export default destroyer;
