<template>
  <div class="commodity">
    <div class="img-preview">
      <a><img :src="this.imgsrc_" v-if="commodity.photoOne"></a>
      <span id="src" style="display: none">{{commodity.photoOne}}</span>
    </div>
    <div>
      <div class="commodityInfo">
        <h3>{{ commodity.name }}</h3>
        <p>
          <span>商家：{{ commodity.shopName }}</span>
          <span>平均分：{{commodity.score}}</span>
        </p>
        <p>库存：{{ commodity.inventory }}</p>
        <p>新旧程度：{{ commodity.degree | formatEmptyData}}</p>
        <div class="bargain">{{commodity.bargain}}</div>
        <p>
          <span class="factPrice">
            {{ commodity.price | factPrice(commodity.discount) | currency }}
          </span>
          <span v-if="commodity.discount!==1" class="discount">
            [{{commodity.discount  | formatDiscount}}]
          </span>
          <span v-if="commodity.discount!==1">[定价 <i class="price">{{commodity.price | currency}}</i>]</span>
        </p>
      </div>
      <div class="addCart" id="addcart" v-if="user">
<!--        <AddSubtractButton  :quantity="quantity" @updateQuantity="handleUpdate"/> -->
        <button class="addCartButton" @click="addCart(commodity)">加入收藏</button>
      </div>
    </div>
    <commodityTabComponent :content="commodity.instruction"/>
  </div>
</template>


<script>
  import commodityTabComponent from '@/components/CommodityTabComponent'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'commodity',
    data () {
      return {
        commodity: {},
        quantity: 0,
        imgsrc_ : null,
        sellname:null
      }
    },
    components: {
      commodityTabComponent
    },
    computed:{
        ...mapState('user',['user'])
    },
  
    created(){
      let url = this.$route.fullPath;
      if(url.indexOf("/shop/commodity")!==-1){
          url = "/commodity/"+this.$route.params.id;
      }
      this.axios.get(url)
        .then(response => {
          if(response.status === 200){
            this.commodity = response.data.data;
            if(this.commodity.bargain===0){
              this.commodity.bargain="不议价";
            }else this.commodity.bargain="可以议价";
            console.log("1111"+this.commodity.id)
            var idr = parseInt(this.commodity.id)
            console.log("1111"+typeof idr)
            this.axios.post("/commodity/selectByCid", {
              idr : idr
            })
                .then(response => {
                  if(response.status === 200){
                    console.log("------------------------------------------------------")
                    console.log("--------------red-----------------------------")
                    console.log(response.data)
                    console.log(this.user)
                    console.log("------------------------------------------------------")
                    this.sellname = response.data;
                    if(this.user.name===this.sellname)
                    {document.getElementById("addcart").style.display = "none"}
                    // this.commodity = response.data.data;
                    // if(this.commodity.bargain===0){
                    //   this.commodity.bargain="不议价";
                    // }else this.commodity.bargain="可以议价";
                  }
                })
          }
        }).catch(error => alert(error));
    },
   updated(){
      this.imgsrc_ = require("../assets" +  this.commodity.photoOne)
     // console.log("1:"+this.imgsrc_)
      document.getElementById("img_").src = this.imgsrc_
    },
    methods: {
      // 子组件AddSubtractButton的自定义事件updateQuantity的处理函数
      handleUpdate(value){
        this.quantity = value;
      },
      factPrice(price, discount){
        return price * discount;
      },
      //加入购物车
      addCart(commodity){
        if(!this.user){
          this.$router.push("/login");
          return;
        }
        let quantity = this.quantity;
        
        if(quantity === 0){
          quantity = 1;
        }
        if(commodity.inventory < quantity){
          this.$message("库存不够");
          return;
        }
        this.axios.post('/shoppingCart',{commodityId:commodity.id,quantity:quantity,userId:this.user.id}).then(response => {
          if(response.data.code === 0){
            this.$router.push('/cart');
          }else{
            this.$message("加入购物车失败")
          }
        }).catch(error => alert(error))
        
      },
      ...mapActions('cart', [
        'addProductToCart'
      ])
    },
 
    filters: {
      // 格式化折扣数据
      formatDiscount(value){
        if(value)
        {
          let strDigits = value.toString().substring(2);
          strDigits += "折";
          return strDigits;
        }
        else
          return value;
      },
      formatEmptyData(value){
        if(value==null){
          value = "未知";
        }
        return value;
      }
    }
  }
</script>
<style scoped>
.commodity {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 60px;
  font-size: 16px;
  text-align: left;
  color: #846e6e;
}
.commodity img {
  margin-left: 50px;
  float: left;
  width: 200px;
  height: 200px;
}
.commodity .commodityInfo {
  margin-left: 20px;
  float: left;
  width: 800px;
  background-color: #eee;
  padding-left: 20px;
  padding-top: 5px;
}

.commodity .addCart {
  margin-left: 300px;
  float: left;
  margin-top: 10px;
}
.commodity .addCartButton{
	padding: 5px 10px 6px;
	color: #fff;
	border: none;
	border-bottom: solid 1px #222;
	box-shadow: 0 1px 3px #999;
	text-shadow: 0 -1px 3px #444;
	cursor: pointer;
  background-color: #cc9756;
  display: block;
  margin-left: 80px;
  border-radius: 30px;
}
.addCartButton:hover {
  text-shadow: 0 1px 1px #444;
}

.commodity span{
  padding-right: 15px;
}

.commodity .price {
  color: gray;
  text-decoration: line-through;
}
.commodity .discount{
  color: red;
}
.commodity .factPrice{
  color: red;
  font-weight: bold;
}
</style>