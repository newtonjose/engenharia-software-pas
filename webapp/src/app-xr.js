const { WebGLRenderer } = require("three/src/renderers/WebGLRenderer");
const { ARButton } = require("three/examples/jsm/webxr/ARButton");
// import { createScene } from "./scene";
const {
  browserHasImmersiveArCompatibility,
  displayIntroductionMessage,
  displayUnsupportedBrowserMessage,
} = require("./utils/dom-utils.js");

// import "./styles.css";

function initializeXRApp() {
  const { devicePixelRatio, innerHeight, innerWidth } = window;

  const renderer = new WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(devicePixelRatio);

  renderer.xr.enabled = true;

  document.body.appendChild(renderer.domElement);

  document.body.appendChild(
    ARButton.createButton(renderer, { requiredFeatures: ["hit-test"] }),
  );

  displayIntroductionMessage();

  // createScene(renderer);
}

async function startAppXr() {
  const isImmersiveArSupported = await browserHasImmersiveArCompatibility();

  isImmersiveArSupported
    ? initializeXRApp()
    : displayUnsupportedBrowserMessage();
}

module.exports = startAppXr;
