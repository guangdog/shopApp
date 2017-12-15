<template>
  <div class="parameter">
    <div><p>品牌</p><p>{{dataObj.brand}}</p></div>
    <div><p>包装方式</p><p>{{dataObj.packettype}}</p></div>
    <div><p>产品剂型</p><p>{{dataObj.producttype}}</p></div>
    <div><p>年龄</p><p>{{dataObj.age}}</p></div>
    <div><p>食品产地</p><p>{{dataObj.address}}</p></div>
    <div><p>保质期</p><p>{{dataObj.validity}}</p></div>
    <div><p>规格</p><p>{{dataObj.spec}}</p></div>
    <div><p>性别</p><p>{{dataObj.sex}}</p></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataObj: {
        brand: '2H&2D',
        packettype: '袋装',
        producttype: '片剂',
        age: '成人',
        address: '日本',
        validity: '36个月',
        spec: '350mg*60粒',
        sex: '通用'
      }
    }
  }
}
</script>
<style scoped>
.parameter{
  width: 100%;
  background: white;
}
.parameter>div{
  width: 100%;
  box-sizing: border-box;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd; 
}
.parameter>div P{
  width: 50%;
  line-height: 44px;
}
.parameter>div P:last-child{
  text-align: right;
}
.parameter>div P:first-child{
  color:#777777;
}
</style>
