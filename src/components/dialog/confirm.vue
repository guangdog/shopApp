<template>
  <div class="dialog" v-show="this.$store.state.dialog">
    <div class="showbox">
      <div class="top">
        您确认要删除该商品吗？
      </div>
      <div class="bottom">
        <button @click="sure">确定</button>
        <button @click="cancle">取消</button>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    sure () {
      var str = localStorage.getItem('goodsdata')
      var arr = JSON.parse(str)
      if (arr.length === 1 || this.$store.state.checkIndex.indexOf(0) === -1) {
        localStorage.removeItem('goodsdata')
      } else {
        for (var i = 0; i < this.$store.state.checkIndex.length; i++) {
          if (+this.$store.state.checkIndex[i]) {
            arr.splice(i, 1)
          }
        }
        localStorage.setItem('goodsdata', JSON.stringify(arr))
      }
      this.$store.commit('dialogshow', false)
    },
    cancle () {
      this.$store.commit('dialogshow', false)
    }
  }
}
</script>
<style scoped>
  .dialog{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    top: 0;
    background: rgba(0, 0, 0, 0.7)
  }
  .showbox{
    overflow: hidden;    
    position: relative;
    width: 60%;
    box-sizing: border-box;    
    border-radius: 6px; 
    background: white;
    margin: 50vh 20% 0; 
    transform: translateY(-50%);
  }
  .bottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
  }
  .top{
    padding: 10px 5%;    
    margin-bottom: 36px;
  }
  .bottom button{
    height: 36px;
    box-sizing: border-box;    
    width: 50%;
    border: 1px solid grey;
    border-left: none;   
    border-bottom: none; 
  }
  .bottom button:first-child{
    background: #ca3232;
    color: white;
  }
  .bottom button:last-child{
    border-right: none;    
  }
</style>
