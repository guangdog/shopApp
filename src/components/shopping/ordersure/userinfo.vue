<template>
  <div class="bg" @click="address()">
    <p class="name">孙笑川 <span>15611751086</span></p>
    <p class="address">地址：四川双流机场</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    address () {
      this.$router.push('/addresschoose')
    }
  }
}
</script>
<style scoped>
  .bg{
    width: 100%;
    height: 20vw;
    background: url(../../../assets/images/shopping/order/userbg.jpg);
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 4vw 11vw;
    margin-bottom: 10px;
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