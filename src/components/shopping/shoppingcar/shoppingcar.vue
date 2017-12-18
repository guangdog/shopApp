<template>
  <div class="shoppingcar">
    <div class="ts" v-if="!user">
      <div>
        <P>您还未登录，无法查看此功能</P>
        <p><button @click="gologin()">去登录</button></p>
      </div>
    </div>
    <div v-if="user">
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

  </div>
</template>
<script>
import cargoods from './cargoods.vue'
import carfooter from './carfooter.vue'
export default {
  data () {
    return {
      status: false,
      user: undefined
    }
  },
  components: {
    cargoods: cargoods,
    carfooter: carfooter
  },
  methods: {
    toggle () {
      this.status = !this.status
    },
    gologin () {
      setTimeout(() => {
        this.$router.push('/login')
      }, 500)
    }
  },
  created () {
    if (!localStorage.getItem('user')) {
      this.user = false
    } else {
      this.user = true
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
    font-size: 1.2rem; 
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
  .ts{
    box-sizing: border-box;
    padding-top: 20vw;
    height: calc(100vh - 50px);
  }
  .ts>div>p{
    margin-bottom: 20px;
    line-height: 40px;
    text-align: center;
  }
  .ts>div>p>button{
    border: none;
    background:#2f435e;  
    color:#f2f2f2;  
    padding: 10px 30px 10px 30px;  
    font-size:16px;  
    font-family: 微软雅黑,宋体,Arial,Helvetica,Verdana,sans-serif;  
    font-weight:bold;  
    border-radius:3px;  
    -webkit-transition:all linear 0.30s;  
    -moz-transition:all linear 0.30s;  
    transition:all linear 0.30s;  
  }
  .ts>div>p>button:hover { background:#385f9e; }  
</style>
