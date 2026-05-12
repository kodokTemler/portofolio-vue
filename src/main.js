import "./assets/main.css";
import "aos/dist/aos.css";
import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";

AOS.init({ duration: 800, once: true });

createApp(App).mount("#app");
