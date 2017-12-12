<template>
  <div class="border family" style="margin-bottom:0px;">
			<div>
				<p class="title"><span class="right">更多实惠</span><span class="left blue" style="border-bottom: 1px solid #009cff">家庭套装</span></p>
			</div>
			<div  class="col3">
				<div v-for="data in homeRecommend" :key="data.id" @click="shopinfo(data.id)">
					<p>{{data.goodsname}}</p>
					<p><span class="blue" style="margin-right: 4px;">￥{{data.price}}</span><s class="gery">￥{{data.parameter}}</s></p>
					<p><img :src="data.pic0"></p>
				</div>
			</div>
  </div>
</template>
<script>
export default {
  props: ['homeRecommend'],
  data () {
    return {
    }
  },
  methods: {
    shopinfo (id) {
      this.$router.push('/shopinfo/' + id)
    }
  }
}
</script>
<style scoped>
  .border{
		border-bottom: 1px solid #dddddd;
		border-top: 1px solid #dddddd;
		margin-bottom: 10px;
		background: white;
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
		color: #999999;
		font-size: 12px;
	}
	.title .left{
		display: inline-block;
		line-height: 36px;
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
	.blue{
		color: #009cff;
	} 
	.gery{
		font-size: 10px;
		color: #999999;
	}
</style>
