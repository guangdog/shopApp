<template>
  <div class="pwd">
    <p>请输入您的手机号码</p>
    <p class="margin">
	    <input type="text" @focus="clear()" placeholder="手机号" @input="isphone()" v-model="phone"/>
    </p>
    <p><button :class="{grey: disable}" @click="nextpage()">下一步</button></p>
    <p><button class="clear">联系客服</button></p>
  </div>
</template>

<script>
import { findPassWord } from '../../../api/login'
export default {
  data () {
    return {
      disable: true,
      phone: ''
    }
  },
  methods: {
    nextpage () {
      console.log(this.disable)
      if (!this.disable) {
        var data = {
          phone: this.phone
        }
        findPassWord(data).then((res) => {
          if (!res.data.error_code) {
            localStorage.setItem('code', res.data.code)
            localStorage.setItem('phone', this.phone)
            this.$router.push('/forgetPwd/2')
          } else {
            this.phone = res.data.msg
          }
        })
      }
    },
    isphone () {
      if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.phone))) {
        this.disable = true
        return
      }
      this.disable = false
    },
    clear () {
      if (this.phone === '该手机号未注册') {
        this.phone = ''
      }
    }
  }
}
</script>

<style scoped="scoped">
	.grey{
		background: grey;
		border: none;
		color: white;
	}
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
		color: white;
		background: #ca3232;
	}
	.clear{
		background: #ffffff;
		color: #ca3232;
	}
</style>
