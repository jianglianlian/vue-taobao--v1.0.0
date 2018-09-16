<template>
    <div class="photoInfoContainer">
        <h3>{{photo.title}}</h3>
        <div class="subTitle">
            <span>{{photo.add_time}}</span>
            <span>点击:{{photo.click}}</span>
        </div>
        <hr>
        <!--缩略图区域-->

        <vue-preview :slides="list" @close="handleClose"></vue-preview>
        <!--<img class="preview-img" v-for="(item,index)in list ":src="item.src"height="100"@click="$preview.open(index,list)">-->
        <!--内容区域-->
        <div class="content">
            {{photo.content}}
        </div>
        <!--评论子组件-->
        <cmt-box></cmt-box>
    </div>
</template>
<script>
    import commen from'../subComponents/comment.vue'
    export default {
        data(){
            return{
                photo:{},
                list:[]
            }
        },
        created(){
            this.getPhotoInfo()
            this.getThumbs()
        },
        methods:{
            getPhotoInfo(){
                this.$http.get('../../allJSON/newsInfo.json').then(result=>{
                    if (result.body.status ===0){
                        this.photo = result.body.message[0]
                    }
                })
            },
            getThumbs(){
                this.$http.get('../../allJSON/photoThumbs.json').then(result=>{

                    if (result.body.status === 0){
                        //循环每个图片，给每张图片添加宽高
                        result.body.message.forEach(item=>{
                            item.w = 600
                            item.h = 400
                        })
                        //把完整的数据保存到list中
                        this.list = result.body.message
                        console.log(this.list)
                    }
                })
            },
            handleClose () {

                console.log('close event')
            }
        },
        components:{
            'cmt-box':commen
        },
    }
</script>
<style lang="scss">
    .photoInfoContainer{
        color: #2aabd2;
        padding: 3px;
        h3{
            color: rgb(255,78,34);
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subTitle{
            color: #9d9d9d;
            display: flex;
            font-size: 13px;
            justify-content: space-between;
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }
        .my-gallery{
            padding: 0 5px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            figure{
                margin: 5px 0;
                display: inline-block;
                img{
                    height: 100px;
                    width: 150px;
                    box-shadow: 0 0 8px #9d9d9d;
                }
            }
        }

    }
</style>