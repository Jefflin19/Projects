import * as THREE from "https://cdn.skypack.dev/three@v0.122.0/build/three.module.js";
//imported all the models from their individual folders
import space from '../models/space/index.js';
import earth from '../models/earth/index.js';
import sun from '../models/sun/index.js';
import spaceship from '../models/spaceship/index.js';
import destroyer from '../models/destroyer/index.js';
import tie from '../models/tie/index.js';
import falcon from '../models/falcon/index.js';
import deathstar from '../models/deathstar/index.js';

const scene = new THREE.Scene();


//Adding the tranformations (translate and rotate) (assignment 2) that will be applied to individual models
var translating = new THREE.Matrix4();
var rotating = new THREE.Matrix4();

//(X) = what children number each model would be when/if added to the bezier curve in main.js

//(0)space (setting)
scene.add(space);
space.scale.set(400.0,400.0,400.0); //scaling the space setting 400x larger than original so it fits more porportionally to the other models. 
//translating space -750 units left, -550 units up and 400 units away from origin
translating.set(  1,   0,  0,  -750,
                  0,   1,  0,  -550, 
                  0,   0,  1,  400,
                  0,   0,  0,  1  );
space.applyMatrix4(translating);

//(1)Earth - Sanctuary/ Safety (ally)
scene.add(earth)
earth.scale.set(5.0,5.0,5.0); //scaling the earth 5x original size for it to be more observable when looking at whole picture.
 // rotating the earth around 20 degrees to be as realistic as possible. Having the north pole be on top. (actual is 23.5 degrees)
rotating.set(  Math.cos(Math.PI / 9),  Math.sin(Math.PI / 9),  0,  0, //Math.pi= 180 degrees, pi/9= 20 degrees 
              -Math.sin(Math.PI / 9),   Math.cos(Math.PI / 9),  0,  0,
              0,   0,  1,  0,
              0,   0,  0,  1  ); 
earth.applyMatrix4(rotating);

//(2)sun
scene.add(sun);
//scaling the sun 3.5x original size
sun.scale.set(3.5,3.5,3.5);

//(3)spaceship - Protects the earth (ally)
scene.add(spaceship);

//(4)destroyer ( part of the empire-enemy)
scene.add(destroyer);
//scaling the destroyer to .03x original size for not be bigger than the whole galaxy, but still observable
destroyer.scale.set(0.03,0.03,0.03);
//translating the destroyer up 10 units up and 1000 units away from the sun for it to be far away from earth and allowing the tie fighter/falcon to have a origin to destination path. 
translating.set(  1,   0,  0,  0,
                  0,   1,  0,  10,
                  0,   0,  1,  -1000,
                  0,   0,  0,  1  );
destroyer.applyMatrix4(translating);

//(5)tie fighter (empire/enemy) 
scene.add(tie);
//Scaled the tie fighter 1.5x original size for it be more observable
tie.scale.set(1.5,1.5,1.5);


//(6)falcon (ally)
scene.add(falcon);
//Scaled the falcon to .025x original size so its not bigger than the entire setting but still easily observable. 
falcon.scale.set(0.025,0.025,0.025);



//(7)deathstar (enemy/empire)
scene.add(deathstar);
//Scaled the Deathstar .05x original size for more realism and so it wasnt bigger than the entire setting
deathstar.scale.set(0.05,0.05,0.05);
//translating the deathstar 1050 units away from the sun for it to be far away from earth and allowing the tie fighter/falcon to have a long origin to destination path. 
translating.set(  1,   0,  0,  0,
                  0,   1,  0,  0,
                  0,   0,  1,  -1050,
                  0,   0,  0,  1  );
deathstar.applyMatrix4(translating);

//directional light with 1.5 intensity
const directionalLight = new THREE.DirectionalLight( 0xffffff,1.5 );
directionalLight.position.z = 1;
scene.add( directionalLight );

export { scene };
export default scene;