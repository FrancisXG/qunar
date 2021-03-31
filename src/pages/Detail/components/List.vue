<template>
<div>
  <div class="list-item" v-for="(item, index) in categoryList" :key="index">
    <div class="list-item-title border-bottom"><i class="item-title-icon"></i>{{item.title}}</div>
    <div v-if="item.children" class="item-children">
      <detail-list :list="item.children"></detail-list>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name:"DetailList",
  props:{
    categoryList:Array
  },
  data:function(){
    return{
     
    }
  },
  updated() {
    // console.log(this.categoryList)
  },


}
</script>

<style lang="stylus" scoped>
.list-item-title
  width 100%
  height .8rem
  line-height .8rem
  font-size .32rem
  padding 0 .2rem
  text-indent .4rem

.list-item-title .item-title-icon
  display inline-block
  position absolute 
  width .36rem
  height .36rem
  top .26rem
  left .2rem
  background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
  margin-right .1rem
  background-size .4rem 3rem

.list-item .item-children
  width 100%
  height 100%
  padding 0 .2rem

</style>