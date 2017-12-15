<template>
  <div class="nav">
    <div class="choose" @click="jump('0')">
      <p v-show="!isshow[0]"><img src="../../assets/images/shopping/nav/icon1.png"></p>
      <p v-show="isshow[0]"><img src="../../assets/images/shopping/nav/icon1_active.png"></p>
      <p :class="{red:isshow[0]}">首页</p>
    </div>
    <div class="choose" @click="jump('1')">
      <p v-show="!isshow[1]"><img src="../../assets/images/shopping/nav/icon2.png"></p>
      <p v-show="isshow[1]"><img src="../../assets/images/shopping/nav/icon2_active.png"></p>
      <p :class="{red:isshow[1]}">购物车</p>
    </div>
    <div class="choose" @click="jump('2')">
      <p v-show="!isshow[2]"><img src="../../assets/images/shopping/nav/icon3.png"></p>
      <p v-show="isshow[2]"><img src="../../assets/images/shopping/nav/icon3_active.png"></p>
      <p :class="{red:isshow[2]}">订单管理</p>
    </div>
    <div class="choose" @click="jump('3')">
      <p v-show="!isshow[3]"><img src="../../assets/images/shopping/nav/icon4.png"></p>
      <p v-show="isshow[3]"><img src="../../assets/images/shopping/nav/icon4_active.png"></p>
      <p :class="{red:isshow[3]}">个人中心</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isshow: [false, false, false, false]
    }
  },
  methods: {
    jump (i) {
      this.isshow = [false, false, false, false]
      this.isshow[i] = true
      i === '0' ? this.$router.push('/shopping/homepage') : i === '1' ? this.$router.push('/shopping/shoppingcar') : i === '2' ? this.$router.push('/shopping/ordermanage') : this.$router.push('/shopping/personal')
    }
  },
  created () {
    if (this.$route.path.indexOf('homepage') !== -1) {
      this.isshow[0] = true
    } else if (this.$route.path.indexOf('shoppingcar') !== -1) {
      this.isshow[1] = true
    } else if (this.$route.path.indexOf('ordermanage') !== -1) {
      this.isshow[2] = true
    } else if (this.$route.path.indexOf('personal') !== -1) {
      this.isshow[3] = true
    }
  }
}
</script>

<style scoped="scoped">
  .nav{
    box-sizing: border-box;
    height: 50px;
    border-top: 1px solid #cccccc; 
    background: white;
    width: 100%;
    display: flex;
    font-size: 14px;
    justify-content: space-around;
  }
  .choose{
    width: 25%;
  }
  .choose img{
    vertical-align: -5px;
    width: 24px;
    margin-top: 3px;
  }
  .choose p{
    color: #bbbbbb;
    text-align: center;
  }
  .choose .red{
    color: #ca3232;
  }
</style>
