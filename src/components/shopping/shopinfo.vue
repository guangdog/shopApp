<template>
  <div id="shopinfo">
		<div class="banner" >
			<swiper :options="swiperOption" ref ='mySwiper'>
				<swiper-slide><img :src="arr.pic0"></swiper-slide>
				<swiper-slide><img :src="arr.pic1"></swiper-slide>
				<swiper-slide><img :src="arr.pic2"></swiper-slide>
				<swiper-slide><img :src="arr.pic3"></swiper-slide>
				<swiper-slide><img :src="arr.pic4"></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
    </div>

  </div>
</template>

<script>
import { getShopInfoById } from '../../api/shopping'
export default {
  data () {
    return {
      arr: [],
      banner: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: true
      }
    }
  },
  created () {
    var id = this.$route.params.id
    getShopInfoById({ id: id }).then(res => {
      this.arr = res.data.data
      console.log(this.arr)
      for (var i = 0; i < 5; i++) {
        if (this.arr['pic' + i] != null) {
          if (this.arr['pic' + i].substr(0, 4) !== 'http') {
            this.arr['pic' + i] = 'http://114.55.249.153:8028' + this.arr['pic' + i]
          }
        }
      }
    })
  }
}
</script>

<style scoped="scoped">
.banner{
	width: 100%; 
}
.banner img{
	width: 100%;
	height: 90vw;
}
</style>
