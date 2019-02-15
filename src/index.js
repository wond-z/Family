import Vue from 'vue';
import VueI18n from 'vue-i18n';
import $ from 'jquery';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import '@/assets/style/main.less';

import App from './app.vue';
import router from './routers.js'

Vue.use(VueI18n);
Vue.use(BootstrapVue);

const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'zh',    // 语言标识
    messages: {
        'zh': require('./i18n/zh-cn/common'),   // 中文语言包
        'en': require('./i18n/en-us/common')   // 英文语言包
    }
});

Vue.config.debug = true; // 开启错误提示

new Vue({
    el: '#app',
    router,
    i18n,
    render: h => h(App)
});
