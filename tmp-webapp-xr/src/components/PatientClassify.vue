<script setup>
import PatientCard from "./PatientCard.vue";
</script>

<script>
import { checkXR } from "../js/session";

export default {
  data() {
    return {
      isSessionSupported: false,
      patients: [
        {
          name: "Patient 1",
          cpf: "123456789",
          infos: "Some Infos about the patient 1",
        },
        {
          name: "Patient 2",
          cpf: "987654321",
          infos: "Some Infos about the patient 2",
        },
      ],
    };
  },

  methods: {
    enterToScene() {
      if (this.isSessionSupported) {
        this.$router.push("/session");
      }
    },

    async checkSessionSupported() {
      try {
        this.isSessionSupported = await checkXR();
      } catch (e) {
        console.log(e);
      }
    },
  },

  mounted() {
    this.checkSessionSupported();
  },
};
</script>

<template>
  <v-list lines="one">
    <v-list-item v-for="patient in patients" :key="patient.cpf"
      ><PatientCard :patient="patient"
    /></v-list-item>
  </v-list>
  <!--  <div>-->
  <!--    <div @click="enterToScene" id="landing-div">-->
  <!--      <p class="text-center">Immersive-VR Web App</p>-->
  <!--      <button id="xr-button" class="basicButton">VR not found</button>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
