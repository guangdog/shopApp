<template>
  <div>
    <div class="header">
    	<div></div>
    	<div>
    		<input type="text" placeholder="搜索你喜欢的商品、店铺">
    		<img class="search" src="../../../assets/images/shopping/search.png">
    	</div>
    	<div><img src="../../../assets/images/shopping/icon2.png"></div>
    </div>
    <div style="height: 50px;"></div>
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
</style>