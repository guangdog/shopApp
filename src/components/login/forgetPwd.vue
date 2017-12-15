<template>
  <div>
    <header>
			<p @click="back()"><img src="../../assets/images/back.png">返回</p>
			<h3>找回密码</h3>
		</header>
		<myforgetPage1 v-if="show1"></myforgetPage1>
		<myforgetPage2 v-if="show2"></myforgetPage2>
		<myforgetPage3 v-if="show3"></myforgetPage3>
  </div>
</template>

<script>
import forgetPage1 from './forgetPwd/forgetPage1.vue'
import forgetPage2 from './forgetPwd/forgetPage2.vue'
import forgetPage3 from './forgetPwd/forgetPage3.vue'
export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false
    }
  },
  methods: {
    back () {
      this.$router.push('/signRegister/sign')
    },
    toggle () {
      this.show1 = false
      this.show2 = false
      this.show3 = false
      if (this.$route.params.id === '1') {
        this.show1 = true
      } else if (this.$route.params.id === '2') {
        this.show2 = true
      } else {
        this.show3 = true
      }
    }
  },
  components: {
    myforgetPage1: forgetPage1,
    myforgetPage2: forgetPage2,
    myforgetPage3: forgetPage3
  },
  created () {
    this.toggle()
  },
  watch: {
    $route (val) {
      console.log(this.$route.params.id)
      this.toggle()
    }
  }
}
</script>

<style scoped="scoped">
header{
	background: #ca3232;
	color: white;
	height: 50px;
}
header h3{
	width: 100%;
	line-height: 50px;
	text-align: center;
}
header p{
	color: white;
	position: absolute;
	left: 10px;
	top: 10px;
	height: 25px;
	font-size: 14px;
	line-height: 20px;
}
header p img{
	vertical-align: -4px;
	margin-top: 4px;
	width: 15px;
	height: 20px;
	margin-right: 2px;
}
</style>
