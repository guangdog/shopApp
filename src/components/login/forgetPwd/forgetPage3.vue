<template>
  <div class="pwd">
    <p>设置新密码</p>
    <p>
	    <input type="text" placeholder="新密码" />
    </p>
    <p class="margin">
	    <input class="surePwd" type="text" placeholder="确认新密码" />
    </p>
    <p><button class="red" @click="nextpage()">完成</button></p>
  </div>
</template>

<script>
export default {

  data () {
    return {
			
    }
  },
  methods:{
  	nextpage(){
  		this.$router.push('/startPage');
  	}
  }
}
</script>

<style scoped="scoped">
	.pwd{
		padding: 30px 0;
	}
	.margin{
		margin-bottom: 50px;
	}
	P{
		text-align: center;
		width: 90%;
		margin: 25px 5% 0;
	}
	P input{
		width: 100%;
		line-height: 40px;
		text-align: center;
		border: none;
		border-bottom: 1px solid #dddddd;
	}
	p button{
		width: 100%;
		border: 1px solid #ca3232;
		border-radius: 4px;
		line-height: 40px;
	}
	.red{
		background: #ca3232;
		color: white;
	}
	.clear{
		background: #ffffff;
		color: #ca3232;
	}
</style>
