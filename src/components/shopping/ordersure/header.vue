<template>
  <div class="header">
    <header>
      <div class="left" @click="back()"><img src="../../../assets/images/shopping/order/back.jpg">返回</div>
      <div class="right">
        <img src="../../../assets/images/shopping/talk.png">
      </div>
      <h2>订单确认</h2>
    </header>
    <div style="height: 50px"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      status: false
    }
  },
  methods: {
    back () {
      this.$router.push('/shopping/shoppingcar')
    }
  }
}
</script>
<style scoped>
/* 头部组件 */
  header{
    width: 100%;
    z-index: 10;
    background: white;
    line-height: 50px;
    height: 50px;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ca3232; 
  }
  header .right{
    position: absolute;
    right: 3%;
  }
  header .right img{
    width: 26px;
    height: 26px;
    margin-top: -6px;
    vertical-align: middle;
    margin-left: 8px;
  }
  header h2{
    font-size: 1.2rem; 
    text-align: center;
  }
  .left{
    position: absolute;
    left: 0%;
  }
  .left img{
    margin-right: 5px;
    height: 30px;
    vertical-align: -10px;
  }
  header .border{
    display: inline-block;
    line-height: 24px;
    padding: 0 6px;
    color: #bbbbbb;
    border-radius: 6px; 
    border: 1px solid #bbbbbb;
  }
  header .red{
    color: red;
    border: 1px solid red;    
  }
</style>
