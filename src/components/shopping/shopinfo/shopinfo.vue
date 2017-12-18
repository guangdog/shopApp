<template>
  <div id="shopinfo">
    <div class="header">
      <div><img src="../../../assets/images/shopping/info/back.png" @click="back()"></div>
      <div>
        <img src="../../../assets/images/shopping/info/talk.png">        
        <img src="../../../assets/images/shopping/info/share.png">
      </div>
    </div>

    <!-- 轮播组件 -->
    <infobanner :banner="bannerList" :height="'100'"></infobanner>

    <div class="go">
      <div>
        <div><img src="../../../assets/images/shopping/info/zheng.jpg"></div>
        <div><p>100%</p><p>正品保证</p></div>
      </div>
      <div>
        <div><img src="../../../assets/images/shopping/info/plane.jpg"></div>
        <div><p>100%</p><p>日本直供</p></div>
      </div>
      <div>
        <div><img src="../../../assets/images/shopping/info/seven.jpg"></div>
        <div><p>7天</p><p>无理由退换</p></div>
      </div>
      <div>
        <div><img src="../../../assets/images/shopping/info/go.jpg"></div>
      </div>
    </div>

    <div class="padding">
      <div class="col2">
        <div>{{obj.goodsname}} {{obj.description}} {{obj.stock}}粒</div>
        <div>
          <p><img src="../../../assets/images/shopping/info/ear.jpg"></p>
          <p>客服</p>
        </div>
      </div>
      <p class="newpri">￥<span>{{obj.price}}</span></p>
      <p v-if="obj.parameter != '' && obj.parameter != null" class="oldpri">市场价 <s>￥{{obj.parameter}}</s></p>
      <div class="col3">
        <div>运费 ￥25</div>
        <div>销量 2046</div>
        <div><span class="area">保税区</span></div>
      </div>
    </div>

    <div class="line"><div><p></p></div><div>往上滑动查看详情</div><div><p></p></div></div>

    <div class="more">
      <div>
        <div @click="showchoose('0')" :class="{red:isshow[0]}">商品详情</div>
        <div @click="showchoose('1')" :class="{red:isshow[1]}">评价(2)</div>
        <div @click="showchoose('2')" :class="{red:isshow[2]}">规格参数</div>
      </div>
    </div>

    <detail v-show="isshow[0]"></detail>
    <evaluate v-show="isshow[1]"></evaluate>
    <parameter v-show="isshow[2]"></parameter>
    
    <div style="height:56px"></div>
    <div class="footer">
      <div @click="goshopcar()">
        <span v-show="count" class="sum">{{count}}</span>
        <p><img src="../../../assets/images/shopping/info/shoppingcar.png"></p>
        <p>购物车</p>
      </div>
      <div>
        <p><img src="../../../assets/images/shopping/info/own.png"></p>
        <p>收藏</p>
      </div>
      <div class="btn" :class="{active: active}" @click="pushshopcar()">加入购物车</div>
      <div class="btn">立即购买</div>
    </div>

  </div>
  
</template>

