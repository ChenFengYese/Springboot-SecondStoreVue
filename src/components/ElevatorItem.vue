<template>
  <div class="elevator" style="top:100px;" id="elevator">
<!--    elevator elevator_fix-->
    <ul class="elevator_list" style="height: 70%">
      <li class="elevator_item" v-if="user">
        <a class="elevator_lk " href="javascript:" clstag="h|keycount|core|elvt_01" tabindex="-1" aria-hidden="true" id="pageTo" @click="pageTo">
          <div><span class="elevator_lk_bg"></span>
            <span class="elevator_lk_txt" id="info">商家界面</span>
          </div></a></li>
      <li class="elevator_item" v-if="sell">
        <a class="elevator_lk " href="javascript:" clstag="h|keycount|core|elvt_01" tabindex="-1" aria-hidden="true" id="pageTo" @click="pageTo">
          <div><span class="elevator_lk_bg"></span>
            <span class="elevator_lk_txt" id="info">用户界面</span>
          </div></a></li>
      <li class="elevator_item">
        <a class="elevator_lk elevator_promotional" href="javascript:void(0);" clstag="h|keycount|core|elvt_08" tabindex="-1" aria-hidden="true">
          <img src="../assets/img.png" alt=""></a></li>
      <li class="elevator_item" v-if="(sell||user)"><a class="elevator_lk " href="#/account" clstag="h|keycount|core|elvt_02" tabindex="-1" aria-hidden="true" id="qianbaohf">
        <div><span class="elevator_lk_bg"></span><span class="elevator_lk_txt" id="qianbao">我的钱包</span></div></a></li>
      <li class="elevator_item" v-if="(sell||user)"><a class="elevator_lk " href="#/order" clstag="h|keycount|core|elvt_03" tabindex="-1" aria-hidden="true" id="dingdanhf">
        <div><span class="elevator_lk_bg"></span><span class="elevator_lk_txt">我的订单</span></div></a></li>
      <li class="elevator_item"><a class="elevator_lk " href="javascript:void(0);" clstag="h|keycount|core|elvt_04" tabindex="-1" aria-hidden="true" @click="exit" v-if="(user||sell)">
        <div><span class="elevator_lk_bg"></span><span class="elevator_lk_txt" id="loginInfo_">退出登录</span></div></a></li>
      <li class="elevator_item"><a class="elevator_lk " href="javascript:void(0);" clstag="h|keycount|core|elvt_04" tabindex="-1" aria-hidden="true" @click="exit" v-if="(!user&&!sell)">
        <div><span class="elevator_lk_bg"></span><span class="elevator_lk_txt" id="loginInfo_">登录</span></div></a></li>
      <li class="elevator_item"><a class="elevator_lk elevator_lk2" href="javascript:" clstag="h|keycount|core|elvt_05" @click="paypaypay">
        <span class="elevator_lk_bg"></span>
        <span class="elevator_lk_txt">客服</span></a></li>
      <li class="elevator_item">
      <a class="elevator_lk elevator_lk2" href="javascript:"  clstag="h|keycount|core|elvt_06" @click="feedback">
        <span class="elevator_lk_bg"></span><span class="elevator_lk_txt">反馈</span></a></li>
      <li class="elevator_item">
      <a class="elevator_lk elevator_lk2" href="https://www.lb-trumpet.cn/introduction.html"  clstag="h|keycount|core|elvt_07">
        <span class="elevator_lk_bg"></span><span class="elevator_lk_txt">关于我们</span></a></li>
    </ul>
    <a class="elevator_totop" href="javascript:" clstag="h|keycount|core|elvt_07" tabindex="-1" aria-hidden="true" @click="scrollTopY"><span class="elevator_totop_icon"></span>
      <span class="elevator_totop_txt">顶部</span></a>
    <div ref="alipaywap" v-html="alipay" />
    <div id="popBox" style="width: 700px;height:700px;">
      <video width="100%" height="100%"  src="https://www.tof-vip.top/jntm.mp4" controls id="video"></video>
      <div style="font-family: 微软雅黑,serif;font-size: 20px;color: #e71010;margin-top: 20px;">
      (11秒后自动关闭)
    </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";


