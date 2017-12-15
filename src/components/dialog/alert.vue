<template>
  <div class="dialog" v-show="this.$store.state.isalert">
    <div class="showbox">
      <div class="top">
        <slot name="warn"></slot>
      </div>
      <div class="bottom">
        <button @click="sure">确定</button>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  props: ['isshow'],
  data () {
    return {
    }
  },
  methods: {
    sure () {
      this.$store.commit('alertshow', false)
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
    padding: 20px 5%;    
    margin-bottom: 50px;
  }
  .bottom button{
    height: 50px;
    box-sizing: border-box;    
    width: 100%;
    border: 1px solid grey;
    border-left: none;   
    border-bottom: none; 
  }
  .bottom button{
    background: #ca3232;
    color: white;
  }
</style>
