<script>
import { onButtonClicked } from "../js/session";
import Models from "../../objects.json";
export default {
  data() {
    return {
      showCatalogue: false,
      models: [],
    };
  },

  methods: {
    openCatalogue() {
      this.notifySessionCatalogueIsOpen(true);
      this.showCatalogue = true;
    },

    closeCatalogue() {
      this.notifySessionCatalogueIsOpen(false);
      this.showCatalogue = false;
    },

    notifySessionCatalogueIsOpen(boolean) {
      this.$emit("catalogueModify", boolean);
    },
  },

  mounted() {
    onButtonClicked();
    this.models = Models;
  },

  beforeRouteEnter(to, from, next) {
    if (from.name === null) {
      return next({ name: "Home" });
    }
    return next();
  },
};
</script>

<template>
  <header>
    <details open>
      <summary>Immersive VR Session</summary>
      <p>
        This sample demonstrates how to use an 'immersive-vr' XRSession to
        present a simple WebGL scene to an XR device. The scene is not
        rendered to the page.
        <a class="back" href="./">Back</a>
      </p>
    </details>
  </header>
  <main style='text-align: center;'>
    <p>Click 'Enter XR' to see content</p>
  </main>
</template>
