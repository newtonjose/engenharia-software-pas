import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "./assets/main.css";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  components,
  directives,
});

const app = createApp(App);

app.use(router);

app.use(vuetify).mount("#app");
