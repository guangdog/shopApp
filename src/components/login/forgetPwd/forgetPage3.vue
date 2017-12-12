<template>
  <div class="pwd">
    <p>设置新密码</p>
    <p>
	    <input type="password" placeholder="新密码" v-model="newpwd" />
    </p>
    <p class="margin">
	    <input class="surePwd" type="password" placeholder="确认新密码" v-model="newpwd2" />
    </p>
    <p><button  :class="{grey: disable}" @click="nextpage()">完成</button></p>
  </div>
</template>

<script>
import { setNewPassWord } from '../../../api/login'
export default {
  data () {
    return {
      newpwd: '',
      newpwd2: '',
      disable: true
    }
  },
  methods: {
    nextpage () {
      if (!this.disable) {
        if (this.newpwd !== this.newpwd2) {
          this.disable = true
          this.newpwd = ''
          this.newpwd2 = ''
          console.log('俩次密码不一致')
        } else {
          var data = {
            phone: this.$store.state.phone,
            password: this.newpwd
          }
          setNewPassWord(data).then(res => {
            if (!res.data.error_code) {
              console.log('修改密码成功：' + this.newpwd)
              this.$router.push('/login')
            } else {
              console.log('修改密码失败')
            }
          })
        }
      }
    }
  },
  watch: {
    newpwd () {
      if (this.newpwd !== '' && this.newpwd2 !== '' && this.newpwd.length >= 6 && this.newpwd2.length >= 6) {
        this.disable = false
      } else {
        this.disable = true
      }
    },
    newpwd2 () {
      if (this.newpwd !== '' && this.newpwd2 !== '' && this.newpwd.length >= 6 && this.newpwd2.length >= 6) {
        this.disable = false
      } else {
        this.disable = true
      }
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
	.grey{
		background: grey;
		border: none;
		color: white;
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
		background: #ca3232;
		color: white;
	}
	.clear{
		background: #ffffff;
		color: #ca3232;
	}
</style>
