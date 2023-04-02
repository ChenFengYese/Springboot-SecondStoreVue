<template>
  <div style="width: 100%;height: 100%;background-color: rgba(204,204,204,0);position: fixed">
      <iframe src="https://www.nahida-elysia.asia/Login_Back/index.html" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" name="mapFrame"
              width="100%" height="100%" scrolling="no" frameborder="0"  style="position:absolute;right:0;width: 100%;height:100%;z-index: -1" id="iframe"></iframe>
    <div id="login_box" style="position:absolute;left:100px;z-index: 9999">
      <h2>LOGIN</h2>
      <div id="input_box">
        <input type="text" id="name" name="name" v-model.trim="name" placeholder="请输入用户名">
        <input  id="password" type="password" v-model.trim="password" placeholder="请输入密码">
        <br><br><br><br>
        <label for="user">
        <input type="radio" id="user" name="identity" value="user" v-model="identity" class="a-radio">
        <span class="b-radio"></span><span style="color: #9ae5fa">用户</span></label>
        <label for="admin">
        <input type="radio" id="admin" name="identity" value="admin" v-model="identity" class="a-radio">
          <span class="b-radio"></span><span style="color: #9ae5fa">管理员</span></label>
        <button type="submit" @click.prevent="login">登录</button><br>
        <button type="submit">
          <router-link to="/register">立即注册</router-link>
        </button><br>
        <div class="slider">
          <NumSlider
              :min="0"
              :max="100"
              :initialMin="20"
              :initialMax="80"
              :width="120"
              :disabled="false"
              :range="true"
              @lowChange="lowChange"
              @highChange="highChange"
          />
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { mapMutations, mapState } from 'vuex';
import NumSlider from '@/components/NumSlider'
export default {
  name: "UserLogin",
  data() {
    return {
      name: '',
      password: '',
      identity: "user",
      low: 20,
      high: 80,

    };
  },
  computed:{
    ...mapState('user',{
      user:'user',
      sell:'sell',
      admin:'admin'
    })
  },
  components: {
    NumSlider
  },
  methods: {
    lowChange (val) {
      this.low = val
      this.test(val)

    },

    highChange (val) {
      this.high = val
      var test_ = document.getElementById("iframe")
      test_.contentWindow.postMessage((-80+val*2)+'', 'https://www.nahida-elysia.asia/Login_Back/index.html');
      // window.addEventListener('message',(e) => {
      //   console.log(e.data);
      // }, false);
    },
    test(val){

      document.getElementById("login_box").style.left = 100+val+"px"
      // console.log(test_.contentDocument||test_.contentWindow.document)
    },
    login(){
      if(!this.checkForm())
        return;
      this.axios.post(this.identity+"/login",
          {name: this.name, password: this.password})
          .then(response => {
            if(response.data.code === 0){
              //普通用户登录
              if(this.identity==="user"){
                this.saveUser(response.data.data);
                sessionStorage.setItem("user",JSON.stringify(this.user));
                sessionStorage.setItem("name",JSON.stringify(this.name));
                sessionStorage.setItem("password",JSON.stringify(this.password));
                this.$message({
                  message:"登录成功！",
                  type:"success"
                });
                //如果存在查询参数
                if(this.$route.query.redirect){
                  let redirect = this.$route.query.redirect;
                  //跳转至进入登录页前的路由
                  this.$router.replace(redirect);   //跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面
                }else{
                  // 否则跳转至首页
                  this.$router.replace('/home');
                }
              }else if(this.identity==="sell"){  //
                this.saveSell(response.data.data);
                sessionStorage.setItem("sell",JSON.stringify(this.sell));
                this.$message({
                  message:"登录成功！",
                  type:"success"
                });
                //如果存在查询参数
                if(this.$route.query.redirect){
                  let redirect = this.$route.query.redirect;
                  //跳转至进入登录页前的路由
                  this.$router.replace(redirect);   //跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面
                }else{
                  // 否则跳转至首页
                  this.$router.replace('/shop/shopId/'+this.sell.id);
                }
              }else{    //管理员登录
                this.saveAdmin(response.data.data);
                sessionStorage.setItem("admin",JSON.stringify(this.admin));
                this.$message({
                  message:"登录成功！",
                  type:"success"
                });
                this.$router.replace('/admin');
              }
            }else{
              this.$message({
                dangerouslyUseHTMLString: true,
                message: response.data.msg,
                type: 'error'
              });
            }
          })
          .catch(error => {
            alert(error.message)
          })
    },
    ...mapMutations('user', [
      'saveUser','saveSell','saveAdmin'
    ]),
    checkForm(){
      if(!this.name || !this.password){
        this.$message("用户名和密码不能为空");
        return false;
      }
      return true;
    }
  }
};
</script>
<style lang="less" scoped>
body {
  background-size: 100% 130%;
}

#login_box {
  width: 20%;
  height: 400px;
  background-color: #00000060;
  margin: auto;
  margin-top: 10%;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
}
.m-num {
  min-width: 120px;
  width: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
.u-num {
  color: #0f7af5;
  font-size: 24px;
}
}
.slider {
  height: auto;
  min-width: 120px;
  width: 120px;
  margin: 30px auto 120px;
}
h2 {
  margin-top: 5%;
  color: #9ae5fa;
}

#input-box {
  margin-top: 5%;
  color: #9ae5fa;
}

span {
  color: #9ae5fa;
}

div{height:100%;width:100%;overflow-x:hidden;overflow-y:hidden}
* {
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}


input {
  border: 0;
  width: 60%;
  font-size: 15px;
  color: #fff;
  background: transparent;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  outline: none;
  margin-top: 10px;
}

button {
  margin-top: 50px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #9ae5fa;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #0c2f5b8f, #136076);
}

#sign_up {
  margin-top: 45%;
  margin-left: 60%;
}

a {
  color: #9ae5fa;
  text-decoration:none
}

label{
  margin:10px;
}
.a-radio{
  display: none;
}
.b-radio{
  display: inline-block;
  border:1px solid #ccc;
  width:16px;
  height: 16px;
  border-radius:2px;
  vertical-align: middle;
  margin-right: 5px;
  position: relative;
}
.b-radio:before{
  content: '';
  font-size: 0;
  width: 10px;
  height: 10px;
  background: rgb(143, 188, 238);
  position: absolute;
  left:50%;
  top:50%;
  margin-left: -5px;
  margin-top: -5px;
  border-radius: 2px;
  display: none;
}
.a-radio:checked~.b-radio:before{
  display: block;
}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #9ae5fa;
  /* placeholder字体大小  */
  font-size: 12px;
}
</style>
