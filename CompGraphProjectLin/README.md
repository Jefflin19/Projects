

# **Project Overview**

This project creates a interactive 3D story. I developed a Star Wars-themed action scene using computer graphics techniques such as Bezier curves, translations, audio, multitexturing, and more. The final product is an immersive space scene viewed from a first-person perspective.

## Keywords

Bezier, Phong Model, Multitexture, 3D Transform

##Computer Graphics Techniques

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 1. Importing 3D Models

imported eight models from Sketchfab, including:

Death Star, Star Destroyer, Millennium Falcon, TIE Fighter, Space Model, Sun, Earth, Allied Spaceship

Each model was downloaded in glTF format and integrated into the project. The index.js file was used to set up model rendering and import them into the scene.


### 2. 3D Model Transformations

We applied scaling, translation, and rotation to adjust model sizes and positioning:

Scaling Adjustments

Translation Example:

model.translate.set(x, y, z);
// -x = left, x = right
// -y = down, y = up
// -z = towards camera, z = away

Rotation Example (Earth Rotation by 20 Degrees):

let rotationAngle = Math.PI / 9; // ~20 degrees
model.rotation.set(rotationAngle, 0, 0);


### 3. Color Adjustments and Phong Model

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

### 4. Camera and Depth Testing

Two camera types were implemented:

Orbital Camera: Used for an overview of the scene.

First-Person Camera: Allows real-time tracking of moving models.

First-Person Camera Controls:

lookSpeed = 0.1; // Smooth transition
movementSpeed = 75; // Adjusts speed of movement

### 5. Bezier Curves, Texturing, and Music

Multitexturing: Applied to the spaceship model for enhanced visibility.

Bezier Curves: Used for smooth pathing of the ships.

Audio Integration: Background music and sound effects were added for immersion.

u_image0: { value: tLoader.load('texture1.png') },
u_image1: { value: tLoader.load('texture2.png') },

## Conclusion

This project effectively demonstrates computer graphics principles through an engaging Star Wars-inspired action sequence. By implementing advanced 3D transformations, shading, camera controls, and texturing, we successfully created an interactive and visually appealing space battle.

Future Improvements

Enhanced AI-driven enemy movements.

More dynamic lighting effects.

Interactive user controls for ship navigation.

