<template>
  <div class="menu border">
    <div>
      <div><img src="../../../assets/images/shopping/shopList1.png"></div>
      <div>新品上架</div>
    </div>
    <div>
      <div><img src="../../../assets/images/shopping/shopList2.png"></div>
      <div>排毒养颜</div>
    </div>
    <div>
      <div><img src="../../../assets/images/shopping/shopList3.png"></div>
      <div>减肥塑形</div>
    </div>
    <div>
      <div><img src="../../../assets/images/shopping/shopList4.png"></div>
      <div>女士调理</div>
    </div>
    <div>
      <div><img src="../../../assets/images/shopping/shopList5.png"></div>
      <div>运动营养</div>
    </div>
    <div>
      <div><img src="../../../assets/images/shopping/shopList6.png"></div>
      <div>心血管健康</div>
    </div>
    <div>
      <div><img src="../../../assets/images/shopping/shopList7.png"></div>
      <div>男士健康</div>
    </div>
    <div>
      <div><img src="../../../assets/images/shopping/shopList8.png"></div>
      <div>精品套装</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
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
</style>