<template>
<div class="lunContainer">
    <!--轮播插件抽离-->
    <mt-swipe :auto="4000">
        <!--在组件中v-for循环的话一定要加key-->
        <mt-swipe-item v-for="item in lunBoTuList" :key="item.url">
            <img :src="item.img" alt="":class="{full:isfull}">
        </mt-swipe-item>
    </mt-swipe>
</div>
</template>
<script>
    export default {
        props:["lunBoTuList","isfull"]
    }
</script>
<style lang="scss"scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            img{
                /*width: 100%;*/
                height: 100%;
            }
            .full{
                width: 100%;
            }
        }
    }
</style>