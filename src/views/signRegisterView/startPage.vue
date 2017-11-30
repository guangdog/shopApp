<template>
  <div class="startpage">
  	<img id="logo" src="../../assets/images/logo.png" />
		<div class="box">
			<p><button>微信一键登录</button><img src="../../assets/images/wx.jpg"></p>
			<p><button @click="sign()" >登录</button><button @click="register()" class="clear">新用户</button></p>
			<p class="bottom">Copyright @ 2016 logo.com</p>
		</div>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  },
  methods:{
  	sign(){
  		this.$router.push('/signRegister/sign')
  	},
  	register(){
  		this.$router.push('/signRegister/register')
  	}
  }
}
</script>

<style scoped='scoped'>
.startpage{
	width: 100vw;
	height: 100vh;
	background: url(../../assets/images/bg.png);
	background-size: 100vw 100vh;
}
#logo{
	width: 40vw;
	position: absolute;
	top: 20vh;
	left: 30%;
}
.box{
	width: 100%;
	position: absolute;
	bottom: 0;
}
.box>p{
	margin: 20px 5% 0 ;
	width: 90%;
	height: 40px;
	line-height: 40px;
}
.box>p:nth-child(1) button{
	width: 100%;
	background: #00a80c;
	height: 100%;
	border: none;
	color: white;
}
.box>p:nth-child(1){
	position: relative;
}
.box>p:nth-child(1) img{
	position: absolute;
	height: 90%;
	left: 50%;
	bottom: 0px;
	margin-left: -76px;
}
.box>p:nth-child(2){
	display: flex;
	justify-content: space-between;
}
.box>p:nth-child(2) button{
	height: 100%;
	width: 45%;
}
.box>p:nth-child(2) button:first-child{
	border: 1px solid white;
	color: #ca3232;
	background: white;
}
button{
	border-radius: 4px;
}
.clear{
	background: none;
	border: 1px solid white;
	color: white;
}
.bottom{
	color: white;
	font-size: 10px;
	text-align: center;
}
</style>
