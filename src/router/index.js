import { createRouter, createWebHashHistory } from "vue-router";

import routes from "./routes";
const router = createRouter({
    /*   base: process.env.BASE_URL, */
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: "active",
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        //NProgress.start();
    }
    next();
});
router.afterEach((to, from) => {
    //NProgress.done();
});
export default router;