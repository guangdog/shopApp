<template>
<div>
  <div class="ts" v-if="!user">
      <div>
        <P>您还未登录，无法查看此功能</P>
        <p><button @click="gologin()">去登录</button></p>
      </div>
  </div>

  <div id="ordermanage" v-if="user">
    <managehead></managehead>
    <div class="more">
      <div>
        <div @click="showchoose('0')" :class="{red:isshow[0]}">待付款</div>
        <div @click="showchoose('1')" :class="{red:isshow[1]}">待发货</div>
        <div @click="showchoose('2')" :class="{red:isshow[2]}">已发货</div>
        <div @click="showchoose('3')" :class="{red:isshow[3]}">已完成</div>
      </div>
    </div>

    <waitpay v-if="isshow[0]"></waitpay>
    <waitdelivery v-if="isshow[1]"></waitdelivery>
    <shipped v-if="isshow[2]"></shipped>
    <finished v-if="isshow[3]"></finished>
  </div>
</div>
</template>
<script>
import managehead from './header.vue'
import waitpay from './waitpay.vue'
import waitdelivery from './waitdelivery.vue'
import shipped from './shipped.vue'
import finished from './finished.vue'
export default {
  components: {
    managehead,
    waitpay,
    waitdelivery,
    shipped,
    finished
  },
  data () {
    return {
      isshow: [true, false, false, false],
      user: undefined
    }
  },
  methods: {
    showchoose (i) {
      this.isshow = [false, false, false, false]
      this.isshow[i] = true
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
#ordermanage{
  width: 100%;
  min-height: calc(100vh - 50px);
  background: #f1f1f1;
}
.more{
  background: white; 
}
.more>div:first-child{
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 10px;
}
.more>div:first-child>.red{
  color: #ca3232;
  border-bottom: 1.5px solid #ca3232; 
}
.more>div:first-child{
  width: 100%;
  display: flex;
}
.more>div:first-child>div{
  flex: 1;
  text-align: center;
  height: 44px;
  color: #666666;
  line-height: 44px;
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
