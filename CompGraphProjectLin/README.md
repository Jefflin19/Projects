CIS454 Final Project: Recon Mission

Authors

Jefferey LinData Science Graduate ProgramCIS454 – Computer GraphicsNatick, USAID: 02142963

Ronald BrodeurComputer Science UndergraduateCIS454 – Computer GraphicsFall River, USAID: 01813534

Project Overview

This project showcases the application of key techniques learned throughout the CIS454 course by creating a unique, interactive 3D story. We developed a Star Wars-themed action scene using computer graphics techniques such as Bezier curves, translations, audio, multitexturing, and more. The final product is an immersive space scene viewed from a first-person perspective.

Keywords

Bezier, Phong Model, Multitexture, 3D Transform

Introduction

During our brainstorming process, we explored multiple ideas but faced challenges such as background model import issues or lack of a cohesive story. After discussion with Professor Fang, we decided to create a Star Wars animation as a structured way to implement our computer graphics knowledge.

Storyline

The animation follows the Millennium Falcon on a reconnaissance mission from Earth to investigate reports of an unidentified structure across the galaxy. Upon discovering the Death Star, the Falcon quickly returns to Earth to report its findings. The Empire, in response, sends a TIE fighter to intercept. A battle ensues until the Falcon nears Earth, where an allied ship is stationed. Outnumbered, the TIE fighter retreats back to the Death Star.

Computer Graphics Techniques

1. Importing 3D Models

We imported eight models from Sketchfab, including:

Death Star

Star Destroyer

Millennium Falcon

TIE Fighter

Space Model

Sun

Earth

Allied Spaceship

Each model was downloaded in glTF format and integrated into the project. The index.js file was used to set up model rendering and import them into the scene.

2. 3D Model Transformations

We applied scaling, translation, and rotation to adjust model sizes and positioning:

Scaling Adjustments

Model

Scale Factor

Space

400x

Earth

5x

Sun

3.5x

Star Destroyer

0.03x

TIE Fighter

1.5x

Millennium Falcon

0.025x

Translation Example:

model.translate.set(x, y, z);
// -x = left, x = right
// -y = down, y = up
// -z = towards camera, z = away

Rotation Example (Earth Rotation by 20 Degrees):

let rotationAngle = Math.PI / 9; // ~20 degrees
model.rotation.set(rotationAngle, 0, 0);

3. Color Adjustments and Phong Model

To improve visibility, we modified reflectiveness using the Phong reflection model in the index.js file:

vertexShader: vertexShader(),
fragmentShader: fragmentShader(),
uniforms: {
  Ka: { value: 0.1 }, // Ambient reflection coefficient
  Kd: { value: 0.5 }, // Diffuse reflection coefficient
  Ks: { value: 0.9 }, // Specular reflection coefficient
  shininessVal: { value: 5 }, // Shininess
  ambientColor: { value: new THREE.Vector3(1,1,1) },
  diffuseColor: { value: new THREE.Vector3(1,1,1) },
  specularColor: { value: new THREE.Vector3(1,1,1) }
}

This ensured a bright white appearance for moving models such as the TIE fighter and spaceship.

4. Camera and Depth Testing

Two camera types were implemented:

Orbital Camera: Used for an overview of the scene.

First-Person Camera: Allows real-time tracking of moving models.

First-Person Camera Controls:

lookSpeed = 0.1; // Smooth transition
movementSpeed = 75; // Adjusts speed of movement

5. Bezier Curves, Texturing, and Music

Multitexturing: Applied to the spaceship model for enhanced visibility.

Bezier Curves: Used for smooth pathing of the ships.

Audio Integration: Background music and sound effects were added for immersion.

u_image0: { value: tLoader.load('texture1.png') },
u_image1: { value: tLoader.load('texture2.png') },

Conclusion

This project effectively demonstrates computer graphics principles through an engaging Star Wars-inspired action sequence. By implementing advanced 3D transformations, shading, camera controls, and texturing, we successfully created an interactive and visually appealing space battle.

Future Improvements

Enhanced AI-driven enemy movements.

More dynamic lighting effects.

Interactive user controls for ship navigation.

We hope this project serves as an exciting example of how computer graphics techniques can be used to create immersive storytelling experiences. 🚀

