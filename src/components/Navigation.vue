<template>
  <!-- 顶部导航 -->
  <div class="navigation">
    <ul style="list-style:none;">
      <li style="float: left">
        <a href="http://www.lb-trumpet.cn/index-weather.html" target="_blank">
          <i class="el-icon-location-outline"></i>
          <span id="address__"></span>
<!--          <span>{{ address }}</span>-->
        </a>
      </li>

      <li class="spacer" style="float: right; padding-top: 20px" v-if="user||sell"></li>
      <li style="float: right" v-if="user||sell">
        <router-link to="/SellAudit" style="float: left">修改信息</router-link>
      </li>
      <li class="spacer" style="float: right; padding-top: 20px"></li>
      <li style="float: right">
        <router-link to="/order" style="float: right" v-if="user">我的订单</router-link>
        <router-link to="/login" style="float: right" v-else>我的订单</router-link>
      </li>
      <li class="spacer" style="float: right; padding-top: 20px"></li>
      <li style="float: right">
        <router-link to="/account" style="float: right" v-if="user">我的钱包</router-link>
        <router-link to="/login" style="float: right" v-else>我的钱包</router-link>
      </li>
      <li class="spacer" style="float: right; padding-top: 20px"></li>


      <li><a href="javascript:" @click="sellPage" v-if="user" id="pageInfo">商家界面</a></li>
      <li class="spacer" v-if="user"></li>
      <li v-if="!user">
        <span class="loginSpan"><router-link
            to="/login">你好，请登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</router-link><router-link
            to="/register"><span id="hello">免费注册</span></router-link></span>
      </li>
      <li v-else>
        <span class="loginSpan" >欢迎您，{{ user.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a @click="exit">退出登录</a></span>
      </li>

    </ul>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import axios from "axios";

export default {
  name: 'Navigation',
  computed: {
    //user模块带有命名空间
    ...mapState('user',{
      //将this.user映射为this.$store.state.user.user  因为定义变量名称相同，可简写成 ['user']
      user: 'user',
      sell:'sell',
    }),
  },
  data() {
    return {
      address: null,
      identity:"sell",
      name:'',
      password:''
    }
  },
  methods: {
    exit(){
      this.deleteUser();
      sessionStorage.removeItem("user");
    },
    async ipAddress() {

      let url__ = "https://restapi.amap.com/v3/ip?&output=json&key=ba509d66c3b8a492985d6af48d3dbbab";
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url__, false);
      xhr.send(null);
      let xhr__ = xhr.responseText
      let new_ = eval("(" + xhr__ + ")").city
      let weatherURL = "https://www.mxnzp.com/api/weather/current/" + new_ + "?app_id=olgp0nmpln8meyis&app_secret=eTFUMXJCbXlBQUNYOVhWMDhTK2hzUT09";
      let temp_ = ''
      await axios.get(weatherURL).then(
          (response) => {
            temp_ = response.data
          },
          (error) => {
            console.log("请求失败了", error.message);
          }
      );
      // if (new_ === "佳木斯市"){
      //   new_ = "哈尔滨市"
      // }
      return new_ + "\xa0\xa0\xa0\xa0|\xa0\xa0\xa0\xa0" + temp_.data.temp + "\xa0\xa0\xa0\xa0|\xa0\xa0\xa0\xa0" + temp_.data.weather;
    },
    sellPage(){
      //console.log("1:"+this.name+" "+this.password)
      if(this.name===null || this.password===null){
        this.$message({  type: 'error',
          message: "登录信息过期，请重新登录！"
        })
        this.$router.replace('/login');
      }
      else{

        //console.log("2:"+this.name+" "+this.password)
        this.axios.post(this.identity+"/login",
            {name: this.name, password: this.password}).then(response => {
          this.saveSell(response.data.data);
          //console.log(response.data.data)
          try{
            var __ = this.sell.id
            sessionStorage.setItem("sell",JSON.stringify(this.sell));
            this.deleteUser();
            sessionStorage.removeItem("user");
            this.$router.replace('/shop/shopId/'+this.sell.id);
          }catch (e){
            this.$message({
              dangerouslyUseHTMLString: true,
              message: response.data.msg,
              type: 'error'
            });
          }
        })
      }
    },
    ...mapMutations('user',['deleteUser','saveSell']) //将this.deleteUser映射为this.$store.state.commit('user/deleteUser')
  },
  async mounted() {
    // eslint-disable-next-line no-constant-condition
    this.name =(sessionStorage.getItem("name")===null ? "test" : sessionStorage.getItem("name").slice(1,-1))
    // eslint-disable-next-line no-constant-condition
    this.password = (sessionStorage.getItem("password")===null ? "test2" : sessionStorage.getItem("password").slice(1,-1))
    console.log(this.address)
    // this.address = this.ipAddress()
    //response.text()是一个promise对象
//通过then方法获取promise存的数据

    await this.ipAddress().then(val => {
      console.log("====")
      this.address = val
      document.getElementById("address__").innerHTML = val;
      console.log(this.address)
    });

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