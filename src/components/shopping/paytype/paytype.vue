<template>
  <div class="paytype">
    <payheader></payheader>
    <div class="type" @click="zfb()">
      <div><img src="../../../assets/images/zfb.png"></div>
      <div>支付宝支付</div>
      <div><img src="../../../assets/images/shopping/order/go.jpg"></div>
    </div>
    <div class="type" @click="wechat()">
      <div><img src="../../../assets/images/wechat.png"></div>
      <div>微信支付</div>
      <div><img src="../../../assets/images/shopping/order/go.jpg"></div>
    </div>
  </div>
</template>
<script>
import payheader from './header.vue'
export default {
  components: {
    payheader
  },
  data () {
    return {}
  },
  methods: {
    zfb () {
      this.$router.push('/shopping/ordermanage')
    },
    wechat () {
      this.$router.push('/shopping/ordermanage')
    }
  }
}
</script>
<style scoped>
.paytype{
  min-height: 100vh;
  background: #f1f1f1;
}
.type{
  display: flex;
  width: 100%;
  padding: 4vw 0;
  background: white;
  border-bottom: 1px solid #dddddd;
}
.type>div{
  height: 12vw;
}
.type>div:first-child{
  width: 18vw;
  color: grey;
}
.type>div:nth-child(2){
  width: 72vw;
  line-height: 12vw;
  font-size: 1.2rem;
}
.type>div:last-child{
  width: 10vw;
  text-align: right;
}
.type>div:first-child img{
  margin: 0 3vw;
  vertical-align: -4px;
  height: 12vw;
}
.type>div:last-child img{
  margin: 3vw;
  width: 4vw;
  /* vertical-align: -4px; */
  height: 7vw;
}
</style>
