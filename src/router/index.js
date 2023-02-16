import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home"
import SnowHill from "../components/SnowHill"
import Photo from "../components/Photo"
import Video from "../components/Video"

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/snowhill",
        component: SnowHill
    },
    {
        path: "/photo",
        component: Photo
    },
    {
        path: "/video",
        component: Video
    }
    
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router