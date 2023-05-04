import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router"
import { guard } from "@/permission"
import { App } from "vue"

export interface Meta {
    title?: string
    icon?: string
    roles?: any[]
    redirect?: any
    needCache?: boolean
    fixed?: boolean
}
export interface MenuProps {
    path?: string
    name?: string
    redirect?: any
    hidden?: boolean
    component?: any
    meta?: Meta | any
    children?: Array<MenuProps>
}

// 通用路由配置
export const constantRouter: Array<RouteRecordRaw & MenuProps> = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue")
    }
]

// 动态路由配置
export const dynaRouters: Array<RouteRecordRaw & MenuProps> = []

const baseUrl = process.env.VUE_APP_BASE_URL

const router: any = createRouter({
    history: process.env.VUE_APP_ROUTER_MODE === "hash" ? createWebHashHistory(baseUrl) : createWebHistory(baseUrl),
    routes: constantRouter,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app: App) {
    app.use(router)
    guard(router)
}

export default router
