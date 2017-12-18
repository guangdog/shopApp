<template>
  <div class="ordersure">
    <orderhead></orderhead>
    <userinfo></userinfo>
    <goodsinfo></goodsinfo>
    <div class="border">
      <div>配送方式</div>
      <div>厂家直邮 邮费￥25<img src="../../../assets/images/shopping/order/go.jpg"></div>
    </div>
    <div class="border">
      <div>优惠卷</div>
      <div>10元优惠卷<img src="../../../assets/images/shopping/order/go.jpg"></div>
    </div>    
    <div style="height: 50px;"></div>
    <orderfooter></orderfooter>
  </div>  
</template>
<script>
import orderhead from './header.vue'
import userinfo from './userinfo.vue'
import goodsinfo from './goodsinfo.vue'
import orderfooter from './footer.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    orderhead,
    orderfooter,
    goodsinfo,
    userinfo
  }
}
</script>
<style scoped>
.ordersure{
  min-height: calc(100vh - 50px);
  background: #f1f1f1;
}
.border{
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
  margin-bottom: 10px;
  background: white;
  display: flex;
}
.border>div:first-child{
  width: 30%;
  color: grey;
}
.border>div:last-child{
  width: 70%;
  text-align: right;
}
.border img{
  margin: 0 2vw;
  vertical-align: -4px;
  height: 20px;
}
</style>
