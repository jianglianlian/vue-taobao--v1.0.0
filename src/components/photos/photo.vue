<template>
    <div>
        <!--//顶部滑动条区域-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html"
                       v-for="item in cats":key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!--图片列表区域-->
        <ul class="photoList">
            <router-link v-for="item in list":key="item.id"to="/photoInfo">
                <img v-lazy="item">
                <div class="info">
                    <!--<div class="infoTitle">iPad</div>-->
                    <div class="infoBody">iPhoneXs支持双卡双待功能，采用esim+实体卡的方式,苹果还发布了6.1英寸iPhoneXR。机身采用航空铝材质，拥有6种配色。iPhoneXR采用LCD屏幕，无3D Touch功能，支持Face ID功能。iPhone Xs、iPhone Xs Max以及iPhone
                        Xr的国内起售价分别为8699元、9599元以及6499元。</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>

    // 导入muijs
    import mui from '../../lib/js/mui.js'
    export default {
        data(){
            return {
                cats:[],
                list:[
                    "../img/photo1.jpg",
                    "../img/photo2.png",
                    "../img/photo3.jpg",
                    "../img/photo4.jpg",
                    "../img/photo5.jpg",
                    "../img/muwu.jpg",
                    "../img/cbd.jpg"
                ]//图片列表的数组
            }
        },
        created(){
            this.getAllPhotoList()
            // this.getPhotoByCatsId(0)
        },
        mounted(){//当dom已经渲染好后，再执行这个钩子函数
            //引用控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getAllPhotoList(){
                //获取所有图片目录
                this.$http.get('../../allJSON/topMain.json').then(result=>{
                    if(result.body.status === 0){
                        result.body.message.unshift({title:'全部',id:0})
                        this.cats = result.body.message
                    }
                })
            },
            // getPhotoByCatsId(){
            //     this.$http.get('../../allJSON/photoList.json').then(result=>{
            //         if (result.body.status === 0){
            //             this.list = result.body.message
            //         }
            //     })
            // }
        },
    }
</script>
<style lang="scss"scoped>
    *{
        touch-action: pan-x;
    }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .photoList{
        /*margin: 0;*/
        padding-left: 0;
        img{
            width: 100%;
        }
        li{
            list-style: none;
        }
        .info{
            font-size: 12px;
            color: #761c19;
            display: flex;
            transform: translateY(-110%);
            .infoBody{
                justify-content: space-between;
            }
            position: absolute;
        }
    }
</style>