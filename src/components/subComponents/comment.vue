<template>
    <div class="comContainer">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="最多只能输入120字"maxlength="120"v-model="msg"></textarea>

        <mt-button type="primary" size="large"@click.prevent="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item"v-for="(item,index) in comments":key="item.add_time">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp&nbsp用户：{{item.userName}}&nbsp&nbsp发表时间：{{item.add_time}}
                </div>
                <div class="cmt-body">
                    {{item.comment === 'undefined' ? '此用户很懒什么也没有留下':item.comment}}
                </div>
            </div>
        </div>
        <!--<mt-button type="danger" size="large" plain @click = 'getMore'>加载更多</mt-button>-->
    </div>
</template>
<script>
    import {Toast} from'mint-ui'
    export default {
        data(){
            return{
                msg:'',
                comments:[],
            }
        },
        created(){
            this.getComment()
        },
        methods:{
            getComment(){//获取评论
                this.$http.get('../../allJSON/talk.json').then(result=>{
                    if(result.body.status === 0){
                        this.comments = this.comments.concat(result.body.message)
                    }else{
                        Toast('获取失败')
                    }
                })
            },
            postComment(){
                if(this.msg.trim().length === 0){
                    Toast('评论不能为空')
                }
                this.$http.get('../../allJSON/talk.json',{
                    comment:this.msg.trim()
                }).then(function (result) {
                    if(result.body.status === 0){
                      var com = {
                          userName:"匿名用户",add_time:Date.now(),
                          comment:this.msg.trim()
                      }
                      this.comments.unshift(com)
                        this.msg =''
                    }
                })
            }
        },
        props:['id']
    }
</script>
<style lang="scss"scoped>
.comContainer{
    h3{
        color: #2aabd2;
        font-size: 16px;
    }
    textarea{
        margin: 0;
        font-size: 13px;
        height: 85px;
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>