import * as THREE from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
import scene from './scene.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.122.0/examples/jsm/controls/OrbitControls.js";
import { FirstPersonControls } from "https://cdn.jsdelivr.net/npm/three@0.122/examples/jsm/controls/FirstPersonControls.js";

//creating and positioning a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(25, 15, 25);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// diable depth testing
//renderer.context.disable(renderer.context.DEPTH_TEST);

document.body.appendChild(renderer.domElement);

//Music
//adding action chase music to the model, have to click with the mouse to turn it on, click again to pause. 
var listener, sound;
var soundFlip = 0;
renderer.domElement.addEventListener('click', function () {
  if (typeof listener == "undefined") {
    listener = new THREE.AudioListener();
    camera.add(listener);
    sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('chase.mp3', function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.1); //volume was too loud so we lowered the volume
      sound.play();
    });
  } else {
    if (soundFlip == 0) {
      sound.pause();
      soundFlip = 1;
    } else {
      sound.play();
      soundFlip = 0;
    }
  }
});

//Cameras 
//Adding in orbital camera (secondary camera) Better for full view of scene-
//const controls = new OrbitControls(camera, renderer.domElement);

// Adding in First person camera (main camera) Better for following the action shots up close
const controls = new FirstPersonControls(camera,  renderer.domElement);
controls.lookSpeed = .1; //camera speed when mouse touches left, right, top or bottom of screen. 
controls.movementSpeed = 75; //movement speed when clicking mouse or when using the keyboard to go forward, back, left or right
const clock = new THREE.Clock(true);

//Cubic Bezier curves
//EARTH AND SPACESHIP
// 2 new bezier curve for the Earth and spaceship rotation around the sun (1,2,3,4)(5,6,7,8)
const curve1 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -80, 0, 40),
  new THREE.Vector3( -50, 0, 71),
  new THREE.Vector3( 0, 0, 100),
  new THREE.Vector3( 30, 0, 75)
);

const curve2 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 30, 0, 75),
  new THREE.Vector3( 65, 0, 42),
  new THREE.Vector3( 100, 0, 9),
  new THREE.Vector3( 80, 0, -40)
);

const curve3 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 80, 0, -40),
  new THREE.Vector3( 60, 0, -80),
  new THREE.Vector3( 0, 0, -100),
  new THREE.Vector3( -30, 0, -75)
);

const curve4 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -30, 0, -75),
  new THREE.Vector3( -75, 0, -30),
  new THREE.Vector3( -100, 0, 0),
  new THREE.Vector3( -80, 0, 40)
);

const curve5 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -80, 0, 40),
  new THREE.Vector3( -50, 0, 71),
  new THREE.Vector3( 0, 0, 100),
  new THREE.Vector3( 30, 0, 75)
);

const curve6 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 30, 0, 75),
  new THREE.Vector3( 65, 0, 42),
  new THREE.Vector3( 100, 0, 9),
  new THREE.Vector3( 80, 0, -40)
);

const curve7 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 80, 0, -40),
  new THREE.Vector3( 60, 0, -80),
  new THREE.Vector3( 0, 0, -100),
  new THREE.Vector3( -30, 0, -75)
);

const curve8 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -30, 0, -75),
  new THREE.Vector3( -75, 0, -30),
  new THREE.Vector3( -100, 0, 0),
  new THREE.Vector3( -80, 0, 40)
);

//FALCON
// The path for the Falcon, starting near earth and going to the deathstar/destroyer. Takes a wide curve path (Curve 9-10-11-12) to be more stealthy, slows down near the enemy ships to be less noticable. 
const curve9 = new THREE.CubicBezierCurve3(
  new THREE.Vector3(  -80, 0,   40),
  new THREE.Vector3( -100, 0, -100),
  new THREE.Vector3( -150, 0, -200),
  new THREE.Vector3( -200, 0, -295)
);

const curve10 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -200, 0, -295),
  new THREE.Vector3( -250, 0, -400),
  new THREE.Vector3( -270, 0, -450),
  new THREE.Vector3( -300, 0, -500)
);

const curve11 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -300, 0, -500),
  new THREE.Vector3( -250, 0, -600),
  new THREE.Vector3( -150, 0, -700),
  new THREE.Vector3( -100, 0, -750)
);

const curve12 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -100, 0, -750),
  new THREE.Vector3(  -70, 0, -850),
  new THREE.Vector3(  -60, 0, -900),
  new THREE.Vector3(  -50, 0, -900)
);
// The bezier curve from near the enemy back to earth's safety. Lots of zig zag (left and right / up and down) to evade the tie fighter's attack, slows down to get behind the tie fighter to shoot back. Ends up back near Earth. 
const curve13 = new THREE.CubicBezierCurve3(
  new THREE.Vector3(  -50, 0, -900),
  new THREE.Vector3(   30,20, -775),
  new THREE.Vector3(  -15,40, -700),
  new THREE.Vector3(   0, 30, -625)
);

