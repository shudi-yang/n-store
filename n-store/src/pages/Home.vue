<template>
  <div id="content">
    <!--banner-->
    <div class="swiper-container bannerSwiper">
      <div class="swiper-wrapper">
        <div v-for="(item,index) in banners" class="swiper-slide" :key="index">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--top-->
    <div class="top">
      <div class="title">
        <h4>人气推荐 | Top-selling</h4>
        <span>MORE</span>
      </div>
      <ul class="topul">
            <li v-for="item in list" :key="item.proNo" @click="toDetail">    
                <img :src="item.color_pic"/>
                <h3>{{item.prdName}}</h3>
                <h2>￥{{item.stdPrice}}</h2>               
            </li>
          </ul> 
    </div>
    <!--classify-->
    <div class='classifyBox'>
      <ul class="classifyItem">
        <li>
          <img src="../assets/img/art.jpg"  class="subtitleImg">
          <div class="moreBox">
            <img src="../assets/img/more.png" class="more">
          </div>
          <ul class="topul">
            <li v-for="item in list" :key="item.proNo">
              <img :src="item.color_pic"/>
              <h3>{{item.prdName}}</h3>
              <h2>￥{{item.stdPrice}}</h2>
            </li>
          </ul>          
        </li>
      </ul>
      <ul class="classifyItem">
        <li>
          <img src="../assets/img/art.jpg"  class="subtitleImg">
          <div class="moreBox">
            <img src="../assets/img/more.png" class="more">
          </div>
          <ul class="topul">
            <li v-for="item in list" :key="item.proNo">
              <img :src="item.color_pic"/>
              <h3>{{item.prdName}}</h3>
              <h2>￥{{item.stdPrice}}</h2>
            </li>
          </ul>          
        </li>
      </ul>
    </div>

  </div>
  
</template>

<script>
  import Swiper from 'swiper' 
  import 'swiper/dist/css/swiper.css';
  export default{
    data(){
      return{
        banners: [
          "http://brand.fugumobile.cn/nthpower/api/data/upload/banner/5c2dc1477d276.jpg",
          "http://brand.fugumobile.cn/nthpower/api/data/upload/banner/5c2dd89b88991.png"
        ],
        list:[]
      }
    },
    methods:{
      toDetail(prodId){
      this.$router.push({name: 'detail', params: {prodId: prodId}});
    }
    },
    mounted(){
      var bannerSwiper = new Swiper ('.bannerSwiper', {
				loop: true,
				autoplay:true,
        autoplayDisableOnInteraction: false,
				observer:true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents:true //修改swiper的父元素时，自动初始化swiper
      });
       axios({
        url:'/api/home',
        params:{_page:1,_limit:3}
      }).then(
        res=>this.list = res.data.data
      )
    }
     
  
  }
</script>

<style scoped>
.bannerSwiper {
  width: 100%;
  height: 400px;
}
#content .swiper-pagination-bullets {
  bottom: 36px;
}
#content .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 1px #959595 solid;
  border-radius: 50%;
  background: #fff;
  opacity: 1;
}
#content .swiper-pagination-bullet-active {
  width: 30px;
  height: 10px;
  border: none;
  border-radius: 5px;
  background: #959595;
}
#content .top{
  width: 100%;
  height: 490px;
  border-top: 1px solid #dcdcdc;
}
#content .top .title{
  width: 100%;
  height: 65px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
#content .topul{
  width: 600px;
  
  height: 400px;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#content .topul li{
  width: 190px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
#content .topul li img{
  width: 188px;
  height: 188px;
  border: solid 1px #dcdcdc;
  margin-bottom: 10px;
}
#content .topul li h3{
  width: 188px;
  height: 60px;
  margin-bottom: 5px;
  font-size: 22px;
  text-align: left;
  color: #333;
   overflow: hidden;
}
#content .topul li h2{
  width: 188px;
  text-align: left;
  color: #95262c;
  font-size: 24px;
}
#content .classifyBox {
  width: 100%;
}
#content .classifyBox .classifyItem {
  width: 100%;
}
#content .classifyBox .classifyItem .subtitleImg {
  width: 100%;
}
#content .classifyBox .classifyItem .moreBox {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#content .classifyBox .classifyItem .moreBox img{
      width: 59px;
    height: 13px;
    padding: 20px;
}



</style>

