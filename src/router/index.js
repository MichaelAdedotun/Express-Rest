import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../view/Home.vue";


const routes = [
    { path: '/', component: Home },

]


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})