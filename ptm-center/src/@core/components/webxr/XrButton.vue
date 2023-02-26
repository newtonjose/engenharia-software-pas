<!-- <script setup> -->
<!-- import * as THREE from 'three' -->
<!-- import { ARButton } from 'three/addons/webxr/ARButton.js' -->
<!-- </script> -->

<script setup>
import { checkXR } from '@/plugins/webxr/session'
export default {
  data() {
    return{
      isSessionSupported: false,
    }
  },
  methods: {
    enterToScene() {
      if(this.isSessionSupported){
        this.$router.push('/session')
      }
    },
    async checkSessionSupported () {
      try{
        this.isSessionSupported = await checkXR()
      }catch(e){
        console.log(e)
      }
    },
  },
  mounted(){
    this.checkSessionSupported()
  },
}
</script>

<template>
  <div>
    <div
      id="landing-div"
      @click="enterToScene"
    >
      <p class="text-center">
        Immersive-AR Web App
      </p>
      <button
        id="xr-button"
        class="basicButton"
      >
        AR not found
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>
