//入口文件
import Vue from 'vue'
//1、1导入路由的包
import VueRouter from 'vue-router'
//1、2安装路由
Vue.use(VueRouter)
//2、1导入vue-resource
import VueResource from 'vue-resource'
//2、2安装vue-resource
Vue.use(VueResource)

//导入时间插件
import moment from 'moment'
//全局过滤器
Vue.filter('dataFormat',function (datastr,pattern='yyyy-mm-dd') {
    return moment(datastr).format(pattern);
})
//导入app文件
import app from './App.vue'
//导入MintUI文件
import { Header,Swipe, SwipeItem,Button,Lazyload,Switch } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);
//导入MUI文件
import './lib/css/mui.css'
import './lib/css/iconfont.css'
import 'photoswipe'
//3、导入缩略图插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
//4、1导入vuex这个包
import vuex from 'vuex'
//引用vuex在vue中
Vue.use(vuex)
//每次进入网站时先把本地存储的数据读取出来
var car = JSON.parse(localStorage.getItem('car')||'[]')
//4、3创建vuex.Store这个实例
var store = new vuex.Store({
    state:{
        car:car
    },
    mutations:{
        addToCar(state,goodsInfo){
            var flag = false
            state.car.some(item=>{
                if(item.id == goodsInfo.id){
                    item.count = parseInt(goodsInfo.count)
                }
            })
            if(!flag){
                state.car.push(goodsInfo)
            }
            //当car更新之后，将car数组保存到本地存储
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{
        getAllCount(state){
            var c = 0
            state.car.forEach(item=>{
                c += item.count
            })
            return c
        }
    }
})
//1、3导入自己的router.js模块
import router from './router.js'
Vue.http.options.emulateJSON = true
//创建vue1实例
var vm = new Vue({
    el:'#app',
    data:{},
    render:c=>c(app),
    router,//1、4挂载路由对象到vm实例上
    store,//4、5挂载到vue实例上面
})