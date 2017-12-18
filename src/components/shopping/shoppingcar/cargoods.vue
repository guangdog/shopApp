<template>
  <div>
    <div class="content">
        <div v-for="(item,index) in arr" :key="index" class="goods">
          <div><span class="checkbox" :class="{checked: +str[index] }" @click="check(index)"></span></div>
          <div><img :src="item.img"></div>
          <div>
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}} <s class="oldpri" v-if="item.oldprice != '' && item.oldprice != null " >￥{{item.oldprice}}</s></p>
            <p class="number" v-show="!status"><span>X{{item.number}}</span></p>
            <p class="number" v-show="status"><button @click="decrease(index)">-</button><button>{{item.number}}</button><button @click="increase(index)">+</button></p>
          </div>
        </div>
        <div v-if="!arr.length">
          <p class="null">您的购物车空空如也。。。</p>
        </div>
        <div class="sum" v-show="status">小计：<span>￥{{sum}}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['status'],
  data () {
    return {
      arr: [],
      str: '',
      countArr: []
    }
  },
  created () {
    this.queryToLocal()
  },
  methods: {
    queryToLocal () {
      this.str = ''
      if (localStorage.getItem('goodsdata') !== null) {
        this.arr = JSON.parse(localStorage.getItem('goodsdata'))
        for (var i = 0; i < this.arr.length; i++) {
          this.str += 0
          this.countArr.push({num: this.arr[i].number, pri: this.arr[i].price})
        }
        this.$store.commit('checkchoose', this.str)
        this.$store.commit('countprice', this.countArr)
      }
    },
    decrease (i) {
      if (this.arr[i].number > 1) {
        this.arr[i].number--
        localStorage.setItem('goodsdata', JSON.stringify(this.arr))
        this.countArr[i].num--
        this.$store.commit('countprice', this.countArr)
      }
    },
    increase (i) {
      this.arr[i].number++
      localStorage.setItem('goodsdata', JSON.stringify(this.arr))
      this.countArr[i].num++
      this.$store.commit('countprice', this.countArr)
    },
    check (index) {
      // 点击的时候设置指定的位置的字符串为0/1
      var newStr = ''
      for (var i = 0; i < this.str.length; i++) {
        if (i === index) {
          newStr += (+!+this.str[i])
        } else {
          newStr += (+this.str[i])
        }
      }
      this.str = newStr
      this.$store.commit('countprice', this.countArr)
      this.$store.commit('checkchoose', newStr)
    }
  },
  computed: {
    listencheckIndex () {
      return this.$store.state.checkIndex
    },
    dialog () {
      return this.$store.state.dialog
    },
    sum () {
      return this.$store.state.sumPrice
    }
  },
  watch: {
    // 检测vuex中checkIndex值是否发生变化
    listencheckIndex (val) {
      this.str = val
      this.$store.commit('countprice', this.countArr)
    },
    dialog (val) {
      if (!val) {
        this.queryToLocal()
        console.log(this.str)
      }
    }
  }
}
</script>
<style scoped>
  /* 内容 */
  .content{
    margin-bottom: 50px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    background: white;
  }
  .content p{
    width: 100%;
  }
  .sum{
    border-top: 1px solid #dddddd;
    line-height: 36px;
    margin-left: 3%;
  }
  .sum span{
    color: #ca3232;
  }
  .checkbox{
    background: none;
    border: 1.5px solid #d7d7d7;
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    float: left;
  }
  .content p{
    height: 2rem;
  }
  .number{
    line-height: 2rem;
  }
  .number span{
    float: right;
    margin-right: 5%;
  }
  .number button{
    border: none;
    width: 1.8rem;
    height: 1.8rem;
    font-size: 1.2rem;
  }
  .number button:first-child{
    border-radius: 8px 0 0 8px; 
    background: #f7f7f7;
    color: #999999;
  }
  .number button:nth-child(2){
    width: 2.6rem;
    margin: 0 1px;
    color: #8c8c8c;
    background: #e6e6e6;
  }
  .number button:last-child{
    width: 1.8rem;
    color: #999999;
    background: #e6e6e6;
    border-radius: 0 8px 8px 0; 
  }
  .name{
    font-size: 0.8rem;
    line-height: 1rem;
  }
  .price{
    font-size: 1.2rem;
    line-height: 2rem;
  }
  .oldpri{
    color: grey;
    font-size: 12px;
  }
  .goods{
    padding: 0.8rem 0;
    width: 100%;
    display: flex;
  }
  .goods>div:first-child{
    width: 20px;
    margin: 0 3%;
  }   
  .goods>div:first-child span{
    margin-top: 3rem;
    -webkit-transform: translateY(-10px);
  }  
  .goods>div:nth-child(2){
    width: 6rem;
    height: 6rem;    
    overflow: hidden;
    border: 1px solid #dddddd;
    box-sizing: border-box;
         
  }
  .goods>div:nth-child(2) img{
    width: 100%;
    height: 100%;
  }
  .goods>div:last-child{
    width: calc(88% - 20px - 6rem);
    padding: 0 3%;
  } 
  .goods>div:last-child>p:nth-child(2){
    color: #ca3232;
  }
  .null{
    padding-top: 30px;
    color: grey;
    text-align: center;  
  }
  .checked{
    background: red;
  }
  .checked::after{
    content: '√';
    display: inline-block;
    width: 100%;
    color: white;
    text-align: center;
  }
</style>
