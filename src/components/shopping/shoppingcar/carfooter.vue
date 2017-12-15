<template>
  <div>
    <div class="footer" v-show="!status">
      <div>
        <div class="right"><p>合计：￥{{sum}}</p><p>(不包含运费)</p></div>        
        <div class="left"><span class="allcheck" @click="allcheck()" :class="{checked: bool}"></span>全选</div>
      </div>
      <div @click="gopay()">去付款</div>
    </div>

    <div class="footer white" v-show="status">
      <div>
        <div class="right grey">移至收藏夹</div>        
        <div class="left"><span class="allcheck" :class="{checked: bool}" @click="allcheck()"></span>全选</div>
      </div>
      <div @click="confirm()">删除</div>
    </div>

    <confirm></confirm>
    <alert><div slot="warn" style="text-align:center">请先选择商品</div></alert>
  </div>
</template>
<script>
import confirm from '../../dialog/confirm.vue'
import alert from '../../dialog/alert.vue'
export default {
  components: {
    confirm,
    alert
  },
  props: ['status'],
  data () {
    return {
      bool: false
    }
  },
  methods: {
    confirm () {
      if (this.$store.state.checkIndex.indexOf(1) !== -1) {
        this.$store.commit('dialogshow', true)
      } else {
        this.$store.commit('alertshow', true)
      }
    },
    gopay () {
      if (this.$store.state.checkIndex.indexOf(1) === -1) {
        this.$store.commit('alertshow', true)
      } else {
        this.$router.push('/ordersure')
      }
    },
    allcheck () {
      this.bool = !this.bool
      var str = this.$store.state.checkIndex
      var newStr = ''
      for (var i = 0; i < str.length; i++) {
        newStr += +this.bool
      }
      this.$store.commit('checkchoose', newStr)
    }
  },
  computed: {
    listencheckIndex () {
      return this.$store.state.checkIndex
    },
    sum () {
      return this.$store.state.sumPrice
    }
  },
  watch: {
    listencheckIndex (val) {
      if (val.indexOf(0) === -1) {
        this.bool = true
      } else {
        this.bool = false
      }
    }
  }
}
</script>
<style scoped>
/* 底部组件 */
  .footer{
    border-top: 1px solid #dddddd; 
    position: fixed;
    bottom: 50px;
    height: 50px;
    width: 100%;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    color: white;
  }
  .white{
    background: rgba(255, 255, 255, 1);
  }
  .footer .allcheck{
    background: none;
    border: 1.5px solid white;
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    float: left;
    margin: 13px 3% 0;
  }
  .white .allcheck{
    border: 1.5px solid #d7d7d7;
  }
  .white .left{
    color: black;
  }
  .footer>div:first-child{
    width: 70%;
  }
  .footer>div:first-child .right{
    float: right;
    padding-right: 6%;
    text-align: right;
  }
  .footer>div:first-child .right p:first-child{
    font-size: 16px;
    margin-top: 5px;
  }
  .footer>div:first-child .right p:last-child{
    font-size: 12px;
    color: #717171;
  }
  .footer>div:first-child .left{
    line-height: 50px;
  }
  .footer>div:last-child{
    width: 30%;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    background: #ca3232;
  }
  .grey{
    line-height: 50px;
    font-size: 16px;
    margin-right: 0;
    padding: 0 6%;
    height: 100%;
    background: grey;
  }
  .footer .checked{
    position: relative;
    background: red;
  }
  .footer .checked::before{
    position: absolute;
    top: 0;
    content: '√';
    display: inline-block;
    line-height: 20px;
    width: 100%;
    color: white;
    text-align: center;
  }
</style>
