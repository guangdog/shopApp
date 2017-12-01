<template>
  <div class="pwd">
    <p>请输入您的手机号码</p>
    <p class="margin">
	    <input type="text" placeholder="手机号" />
    </p>
    <p><button class="red" @click="nextpage()">下一步</button></p>
    <p><button class="clear">联系客服</button></p>
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
  		this.$router.push('/forgetPwd/2');
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
