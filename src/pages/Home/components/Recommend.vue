<template>
  <div>
  <div class="recommend-title"><span class="iconfont r-icon">&#xe757</span>猜你喜欢</div>
  <ul>
    <router-link  to="/detail" class="list-item" v-for="item in this.recommendList" :key="item.id" v-slot="{ navigate,href }" custom>
    <li @click="navigate">
        <div class="item-img">
            <img :src="item.imgUrl" />
        
        </div>
        <div class="item-img-tag">{{item.tag}}</div>
        <div class="item-info">
            <div class="inner-box">
                <div class="info-title">{{item.title}}</div>
                <div class="info-comment">
                    <span class="iconfont i-star">&#xe670</span>
                    <span class="iconfont i-star">&#xe670</span>
                    <span class="iconfont i-star">&#xe670</span>
                    <span class="iconfont i-star">&#xe670</span>
                    <span class="iconfont i-star">&#xe670</span>
                    <span class="comment-num">{{item.commentNum}}条评论</span>
                </div>
                <div class="info-price"><span class="price">¥<em>{{item.price}}</em></span>起
                <span class="district">{{item.district}}</span>
                </div>
                
                
            </div>
        </div>
    </li>
    </router-link>
    </ul>
</div>
</template>

<script>
export default {
  name: "homeRecommend",
  props:{
    "recommendList":Array
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
  font-size 0.3rem
  padding 0 0.2rem
.recommend-title .r-icon
  color red
  margin-right 0.1rem
.list-item
  width 100%
  height 2.4rem
  display flex
  position relative
.list-item .item-img
  width 2.4rem
  height 2.4rem
  padding 0.2rem
.list-item .item-img-tag
  width 1.1rem
  height 0.4rem
  background url('https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png') // img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png) ;
  background-size 100% 100%
  position absolute
  top 0.2rem
  left 0.2rem
  font-size 0.2em
  color #fff
  line-height 0.38rem
  text-indent 0.04rem
.list-item .item-img img
  width 100%
  height 100%
.list-item .item-info
  flex 1
  padding 0.4rem 0.1rem
  min-width 0
.list-item .item-info .inner-box
  width 100%
  height 100%
.item-info .inner-box .info-title
  width 100%
  height 0.6rem
  line-height 0.6rem
  font-size 0.32rem
  ellipsis()
.item-info .inner-box .info-comment
  width 100%
  height 0.4rem
  line-height 0.4rem
  font-size 0.24rem
.item-info .inner-box .info-comment .i-star
  font-size 0.2rem
  color #ffb436
.item-info .inner-box .info-comment .comment-num
  color $lightTxtColor
.item-info .inner-box .info-price
  position relative
  width 100%
  height 0.6rem
  line-height 0.6rem
  color $lightTxtColor
.item-info .inner-box .info-price .price
  color #ff8300
.item-info .inner-box .info-price em
  font-size 0.4rem
.item-info .inner-box .info-price .district
  position absolute
  bottom 0
  right 0.24rem
</style>