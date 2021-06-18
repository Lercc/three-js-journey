import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 *  HANDLE RE-SIZING
 */
window.addEventListener('resize', () => {
    // 1 // Update Sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // 2 // Update camera
    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    // 3 // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    // HANDLE PIXEL RATIO
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 *  HANDLE FULLSCREEN
 */
window.addEventListener('dblclick', () => {
    // // suport modern browser exvept safari
    // if(!document.fullscreenElement) {
    //     // console.log('status if', document.fullscreenElement)
    //     canvas.requestFullscreen()
    //     // console.log('go to fullscreen')
    // } else {
    //     // console.log('status else', document.fullscreenElement)
    //     document.exitFullscreen()
    //     // console.log('fullscreen exit')
    // }

    // suport safari browsers and others
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
            console.log('go to fullscreen - normal browser')
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()
            console.log('go to fullscreen - safari browser')
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
            console.log('exit to fullscreen - normal browser')
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
            console.log('exit to fullscreen - safari browser')
        }
    }
})  


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
// controls.enabled = false
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// HANDLE PIXEL RATIO
// renderer.setPixelRatio(window.devicePixelRatio)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * screenmessage
 */
const text = document.querySelector('.text')
text.innerHTML = `device pixel ratio : ` + window.devicePixelRatio

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()