<template>
  <div class="border">
    <div>
			<slot name="title"></slot>
		</div>
    <div  class="col2">
      <div v-for="data in recommend" :key="data.id" @click="shopinfo(data.id)">
        <div>
          <p>{{data.goodsname}}</p>
          <p class="gery" :style="{color: color}">{{data.description}}</p>
        </div>
        <div>
          <img :src="data.pic0">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['recommend', 'color'],
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
		border-bottom: 1px solid #dddddd; 
	}
	.col2>div:nth-last-child(1) , .col2>div:nth-last-child(2){
		border-bottom: none; 
	}
	.col2>div:nth-child(2n+1){
		border-right: 1px solid #dddddd; 
	}
	.col2>div>div:first-child{
		width: 60%;
		box-sizing: border-box;
		padding-right: 3vw;
	}
	.col2>div>div:last-child{
		width: 40%;
	}
	.col2>div>div:last-child img{
		width: 100%;
	}
	.col2>div>div>.gery{
		font-size: 12px;
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
  .blue{
		color: #009cff;
	}
</style>
