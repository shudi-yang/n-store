<template>
<div id="content">
  <header>
    <img src="../assets/img/logo.png" class="logo"/>
    <select ref="classify" @change="selectFn">
      <option v-for="(item, index) in classifylist" :key="index" :value="item">{{item}}</option>
    </select>
  </header>
  <div class="container">
    <div>
      <ul class="list">
        <li v-for="item in list" :key="item.prdNo" @click="toDetail(item.prdNo)">
          <div class="imgBox">
            <img class="prodImg" :src="item.color_pic"/>
          </div>
          <div class="name">{{item.prdName}}</div>
          <div class="box">
            <div class="price">{{item.stdPrice}}</div>
            <img class="add2cart" @click.stop="add2CartFn(item.prdNo,$event)" src="../assets/img/gwc_1.png"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
	data(){
    return{
      classifylist: [
        "全部品类",
        "设计",
        "生活",
        "潮流"
      ],
      selected: "全部品类",
      list: [
      ]
    } 
  },
  methods: {
    selectFn(){
      var _classify = this.$refs.classify.value;
      console.log(_classify)
    },
    toDetail(prodId){
      this.$router.push({name: 'detail', params: {prodId: prodId}});
    },
    add2cartFn(prodId, e){
      
      var that = this;
      
    }
  },
   mounted(){
    axios({
      url:'/api/classify',
      params:{_page:1,_limit:8}
    }).then(
      res=>this.list = res.data.data
    )
  }
}
</script>

<style scoped>
#content{
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 80px;
}
header{
  height: 60px;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img.logo{
  display: block;
  width: 120px;
  height: 25px;
  
}
header select{
    width: 160px;
    height: 60px;
    display: block;
    color: #95262C;
    border-bottom: 5px #95262C solid;
    text-align: center;
    line-height: 60px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 22px;
}
 .list {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
 .list li {
  width: 290px;
  height: 410px;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 20px;
  background: #fff;
}
 .list li .imgBox {
  width: 100%;
  height: 270px;
  margin: 10px 0;
}
 .list li .imgBox img {
  width: 268px;
  height: 268px;
  border: 1px #dcdcdc solid;
}
 .list li .name {
  width: 100%;
  height: 60px;
  text-align: left;
  font-size: 22px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
 .list li .box {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #95262c;
}
 .list li .box img.add2cart{
 width: 40px;
 height: 40px;
}
</style>

