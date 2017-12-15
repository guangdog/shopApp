<template>
  <div class="shoppingcar">
    <!-- 顶部 -->
    <header>
      <div class="right">
        <div style="display: inline-block" @click="toggle()">
          <span class="border" v-if="!status">编辑</span>
          <span class="border red" v-if="status">完成</span>
        </div>
        <img src="../../../assets/images/shopping/talk.png">
      </div>
      <h2>购物车</h2>
    </header>
    <div style="height: 50px"></div>

    <!-- 购物车里商品显示 -->
    <cargoods :status="status"></cargoods>  

    <!-- 底部 -->
    <carfooter :status="status"></carfooter>

  </div>
</template>
<script>
import cargoods from './cargoods.vue'
import carfooter from './carfooter.vue'
export default {
  data () {
    return {
      status: false
    }
  },
  components: {
    cargoods: cargoods,
    carfooter: carfooter
  },
  methods: {
    toggle () {
      this.status = !this.status
    }
  }
}
</script>
<style scoped>
  .shoppingcar{
    min-height: calc(100vh - 100px);
    background: #f1f1f1;
  }
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
    font-size: 1.3rem; 
    text-align: center;
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
