<template>
  <div class="ordersure">
    <orderhead></orderhead>
    <orderfooter></orderfooter>
  </div>  
</template>
<script>
import orderhead from './header.vue'
import orderfooter from './footer.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    orderhead,
    orderfooter
  }
}
</script>
<style scoped>
.ordersure{
  min-height: calc(100vh - 50px);
  background: #f1f1f1;
}
</style>
