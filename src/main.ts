import {createApp} from "vue";
import App from "./App.vue";
import "/src/assets/index.scss";
import {setupRouter} from "./router";


function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    app.mount("#app", true);
}

bootstrap();