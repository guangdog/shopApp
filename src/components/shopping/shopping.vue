<template>
  <div id="shopping">
    
		<div class="header">
    	<div></div>
    	<div>
    		<input type="text" placeholder="搜索你喜欢的商品、店铺">
    		<img class="search" src="../../assets/images/shopping/search.png">
    	</div>
    	<div><img src="../../assets/images/shopping/icon2.png"></div>
    </div>
    <div style="height: 50px;"></div>
    
		<div class="banner" >
			<swiper :options="swiperOption" ref ='mySwiper'>
				<swiper-slide v-for="data in dataObj.bannerList" :key="data.id"><img :src="data.imgpath"></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
    </div>

		<div class="menu border">
			<div>
				<div><img src="../../assets/images/shopping/shopList1.png"></div>
				<div>新品上架</div>
			</div>
			<div>
				<div><img src="../../assets/images/shopping/shopList2.png"></div>
				<div>排毒养颜</div>
			</div>
			<div>
				<div><img src="../../assets/images/shopping/shopList3.png"></div>
				<div>减肥塑形</div>
			</div>
			<div>
				<div><img src="../../assets/images/shopping/shopList4.png"></div>
				<div>女士调理</div>
			</div>
			<div>
				<div><img src="../../assets/images/shopping/shopList5.png"></div>
				<div>运动营养</div>
			</div>
			<div>
				<div><img src="../../assets/images/shopping/shopList6.png"></div>
				<div>心血管健康</div>
			</div>
			<div>
				<div><img src="../../assets/images/shopping/shopList7.png"></div>
				<div>男士健康</div>
			</div>
			<div>
				<div><img src="../../assets/images/shopping/shopList8.png"></div>
				<div>精品套装</div>
			</div>
		</div>

		<div class="week border">
			<div>
				<p class="title"><span class="right">更多主打</span><span class="left">本周主打</span></p>
			</div>
			<div class="col2">
				<div v-for="data in dataObj.weekRecommend" :key="data.id" @click="shopinfo(data.id)">
					<div>
						<p>{{data.goodsname}}</p>
						<p class="orange">{{data.description}}</p>
					</div>
					<div>
						<img :src="data.pic0">
					</div>
				</div>
			</div>
		</div>

		<div class="month border">
			<div>
				<p class="title"><span class="right">更多好货</span><span class="left">本月主打</span></p>
			</div>
			<div  class="col2">
				<div v-for="data in dataObj.monthRecommend" :key="data.id" @click="shopinfo(data.id)">
					<div>
						<p>{{data.goodsname}}</p>
						<p class="gery">{{data.description}}</p>
					</div>
					<div>
						<img :src="data.pic0">
					</div>
				</div>
			</div>
		</div>

		<div class="border family" style="margin-bottom:0px;">
			<div>
				<p class="title"><span class="right">更多实惠</span><span class="left">家庭套装</span></p>
			</div>
			<div  class="col3">
				<div v-for="data in dataObj.homeRecommend" :key="data.id" @click="shopinfo(data.id)">
					<p>{{data.goodsname}}</p>
					<p><span class="blue" style="margin-right: 4px;">￥{{data.price}}</span><s class="gery">￥{{data.parameter}}</s></p>
					<p><img :src="data.pic0"></p>
				</div>
			</div>
		</div>

		<div class="line"><div><p></p></div><div>为您推荐</div><div><p></p></div></div>

		<div class="recommend">
			<div v-for="data in dataObj.recommendList" :key="data.id" @click="shopinfo(data.id)">
				<div><img :src="data.pic0"></div>
				<div class="recontent">
					<div class="reright">
						<p class="newPri">￥{{data.price}}</p>
						<p class="oldPri"><s>{{data.parameter}}</s></p>
					</div>
					<div>
						<p>{{data.goodsname}}</p>
						<p>{{data.description}}</p>
					</div>
				</div>
			</div>
		</div>

  </div>
</template>

<script>
import { selectData } from '../../api/shopping'
export default {
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  data () {
    return {
      dataObj: {
        bannerList: [],
        monthRecommend: [],
        homeRecommend: [],
        recommendList: []
      },
      listQuery: {
        page: 1,
        limit: 10
      },
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // autoplay: {
          // stopOnLastSlide: true
        // }
        autoplay: true
      }
    }
  },
  mounted () {
    // console.log(this.swiper)
  },
  created () {
    selectData(this.listQuery).then(res => {
      console.log(res)
      this.dataObj = res.data
      for (const key in this.dataObj.bannerList) {
        if (this.dataObj.bannerList[key].imgpath.substr(0, 4) !== 'http') {
          this.dataObj.bannerList[key].imgpath = 'http://114.55.249.153:8028' + this.dataObj.bannerList[key].imgpath
        }
      }
    })
  },
  methods: {
    shopinfo (id) {
      this.$router.push('/shopinfo/' + id)
    }
  }
}
</script>

