<template>
    <div class="goodsContainer">
        <!--<h4>this is a goodsList</h4>-->
        <router-link class="goodItem"v-for="item in goodList":key="item.id"to="/home/goodInfo">
            <img :src="item.img_src" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">{{item.new}}</span>
                    <span class="old">{{item.old}}</span>
                </p>
                <p class="sell">
                    <span>{{item.sell1}}</span>
                    <span>{{item.sell2}}</span>
                </p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default{
    data(){
        return{
            goodList:[],
        }
    },
    created(){
        this.getGoodList()
    },
    methods:{
        getGoodList(){
            this.$http.get('../../allJSON/goodlist.json').then(result=>{
                if (result.body.status === 0){
                    this.goodList = result.body.message
                }
            })
        }
    },
    }
</script>
<style lang="scss"scoped>
    .goodsContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 8px;
        .goodItem{
            width: 49%;
            margin: 3px 0;
            padding: 0 2px;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 149px;
            img{
                width: 100%;
            }
            h1{
                font-size: 13px;
            }
            .info{
                .price{
                    .new{
                        color: red;
                        font-size: 16px;
                        font-weight:600;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    margin: 0 3px;
                }
            }
        }
    }
</style>