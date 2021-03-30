<template>
  <div>
  <router-link to="/" v-slot="{ navigate,href }" custom >
  <div class="header-back" @click="navigate" v-show="showHeaderBack">
    <span class="iconfont icon-back">&#xe624</span>
  </div>
  </router-link>
  <div class="header" :style="opacityStyle" v-show="!showHeaderBack">
    <router-link to="/" class="header-left" >
    <span class="iconfont icon-left-back">&#xe624</span>
  </router-link>
      鼋头渚(AAAAA景区)
  </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  components: {},
  data:function(){
    return{
      showHeaderBack:true,
      opacityStyle:{
        opacity:0
      }

    }
  },
  methods:{
    handlescroll:function(){
      let top = document.documentElement.scrollTop
      if(top > 10){
        var opacity = top / 100
        opacity = opacity>1?1:opacity 
        this.opacityStyle.opacity = opacity
        this.showHeaderBack = false
      }
      else{
        this.showHeaderBack = true
        this.opacityStyle.opacity = 0
      }
    }
  },
  activated:function(){
    window.addEventListener('scroll',this.handlescroll)
  },
  deactivated() {
    window.removeEventListener('scroll',this.handlescroll)
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-back
  position absolute
  top 0.2rem
  left 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  text-align center
  border-radius 0.4rem
  background-color rgba(0, 0, 0, 0.3)


.header-back .icon-back
  color #fff
  font-size 0.4rem

.header
  position fixed 
  top 0
  left 0
  right 0
  height .88rem
  line-height .88rem
  background $bgColor
  text-align center
  color #fff
  font-size .32rem
  z-index 2

.header .header-left
  display inline-block
  width .8rem
  height 100%
  color #fff
  position absolute
  top 0
  left 0
</style>