<template>
    <div id="content">
      <div class="top">
        <div v-on:click="$router.go(-1);" id="back">
          <img src="../assets/img/list/back.png"/>
        </div>
        <img class="logo" src="../assets/img/logo.png"/>
	  	</div>
        <ul class="list">
            <li v-for="(item,index) in list" :key='item.prdNo'>
                <div class="left">
                    <img @click="changeSelectedFn(index,item.prdNo)" :src="prodObj.status[index]==1?choosedSrc:unchoosedSrc"/>
                </div>
                <div class="center">
                    <img :src="item.color_pic"/>
                </div>
                <div class="right">
                    <div class="name">{{item.prdName}}</div>
                    <div class="price">￥{{item.stdPrice}}</div>
                  <div class="numBox">
                    <div class="text">购买数量</div>
                    <div class="nums">
                      <span @click="minusFn(index)" class="minus">-</span>
                      <span class="num">{{prodObj.nums[index]}}</span>
                      <span @click="plusFn(index)" class="plus">+</span>
                    </div>
                  </div> 
                </div>         
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data(){
   return {
     list:[],
     prodObj: {    //保存列表里数量、价格、选中状态、库存数量的信息
					"nums": [],
					"prices": [],
					"status": [],
					"stocks": []
			},
     prodIds:[],
    choosedSrc: require("../assets/img/cart/choose.png"),
    unchoosedSrc: require("../assets/img/cart/unchoose.png")
  }
  },
  methods:{
    
    changeselectedFn(){
      this.prodObj.status[index] = this.prodObj.status[index] == 1 ? 0 : 1;
      this.updateTotal();
    }
  }
}
</script>



<style scoped>
#content {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 160px;
}
#content .top {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #f6f6f6;
}
#content .top #back {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
#content .top #back img {
  width: 13px;
  height: 22px;
}
#content .top .logo {
  width: 120px;
  height: 25px;
  margin-left: 200px;
}
#content .list {
  width: 100%;
}
#content .list li {
  width: 100%;
  height: 250px;
  box-sizing: border-box;
  border-bottom: 1px #DCDCDC solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
#content .list li .left {
  width: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#content .list li .left img{
    width: 40px;

}
#content .list li .center {
  width: 188px;
  height: 188px;
  box-sizing: border-box;
  border: 1px #dcdcdc solid;
}
#content .list li .center img {
  width: 100%;
  height: 100%;
}
#content .list li .right {
  width: 328px;
  height: 188px;
  box-sizing: border-box;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
#content .list li .right .price {
  margin: 15px 0;
  color: #97262C;
}
#content .list li .right .numBox {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#content .list li .right .numBox .nums{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#content .list li .right .numBox .minus,
#content .list li .right .numBox .num,
#content .list li .right .numBox .plus {
  padding: 20px;
  background: #f6f6f6;
}

</style>

