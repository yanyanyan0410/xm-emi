import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage";
import SearchDetail from "@/pages/SearchDetail";
import UploadData from "@/pages/UploadData";
import NotFound from "@/pages/NotFound";


const router =createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',component:HomePage},
        {path:'/search',component:SearchDetail},
        {path:'/upload',component:UploadData},
        { path: '/:notFound(.*)', component: NotFound }


    ]
})

export default router