<template>
    <div>
        <header>
            <p @click="back()"><img src="../../assets/images/back.png">返回</p>
            <img src="../../assets/images/signbg.jpg" />
        </header>
        <div class="choose">
            <div :class="{ active:change }" @click='denglu()'>登录<img :class="{ show:change }" class="sanjiao" src="../../assets/images/choose.jpg"></div>
            <div :class="{ active:!change }" @click='zhuce()'>注册<img :class="{ show:!change }" class="sanjiao" src="../../assets/images/choose.jpg"></div>
        </div>
        
        <mysign v-if="signshow"></mysign>
        <myregister v-if="registershow"></myregister>

    </div>
</template>

<script>
import sign from './signRegister/sign.vue'
import register from './signRegister/register.vue'
export default {
  data () {
    return {
      signshow: false,
      registershow: false,
      change: true
    }
  },
  methods: {
    denglu () {
      this.change = true
      this.$router.push('/signRegister/sign')
    },
    zhuce () {
      this.change = false
      this.$router.push('/signRegister/register')
    },
    back () {
      this.$router.push('/login')
    },
    toggle () {
      if (this.$route.params.type === 'sign') {
        this.change = true
        this.signshow = true
        this.registershow = false
      } else {
        this.change = false
        this.signshow = false
        this.registershow = true
      }
    }
  },
  components: {
    mysign: sign,
    myregister: register
  },
  created () {
    this.toggle()
  },
  watch: {
    $route (val) {
      this.toggle()
    }
  }
}
</script>

<style scoped="scoped">
    header {
        width: 100%;
        overflow: hidden;
        height: 60vw;
    }
    header p{
        color: white;
        position: absolute;
        left: 10px;
        top: 10px;
        height: 25px;
        font-size: 14px;
        line-height: 20px;
    }
    header p img{
        vertical-align: -4px;
        margin-top: 4px;
        width: 15px;
        height: 20px;
        margin-right: 2px;
    }
    header>img{
        width: 100%;
        height: 100%;
    }
    .choose {
        width: 100%;
        display: flex;
        background: #f3f3f3;
    }
    .choose>div {
        width: 50%;
        text-align: center;
        line-height: 3.125rem;
        color: #d7d7d7;
        position: relative;
    }
    
    .choose>.active {
        color: #777777;
    }
    
    .box {
        width: 100%;
    }
    
    .box p {
        width: 90%;
        margin: 10px 5% 0;
        position: relative;
        line-height: 40px;
        height: 40px;
        padding: 5px 0;
        text-align: center;
    }
    
    input {
        border: none;
        border-bottom: 1px solid #dddddd;
        width: 100%;
        height: 100%;
        line-height: 100%;
        text-align: center;
    }
    
    .box p img {
        position: absolute;
        left: 0;
        top: 10px;
        height: 30px;
    }
    
    
    button {
        width: 90%;
        margin: 0 5%;
        background: #ca3232;
        color: white;
        border: none;
        border-radius: 4px;
        line-height: 40px;
    }
    
    #zhuce input {
        text-align: left;
        box-sizing: border-box;
        padding-left: 15%;
    }
    
    .fogetpwd {
        font-size: 12px;
    }
    
    .choose img {
        position: absolute;
        width: 14px;
        bottom: 0;
        left: 50%;
        margin-left: -7px;
        display: none;
    }
    
    .choose .show {
        display: block;
    }
</style>