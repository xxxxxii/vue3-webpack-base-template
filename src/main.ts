import { createApp } from "vue"
import App from "./App.vue"
import router, { setupRouter } from "./router"

import ZUI from "v3-yl-ui"
import "../node_modules/v3-yl-ui/dist/style.css"


async function bootstrap() {
    const app = createApp(App)
    app.use(ZUI)

    setupRouter(app)
    await router.isReady()
    app.mount("#app")
}

void bootstrap()


