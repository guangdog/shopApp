<template>
  <div class="ordersure">
    <orderhead></orderhead>
    <div style="height: 50px;"></div>
    <status></status>
    <userinfo></userinfo>
    <goodsinfo></goodsinfo>
  </div>  
</template>
<script>
import orderhead from './header.vue'
import status from './status.vue'
import userinfo from './userinfo.vue'
import goodsinfo from './goodsinfo.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    orderhead,
    goodsinfo,
    userinfo,
    status
  }
}
</script>
<style scoped>
.ordersure{
  min-height: calc(100vh - 0px);
  background: #f1f1f1;
}
</style>
