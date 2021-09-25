import {createApp} from "vue";
import "/@/assets/reset.scss";
import App from "./App.vue";
import {setupRouter} from "./router";
import SvgIcon from "./components/SvgIcon.vue";
import "github-markdown-css";

function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    app.component("svg-icon", SvgIcon);
    app.mount("#app", true);
}

bootstrap();
