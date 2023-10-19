import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../view/Home.vue";
import Contact from "../view/Contact.vue";
import Facilities from "../view/Facilities.vue";
import Room from "../view/Room.vue";


const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/facilities', component: Facilities },
    { path: '/rooms', component: Room },
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})