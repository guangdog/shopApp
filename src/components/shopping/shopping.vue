<template>
  <div>
    <div class="header">
    	<div><img src="../../assets/images/shopping/icon1.png"></div>
    	<div>
    		<input type="text" placeholder="搜索你喜欢的商品、店铺">
    		<img class="search" src="../../assets/images/shopping/search.png">
    	</div>
    	<div><img src="../../assets/images/shopping/icon2.png"></div>
    </div>
    <div style="height: 60px;"></div>
    <div class="shopInfo">
    	<div>
				<dl>
					<dt>
						<img v-if="collection" src="../../assets/images/shopping/collection1.png">
						<img v-if="!collection" src="../../assets/images/shopping/collection2.png">
					</dt>
					<dd class="grey"><span v-if="collection">已收藏</span><span v-if="!collection">已收藏</span></dd>
				</dl>
    	</div>
    	<div>
    		<dl>
					<dt>
						<img src="../../assets/images/shopping/user.png">
					</dt>
					<dd>
						<p class="white">捞批的店</p>
						<p class="grey">商圈人数：<span class="yellow">9800</span></p>
					</dd>
				</dl>
    	</div>
    	<div>
    		<img v-if="isshop" src="../../assets/images/shopping/shop1.jpg">
				<img v-if="!isshop" src="../../assets/images/shopping/shop2.png">
    	</div>
    </div>
    <div class="banner" >
	    <swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide>I'm Slide 1</swiper-slide>
		    <swiper-slide>I'm Slide 2</swiper-slide>
		    <swiper-slide>I'm Slide 3</swiper-slide>
		    <swiper-slide>I'm Slide 4</swiper-slide>
		    <swiper-slide>I'm Slide 5</swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		    <div class="swiper-scrollbar"   slot="scrollbar"></div>
		  </swiper>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
			collection:false,
			isshop:false
    }
  }
}
</script>

<style scoped="scoped">
	.header{
		position: fixed;
		top: 0;
		z-index: 10;
		width: 100%;
		height: 60px;
		background: #ca3232;
		display: flex;
	}
	.header>div{
		position: relative;
		width: 12%;
	}
	.header>div:nth-of-type(2){
		width: 76%;
		box-sizing: border-box;
		padding: 0 2%;
	}
	.header>div>img{
		-webkit-transform: translateX(6vw);
		width: 36px;
		margin-top: 12px;
		margin-left: -18px;
	}
	.header input{
		font-size: 16px;
		box-sizing: border-box;
		padding-left: 35px;
		color: white;
		border-radius: 8px;
		width: 100%;
		height: 40px;
		margin-top: 10px;
		border: none;
		background: #a22828;
		line-height: 40px;
	}
	.header input::-webkit-input-placeholder{
		color: #d04747;
	}
	.header>div>.search{
		width: 30px;
		position: absolute;
		left: 5px;
		background: none;
		top: 4px;
	}
	.shopInfo{
		width: 100%;
		background: #1f2228;
		display: flex;
		height: 74px;
	}
	.grey{
		color: #636569;
		font-size: 14px;
	}
	.yellow{
		color: #ffe400;
	}
	.shopInfo>div:first-child{
		width: 14%;
	}
	.shopInfo>div:first-child img{
		width: 60%;
		height: 46px;
		margin-left: 20%;
	}
	.shopInfo>div:first-child .grey{
		text-align: center;
	}
	.shopInfo>div:nth-of-type(2){
		width: 68%;
		box-sizing: border-box;
	}
	.shopInfo>div:nth-of-type(2) dl dt,.shopInfo>div:nth-of-type(2) dl dd{
		float: left;
	}
	.shopInfo>div:nth-of-type(2) dl dt{
		height: 100%;
		margin: 0 5%;
	}
	.shopInfo>div:nth-of-type(2) img{
		height: 100%;
	}
	.shopInfo>div:nth-of-type(2) dl{
		height: 100%;
		box-sizing: border-box;
		padding: 10px 0;
	}
	.shopInfo>div:last-child{
		width: 18%;
	}
	.shopInfo>div:last-child img{
		width: 80%;
		height: 60px;
		margin-top: 7px;
		margin-left: 10%;
	}
	.shopInfo>div:nth-of-type(2) .white{
		color: white;
		line-height: 30px;
		font-size: 20px;
	}
</style>
