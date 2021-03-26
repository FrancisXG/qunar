<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624</span>
            </div>
        <div class="header-middle">
            <input class="header-input" type="text /">
            <span class="iconfont search-icon">&#xe632</span>
            <div class="i-text">输入城市/景点/游玩主题</div>
        </div>
        <router-link to="/city">
        <div class="header-right">
            {{this.city}}
            <span class="iconfont search-icon">&#xe6aa</span></div>
            </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        props:{
            city:String
        }

    }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    
    .header {
        display flex
        width 100%
        height 0.88rem
        background-color $bgColor
        color #fff

    }

    .header .header-left {
        width .8rem 
        height 100%
        line-height 0.88rem
        text-align center
    }

    .header .header-middle {
        position relative
        flex 1
        margin .14rem 0
    }


    .header .header-right {
        width 1.32rem
        height 100%
        text-align center
        line-height 0.88rem
        color #fff
        
    }

    .header-input{
        width 100%
        height 100%
        border-radius 5px

    }
    .i-text{
        position absolute
        top 0.18rem 
        left 0.5rem
        color #e4e7ea
    }

    .header .header-middle .search-icon{
        position absolute
        top 0.15rem 
        left 0.1rem
        color #e4e7ea
    }


</style>