<template>
  <div class="banner" >
    <swiper :options="swiperOption" ref ='mySwiper'>
      <swiper-slide :style="{height: height+'vw'}" v-for="data in banner" :key="data.id"><img :src="data.imgpath"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: ['banner', 'height'],
  data () {
    return {
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
      }
    }
  }
}
</script>
<style scoped>
	.banner .swiper-slide{
		width: 100%;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
</style>
