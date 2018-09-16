<template>
<div class="appContainer">
<!--顶部header区域-->
    <mt-header fixed title="淘宝贝">
        <router-link to="/" slot="left">
            <mt-button icon="back"@click="goBack"v-show="flag">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--路由区域-->
    <transition>
        <router-view></router-view>
    </transition>
    <!--底部Tabbar区域-->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-itemlib" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-itemlib" to="/member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-itemlib" to="/shopCar">
            <span class="mui-icon iconfont icon-cart">
                <span class="mui-badge"id="badge">{{$store.getters.getAllCount}}</span>
            </span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-itemlib" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
</div>
</template>

<script>
    export default {
        data(){
            return{
                flag:false
            }
        },
        created(){
            //为了当跳转到其他页面时，然后进行刷新页面，但是页面的返回键消失，解决这个问题
            this.flag = this.$route.path == '/home'? false:true
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        },
        watch:{
            '$route.path':function (newVal) {
                if(newVal == '/home'){
                    this.flag = false
                }else{
                    this.flag = true
                }
            }
        }
    }
</script>
<style lang="scss"scoped>
    .appContainer {
        padding: 40px 0 50px;
        header {
            background: rgb(255, 78, 34);
        }
        .mui-bar-tab .mui-tab-itemlib {
            display: table-cell;
            overflow: hidden;
            width: 1%;
            height: 50px;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #929292;
        }
        .mui-bar-tab .mui-tab-itemlib .mui-icon {
            top: 3px;
            width: 24px;
            height: 24px;
            padding-top: 0;
            padding-bottom: 0;
        }
        .mui-bar-tab .mui-tab-itemlib .mui-icon ~ .mui-tab-label {
            font-size: 11px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .mui-bar-tab .mui-tab-itemlib.mui-active {
        color: #007aff;
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-active,.v-leave-active{
        position: absolute;
        transition: all .5s ease;
    }
</style>