import Vue from "vue";
//导入vue-router这个包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入对应的路由组件
import homeContainer from'./components/tabBar/homeContainer.vue'
import memberContainer from'./components/tabBar/memberContainer.vue'
import  searchContainer from'./components/tabBar/searchContainer.vue'
import  shopCarContainer from'./components/tabBar/shopCarContainer.vue'
import  newList from'./components/News/newList.vue'
import  newsInfo from'./components/News/newsInfo.vue'
import photo from './components/photos/photo.vue'
import photoInfo from './components/photos/photoInfo.vue'
import goodList from './components/goods/goods.vue'
import goodInfo from './components/goods/goodInfo.vue'
import getdes from './components/goods/goodes.vue'
import getcom from './components/goods/goodcom.vue'
//创建router实例
var router = new VueRouter({
    routes:[//配置路由规则
        //重定向
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/member',component:memberContainer},
        {path:'/shopCar',component:shopCarContainer},
        {path:'/search',component:searchContainer},
        {path:'/home/newList',component:newList},
        {path:'/home/newsInfo:id',component:newsInfo},
        {path:'/photo',component:photo},
        {path:'/photoInfo',component:photoInfo},
        {path:'/goodsList',component:goodList},
        {path:'/home/goodInfo',component:goodInfo},
        {path:'/home/goodes',component:getdes,name:'des'},
        {path:'/home/goodcom',component:getcom,name:'com'},
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由的类（raouter-link-ctive）

})
export default router