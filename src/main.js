import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import StoredResources from "./components/StoredResources.vue";
import AddResource from "./components/AddResource.vue";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseError from "./components/UI/BaseError.vue";

import TheHeader from "./components/layouts/TheHeader.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: StoredResources },
    { path: "/add-resources", component: AddResource },
  ],
});
const app = createApp(App);
app.use(router);

app.component("base-card", BaseCard);
app.component("BaseButton", BaseButton);
app.component("BaseError", BaseError);

app.component("TheHeader", TheHeader);
app.mount("#app");
