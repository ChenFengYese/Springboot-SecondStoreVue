<template>
  <div class="sellHome">
    <!-- 顶部导航 -->
    <div class="navigation">
<!--      <ul style="list-style:none">-->
<!--        <li style="float: left">-->
<!--          <router-link :to="'/shop/shopId/'+sell.id">-->
<!--            <i class="el-icon-location-outline"></i>-->
<!--            <span>店铺首页</span>-->
<!--          </router-link>-->
<!--        </li>-->
<!--        <li v-if="!sell">-->
<!--          <span class="loginSpan"><router-link to="/login">你好，请登录  </router-link><router-link to="/sellRegister"><span>免费注册</span></router-link></span>-->
<!--        </li>-->
<!--        <li v-else>-->
<!--          <span class="loginSpan">欢迎您，{{sell.name}},<a href="javascript:;" @click="exit">退出登录</a></span>-->
<!--        </li>-->
<!--        <li class="spacer" v-if="sell"></li>-->
<!--        <li><a href="javascript:" @click="userPage" v-if="sell">用户界面</a></li>-->
<!--        <li class="spacer"></li>-->
<!--        <li><router-link to="/shop/order">我的订单</router-link></li>-->
<!--        <li class="spacer"></li>-->
<!--        <li><router-link to="/shop/info">我的信息</router-link></li>-->
<!--      </ul>-->
      <ul style="list-style:none;">
        <li style="float: left">
          <a>
            <i class="el-icon-location-outline"></i>
            <span>店铺首页</span>
          </a>
        </li>


        <li class="spacer" style="float: right; padding-top: 20px"></li>
        <li style="float: right">
          <router-link to="/shop/order" style="float: right">我的订单</router-link>
        </li>
        <li class="spacer" style="float: right; padding-top: 20px"></li>
        <li style="float: right">
          <router-link to="/shop/info" style="float: right">我的信息</router-link>
        </li>
        <li class="spacer" style="float: right; padding-top: 20px"></li>


        <li><a href="javascript:" @click="userPage" v-if="sell"  id="pageInfo">用户界面</a></li>
        <li class="spacer" v-if="sell"></li>
        <li v-if="!sell">
        <span class="loginSpan"><router-link
            to="/login">你好，请登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</router-link><router-link
            to="/register"><span id="hello">免费注册</span></router-link></span>
        </li>
        <li v-else>
          <span class="loginSpan" >欢迎您，{{ sell.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a @click="exit">退出登录</a></span>
        </li>

      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: "SellHome",
  data(){
    return{
      identity:"user",
      name:sessionStorage.getItem("name").slice(1,-1),
      password:sessionStorage.getItem("password").slice(1,-1)
    }
  },
  computed:{
    ...mapState('user',{
      sell: 'sell'
    })
  },
  watch:{
    sell(val){
      if(val==null){
        this.$router.push("/login")
      }
    }
  },
  methods: {
    exit(){
      this.deleteSell();
      sessionStorage.removeItem("sell");
      this.$router.replace("/home")
    },
    userPage(){
      console.log("1:"+this.name+" "+this.password)
      if(this.name===null || this.password===null){
        this.$message({  type: 'error',
          message: "请先登录！"
        })
        this.$router.replace('/login');
      }
      else{
        console.log("2:"+this.name+" "+this.password)
        this.axios.post(this.identity+"/login",
            {name: this.name, password: this.password}).then(response => {
          this.deleteSell();
          sessionStorage.removeItem("sell");
          this.saveUser(response.data.data);
          console.log(response.data.data)
          sessionStorage.setItem("user",JSON.stringify(this.user));
          this.$router.replace('/home')
        })
      }
    },
    ...mapMutations('user',['deleteSell','saveUser'])  //将this.deleteUser映射为this.$store.state.commit('user/deleteUser')
  }
}
</script>

<style scoped>
.navigation {
  position: relative;
  background-color: #333;
  padding-left: 10%;
  /* height: 30px;
  background-color: #e3e4e5;
  margin-top: 0;
  margin-bottom: 30px;
  border: 1px solid palevioletred; */
}

li > a {
  font-size: 5px;
  text-decoration: none;
  display: block;
  color: #CCCCCC;
  height: 30px;
  line-height: 30px;
}

.loginSpan {
  font-size: 5px;
  color: #CCCCCC;
  display: block;
  height: 30px;
  line-height: 30px;

}

.loginSpan > a {
  color: #CCCCCC;
  text-decoration: none;

}

li.spacer {
  overflow: hidden;
  width: 1px;
  height: 10px;
  background-color: #ccc;
}

.link-regist {
  color: #cc9756;
}

li {
  margin-right: 15px;
  display: inline-block;
}

li a:hover {
  color: #FFF
}
</style>