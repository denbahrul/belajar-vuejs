import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import MainButton from "./components/MainButton.vue";

const app = createApp(App);

// #Global component
// bisa dipanggil dimanapun tanpa melakukan importing
// diusahakan hanya untuk component yang banyak digunakan
app.component("MainButton", MainButton);

app.mount("#app");
