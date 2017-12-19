<template>
  <div class="personal">
    <div class="user">
      <div>
        <p><img src="../../../assets/images/shopping/icon2.png"></p>        
        <p>设置</p>
      </div>
      <div>
        <img  :class="{img:!username}" :src="userimg">
        <p v-if="username">{{username}}</p>
      </div>
    </div>

    <div class="owninfo">
      <div>
        <p>{{owninfoarr[0]}}</p>
        <p>收藏夹</p>
      </div>
      <div>
        <p>{{owninfoarr[1]}}</p>
        <p>关注店铺</p>
      </div>
      <div>
        <p>{{owninfoarr[2]}}</p>
        <p>我的足迹</p>
      </div>
    </div>

    <div class="info" v-if="username">
      <div>
        <p><img src="../../../assets/images/personal/icon1.jpg"></p>
        <p>我的结伴</p>
      </div>
      <div>
        <p><img src="../../../assets/images/personal/icon2.jpg"></p>
        <p>我的动态</p>
      </div>
      <div>
        <p><img src="../../../assets/images/personal/icon3.jpg"></p>
        <p>我的点赞</p>
      </div>
      <div>
        <p><img src="../../../assets/images/personal/icon4.jpg"></p>
        <p>我的相册</p>
      </div>
      <div>
        <p><img src="../../../assets/images/personal/icon5.jpg"></p>
        <p>我的签到</p>
      </div>
      <div>
        <p><img src="../../../assets/images/personal/icon6.jpg"></p>
        <p>我的资料</p>
      </div>
    </div>

    <div class="logout">
      <button @click="exit" v-if="username">退出</button>
      <button @click="login" class="button" v-if="!username">登录</button>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      userimg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3857518154,773375887&fm=27&gp=0.jpg',
      username: undefined,
      owninfoarr: [0, 0, 0]
    }
  },
  created () {
    this.select()
  },
  methods: {
    select () {
      if (localStorage.getItem('user')) {
        this.userimg = 'http://img0.imgtn.bdimg.com/it/u=2232846671,3368447981&fm=27&gp=0.jpg'
        this.username = localStorage.getItem('user')
        this.owninfoarr = [8, 4, 250]
      } else {
        this.userimg = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3857518154,773375887&fm=27&gp=0.jpg'
        this.username = undefined
        this.owninfoarr = [0, 0, 0]
      }
    },
    exit () {
      localStorage.removeItem('user')
      this.select()
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
  .personal{
    width: 100%;
    min-height: calc(100vh - 50px) ;
  }
  .user{
    box-sizing: border-box;
    padding: 10px 3%;
    width: 100%;
    height: 50vw;
    background: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=5608933,1123742943&fm=200&gp=0.jpg);
    background-size: 100% 100%;
    position: relative;
  }
  .user>div:first-child{
    width: 100%;
    position: relative;
  }
  .user>div:first-child p{
    line-height: 26px;
    color: white;
  }
  .user>div:first-child img{
    float: right;
    width: 26px;
    height: 26px;
  }
  .user>div:nth-child(2){
    display: flex;
    width: 80%;
    position: absolute;
    left: 0%;
    line-height: 20vw;
    top: 20vw
  }
  .user>div>img{
    margin-left: 5%;
    width: 20vw;
    border-radius: 50%; 
    height: 20vw;
  }
  .user>div>.img{
    position: absolute;
    left: 50%;
    margin-left: 0;
    /* transform: translateX(-50%); */
  }
  .user>div:nth-child(2) p{
    font-size: 22px;
    color: white;
    margin-left: 5%;
  }
  .user>div:nth-child(2) a{
    color: white;
  }
  .owninfo{
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    background: white;
    width: 100%;
    display: flex;
    padding: 5px 0;
  }
  .owninfo>div{
    flex: 1;
    text-align: center;
  }
  .owninfo>div>p:first-child{
    font-size: 16px;
    line-height: 30px;
  }
  .owninfo>div>p:last-child{
    font-size: 12px;
    line-height: 22px;
  }

  .info{
    border-top: 1px solid #dddddd;
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: white;
  }
  .info>div{
    width: 33vw;
    height: 33vw;
    border-right: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    text-align: center;
    justify-content: space-around;
  }
  .info>div:nth-child(3n){
    border-right: none;
  }
  .info>div img{
    margin-top: 7vw;
    width: 10vw;
    height: 10vw;
  }
  .info>div>p:last-child{
    line-height: 9vw; 
  }   
  .logout{
    margin-top: 10px;
    text-align: center;
  }
  .logout button{
    background:#2f435e;  
    color:#f2f2f2;  
    padding: 10px 50px 10px 50px;  
    font-size:16px;  
    font-family: 微软雅黑,宋体,Arial,Helvetica,Verdana,sans-serif;  
    font-weight:bold;  
    border-radius:3px; 
    -webkit-transition:all linear 0.30s;  
    -moz-transition:all linear 0.30s;  
    transition:all linear 0.30s;
  }
  .logout .button { background:#385f9e; } 
</style>
