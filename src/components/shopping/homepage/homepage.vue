<template>
    <div>
      <homeheader></homeheader>
      <homebanner :banner="dataObj.bannerList" :height="'50'"></homebanner>
      <homemenu></homemenu>
      <recommendcol2 :recommend="dataObj.weekRecommend" :color="'#ff8400'">
        <p slot="title" class="title"><span class="right">更多好货</span><span class="left gery" style="border-bottom: 1px solid #ca3232;color: #ca3232;">本月主打</span></p></slot>
      </recommendcol2>
      <recommendcol2 :recommend="dataObj.monthRecommend" :color="'#cccccc'">
        <p slot="title" class="title"><span class="right">更多主打</span><span class="left orange" style="border-bottom: 1px solid #d24aff;color: #d24aff;">本周主打</span></p></slot>
      </recommendcol2>
      <recommendcol3 :homeRecommend="dataObj.homeRecommend"></recommendcol3>
      <recommendcol1 :recommendList="dataObj.recommendList"></recommendcol1>
    </div>
</template>
<script>
import { selectData } from '../../../api/shopping'
import header from './header.vue'
import banner from './banner.vue'
import homemenu from './homemenu.vue'
import recommendcol2 from './recommendcol2.vue'
import recommendcol3 from './recommendcol3.vue'
import recommendcol1 from './recommendcol1.vue'
export default {
  data () {
    return {
      dataObj: {
        bannerList: [],
        weekRecommend: [],
        monthRecommend: [],
        homeRecommend: [],
        recommendList: []
      },
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  components: {
    homeheader: header,
    homebanner: banner,
    homemenu: homemenu,
    recommendcol2: recommendcol2,
    recommendcol3: recommendcol3,
    recommendcol1: recommendcol1
  },
  created () {
    selectData(this.listQuery).then(res => {
      this.dataObj = res.data
      console.log(this.dataObj)
      for (const key in this.dataObj.bannerList) {
        if (this.dataObj.bannerList[key].imgpath.substr(0, 4) !== 'http') {
          this.dataObj.bannerList[key].imgpath = 'http://114.55.249.153:8028' + this.dataObj.bannerList[key].imgpath
        }
      }
    })
  }
}
</script>
<style scoped>

</style>