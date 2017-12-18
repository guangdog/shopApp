<template>
  <div class="paytype">
    <payheader></payheader>
    <div class="type">
    </div>
    <div class="type">
    </div>
  </div>
</template>
<script>
import payheader from './header.vue'
export default {
  components: {
    payheader
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.paytype{
  min-height: 100vh;
  background: #f1f1f1;
}
.type{
  display: flex;
  width: 100%;
  padding: 4vw 0;
  background: white;
  border-bottom: 1px solid #dddddd;
}
</style>
