<template>
  <div id="app">
    <!-- <router-view></router-view>
    <Footer></Footer> -->
    <router-view name="content"/>
    <router-view name="footer"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  created(){
  console.log(1,this.$axios)
  console.log(2,axios)
}
}

</script>


