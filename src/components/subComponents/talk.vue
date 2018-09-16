<template>
    <div class="talkContainer">
        <div class="mui-card">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell"v-for="item in msglist":key="item.msg">
                <p>{{item.msg}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {Toast} from'mint-ui'
    export default {
        data(){
            return{
                msglist:[]
            }

        },
        created(){
            this.getT()
        },
        methods:{
            getT(){
                this.$http.get('../../allJSON/tall.json').then(result=>{
                    if (result.body.status === 0){
                        this.msg = result.body.message
                    } else {
                        Toast('获取消息失败')
                    }
                })
            }
        },
    }
</script>