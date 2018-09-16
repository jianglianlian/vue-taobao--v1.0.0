<template>
    <div>
        <!--//轮播图区域-->
        <swiper :lunBoTuList="lunBoTuList":isfull="true"></swiper>
        <!--六格列表-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newList">
                <img src="../../img/small1.png" alt="">
                <div class="mui-media-body">天猫</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo">
                <img src="../../img/samll2.png" alt="">
                <div class="mui-media-body">聚划算</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goodsList">
                <img src="../../img/small3.png" alt="">
                <div class="mui-media-body">天猫国际</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../img/small4.png" alt="">
                <div class="mui-media-body">充值中心</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../img/small5.png" alt="">
                <div class="mui-media-body">飞猪旅行</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../img/small6.png" alt="">
                <div class="mui-media-body">领金币</div></a></li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
    import swiper from '../subComponents/swiper.vue'
    export default {
        data(){
            return{
                lunBoTuList:[]
            }
        },
        created(){
            this.getCaroucal()
        },
        methods:{
            getCaroucal(){
                //获取轮播数据的方法
                this.$http.get('../../allJSON/img.json').then(result=>{
                    if(result.body.status === 0){
                        //成功了
                        console.log(result.body.message)
                        this.lunBoTuList = result.body.message;
                    }else {
                        Toast('加载失败了....')
                    }
                })
            }
        },
        components:{
            swiper
        }
    }
</script>
<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
    background: #fff;
    border: 0;

    img{
        width: 90px;
        display: inline-block;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
    text-align: center;
    padding: 0;
}
</style>
