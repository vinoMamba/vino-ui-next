import {RouteRecordRaw} from "vue-router";

const RootRouter: RouteRecordRaw = {
    path: "/",
    name: "Root",
    redirect: "/home"
};
const HomeRouter: RouteRecordRaw = {
    path: "/home",
    name: "Home",
    component: () => import("/src/views/Home.vue")
};

const DocRouter: RouteRecordRaw = {
    path: "/doc",
    name: "Doc",
    component: () => import("/src/views/Doc.vue"),
    children: [
        {
            path: "/doc/switch",
            name: "Switch",
            component: () => import("/src/components/demo/SwitchDemo.vue")
        },

        {
            path: "/doc/button",
            name: "Button",
            component: () => import("/src/components/demo/ButtonDemo.vue")
        }
    ]
};
const basicRoutes = [RootRouter, HomeRouter];

const RouterMap: RouteRecordRaw[] = [
    ...basicRoutes,
    DocRouter
];

export default RouterMap;
