<template>
  <div class="status">
    <ul>
      <li><span :class="{borred: status == 0}"></span></li>
      <li><span :class="{borred: status == 1}"></span></li>
      <li><span :class="{borred: status == 2}"></span></li>
      <li><span :class="{borred: status == 3}"></span></li>
    </ul>
    <ul>
      <li>
        <p :class="{fonred: status == 0}">待付款</p>
      </li>
      <li>
        <p :class="{fonred: status == 1}">待发货</p>
      </li>
      <li>
        <p :class="{fonred: status == 2}">已发货</p>
      </li>
      <li>
        <p :class="{fonred: status == 3}">已完成</p>
      </li>
    </ul>
    <ul>
      <li><P :class="{solid: status >= 0}"></P></li>
      <li><P :class="{solid: status >= 1}"></P></li>
      <li><P :class="{solid: status >= 2}"></P></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [],
      status: 0
    }
  },
  created () {
    this.status = this.$route.params.status
    console.log(this.status)
  }
}
</script>
<style scoped>
.status{
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
  background: white;
}
ul {
  margin: 0 3%;
  width: 94%;
  display: flex;
  list-style: none;
}
ul:first-child span{
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: grey;
}
ul li{
  z-index: 10;
  line-height: 28px;
  flex: 1;
  color: grey;
  font-size: 14px;
  text-align: center;
}
ul:first-child .borred{
  vertical-align: -3px;
  border: 3px solid #ca3232;
  background: white;
}
.fonred{
  color: #ca3232;
}
ul:last-child{
  z-index: 1;
  width: 70%;
  left: 12%;
  position: absolute;
  top: 8px;  
}
ul:last-child li p{
  height: 14px;
  border-bottom: 1px dashed grey; 
}
ul:last-child li .solid{
  border-bottom: 1px solid grey; 
}
</style>