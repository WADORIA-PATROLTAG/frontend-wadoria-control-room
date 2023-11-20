import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Store from "./store";
import Components from "@/template/components";
import Globals from "@/global";
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(router);
app.use(Store);
app.use(VueSweetalert2);
app.use(Components);
app.use(Globals);
app.mount("#app");