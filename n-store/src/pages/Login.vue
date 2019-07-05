<template>
  
</template>
<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      mess:''
    }
  },
  methods:{
    login(){
      axios({
        url:'/api/login',
        method:'post',
        data:{}
      }).then(

      )
    }
  }
}
</script>

<style>

</style>


