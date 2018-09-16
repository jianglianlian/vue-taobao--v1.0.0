<template>
    <div class="goodInfoContainer">
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball"v-show="isBall"ref="ball"></div>
        </transition>
        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunBoTuList="lunBoList":isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品名称</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<del>￥1234</del>&nbsp&nbsp销售价: <span class="now">￥1200</span>
                    </p>
                    <p>购买数量: <numbox @getCount="getCount"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small"@click="showball">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：11122123</p>
                    <p>库存情况：34</p>
                    <p>上架时间：2012-05-21</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large"@click="getdes">图文介绍</mt-button>
                <mt-button type="danger" size="large"@click="getcom">商品评价</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import swiper from '../subComponents/swiper.vue'
    import numbox from '../subComponents/goodsInfoNumberBox.vue'
    export default {
        data(){
            return{
                lunBoList:[],
                isBall:false,
                selectedCount:1
            }
        },
        created(){
            this.getLunBo()
        },
        methods:{
            getLunBo(){
                this.$http.get('../../allJSON/lunBo.json').then(result=>{
                    if (result.body.status === 0){
                        //将轮播图的json文件中的src改为轮播插件中的img
                        result.body.message.forEach(item=>{
                            item.img = item.src
                        })
                        this.lunBoList = result.body.message
                    }
                })
            },
            getdes(){
            //    点击跳转到图文介绍
                this.$router.push({"name":"des"})
            },
            getcom(){
                this.$router.push({"name":"com"})
            },
            getCount(count){
                this.selectedCount = count
                console.log(this.selectedCount)
            },
            showball(){
                this.isBall = !this.isBall
                //添加到购物车
                var goodsInfo = {
                    "id":1,
                    count:this.selectedCount,
                    "price":"￥1234",
                    "selected":true
                }
                //调用store中的mutations中的方法
                this.$store.commit('addToCar',goodsInfo)
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth;
                //获取小球的位置
                var ballOffset = this.$refs.ball.getBoundingClientRect()
                //获取徽章的位置
                var badge = document.getElementById("badge").getBoundingClientRect()
                //移动的左位移
                var ballLeft = badge.left - ballOffset.left
                //获取top
                var ballTop = badge.top - ballOffset.top
                el.style.transform = `translate(${ballLeft}px,${ballTop}px)`
                el.style.transition='all .8s ease'
                done()
            },
            afterEnter(el){
                this.isBall = !this.isBall
            },

        },
        components:{
            swiper,
            numbox
        }
    }
</script>
<style lang="scss">
    .goodInfoContainer{
        background: #eee;
        .boxContainer{
            display: inline-block;
        }
        .mui-card-content-inner{
            .mint-swipe-items-wrap{
                text-align: center;
            }
            .now{
                color: red;
                font-size: 16px;
                font-weight: bold;
            }
        }
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: red;
            position: absolute;
            top: 390px;
            left: 141px;
            z-index: 99;
        }
    }
</style>