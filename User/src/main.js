import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers/index.js";
import store from "./store/index.js";

// router = router로 선언
// vuex = store로 선언
createApp(App).use(router).use(store).mount("#app");
