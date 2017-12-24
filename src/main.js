import Vue from 'vue';
import 'babel-polyfill';

// Import F7
import Framework7 from 'framework7';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

// import toast from 'vue-awesome-toast';
//
// Vue.use(vue-awesome-toast, {});
// Import F7 iOS Theme Styles
//暂时不要升级framework7到2.0.0.beta，否者找不到对应的css文件无法编译通过
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
// OR for Material Theme:
//  import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
//  import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
//

// Import App Custom Styles
// import AppStyles from './css/app.css'
import './css/framework7-icons.css';
// import './font-awesome/css/font-awesome.css'


Vue.use(Framework7Vue);
import './css/index.css';
import App from './vue/app';
import Routes from './routes';
import Vuex from 'vuex';
Vue.use(Vuex);

import axios from 'axios'
import VueAxios from 'vue-axios'
import toasted from 'vue-toasted';
Vue.use(VueAxios, axios);
Vue.use(toasted);
new Vue({
    el: '#app',
    template: '<app/>',
    components: {
        app: App
    },
    framework7: {
        root: '#app',
        routes: Routes,
        modalButtonOk: "确定",
        modalButtonCancel: "取消",
        modalPreloaderTitle: "加载中...",
        modalUsernamePlaceholder: "用户名",
        modalPasswordPlaceholder: "密码",
    },
});