<script>
import { getShopInfoById } from '../../../api/shopping'
import parameter from './parameter.vue'
import evaluate from './evaluate.vue'
import detail from './detail.vue'
import banner from '../homepage/banner.vue'
export default {
  components: {
    parameter: parameter,
    evaluate: evaluate,
    detail: detail,
    infobanner: banner
  },
  data () {
    return {
      isshow: [true, false, false],
      obj: '',
      bannerList: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      active: false,
      count: 0
    }
  },
  created () {
    // 用户未登录
    if (!localStorage.getItem('user')) {
      this.count = 0
      this.active = false
    } else {
      // 用户已登录
      this.active = true
      if (localStorage.getItem('goodsdata')) {
        var arr = JSON.parse(localStorage.getItem('goodsdata'))
        for (let i = 0; i < arr.length; i++) {
          this.count += arr[i].number
        }
      }
    }

    var id = this.$route.params.id
    getShopInfoById({ id: id }).then(res => {
      this.obj = res.data.data
      for (var i = 0; i < 5; i++) {
        if (this.obj['pic' + i] != null) {
          if (this.obj['pic' + i].substr(0, 4) !== 'http') {
            this.obj['pic' + i] = 'http://114.55.249.153:8028' + this.obj['pic' + i]
          }
          this.bannerList.push({imgpath: this.obj['pic' + i]})
        }
      }
    })
  },
  methods: {
    back () {
      this.$router.push('/shopping')
    },
    showchoose (i) {
      this.isshow = [false, false, false]
      this.isshow[i] = true
    },
    // 加入购物车
    pushshopcar () {
      if (this.active) {
        this.count++
        if (!localStorage.getItem('goodsdata')) {
          var str = JSON.stringify([{id: this.obj.id, name: this.obj.goodsname, img: this.obj.pic0, price: this.obj.price, oldprice: this.obj.parameter, number: 1}])
          localStorage.setItem('goodsdata', str)
        } else {
          var data = localStorage.getItem('goodsdata')
          var arr = JSON.parse(data)
          var type = false
          // 查询数据中是否有改商品 有则数量增加
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === this.obj.id) {
              arr[i].number++
              type = true
              break
            }
          }
          if (type === false) { // 没有则向数组里添加
            arr.push({id: this.obj.id, name: this.obj.goodsname, img: this.obj.pic0, price: this.obj.price, oldprice: this.obj.parameter, number: 1})
          }
          data = JSON.stringify(arr)
          localStorage.setItem('goodsdata', data)
        }
      }
    },
    // 跳转购物车
    goshopcar () {
      this.$router.push('/shopping/shoppingcar')
    }
  }
}
</script>
<style scoped="scoped">
.header{
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
}
.header>div{
  width: 50%;
}
.header>div:last-child img{
  float: right;
}
.header img{
  width: 11vw;
  margin: 10px 6%;
}
#shopinfo{
  background: #f1f1f1;
  font-size: 14px;
}
.sum{
  position: absolute;
  right: 4px;
  top: 2px;
  display: block;
  padding: 0px 8px;
  border-radius: 8px; 
  background: red;
  color: white;
}
.go{
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  background: white;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 3%;
  display: flex;
  justify-content: space-between;
}
.go>div{
  box-sizing: border-box;
  font-size: 11px;
  color: red;
  width: 31%;
  display: flex;
}
.go>div img{
  margin-right: 4px;
  width: 30px;
}
.go>div:last-child{
  width: 7%;
}
.go>div:last-child img{
  float: right;
  margin-right: 0px;
}
.col3{
  color: #bbbbbb;
  margin-top: 10px;
  border-top: 1px solid #dddddd; 
  line-height: 40px;
  display: flex;
  justify-content: space-around;
}
.col3>div{
  text-align: center;
  width: 33%;
}
.col2{
  margin: 5px 0;
  display: flex;
}
.col2>div:first-child{
  width: 80%;
}
.col2>div:last-child{
  border-left: 1px solid #dddddd;
  position: absolute;
  right: 0;
  width: 18%;
  box-sizing: border-box;
}
.col2>div:last-child img{
  width: 50%;
  float: left;
  margin: 0 25%;
}
.col2>div:last-child p{
  font-size: 12px;
  color: #777777;
  text-align: center;
}
.padding{
  margin-top: 6px;
  background: white;
  box-sizing: border-box;
  padding: 0 3%;
  padding-top: 5px;  
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
.line{
  margin: 0 3%;
  width: 94%;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 12px;
  padding: 5px 0;
}
.line>div{
  width: 34%;
}
.line>div p{
  height: 20px;
  border-bottom: 1px solid #cccccc;
}
.line>div:nth-of-type(2){
  width: 32%;
  color: #777777;
  text-align: center;
}
.col3>div{
  background: white;
  width: 100%;
}
.more{
  background: white; 
}
.more>div:first-child{
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
.more>div:first-child>.red{
  color: #ca3232;
  border-bottom: 1.5px solid #ca3232; 
}
.more>div:first-child{
  width: 100%;
  display: flex;
}
.more>div:first-child>div{
  flex: 1;
  text-align: center;
  height: 44px;
  color: #666666;
  line-height: 44px;
}
.col3>div:first-child{
  text-align: left;
}
.col3>div:last-child{
  text-align: right;
}
.area{
  padding: 2px 6px;
  color: #f38873;
  border: 1px solid #f38873;
  border-radius: 4px; 
}
.newpri{
  color: #ff7200;
  font-size: 18px;
}
.newpri span{
  font-size: 22px;
}
.oldpri{
  color: #999999;
  font-size: 16px;
}
.footer{
  box-sizing: border-box;
  border-top: 1px solid #dddddd;
  height: 50px;
  background: white;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
}
.footer>div{
  width: 18%;
}
.footer>div:first-child{
  position: relative;
  box-sizing: border-box;
  border-right: 1px solid #dddddd; 
}
.footer>div>p{
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: #999999;
}
.footer>div>p>img{
  margin-top: 3px;
  width: 28px;
  vertical-align: -5px;
}
.footer>.btn{
  text-align: center;
  line-height: 50px;
  color: white;
}
.footer>.btn:nth-of-type(3){
  box-sizing: border-box;
  border-left: 1px solid #dddddd; 
  width: 34%;
  background: gainsboro;
}
.footer>.active{
  background: #ff6060 !important;
}
.footer>.btn:nth-of-type(4){
  background: #ca3232;
  width: 30%;
}
</style>
