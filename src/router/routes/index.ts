import {RouteRecordRaw} from "vue-router";
import Markdown from "../../components/Markdown.vue";
// @ts-ignore
import use from "../../markdown/use.md";
// @ts-ignore
import install from "../../markdown/install.md";
// @ts-ignore
import intro from "../../markdown/intro.md";
import {h} from "vue";

const markdown = function (value: string) {
    return h(Markdown, {content: value, key: value});
};


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
            path: "/doc/intro",
            name: "Intro",
            component: markdown(intro)
        },
        {
            path: "/doc/install",
            name: "Install",
            component: markdown(install)
        },
        {
            path: "/doc/use",
            name: "Use",
            component: markdown(use)
        },
        {
            path: "/doc/switch",
            name: "Switch",
            component: () => import("/src/components/demo/SwitchDemo.vue")
        },
        {
            path: "/doc/button",
            name: "Button",
            component: () => import("/src/components/demo/ButtonDemo.vue")
        },
        {
            path: "/doc/badge",
            name: "Badge",
            component: () => import("/src/components/demo/BadgeDemo.vue")
        },
        {
            path: "/doc/dialog",
            name: "Dialog",
            component: () => import("/src/components/demo/DialogDemo.vue")
        }
    ]
};
const basicRoutes = [RootRouter, HomeRouter];

const RouterMap: RouteRecordRaw[] = [
    ...basicRoutes,
    DocRouter
];

export default RouterMap;