export default {
  name: "ElevatorItem",
  computed: {
    //user模块带有命名空间
    ...mapState('user',{
      //将this.user映射为this.$store.state.user.user  因为定义变量名称相同，可简写成 ['user']
      user: 'user',
      sell:'sell',
    }),
  },
  data(){
    return{
      alipay:null,
      identity:"sell",
      name:null,
      password:null,
      PageInfo:null,
    }
  },
  mounted() {
    // try{
    //   if(document.getElementById("hello").innerHTML==="免费注册")
    //   {  document.getElementById("loginInfo_").innerHTML = "登录";}
    // }catch (e) {console.log(e)}
    // eslint-disable-next-line no-constant-condition
    this.name =(sessionStorage.getItem("name")===null ? "test" : sessionStorage.getItem("name").slice(1,-1))
    // eslint-disable-next-line no-constant-condition
    this.password = (sessionStorage.getItem("password")===null ? "test2" : sessionStorage.getItem("password").slice(1,-1))
    try{
      document.getElementById("info").innerHTML = document.getElementById("pageInfo").innerHTML;
      if(document.getElementById("info").innerHTML==="用户界面"){
        document.getElementById("qianbao").innerHTML = "我的信息"
        document.getElementById("qianbaohf").href = "#/shop/info"
        document.getElementById("dingdanhf").href = "#/shop/order"
      }else{
        document.getElementById("qianbao").innerHTML = "我的钱包"
        document.getElementById("qianbaohf").href = "#/order"
        document.getElementById("dingdanhf").href = "#/account"
      }
    }catch (e){
      console.log("")
    }
    var box = document.querySelector("#elevator");
    //用js检测鼠标滚轮距离顶部位置来给div添加动画
    window.onscroll = function() {
      //检测鼠标滚轮距离顶部位置
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      //要设置到DIV显示出来时给div添加动画 也可以设置一个数值只要保证div出来给它加动画即可
      if(top > 200) {
        box.className = "elevator elevator_fix"
      }
      else {
        box.className = "elevator"
      }
    }
  },
  methods:{
    feedback(){

      //获取显示的div框
      var popBox = document.getElementById("popBox");
      //设置定时关闭时间 此处为毫秒1200=1.2s
      setTimeout("document.getElementById('popBox').style.display='none'",11200);
      //设置为可见
      popBox.style.display = "block";

      document.getElementById("video").play();

      // var name;                           //网页名称，可为空;
      // var iWidth=500;                         //弹出窗口的宽度;
      // var iHeight=570;                        //弹出窗口的高度;
      // //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
      // var iTop = (window.screen.height-30-iHeight)/2;       //获得窗口的垂直位置;
      // var iLeft = (window.screen.width-10-iWidth)/2;        //获得窗口的水平位置;
      // var url = "https://www.tof-vip.top/jntm.mp4"
      // window.open(url,name,'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizable=no,location=no,status=no');
      //
      this.$message({
        dangerouslyUseHTMLString: true,
        message:"<h2 style='color:red'>本网站过于完美！禁止反馈！请自我反省！11秒后自动关闭！</h2>",
        type:"error",
        duration:9200
      });
    },
    paypaypay(){
      try{
        // eslint-disable-next-line no-unused-vars
        var d1 = sessionStorage.getItem("name").slice(1,-1)
        this.axios.post("/ali/pay",
            {
              totalAmount:"10000",
              outTradeNo:Date.now().toString() + sessionStorage.getItem("name").slice(1,-1),
              subject:"联系客服",
              body:"用于为"+sessionStorage.getItem("name").slice(1,-1)+"的客服沟通",
              name: sessionStorage.getItem("name").slice(1,-1),
            }).then(response =>{
          console.log(response);
          this.alipay = response.data;
          this.$nextTick(() =>{
            this.$refs.alipaywap.children[0].submit();
            setTimeout(()=>{},500);
          });
        })
      }catch (e){
        this.$message({
        message:"请先登录！",
        type:"error"
      });}
    },
      exit(){
          if(document.getElementById("loginInfo_").innerHTML !== "登录")
          {
            this.deleteUser();
            this.deleteSell();
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("sell");
            this.$router.replace("/home")
            document.getElementById("loginInfo_").innerHTML = "登录";
          }
          else{
            this.$router.replace('/login');
          }
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
          try{
            var __ = this.sell.id
            sessionStorage.setItem("sell",JSON.stringify(this.sell));
            this.deleteUser();
            sessionStorage.removeItem("user");
            this.$router.replace('/shop/shopId/'+this.sell.id);
          }catch (e){
            console.log(e)
            this.$message({
              dangerouslyUseHTMLString: true,
              message: response.data.msg,
              type: 'error'
            });
          }
        })
      }
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
        this.axios.post("user/login",
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
    pageTo(){
      console.log("-----------------pageInfo:"+document.getElementById("pageInfo").innerHTML);
      console.log(document.getElementById('pageInfo').innerHTML.toString()==="商家界面");
      var s = document.getElementById('pageInfo').innerHTML==='商家界面'?'sellPage':'userPage';
      if(s==="sellPage") this.sellPage()
      else this.userPage()
    },
    scrollTopY(){
      console.log("successful")
      document.body.scrollTop = 0;
      document.documentElement.scrollTop=0;
    },
    ...mapMutations('user',['deleteUser','deleteSell','saveSell','saveUser']) //将this.deleteUser映射为this.$store.state.commit('user/deleteUser')
  }
}
</script>

<style scoped>
@import "//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/static/css/index.chunk.css";
@import "//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/static/css/first-screen.chunk.css";
/*弹出层*/
#popBox {
  display: none;
  /*background-color: #FFFFFF;*/
  z-index: 11;
  width: 250px;
  height: 180px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  border-radius: 5px;
}

</style>