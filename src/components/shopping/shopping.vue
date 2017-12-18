<template>
  <div id="shopping">
		<router-view></router-view>
		<div style="height:50px;background:white;"></div>
		<mynavigation class="nav"></mynavigation>	
  </div>
</template>

<script>
import navigation from './navigation.vue'
export default {
  components: {
    mynavigation: navigation
  }
}
</script>

<style scoped="scoped">
	.nav{
		position: fixed;
		bottom: 0;
	}
  #shopping{
		background: #f1f1f1;
		font-size: 14px;
  }
</style>
  