const curve14 = new THREE.CubicBezierCurve3(
  new THREE.Vector3(   0, 30, -625),
  new THREE.Vector3( -30,-20, -555),
  new THREE.Vector3(  15,-50, -470),
  new THREE.Vector3( -30,-20, -400)
);

const curve15 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -30,-20, -400),
  new THREE.Vector3( -40,-10, -350),
  new THREE.Vector3( -10,-10, -260),
  new THREE.Vector3( -20, 30, -220)
);

const curve16 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( -20, 30, -220),
  new THREE.Vector3( -60, 30, -100),
  new THREE.Vector3( -80, 20,  -25),
  new THREE.Vector3( -65,  0,   35)
);

//TIE FIGHTER
//New bezier curve, tie is just stationary, waiting to deployed at a moments notice
const curve17 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990)
);

const curve18 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990)
);

const curve19 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990)
);

const curve20 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 0, -10, -990)
);
//Tie fighter tries to chase the falcon, but somehow gets in front and is being shot at. Then, it sees Earth and its defensive ship and flees back to the destroyer and docks there. 
const curve21 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 0, -10, -990),
  new THREE.Vector3( 30, 20, -800),
  new THREE.Vector3( -15, 40, -730),
  new THREE.Vector3( 0, 30, -645)
);

const curve22 = new THREE.CubicBezierCurve3(
  new THREE.Vector3(  0,  30, -645),
  new THREE.Vector3(-80, -20, -575),
  new THREE.Vector3( 40, -50, -500),
  new THREE.Vector3(-60, -20, -425)
);

const curve23 = new THREE.CubicBezierCurve3(
  new THREE.Vector3(-60, -20, -425),
  new THREE.Vector3(-80, -10, -300),
  new THREE.Vector3(  0,   0, -245),
  new THREE.Vector3( 30,  30, -215)
);

const curve24 = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 30,  30,  -215),
  new THREE.Vector3( 40, 30,  -300),
  new THREE.Vector3( 50, 30,  -500),
  new THREE.Vector3(  0, -10,  -990)
);

//earth and spaceship points
const points1 = curve1.getPoints(50);
const points2 = curve2.getPoints(50);
const points3 = curve3.getPoints(50);
const points4 = curve4.getPoints(50);
const points5 = curve5.getPoints(50);
const points6 = curve6.getPoints(50);
const points7 = curve7.getPoints(50);
const points8 = curve8.getPoints(50);

//Falcoln points
const points9 = curve9.getPoints(50);
const points10 = curve10.getPoints(50);
const points11 = curve11.getPoints(50);
const points12 = curve12.getPoints(50);
const points13 = curve13.getPoints(50);
const points14 = curve14.getPoints(50);
const points15 = curve15.getPoints(50);
const points16 = curve16.getPoints(50);

//tie fighter points
const points17 = curve17.getPoints(50);
const points18 = curve18.getPoints(50);
const points19 = curve19.getPoints(50);
const points20 = curve20.getPoints(50);
const points21 = curve21.getPoints(50);
const points22 = curve22.getPoints(50);
const points23 = curve23.getPoints(50);
const points24 = curve24.getPoints(50);


const allPoints1 = points1.concat(points2, points3, points4, points5, points6, points7, points8); //Earth and Spaceship points
const allPoints2 = points9.concat(points10, points11, points12, points13, points14, points15, points16); //Falcon points
const allPoints3 = points17.concat(points18, points19, points20, points21, points22, points23, points24);// Tie fighter points

let count = 0;
let start, previousTimeStamp;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  
  if (elapsed > 60) {
    start = timestamp;
    scene.children[1].position.set(allPoints1[count].x, allPoints1[count].y, allPoints1[count].z); //adds the path for the earth
    scene.children[3].position.set(allPoints1[count].x, allPoints1[count].y, allPoints1[count].z); //adds the path for the spaceship
    scene.children[6].position.set(allPoints2[count].x, allPoints2[count].y, allPoints2[count].z); //adds the path for the falcon
    scene.children[5].position.set(allPoints3[count].x, allPoints3[count].y, allPoints3[count].z); //adds the path for the tie fighter
  count = count + 1;
    // roll back to the beginning of the points array once counter reach size limit, 50 points for each curve, with 8 points for each moving object. Loops rather than stops after scene ends
    if(count >= 404){
      count = 0;
  }
  }
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  //Comment out 1 if you want first person, comment out 2 if you want orbital camera
    //controls.update(); //orbital camera (1)
    controls.update(clock.getDelta() ); // FirstPersonControls require a clock to function (2)
}

render();
