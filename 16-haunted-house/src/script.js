import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI({ width: '40' })

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.castShadow = true

// Fog
const fog = new THREE.Fog('#262837', 1, 15)
scene.fog = fog 

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg')
const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
const bricksRoughnessTexture = textureLoader.load('/textures/bricks/roughness.jpg')

const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg')

grassColorTexture.repeat.set(8, 8)
grassAmbientOcclusionTexture.repeat.set(8, 8)
grassNormalTexture.repeat.set(8, 8)
grassRoughnessTexture.repeat.set(8, 8)

grassColorTexture.wrapS = THREE.RepeatWrapping
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
grassNormalTexture.wrapS = THREE.RepeatWrapping
grassRoughnessTexture.wrapS = THREE.RepeatWrapping

grassColorTexture.wrapT = THREE.RepeatWrapping
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
grassNormalTexture.wrapT = THREE.RepeatWrapping
grassRoughnessTexture.wrapT = THREE.RepeatWrapping


/**
 * House
 */
// Group: house
const house = new THREE.Group()
scene.add(house)

//  WALLS
const walls = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({ 
        // color: '#ac8e82'
        map: bricksColorTexture,
        aoMap: bricksAmbientOcclusionTexture,
        normalMap:bricksNormalTexture,
        roughnessMap: bricksRoughnessTexture,
    })
)
walls.castShadow = true
walls.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2))
walls.position.y = 2.5 / 2
house.add(walls)
// debug: walls
let wallsFolder = gui.addFolder('walls')
wallsFolder.add(walls, 'visible')

// ROOF
const roof = new THREE.Mesh(
    new THREE.ConeBufferGeometry(4, 1, 4),
    new THREE.MeshStandardMaterial({ color: '#b35f45'  })
)
roof.castShadow = true
roof.position.y = 2.5 + (1 /2)
roof.rotation.y = Math.PI * 0.25
house.add(roof)
// debug: roof
let roofFolder = gui.addFolder('roof')
roofFolder.add(roof, 'visible')

// DOOR
const door = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2, 2, 100, 100),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture,

        transparent: true,
        alphaMap: doorAlphaTexture,

        aoMap: doorAmbientOcclusionTexture,

        displacementMap: doorHeightTexture,
        displacementScale: 0.1,

        normalMap: doorNormalTexture,

        metalnessMap: doorMetalnessTexture,

        roughnessMap: doorRoughnessTexture
    })
)
door.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2))
door.position.y = 1
door.position.z = 1.99
house.add(door)
// debug: door
let doorFolder = gui.addFolder('door')
doorFolder.add(door, 'visible')

// BUSHES
const bushGeometry = new THREE.SphereBufferGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({ color: 'green' })

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.5, 0.5, 0.5)
bush1.position.set(0.8, 0.2, 2.2)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 2.1)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
bush3.scale.set(0.4, 0.4, 0.4)
bush3.position.set(-0.8, 0.1, 2.2)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
bush4.scale.set(0.15, 0.15, 0.15)
bush4.position.set(-1.3, 0.05, 2.2)

house.add(bush1, bush2, bush3, bush4)

/**
 * Graves
 */
// Group: graves
const graves = new THREE.Group()
scene.add(graves)

const gravesGeometry = new THREE.BoxBufferGeometry(0.6, 0.85 ,0.15)
const gravesMaterial = new THREE.MeshStandardMaterial({ color: '#b2b6b1' })

const test = new THREE.Mesh(gravesGeometry, gravesMaterial)
test.position.set(9,0.5,5)
scene.add(test)

for(let i = 0; i < 80; i++) {
   
    const angle = Math.random() * (Math.PI * 2)
    const radius = 3.5 + (Math.random() * 6)

    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius

    const grave = new THREE.Mesh(gravesGeometry, gravesMaterial)
    // shadow
    grave.castShadow = true
    grave.receiveShadow  = false
    // position
    grave.position.set(x, (0.7 / 2), z)
    // rotation
    grave.rotation.y = (Math.random() - 0.5) * 0.4
    grave.rotation.z = (Math.random() - 0.5) * 0.4
    graves.add(grave)
}


// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(20, 20),
    new THREE.MeshStandardMaterial({ 
        map: grassColorTexture,
        aoMap: grassAmbientOcclusionTexture,
        normalMap: grassNormalTexture,
        roughnessMap: grassRoughnessTexture
     })
)
floor.receiveShadow = true;
floor.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2))
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
scene.add(ambientLight)
// debug: ambient light
let ambientLightFolder = gui.addFolder('ambient light')
ambientLightFolder.add(ambientLight, 'visible')
ambientLightFolder.add(ambientLight, 'intensity').min(0).max(1).step(0.001)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, - 2)

moonLight.castShadow = true
moonLight.shadow.mapSize.width = 1024;
moonLight.shadow.mapSize.height = 1024;
moonLight.shadow.camera.near = 0.5;
moonLight.shadow.camera.far = 100;

scene.add(moonLight)
// debug: directional light
let directionalLightFolder = gui.addFolder('directional light')
directionalLightFolder.add(moonLight, 'visible')
directionalLightFolder.add(moonLight, 'intensity').min(0).max(1).step(0.001)
directionalLightFolder.add(moonLight.position, 'x').min(- 5).max(5).step(0.001).name('position X')
directionalLightFolder.add(moonLight.position, 'y').min(- 5).max(5).step(0.001).name('position Y')
directionalLightFolder.add(moonLight.position, 'z').min(- 5).max(5).step(0.001).name('position Z')

// Door Light
const doorLight = new THREE.PointLight('#ff7d46', 1, 7)
doorLight.position.set(0, 2.25, 2.7)

doorLight.castShadow = true
doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
doorLight.shadow.camera.near = 0.5;
doorLight.shadow.camera.far = 7;

house.add(doorLight)

// door light helper
const doorLightHelper = new THREE.PointLightHelper(doorLight, 0.3)
scene.add(doorLightHelper)
// debug light
let doorLightFolder = gui.addFolder('door light')
doorLightFolder.add(doorLight.position, 'x').min(-4).max(4).step(0.001).name('position x')
doorLightFolder.add(doorLight.position, 'y').min(-4).max(4).step(0.001).name('position y')
doorLightFolder.add(doorLight.position, 'z').min(-4).max(4).step(0.001).name('position z')
doorLightFolder.add(doorLight, 'visible').name('door light')
doorLightFolder.add(doorLightHelper, 'visible').name('door light helper')

// ghosts
const ghosts1 = new THREE.PointLight('#ffffff', 1, 3.5)
ghosts1.position.y = 2

ghosts1.castShadow = true
ghosts1.shadow.mapSize.width = 256;
ghosts1.shadow.mapSize.height = 256;
ghosts1.shadow.camera.near = 0.5;
ghosts1.shadow.camera.far = 7;

scene.add(ghosts1)
// debug: ghosts 1
const ghosts1Helper = new THREE.PointLightHelper(ghosts1, 0.2)
scene.add(ghosts1Helper)

const ghosts2 = new THREE.PointLight('#ff4f4f', 1, 3.5)
ghosts2.position.y = 2

ghosts2.castShadow = true
ghosts2.shadow.mapSize.width = 256;
ghosts2.shadow.mapSize.height = 256;
ghosts2.shadow.camera.near = 0.5;
ghosts2.shadow.camera.far = 7;

scene.add(ghosts2)
// debug: ghosts 2
const ghosts2Helper = new THREE.PointLightHelper(ghosts2, 0.2)
scene.add(ghosts2Helper)

const ghosts3 = new THREE.PointLight('#00ff00', 1, 3.5)
ghosts3.position.y = 2

ghosts3.castShadow = true
ghosts3.shadow.mapSize.width = 256;
ghosts3.shadow.mapSize.height = 256;
ghosts3.shadow.camera.near = 0.5;
ghosts3.shadow.camera.far = 7;


scene.add(ghosts3)
// debug: ghosts 2
const ghosts3Helper = new THREE.PointLightHelper(ghosts3, 0.2)
scene.add(ghosts3Helper)



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
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
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
renderer.setClearColor('#262837')

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // animation ghosts
    ghosts1.position.x = Math.sin(elapsedTime * 0.5) * 6
    ghosts1.position.z = Math.cos(elapsedTime * 0.5) * 6

    ghosts2.position.x = - Math.sin(elapsedTime * 0.3) * 6
    ghosts2.position.z = - Math.cos(elapsedTime * 0.3) * 6

    ghosts3.position.x = Math.sin(elapsedTime * 0.4) * 6 + Math.sin(elapsedTime)
    ghosts3.position.z = Math.cos(elapsedTime * 0.4) * 6 + Math.cos(elapsedTime)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()