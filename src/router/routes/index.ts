import {RouteRecordRaw} from "vue-router";


const RootRoute: RouteRecordRaw = {
    path: "/",
    name: "Root",
    component: () => import("/src/components/Vino.vue")
};

const DocRoute: RouteRecordRaw = {
    path: "/doc",
    name: "Doc",
    component: () => import("/src/components/Vino2.vue")
};

export const basicRoutes = [RootRoute, DocRoute];