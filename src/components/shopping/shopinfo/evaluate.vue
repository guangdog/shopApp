<template>
  <div class="evaluate">
    <div v-for="(item,index) in arr" :key="index">
      <p><img :src="item.userimg"> <span>{{item.name}}</span></p>
      <p>{{item.content}}</p>
      <p>{{item.creattime}}</p>
      <p><img :src="item.goodsimg"></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {userimg: 'http://img4.imgtn.bdimg.com/it/u=2519151260,930404528&fm=27&gp=0.jpg', name: '药水哥', content: '款式很好看，版型好，料子还可以，这个价位来说确实挺好的', creattime: '2015-12-15', goodsimg: 'http://img5.imgtn.bdimg.com/it/u=3426955224,720608045&fm=27&gp=0.jpg'},
        {userimg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3784066263,1067016574&fm=27&gp=0.jpg', name: '李赣', content: '款式很好看，版型好，料子还可以，这个价位来说确实挺好的', creattime: '2015-12-15', goodsimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3223826302,312225141&fm=27&gp=0.jpg'}
      ]
    }
  }
}
</script>
<style scoped>
  .evaluate{
    background: white;
    width: 100%;
    box-sizing: border-box;
    padding: 0 3%;
  }
  .evaluate>div{
    width: 100%;
    padding: 3vw 0;
    border-bottom: 1px solid #dddddd;
  }
  .evaluate>div>p:first-child p{
    height: 34px;
  }
  .evaluate>div>p:first-child img{
    width: 34px;
    height: 34px;
    float: left;
    margin-right: 3%;
  }
  .evaluate>div>p:first-child span{
    line-height: 34px;
  }
  .evaluate>div>p:nth-child(2){
    margin: 5px 0;
  }
  .evaluate>div>p:nth-child(3){
    color: #cccccc;
    font-size: 12px;
  }
  .evaluate>div>p:nth-child(4){
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .evaluate>div>p:nth-child(4) img{
    width: 28vw;
    height: 28vw;
  }
</style>
