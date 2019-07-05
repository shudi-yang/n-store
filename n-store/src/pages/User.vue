<template>
<div class="content">
    <div class="header">
         <div class="touxiang"> 
            <img src="../assets/img/banner.jpg"/>
         </div>
        <h3>{{data.nikename}}</h3>
        <h4>Clubⁿ Top Member</h4>
    </div>
    <div class='orderInfo'>
        <div class='myOrders'>
            <span>我的订单</span>
            <a>查看全部订单</a>
        </div>
        <ul class="orderStatus">
            <li>
                <img src="../assets/img/mine/dfk.png"/>
                <p>待付款</p>
            </li>
            <li>
                <img src="../assets/img/mine/dfh.png"/>
                <p>待发货</p>
            </li>
            <li>
                <img src="../assets/img/mine/yfh.png"/>
                <p>已发货</p>
            </li>
            <li>
                <img src="../assets/img/mine/ywc.png"/>
                <p>已完成</p>
            </li>
        </ul>
    </div>
    <div class="logout" @click="logout">
        退出登录
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            data:{}
        }
    },
    methods:{
        logout(){
            axios({
                url:'/api/logout',
                method:'put'
            }).then(
                res=>{
                    if(res.data.err===0){
                        this.$router.push('/login')
                    }
                }
            )
        }
    },
    beforeRouteEnter(to,from,next){
        console.log('user beforeRouteEnter')
        axios({
            url:'./api/user'
        }).then(
            res=>{
               if (res.data.err===1) {
                   console.log(res.data)
                   next('./login')
               } else {
                   console.log(res.data)
                   next((_this)=>{_this.data=res.data.data})
               } 
            }
        )
    }
}
</script>




<style scoped>
    .content{
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
    background: #f6f6f6;
    }
    .content .header{
    width: 100%;
    height: 400px;
    background: url(../assets/img/mine/kv_bg.jpg) no-repeat;
    background-size: 100% 100%;
    position: relative;
    left: 0;
    top: 0;       
    }
    .content .header .touxiang{
        width: 178px;
        height: 178px;
        position: absolute;
        right: 20px;
        top: 20px;
    }
    .content .header .touxiang img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .content .header h3{
        position: absolute;
        right: 230px;
        top: 40px;
        color: #fff;
    }
    .content .header h4{
        position: absolute;
        right: 230px;
        top: 100px;
        color: #c9c9ca;
    }
    .content .orderInfo {
        width: 100%;
        height: 200px;
        margin: 10px 0;
        background: #fff;
    }
    .content .orderInfo .myOrders{
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }
    .content .orderInfo .myOders span{
        display: block;
    }
    .content .orderInfo .myOders a{
        display: block;
    }
    .content .orderInfo .orderStatus {
        width: 100%;
        height: 120px;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content .orderInfo .orderStatus li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 0;
        top: 0;
    }
    .content .orderInfo .orderStatus li img {
        height: 39px;
        width: 40px;
        margin-bottom: 8px;
    }
    .logout{
        width: 400px;
        height: 60px;
        box-sizing: border-box;
        border: 1px #96262c solid;
        border-radius: 10px;
        margin: 40px auto;
        background: #fbe4eb;
        text-align: center;
        line-height: 60px;
        color: #97262C;
        font-size: 24px;
    }






</style>


