<template>
	<div>
		<div class="box" id="zhuce">
			<p><input type="text" @focus="clear('phone')" :class="{red:phoneRed}" v-model="phone" placeholder="请输入您的手机号"><img src="../../../assets/images/icon1.jpg"></p>
			<p><input type="text" @focus="clear('yzm')" :class="{red:yzmRed}" v-model="yzm" placeholder="请输入验证码"><img src="../../../assets/images/icon2.jpg"></p>
			<p><input type="text" @focus="clear('pwd')" :class="{red:pwdRed}" v-model="pwd" placeholder="请输入密码"><img src="../../../assets/images/icon3.jpg"></p>
			<p><input type="text" @focus="clear('qrpwd')" :class="{red:qrpwdRed}" v-model="qrpwd" placeholder="请确认密码"><img src="../../../assets/images/icon4.png"></p>
			<p><button @click="register()">注册</button></p>
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			 return {
			 	phone:'',
			 	yzm:'',
			 	pwd:'',
			 	qrpwd:'',
			 	phoneRed:false,
			 	yzmRed:false,
			 	pwdRed:false,
			 	qrpwdRed:false
		    }
		},
		methods:{
			clear(val){
				switch(val){
					case 'phone': 
						if(this.phoneRed==true){
							this.phone=''; 
							this.phoneRed=false; 
						}
					break;
					case 'yzm': 
						if(this.yzmRed==true){
							this.yzm=''; 
							this.yzmRed=false;
						}
					break;
					case 'pwd': 
						if(this.pwdRed==true){
							this.pwd=''; 
							this.pwdRed=false;
						}
					break;
					case 'qrpwd': 
						if(this.qrpwdRed==true){
							this.qrpwd=''; 
							this.qrpwdRed=false;
						}
					break;
				}
			},
			register(){
				if(this.phone==''){
					this.phone='手机号不能为空'
					this.phoneRed=true
				}else{
					if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))){
						this.phone='请填写正确的手机号码'
						this.phoneRed=true
						return ;
					}
					if(this.yzm==''){
						this.yzm='验证码不能为空'
						this.yzmRed=true
					}else{
						if(this.pwd==''){
							this.pwd='密码不能为空'
							this.pwdRed=true
						}else{
							if(this.qrpwd==this.pwd){							
								var url = 'http://114.55.249.153:8028/login/register';
								var options = {
									phone:this.phone,
									password:this.pwd
								}
								this.$http.post(url,options,{ emulateJSON: true }).then((res)=>{
									if(res.data.flag=='1'){
										console.log("注册成功")
										this.$router.push('/startPage');
									}
								})
							}else{
								this.qrpwd='两次密码不一致'
								this.qrpwdRed=true
							}
						}
					}
				}
			},
		}
		
	}
</script>

<style scoped="scoped">

	.box {
		width: 100%;
	}
	.red {
		color: red;
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

</style>