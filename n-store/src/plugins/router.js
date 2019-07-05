import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Footer from '../components/Footer.vue'
import Home from '../pages/Home.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'
import ErrorPage from '../pages/ErrorPage.vue'
import Cart from '../pages/Cart.vue'
import Classify from '../pages/Classify.vue'

let routes = [
    {
        path:'/home',
        components:{
            content: Home,
            footer: Footer
        },
        name:'home'
    },
    {
        path:'/user',
        components:{
            content: User,
            footer: Footer
        },
        name:'user'
    },
    {
        path:'/Login',
        components:{
            content: Login,
            footer: Footer
        },
        name:'login'
    },
    {
        path:'/Reg',
        components:{
            content: Reg,
            footer: Footer
        },
        name:'reg'
    },
    {
        path:'/Cart',
        components:{
            content: Cart,
            footer: Footer
        },
        name:'cart'
    },
    {
        path:'/Classify',
        components:{
            content:Classify,
            footer: Footer
        },
        name:'classify'
    },
    // {
    //     path:'/Detail',
    //     components:{
    //         content: Detail,
    //     },
    //     name:'detail'
    // },
    {
        path:'/detail/:prodId',
        name:'detail',
        components:{
            content: Detail,
        }
    },
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'*',
        component:ErrorPage
    }
    

]

let router = new VueRouter({
    routes
})

export default router;