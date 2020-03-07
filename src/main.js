import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from "./components/auth/Login";
import Register from "@/components/auth/Register";
import {store} from "@/store/store";
import Master from "@/components/layouts/Master";
import UserInfo from "@/components/UserInfo/UserInfo";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [
        {path: '/', component: Register},
        {path: '/login', component: Login},
        {path: '/userInfo', component: UserInfo}
    ],
    mode: 'history'
});

new Vue({
    router,
    store,
    component: {Master},
    render: h => h(App),
}).$mount('#app');
