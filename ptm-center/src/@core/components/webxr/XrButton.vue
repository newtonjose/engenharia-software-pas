<!-- <script setup> -->
<!-- import * as THREE from 'three' -->
<!-- import { ARButton } from 'three/addons/webxr/ARButton.js' -->
<!-- </script> -->

<script setup>
import { checkXR, onButtonClicked } from '@/plugins/webxr/session'

let isSessionSupported = false

function enterToScene() {
  if (isSessionSupported) {
    onButtonClicked()
  }
}

async function checkSessionSupported() {
  try {
    isSessionSupported = await checkXR()
  } catch (e) {
    console.log(e)
  }
}

import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted in the composition api!')
  checkSessionSupported()
})
</script>

<template>
  <div>
    <p>
      Immersive-AR Web App
    </p>
    <VBtn
      id="xr-button"
      color="primary"
      target="_blank"
      @click="enterToScene"
    >
      AR not found
    </VBtn>
  </div>
</template>


<style lang="scss" scoped>

</style>
