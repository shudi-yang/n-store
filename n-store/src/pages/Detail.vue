<template>
    <div id="content"> 
        <!--顶部-->
        <div class="top">
            <div class="back">
                <img src="../assets/img/list/back.png"/>
            </div>
            <img class="logo" src="../assets/img/logo.png"/>
        </div>
        <!--内容-->
        <div class="container">
            <img :src="detail.color_pic" class="goodimg">
            <h3>{{detail.prdName}}</h3>
            <h4>￥{{detail.stdPrice}}</h4>
            <p>包邮 江浙沪满￥228包邮</p>
        </div>

        <!--底部按钮栏-->
        <div id="btns">
            <div id="serve">
                <img src="../assets/img/prod/kf.png"/>
            </div>
            <div id="cart">
                <img src="../assets/img/prod/gwc.png"/>
                <div class="cartNum" >0</div>
            </div>
            <div id="buy" >立即购买</div>
            <div id="add2cart" class="able">加入购物车</div>
        </div> 
    </div>
</template>
<script>
export default {
  data(){
    return {
      detail:{}
    }
  },
  // methods:{
  //   goback(){
  //     this.$router.go(-1)
  //   }
  // },
  mounted(){
    let id = this.$route.params.prodId
    console.log(id)
    
    axios({
      url:`/api/classify/${id}`,
      params:{_page:1,_limit:10}
    }).then(
      (res)=>{
        console.log(res.data)
        this.detail = res.data.data
      }
    )
  }
}
</script>

<style scoped>
#content {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 80px;
  background: #f6f6f6;
}
.top {
  width: 100%;
  height: 60px;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; left: 0; top: 0;
}
.top .back {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; left: 0; top: 0;
}
.top .back img {
  width: 13px;
  height: 22px;
}
.top .logo {
  width: 120px;
  height: 25px;
}   
.container{
    width: 100%;
}
.container .goodimg{
    width: 640px;
    height: 640px;
    display: block;
    margin: 0 auto;

}
.container h3{
    margin-bottom: 15px;
    text-align: left;
    line-height: 36px;
    font-size: 30px;
}
.container h4{
    margin-bottom: 15px;
    text-align: left;
    line-height: 36px;
    font-size: 30px;
    color: #95262C;
}
.container p{
    margin-bottom: 15px;
    text-align: left;
    line-height: 36px;
    font-size: 22px;
    color: #95262C;
}
#btns{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  z-index: 566;
  display: flex;
  background: #fff;
}
#btns #serve {
  box-sizing: border-box;
  border-right: 1px #c1bfc0 solid;
  width: 78px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  top: 0;
}
#btns #serve img{
    display: block;
    width: 36px;
}
#btns #cart {
  width: 78px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  top: 0;
}
#btns #cart img {
  height: 60px;
  width: 48px;
}

#btns #cart .cartNum {
  position: absolute;
  right: 6px;
  top: 0;
  width: 28px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 18px;
  color: #fff;
  border-radius: 50%;
  background: #95262C;
}
#btns #add2cart {
  width: 242px;
  height: 80px;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 80px;
}
#btns #buy {
  background: #727071;
  width: 242px;
  height: 80px;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 80px;
}
#btns .able {
  background-color: #95242a;

}

</style>







