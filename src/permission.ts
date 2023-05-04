import { nprogressStart, nprogressClose } from "@/hooks/useNporgress"

import { RouteLocationNormalized, Router, _RouteRecordBase } from "vue-router"

// 路由白名单，不需要登陆即可使用
const whiteList = ["/login"]

export function guard(router: Router) {
    const hasRoles = true
    router.beforeEach(async (to, from, next) => {
        nprogressStart()

        const hasToken = true
        if (hasToken) {
        } else {
        }
        next()
    })

    router.afterEach((to: RouteLocationNormalized): void => {
        nprogressClose()
    })
}
