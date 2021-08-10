import {RouteRecordRaw} from "vue-router";


const RootRoute: RouteRecordRaw = {
    path: "/",
    name: "Root",
    component: () => import("/src/views/Home.vue")
};

const DocRoute: RouteRecordRaw = {
    path: "/doc",
    name: "Doc",
    component: () => import("/src/views/Doc.vue")
};

export const basicRoutes = [RootRoute, DocRoute];