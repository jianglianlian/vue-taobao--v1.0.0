<template>
    <div>
        <!--//缩略图-->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media"v-for="newsItem in newsList" :key="newsItem.id">
                <router-link :to="'/home/newsInfo'+newsItem.id">
                    <img class="mui-media-object mui-pull-left" :src="newsItem.img">
                    <div class="mui-media-body">
                        <h4>{{newsItem.title}}</h4>
                        <p class="mui-ellipsis">
                            <span>{{newsItem.add_time}}</span>
                            <span>{{newsItem.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import Toast from 'mint-ui'
export default {
    data(){
        return{
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){//获取新闻列表
            this.$http.get('../../allJSON/newsList.json').then(result=>{
                if(result.body.status === 0){
                    //获取成功
                    this.newsList = result.body.message;
                }else{
                    Toast('加载失败了....')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h4{
                font-size: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .mui-ellipsis{
                font-size: 12px;
                display: flex;
                justify-content:space-between ;
            }
        }
    }
</style>