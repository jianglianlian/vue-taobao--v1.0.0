<template>
    <div class="shopContainer1">
        <!--商品列表区域-->
        <div class="goodsList">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img src="../../img/photo4.jpg">
                        <div class="info">
                            <h1>小米8 SE</h1>

                            <p>
                                <span class="price">￥1234</span>
                                <numberBox></numberBox>
                                <a href="#">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!--商品结算区域-->
        <div class="jiesuan">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品 <span class="num">0</span>  件</p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import numberBox from'../subComponents/shopCarNumber.vue'
    export default {
        components:{
            numberBox
        }
    }
</script>
<style lang="scss" scoped>
    .goodsList{
        .mui-card-content-inner{
            display: flex;
            justify-content: center;
        }
        img{
            margin-top: 15px;
            width: 60px;
            height: 60px;
        }
        h1{
            display: inline-block;
            font-size: 14px;
        }
        .info{
            .price{
                color: red;
                font-weight: bold;
            }
        }
    }
    .jiesuan{
        .mui-card-content-inner{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .num{
                color: red;
                font-weight: bold;
                font-size: 14px;
            }
        }

    }
</style>
