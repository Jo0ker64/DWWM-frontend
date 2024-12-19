import * as THREE from 'three';

const width = window.innerWidth, height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../assets/images/1.JPG'); // Modifier le chemin pour votre image

const geometry = new THREE.SphereGeometry(0.4, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

let mouseDown = false;
let lastMouseX = 0;
let lastMouseY = 0;
let deltaX = 0;
let deltaY = 0;
let rotationX = 0;
let rotationY = 0;

function onMouseDown(event) {
    mouseDown = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
}

function onMouseUp(event) {
    mouseDown = false;
}

function onMouseMove(event) {
    if (mouseDown) {
        deltaX = event.clientX - lastMouseX;
        deltaY = event.clientY - lastMouseY;

        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
    }
}

window.addEventListener('mousedown', onMouseDown, false);
window.addEventListener('mouseup', onMouseUp, false);
window.addEventListener('mousemove', onMouseMove, false);

function animate(time) {
    rotationX += deltaY * 0.01;
    rotationY += deltaX * 0.01;

    mesh.rotation.x += rotationX;
    mesh.rotation.y += rotationY;

    rotationX *= 0.05;
    rotationY *= 0.05;

    renderer.render(scene, camera);

    deltaX = 0.1;
    deltaY = 0.1;
}

requestAnimationFrame(animate);
