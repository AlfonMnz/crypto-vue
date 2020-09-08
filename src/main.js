import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.use(Chartkick.use(Chart));
Vue.use(VueSpinners);
Vue.config.productionTip = false;
new Vue({
    router: router,
    render: h => h(App)
}).$mount("#app");
