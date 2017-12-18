<template>
  <div class="footer">
    <div>总计：￥{{sum}}</div>
    <div @click="gopay">确认支付</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      status: false
    }
  },
  methods: {
    gopay () {
      this.$router.push('/paytype')
    }
  },
  computed: {
    sum () {
      return this.$store.state.sumPrice
    }
  }
}
</script>
<style scoped>
.footer{
  box-sizing: border-box;
  border-top: 1px solid #dddddd; 
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  height: 50px;
}
.footer>div:first-child{
  float: left;
  margin-left: 3%;
  color: #ca3232;
  line-height: 50px;
  font-size: 16px;
}
.footer>div:last-child{
  float: right;  
  line-height: 50px;
  font-size: 16px;
  margin-right: 0;
  padding: 0 6%;
  height: 100%;
  background: #ca3232;
  color: white;
}
</style>
