<template>
  <div class="pwd">
    <p>短信验证码已发送，请输入验证码</p>
    <p class="margin">
	    <input type="text" placeholder="验证码" />
    </p>
    <p><button class="red" @click="nextpage()">下一步</button></p>
    <p><button class="clear">28’后重新发送</button></p>
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
  		this.$router.push('/forgetPwd/3');
  	}
  }
}
</script>

<style scoped="scoped">
	.pwd{
		padding: 30px 0;
	}
	P{
		text-align: center;
		width: 90%;
		margin: 25px 5% 0;
	}
	.margin{
		margin-bottom: 50px;
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
		border: none;
		background: #ffffff;
		color: #ca3232;
	}
</style>
