<script setup>
import {ref} from "vue"
import * as THREE from "three"

let scene = new THREE.Scene()
let canvasRef = ref()
let renderer

let boxGeometry = new THREE.BoxGeometry(1,1, 1)
let boxMaterial = new THREE.MeshStandardMaterial({color: "mediumpurple"})
let box = new THREE.Mesh(boxGeometry, boxMaterial)

box.position.set(0,0,0)
scene.add(box)


let ambientLight = new THREE.AmbientLight("#ffffff", 1)
scene.add(ambientLight)


let camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000,
)

camera.position.z = 2

camera.lookAt(new THREE.Vector3(0,0,0))
scene.add(camera)

let loop = () => {
  box.rotation.y += 0.02
  renderer.render(scene, camera)
}

const resizeCallback = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

}
onMounted(() => {
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    alpha: true,
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.render(scene, camera)

  renderer.setAnimationLoop(loop)
  window.addEventListener("resize", resizeCallback)

  requestAnimationFrame(loop)
})

onUpdated( () => {
  renderer.setAnimation(null)
  window.removeEventListener("resize", resizeCallback)
})
</script>

<template>
  <div>
    <p class="text-2xl mb-6">
      Avatar
    </p>
    <!--    <VRow> -->
    <!--      <VCol -->
    <!--        md="12" -->
    <!--        cols="12" -->
    <!--      > -->
    <!--        -->
    <!--      </VCol> -->
    <!--    </VRow> -->
  </div>
  <canvas
    ref="canvasRef"
    class="avatar-canvas"
  />
</template>

<style lang="scss" scoped>
.avatar-canvas {
  min-height: 100px;
  width: 100%;
  overflow: hidden;
}
</style>
