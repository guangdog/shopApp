<template>
  <div>
    <div class="line"><div><p></p></div><div>为您推荐</div><div><p></p></div></div>

		<div class="recommend">
			<div v-for="data in recommendList" :key="data.id" @click="shopinfo(data.id)">
				<div><img :src="data.pic0"></div>
				<div class="recontent">
					<div class="reright">
						<p class="newPri">￥{{data.price}}</p>
						<p class="oldPri"><s>{{data.parameter}}</s></p>
					</div>
					<div>
						<p>{{data.goodsname}}</p>
						<p><span>香港直邮</span></p>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>
<script>

export default {
  props: ['recommendList'],
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
    padding-left: 8%;
    border-left: 1px solid #dddddd;
		float: right;
		margin-right: 2%;
    margin-bottom: 5px;
	}
	.recontent{
		padding: 5px 0;
		padding-left: 2%;
		min-height: 40px;
	}
	.recontent p{
		margin-bottom: 4px;
	}
	.newPri{
		text-align: right;
		color: red;
		font-size: 18px;
	}
	.oldPri{
		text-align: right;
		color: #999999;
		font-size: 14px;
	}
  .recommend span{
		font-size: 12px;
		padding: 2px 6px;
		color: #f38873;
		border: 1px solid #f38873;
		border-radius: 4px; 
	}
</style>
