<template>
  <div>
    <h1>HOLA</h1>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  data () {
    return {
      message: 'hola'
    }
  },
  mounted () {
    this.setUp()
  },
  methods: {
    setUp () {
      /**
       * Scene
       */
      const scene = new THREE.Scene()

      /**
       * Mesh
       */
      const mesh = new THREE.Mesh(
        new THREE.BoxBufferGeometry(),
        new THREE.MeshBasicMaterial()
      )
      scene.add(mesh)

      /**
       * Camera
       */
      const sizes = {
        width: 600,
        height: 400
      }

      const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
      camera.position.z = 3
      scene.add(camera)

      /**
       * Render
       */
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('canvas.webgl')
      })
      renderer.setSize(sizes.width, sizes.height)
      renderer.render(scene, camera)
    }
  }
}
</script>
