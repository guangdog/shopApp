<template>
  <div class="pwd">
    <p>短信验证码已发送，请输入验证码</p>
    <p class="margin">
	    <input type="text" placeholder="验证码" :class="{red: disable}" v-model.number="mycode" @input="iscode()" @focus="clear()"/>
    </p>
    <p><button :class="{grey: disable}" @click="nextpage()">下一步</button></p>
    <p><button class="clear">{{time}}’后重新发送</button></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: '',
      mycode: '',
      disable: true,
      time: 30
    }
  },
  methods: {
    nextpage () {
      if (this.code === this.mycode) {
        this.$router.push('/forgetPwd/3')
      } else {
        this.mycode = '验证码错误'
        this.disable = true
      }
    },
    iscode () {
      if (this.mycode !== '') {
        this.disable = false
      } else {
        this.disable = true
      }
    },
    clear () {
      if (this.mycode === '验证码错误') {
        this.mycode = ''
      }
    }
  },
  created () {
    this.code = this.$store.state.code
    var s = setInterval(() => {
      if (this.time <= 0) {
        clearInterval(s)
        return
      }
      this.time--
    }, 1000)
  }
}
</script>

<style scoped="scoped">
	.pwd{
		padding: 30px 0;
	}
	.grey{
		background: grey;
		border: none;
		color: white;
	}
	.red{
		color: red;
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
		color: white;
		background: #ca3232;
	}
	.clear{
		border: none;
		background: #ffffff;
		color: #ca3232;
	}
</style>
