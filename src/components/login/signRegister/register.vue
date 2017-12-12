<template>
    <div>
        <div class="box" id="zhuce">
            <p><input type="text" @focus="clear('phone')" @input="isyzm()" :class="{red:phoneRed}" v-model.trim="phone" placeholder="请输入您的手机号"><img src="../../../assets/images/icon1.jpg"></p>
            <p><input type="text" @focus="clear('yzm')" :class="{red:yzmRed}" v-model="yzm" placeholder="请输入验证码"><img src="../../../assets/images/icon2.jpg"><button :class="{succ:issucc}" class="hq" @click="getyzm()">{{yzmts}}</button></p>
            <p><input type="password" @focus="clear('pwd')" :class="{red:pwdRed}" v-model="pwd" placeholder="请输入密码"><img src="../../../assets/images/icon3.jpg"></p>
            <p><input type="password" @focus="clear('qrpwd')" :class="{red:qrpwdRed}" v-model="qrpwd" placeholder="请确认密码"><img src="../../../assets/images/icon4.png"></p>
            <p><button @click="register()">注册</button></p>
        </div>
    </div>
</template>

<script>
import { regUserWithPhone, SendMMSCode } from '../../../api/login'
export default {
  data () {
    return {
      phone: '',
      yzm: '',
      pwd: '',
      qrpwd: '',
      phoneRed: false,
      yzmRed: false,
      pwdRed: false,
      qrpwdRed: false,
      yzmts: '获取验证码',
      issucc: false,
      code: ''
    }
  },
  methods: {
    clear (val) {
      switch (val) {
        case 'phone':
          if (this.phoneRed) {
            this.phone = ''
            this.phoneRed = false
          }
          break
        case 'yzm':
          if (this.yzmRed) {
            this.yzm = ''
            this.yzmRed = false
          }
          break
        case 'pwd':
          if (this.pwdRed) {
            this.pwd = ''
            this.pwdRed = false
          }
          break
        case 'qrpwd':
          if (this.qrpwdRed) {
            this.qrpwd = ''
            this.qrpwdRed = false
          }
          break
      }
    },
    register () {
      if (this.phone === '') {
        this.phone = '手机号不能为空'
        this.phoneRed = true
      } else {
        if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.phone))) {
          this.phone = '请填写正确的手机号码'
          this.phoneRed = true
          return
        }
        if (this.yzm === '') {
          this.yzm = '验证码不能为空'
          this.yzmRed = true
        } else {
          if (this.code === '' || this.code !== this.yzm) {
            this.yzm = '请填写正确的验证码'
            this.yzmRed = true
            return
          }
          if (this.pwd === '') {
            this.pwd = '密码不能为空'
            this.pwdRed = true
          } else {
            if (this.qrpwd === this.pwd) {
              var data = {
                phone: this.phone,
                password: this.pwd
              }
              regUserWithPhone(data).then(res => {
                if (res.data.flag === '1') {
                  console.log('注册成功')
                  this.$router.push('/startPage')
                }
              })
            } else {
              this.qrpwd = '两次密码不一致'
              this.qrpwdRed = true
            }
          }
        }
      }
    },
    // 验证码是否可用
    isyzm () {
      if ((/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.phone))) {
        this.issucc = true
      } else {
        this.issucc = false
      }
    },
    // 获取验证码
    getyzm () {
      if (this.issucc) {
        this.issucc = false
        let time = 60
        let s
        s = setInterval(() => {
          if (time <= 0) {
            clearInterval(s)
            this.issucc = true
            this.yzmts = '获取验证码'
            return
          }
          time--
          this.yzmts = time + 's后请重试'
        }, 1000)
        var data = {
          phone: this.phone
        }
        SendMMSCode(data).then(res => {
          console.log(res.data)
          this.code = res.data.code
        })
      }
    }
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
    
    .box p .succ{
        background: #ca3232;
    }
    
    .hq{
        position: absolute;
        right: 0;
        top: -3px;
        width: 30%;
        background: grey;
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