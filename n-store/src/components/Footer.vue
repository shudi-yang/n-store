<template>
	<ul id="footer">
		<li>
			<router-link to="/"><img :src="'home'==$route.name ? imgs.selected[0] : imgs.unselected[0]"/></router-link>
		</li>
		<li>
			<router-link to="/classify"><img :src="'classify'==$route.name ? imgs.selected[1] : imgs.unselected[1]"/></router-link>
		</li>
		<li>
			<router-link to="/cart"><img :src="'cart'==$route.name ? imgs.selected[2] : imgs.unselected[2]"/></router-link>
			<div class="cartNum" :class="{hide:cartNum==0}">{{cartNum}}</div>
		</li>
		<li>
			<router-link to="/user"><img :src="'user'==$route.name ? imgs.selected[3] : imgs.unselected[3]"/></router-link>
		</li>
	</ul>
</template>
<script>

	export default {
		name: "Footer",
		data(){
			return {
				imgs: {
					selected: [require("./../assets/img/home_2.png"), 
								require("./../assets/img/classify_2.png"),
								require("./../assets/img/shopping-cart_2.png"),
								require("./../assets/img/My-n_2.png")],
					unselected: [require("./../assets/img/home_1.png"), 
								require("./../assets/img/classify_1.png"),
								require("./../assets/img/shopping-cart_1.png"),
								require("./../assets/img/My-n_1.png")]
				},
				cartNum: 0
			}
		}
		// mounted(){
		// 	var that = this;
		// 	Common.getCartNum(function(data){
		// 		//console.log(data);
		// 		if(data.errcode==1){
		// 			that.cartNum = data.result.count;
		// 		}
		// 	});
		// 	ValuePass.$on("myDefineEv", function(data){
		// 		that.cartNum = data;
		// 	});
		// },
	};
</script>
<style>


</style>
