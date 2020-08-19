import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/HomeComponent';
import Task from './components/TaskComponent';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tasks',
        component: Task
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;