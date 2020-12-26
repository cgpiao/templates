import {createRouter, createWebHistory} from "vue-router";
import Login from "@/components/Login";
import Entry from "@/components/Entry";
import Dashboard from "@/components/Dashboard";
import AppAdmin from "@/components/AppAdmin";

const routes = [
   {path: '/login', component: Login, name: 'login'},
   {path: '/entry', component: Entry, name: 'entry'},
   {
      path: '/**', component: AppAdmin, name: 'admin', children: [
         {path: '/', component: Dashboard},
      ]
   },
]

const router = createRouter({
   history: createWebHistory(),
   base: '/', // process.env.VUE_APP_PREFIX,
   routes,
});

router.beforeEach((to, from, next) => {
   next()
   // let isAuthenticated = localStorage.getItem(LS_TOKEN)
   // isAuthenticated = true
   // if (to.name !== 'login' && !isAuthenticated) next({name: 'login'})
   // else if (to.name === 'login' && isAuthenticated) next({name: 'dashboard'})
   // else next()
});

export default router
