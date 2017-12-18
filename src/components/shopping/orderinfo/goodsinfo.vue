<template>
<div >
  <div class="goodsinfo">
    <div>
      <p class="grey">订单清单</p>
    </div>
    <div>
      <p><span>X2</span><span>￥99.00</span>商品名称</p>
    </div>
    <div>
      <p><span>X2</span><span>￥36.00</span>商品名称</p>
      <p class="grey" style="margin-top: 8px">实际付款</p>
    </div>
    <div>
      <p><span class="red">￥180.00</span>实付金额：</p>
      <p class="grey"><span>￥220.00</span>商品原价：</p>
      <p class="grey"><span>-￥40.00</span>活动优惠：</p>
      <p class="grey"><span>￥0.00</span>积分抵用：</p>
      <p class="grey"><span>￥0.00</span>行邮税：</p>
      <p class="grey"><span>￥25.00</span>订单邮费：</p>
    </div>
    <div>
      <p><span class="red">￥18.00</span>产品收益金额：</p>
      <p><span class="red">￥12.00</span>分销收益金额：</p>
    </div>
  </div>

  <div class="time">
    <p class="grey">订单编号：{{bh}}</p>
    <p class="grey">创建时间：2017-12-18 15：53：05</p>
    <p class="grey">付款时间：2017-12-18 15：53：05</p>
    <p class="grey">发货时间：2017-12-18 15：53：05</p>
    <p class="grey">签收时间：2017-12-18 15：53：05</p>
    <p class="grey">分润时间：2017-12-18 15：53：05</p>
  </div>
</div>

</template>
<script>
export default {
  data () {
    return {
      arr: [],
      bh: ''
    }
  },
  created () {
    this.bh = this.$route.params.bh
  }
}
</script>
<style scoped>
.goodsinfo,.time{
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
  background: white;
  margin-bottom: 10px;
}
.time{
  padding: 4px 3%;
  margin-bottom: 0px;
}
.goodsinfo>div{
  font-size: 14px;
  padding: 6px 0;
  border-bottom: 1px solid #dddddd;
}
.goodsinfo>div>p>span{
  float: right;
  margin-right: 3%;
}
.goodsinfo>div:last-child{
  border-bottom: none;
}
.grey{
  line-height: 20px;
  color: grey;
  font-size: 12px;
}
.red{
  color: #ca3232;
}
</style>