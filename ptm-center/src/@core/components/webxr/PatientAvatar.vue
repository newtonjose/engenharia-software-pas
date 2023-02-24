<script setup>
import * as THREE from 'three'
import { ARButton } from 'three/addons/webxr/ARButton.js'

import pages2 from '@/assets/images/pages/2.png'
import avatar1 from '@/assets/images/avatars/avatar-1.png'


let camera, scene, renderer
let controller

init()
animate()

function init() {

  // const container = document.createElement( 'div' )
  // document.body.appendChild( container )

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 )

  const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 )
  light.position.set( 0.5, 1, 0.25 )
  scene.add( light )

  //

  renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } )
  renderer.setPixelRatio( window.devicePixelRatio )
  renderer.setSize( window.innerWidth, window.innerHeight )
  renderer.xr.enabled = true
  document.body.appendChild(renderer.domElement)
  // container.appendChild( renderer.domElement )

  //

  document.body.appendChild( ARButton.createButton( renderer ) )

  //

  const geometry = new THREE.CylinderGeometry( 0, 0.05, 0.2, 32 ).rotateX( Math.PI / 2 )

  function onSelect() {

    const material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random() } )
    const mesh = new THREE.Mesh( geometry, material )
    mesh.position.set( 0, 0, - 0.3 ).applyMatrix4( controller.matrixWorld )
    mesh.quaternion.setFromRotationMatrix( controller.matrixWorld )
    scene.add( mesh )

  }

  controller = renderer.xr.getController( 0 )
  controller.addEventListener( 'select', onSelect )
  scene.add( controller )

  //

  window.addEventListener( 'resize', onWindowResize )

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize( window.innerWidth, window.innerHeight )

}

//

function animate() {

  renderer.setAnimationLoop( render )

}

function render() {

  renderer.render( scene, camera )

}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard>
        <VImg :src="pages2" />

        <VCardText class="position-relative">
          <!-- User Avatar -->
          <VAvatar
            size="75"
            class="avatar-center"
            :image="avatar1"
          />

          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap pt-8">
            <div class="me-2 mb-2">
              <VCardTitle class="pa-0">
                Robert Meyer
              </VCardTitle>
              <VCardSubtitle class="text-caption pa-0">
                London, UK
              </VCardSubtitle>
            </div>
            <VBtn>send request</VBtn>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
