import LoginPage from "@/template/view/pages/auth/login.page.vue";
import DashboardPage from "@/template/view/pages/public/dashboard";
import HomePage from "@/template/view/pages/public/home";
import CreateUser from "@/template/view/pages/public/create-user.vue";
const routes = [{
        path: '/',
        component: LoginPage,
        name: 'login'

    },

    {
        path: '/home',
        component: HomePage,
        name: 'home',
        children: [{
            path: '',
            component: DashboardPage,
            name: 'dash'
        }, {
            path: '/create-user',
            component: CreateUser,
            name: 'create-user'
        }]
    },

    /*{
        path: '/dashboard/:id',
        component: DashboardPage,
        name: 'dash'
    }*/
]



export default routes;