<template>
    <div class="boxContainer">
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1"
                   @change="countChanged"ref="number"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
    import mui from '../../lib/js/mui.js'
    export default {
        mounted(){
            mui('.mui-numbox').numbox()
        },
        methods:{
            countChanged(){
            }
        }
    }
</script>
<style lang="scss"scoped></style>