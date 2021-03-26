<template>
  <div>
  <div class="recommend-title">周末去哪儿</div>
  <ul>
    <router-link  to="/detail" class="list-item" v-for="item in weekendList" :key="item.id" v-slot="{ navigate,href }" custom>
    <li @click="navigate">
        <div class="item-img">
            <img :src="item.imgUrl" />
        </div>
        <div class="item-info">
             <div class="info-title">{{item.title}}</div>
             <div class="info-comment">{{item.comment}}</div>              
        </div>
    </li>
    </router-link>
    </ul>
</div>
</template>

<script>
export default {
  name: "homeWeekend",
  props:{
    "weekendList":Array
  },
  data:function() {
    return {
      
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
div
  box-sizing border-box
.recommend-title
  width 100%
  height 0.8rem
  background #eee
  line-height 0.8rem
  font-size 0.28rem
  padding 0 0.2rem


.list-item .item-img
  width 100%
  height 0
  padding-bottom 32%

.list-item .item-img img
  width 100%

.list-item .item-info
  padding .1rem .2rem .2rem

.list-item .item-info .info-title
  width 100%
  height .48rem
  line-height .48rem
  font-size .28rem
  ellipsis()
  

.list-item .item-info .info-comment
  width 100%
  height .42rem
  line-height .42rem
  font-size .24rem
  color lightTxtColor


</style>