<style scoped="scoped">
  #shopping{
		background: #f1f1f1;
		font-size: 14px;
  }
	.header{
		position: fixed;
		top: 0;
		z-index: 10;
		width: 100%;
		height: 50px;
		background: #ca3232;
		display: flex;
	}
	.header>div{
		position: relative;
		width: 12%;
	}
	.header>div:last-child{
		width: 12%
	}
	.header>div:nth-of-type(2){
		width: 76%;
		box-sizing: border-box;
	}
	.header>div>img{
		-webkit-transform: translateX(6vw);
		width: 34px;
		margin-top: 9px;
		margin-left: -17px;
	}
	.header input{
		font-size: 16px;
		box-sizing: border-box;
		padding-left: 35px;
		color: white;
		border-radius: 8px;
		width: 100%;
		height: 34px;
		margin: 8px 0;
		border: none;
		background: #a22828;
		line-height: 40px;
	}
	.header input::-webkit-input-placeholder{
		color: #d04747;
	}
	.header>div>.search{
		width: 28px;
		position: absolute;
		left: 0px;
		margin-left: -5vw;
		background: none;
		top: 4px;
	}
	.banner .swiper-slide{
		width: 100%;
		height: 50vw;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	.menu{
		background: white;
		padding-bottom: 10px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.menu>div{
		padding-top: 10px;
		width: 22%;
		line-height: 28px;
		font-size: 14px;
		text-align: center;
		color: #777777;
	}
	.menu>div img{
		width: 75%;
		float: left;
		margin: 0 12.5%;
	}
	.border{
		border-bottom: 1px solid #dddddd;
		border-top: 1px solid #dddddd;
		margin-bottom: 10px;
		background: white;
	}
	.col2{
		background: white;
		display: flex;
		flex-wrap: wrap;
	}
	.col2>div{
		box-sizing: border-box;
		padding: 3%;
		width: 50%;
		display: flex;
		justify-content: space-between;
	}
	.col2>div:nth-child(2n+1){
		border-right: 1px solid #dddddd; 
	}
	.col2>div>div:first-child{
		width: 60%;
		box-sizing: border-box;
		padding-right: 3vw;
	}
	.col2>div>div:first-child p{
    font-size: 14px;
	}
	.col2>div>div:last-child{
		width: 40%;
	}
	.col2>div>div:last-child img{
		width: 100%;
	}
	.title{
		border-bottom: 1px solid #dddddd;
		line-height: 36px;
	}
	.title span{
		padding: 0 2%;
	}
	.title .right{
		float: right;
		font-size: 12px;
	}
	.title .left{
		display: inline-block;
		line-height: 36px;
		border-bottom: 1px solid red; 
	}
	.col3{
		width: 100%;
		background: white;
		display: flex;
	}
	.col3>div{
		box-sizing: border-box;
		flex: 1;
		padding: 3%;
		border-right: 1px solid #dddddd;
	}
	.col3>div:last-child{
		border-right: none; 
	}
	.col3>div p{
		font-size: 14px;
	}
	.col3>div img{
		width: 80%;
		margin: 0 10%;
	}
	.line{
		margin: 0 3%;
		width: 94%;
		height: 40px;
		line-height: 40px;
		display: flex;
		padding: 5px 0;
	}
	.line>div{
		width: 37%;
	}
	.line>div p{
		height: 20px;
		border-bottom: 1px solid #777777;
	}
	.line>div:nth-of-type(2){
		width: 26%;
		color: #777777;
		text-align: center;
	}
	.recommend{
		width: 100%;
		box-sizing: border-box;
		padding: 2vw 2% 0;
		background: white;
	}
	.recommend img{
		width: 100%;
		height: 35vw;
	}
	.reright{
		float: right;
		margin-right: 2%;
	}
	.recontent{
		padding: 5px 0;
		padding-left: 2%;
		min-height: 40px;
	}
	.newPri{
		text-align: right;
		color: red;
		font-size: 18px;
	}
	.blue{
		color: blue;
	}
	.family .gery{
		font-size: 10px;
	}
	.gery{
		color: grey;
	}
	.oldPri{
		text-align: right;
		color: grey;
		font-size: 14px;
	}
	.orange{
		color: orange;
	}
</style>
