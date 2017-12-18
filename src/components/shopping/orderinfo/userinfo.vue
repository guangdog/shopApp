<template>
  <div class="bg">
    <p class="name">孙笑川 <span>15611751086</span></p>
    <p class="address">地址：四川双流机场</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .bg{
    margin: 10px 0;
    width: 100%;
    height: 20vw;
    background: url(../../../assets/images/shopping/order/address.jpg);
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 4vw 11vw;
  }
  .name{
    font-size: 16px;
    line-height: 6vw;
  }
  .name span{
    margin-left: 10px;
  }
  .address{
    font-size: 14px;
    color: grey;
  }
</style>