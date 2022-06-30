import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10,6,16,100);

const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0x00ff00);
pointLight.position.set(20,0,0);

scene.add(pointLight);

const ambience = new THREE.AmbientLight(0xe942f5, 0.1);
scene.add(ambience);

const controls = new OrbitControls(camera, renderer.domElement);

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

/*function addCube() {
  const geometry = new THREE.BoxGeometry(3,3,3);
  const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF});
  const cube = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread())


}*/



function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.001;
  torus.rotation.y += 0.0005;
  torus.rotation.z += 0.0001

  controls.update();

  renderer.render(scene,camera);
}

animate()