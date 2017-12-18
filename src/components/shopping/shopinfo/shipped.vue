<template>
  <div class="goods">
    <div class="head">
      <div>订单编号： 00001451452</div>
      <div>已发货</div>
    </div>
    <div v-for="(item,index) in arr" :key="index" class="info">
      <div><img :src="item.img"></div>
      <div>
        <div>
          <p class="name">{{item.name}}</p>
          <p><span class="border">保税区</span></p>
        </div>
        <div>
          <p class="price">￥{{item.price}}</p>
          <p class="number" ><span>X{{item.number}}</span></p>
        </div>
      </div>
    </div>
    <div class="sum">共{{arr.length}}件商品 <span>合计：<span>￥{{sum+25}}.00</span></span>(运费￥25.00)</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [],
      sum: 877
    }
  },
  created () {
    this.queryToLocal()
  },
  methods: {
    queryToLocal () {
      this.str = ''
      this.arr = [
        {"id":14,"name":"日本2H2D 黑玛卡 60粒","img":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=49366202,632101467&fm=27&gp=0.jpg","price":219,"oldprice":"596.00","number":4},
        {"id":11,"name":"Metabolicl巴西莓酶素果昔代餐分","img":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=49366202,632101467&fm=27&gp=0.jpg","price":1,"oldprice":"","number":1},
      ]
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
.goods{
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
  background: white;
}
.sum{
  text-align: right;
  font-size: 10px;
  line-height: 36px;
  margin-right: 3%;
}
.head{
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dddddd;
  line-height: 36px;
}
.head>div:first-child{
  width: 70%;
  color: gray;
  font-size: 10px;
}
.head>div:last-child{
  width: 30%;
  font-size: 14px;
  box-sizing: border-box;
  padding-right: 3vw;
  text-align: right;
  color: #f38873;
}
.sum>span{
  font-size: 12px;
  margin: 0 4px;
}
.goods p{
  height: 2rem;
}
.number{
  font-size: 16px;
}
.number span{
  float: right;
  margin-right: 5%;
}
.name{
  margin-bottom: 4px;
  overflow: hidden;
  font-size: 0.8rem;
  line-height: 1rem;
}
.price{
  font-size: 16px;
  line-height: 1.5rem;
}
.info{
  padding: 0.8rem 0;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dddddd;
}
.info>div:first-child{
  width: 4rem;
  height: 4rem;    
  overflow: hidden;
  border: 1px solid #dddddd;
  box-sizing: border-box;
}   
.info>div:first-child img{
  width: 100%;
  height: 100%;
}
.info>div:last-child{
  display: flex;
  width: calc(97% - 4rem);
  padding: 0 3%;
} 
.info>div:last-child>p:nth-child(2){
  color: #ca3232;
}
.info>div:last-child>div:first-child{
  width: 65%;
} 
.info>div:last-child>div:last-child{
  width: 35%;
  text-align: right;
} 
.border{
  font-size: 12px;
  padding: 2px 6px;
  color: #f38873;
  border: 1px solid #f38873;
  border-radius: 4px;
}
</style>