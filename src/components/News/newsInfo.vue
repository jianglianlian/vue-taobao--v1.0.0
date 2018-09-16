<template>
    <div class="newsContainer1">
        <h5>{{newsInfo.title}}</h5>
        <p class="subtitle">
            <span>{{newsInfo.add_time}}</span>
            <span>{{newsInfo.click}}</span>
        </p>
        <hr>
        <div class="content"v-html="newsInfo.content"></div>
        <!--//评论区-->
        <commentTalk :id="this.id"></commentTalk>
    </div>
</template>
<script>
    import {Toast} from'mint-ui'
    import comment from'../subComponents/comment.vue'
    export default {
        data(){
            return{
                id:this.$route.params.id,
                newsInfo:{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.get('../../allJSON/newsInfo.json').then(result=>{
                    if(result.body.status === 0){
                        this.newsInfo = result.body.message[0]
                    }else{
                        Toast('获取信息错误')
                    }
                })
            }
        },
        components:{
            "commentTalk":comment
        }
    }
</script>
<style lang="scss"scoped>
    .newsContainer1{
        h5{
            color: #dd524d;
        }
        .content{
            font-family: "仿宋";
        }
    }
</style>