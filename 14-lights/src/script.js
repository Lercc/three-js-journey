import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';

/**
 * Base
 */
// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Lights
 */

// AMBIENT LIGTH
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
scene.add(ambientLight);
// debug: ambient light
var ambientLightFolder = gui.addFolder('ambient light');
ambientLightFolder.add(ambientLight, 'visible');
ambientLightFolder.add(ambientLight, 'intensity').min(0).max(1).step(0.0001);

// DIRECTIONAL LIGHT
const directionalLight = new THREE.DirectionalLight('#00fffc', 0.3);
directionalLight.position.set(1, 0.25, 0);
scene.add(directionalLight);
// debug: directional light
var directionalLightfolder = gui.addFolder('directional light');
directionalLightfolder.add(directionalLight, 'visible')
directionalLightfolder.add(directionalLight, 'intensity').min(0).max(1).step(0.0001);
directionalLightfolder.add(directionalLight.position, 'x').min(-3).max(3).step(0.0001);

// HEMISPHERE LIGHT
const hemisphereLight = new THREE.HemisphereLight('#ff0000', '#0000ff', 0.3);
scene.add(hemisphereLight);
// debug: hemisphere light
var hemisphereLightFolder = gui.addFolder('hemisphere light');
hemisphereLightFolder.add(hemisphereLight, 'visible');
hemisphereLightFolder.add(hemisphereLight, 'intensity').min(0).max(1).step(0.0001);

// POINT LIGHT
const pointLight = new THREE.PointLight('#ff9000', 0.5, 10, 2);
pointLight.position.set(1, -0.5, 1);
scene.add(pointLight);
// debug: point light
var pointLightFolder = gui.addFolder('point light');
pointLightFolder.add(pointLight, 'visible');
pointLightFolder.add(pointLight, 'intensity').min(0).max(1).step(0.0001);
pointLightFolder.add(pointLight, 'distance').min(0).max(10).step(0.0001);
pointLightFolder.add(pointLight, 'decay').min(0).max(10).step(0.0001);
pointLightFolder.add(pointLight.position, 'x').min(-3).max(3).step(0.0001).name('position X');
pointLightFolder.add(pointLight.position, 'y').min(-3).max(3).step(0.0001).name('position Y');
pointLightFolder.add(pointLight.position, 'z').min(-3).max(3).step(0.0001).name('position Z');

// RECT AREA LIGHT
const rectAreaLight = new THREE.RectAreaLight('#4e00ff', 2, 1, 1);
rectAreaLight.position.set(-1.5, 0, 1.5);
rectAreaLight.lookAt(new THREE.Vector3())
scene.add(rectAreaLight);
// debug: rect area light
var rectAreaLightFolder = gui.addFolder('rect area light');
rectAreaLightFolder.add(rectAreaLight, 'visible');
rectAreaLightFolder.add(rectAreaLight, 'intensity').min(0).max(4).step(0.0001);
rectAreaLightFolder.add(rectAreaLight.position, 'x').min(-3).max(3).step(0.0001).name('position x');
rectAreaLightFolder.add(rectAreaLight.position, 'y').min(-3).max(3).step(0.0001).name('position y');
rectAreaLightFolder.add(rectAreaLight.position, 'z').min(-3).max(3).step(0.0001).name('position z');
rectAreaLightFolder.add(rectAreaLight.rotation, 'y').min(-3).max(3).step(0.0001).name('rotate y');

// SPOT LIGHT
const spotLight = new THREE.SpotLight('#78ff00', 0.5, 10, Math.PI * 0.1, 0.25, 1);
spotLight.position.set(0, 2, 3);
scene.add(spotLight);

scene.add(spotLight.target);
spotLight.target.position.x = -0.95;
// debug: spot light
var spotLightFolder = gui.addFolder('spot light');
spotLightFolder.add(spotLight, 'visible');
spotLightFolder.add(spotLight, 'intensity').min(0).max(2).step(0.0001);
spotLightFolder.add(spotLight, 'distance').min(0).max(20).step(0.0001);
spotLightFolder.add(spotLight, 'angle').min(0).max(3).step(0.0001);
spotLightFolder.add(spotLight, 'penumbra').min(0).max(1).step(0.0001);
spotLightFolder.add(spotLight, 'decay').min(0).max(5).step(0.0001);
spotLightFolder.add(spotLight.target.position, 'x').min(-3).max(3).step(0.0001).name('position X');
spotLightFolder.add(spotLight.target.position, 'y').min(-3).max(3).step(0.0001).name('position Y');
spotLightFolder.add(spotLight.target.position, 'z').min(-3).max(3).step(0.0001).name('position Z');

//
// Helpers
//
// directional light helper
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2);
scene.add(directionalLightHelper);

// hemisphere light helper
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2);
scene.add(hemisphereLightHelper);

// point light helper
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
scene.add(pointLightHelper);

// rect area light helper
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);
scene.add(rectAreaLightHelper);

// spot light helper
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

window.requestAnimationFrame(() => {
    spotLightHelper.update();
});

/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.4

// Objects
const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.5, 32, 32),
    material
)
sphere.position.x = - 1.5

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.75, 0.75, 0.75),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusBufferGeometry(0.3, 0.2, 32, 64),
    material
)
torus.position.x = 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(5, 5),
    material
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(sphere, cube, torus, plane)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    cube.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    cube.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()