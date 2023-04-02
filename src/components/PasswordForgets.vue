<template>
  <div style="width: 100%;height: 100%;background-color: rgba(204,204,204,0);position: fixed">
    <iframe src="https://www.nahida-elysia.asia/Login_Back/index.html" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" name="mapFrame"
            width="100%" height="100%" scrolling="no" frameborder="0" style="position:absolute;right:0;width: 100%;height:100%;z-index: -1" id="iframe"></iframe>
    <div id="login_box" style="position:absolute;left:100px;z-index: 9999">
      <h2>PasswordRecover</h2>
      <h4 style="display:none" id="NameSelect">Name:</h4>
      <div id="input_box">
        <br>
        <input type="text" id="" name="name" v-model.trim="email" placeholder="请输入邮箱地址">
        <br><br>
        <input type="text" id="checkV" name="checkV" v-model.trim="checkV" placeholder="请输入验证码" @blur="checkEV">
        <br><br>
        <input  id="password" type="password" v-model.trim="password" placeholder="请输入新密码" @blur="checkPwd">
        <button type="submit"  :disabled="codeBtn.btnStatus" id="Email_send"  @click.prevent="SendCode">{{codeBtn.btnText}}</button><br>
        <button type="submit" :disabled="LoginBtn.btnStatus" @click.prevent="login">{{ LoginBtn.btnText }}</button><br>
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
import axios from "axios";

export default {
  name: "PasswordForgets",
  data() {
    return {
      email: '',
      password: '',
      checkV: '',
      identity: "user",
      evCode: "1",
      low: 20,
      high: 80,
      codeBtn: {
        btnStatus: false,
        btnText: '获取验证码',
        btnType: 'primary'
      },
      LoginBtn: {
        btnStatus: true,
        btnText: '等待输入中',
        btnType: 'primary'
      },
      timer: null,
    };
  },
  components: {
    NumSlider
  },
  computed:{
    ...mapState('user',{
      user:'user',
      sell:'sell',
      admin:'admin'
    })
  },
  mounted() {
    var iframe = document.getElementById("iframe")
    if (iframe.attachEvent) {
      iframe.attachEvent('onload', function () {
        // iframe加载完毕以后执行操作
        console.log('iframe已加载完毕')
        iframe.contentWindow.postMessage((-570)+'', 'https://www.nahida-elysia.asia/Login_Back/index.html');
      })
    } else {
      iframe.onload = function () {
        // iframe加载完毕以后执行操作
        console.log('iframe已加载完毕')
        iframe.contentWindow.postMessage((-570)+'', 'https://www.nahida-elysia.asia/Login_Back/index.html');
      }
    }
  },
  methods: {
    SendCode() {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (regEmail.test(this.email)) {
        axios.post("/check_/email_", {email_: this.email}).then(response => {
          if (response.data === false) {
            axios.post("EmailVerification/send", {email: this.email}).then(response => {
              this.evCode = response.data + ''
              console.log(this.evCode)
            })
            axios.post("user/SelectNameByEmail", {email_: this.email , password_:""}).then(response => {
              document.getElementById("NameSelect").innerHTML = "Name:"+response.data + ''
              document.getElementById("NameSelect").style.display = "block"
            })
            console.log(this.evCode)
            this.$message({
              type:"success",
              message:"发送成功",
            })
            this.checkFormW = true
            this.codeBtn.btnStatus = true

            setTimeout(() => {
              this.countDown(60)
            }, 5)
          } else {
            document.getElementById("NameSelect").style.display = "none"
            this.$message("该邮箱尚未注册！")
          }
        })
      } else {
        document.getElementById("NameSelect").style.display = "none"
        this.$message("邮箱尚未输入或输入格式错误")
      }
    },
    countDown(val) {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.codeBtn.btnText = '发送中'
      this.codeBtn.btnStatus = true

      let tim = val;
      this.timer = setInterval(() => {
        tim--;
        if (tim === 0) {
          clearInterval(this.timer)
          this.codeBtn.btnStatus = false
          this.checkFormW = false
          this.codeBtn.btnText = '重新获取'
        } else {
          this.codeBtn.btnStatus = true
          this.checkFormW = true
          this.codeBtn.btnText = `倒计时${tim}秒`
        }
      }, 1000)
    },
    checkEV() {
      if (this.checkV !== this.evCode) {
        document.getElementById("checkV").style.backgroundColor = 'rgba(226,123,123,0.64)'
        this.LoginBtn.btnText = "验证码输入错误"
        this.LoginBtn.btnStatus = true

      } else {
        document.getElementById("checkV").style.backgroundColor = 'rgb(220 236 226 / 50%)'
        if(this.password !== ''){
          this.LoginBtn.btnText = "完成登录"
        }
      }
    },
    checkPwd(){
      if (this.password === '') {
        document.getElementById("password").style.backgroundColor = 'rgba(226,123,123,0.64)'
        this.LoginBtn.btnText = "密码不能为空"
        this.LoginBtn.btnStatus = true
      } else {
        document.getElementById("password").style.backgroundColor = 'rgb(220 236 226 / 50%)'
        if(this.checkV === this.evCode){
          this.LoginBtn.btnText = "完成登录"
          this.LoginBtn.btnStatus = false
        }
      }
    },
    lowChange (val) {
      this.low = val
      this.test(val)

    },
    highChange (val) {
      this.high = val
      document.getElementById("login_box").style.left = 900+val+"px"
    },
    test(val){
      var test_ = document.getElementById("iframe")
      // console.log(test_.contentDocument||test_.contentWindow.document)
      test_.contentWindow.postMessage((-590+val*1.35)+'', 'https://www.nahida-elysia.asia/Login_Back/index.html');
      // window.addEventListener('message',(e) => {
      //   console.log(e.data);
      // }, false);
    },
    login(){
      axios.post("user/UpdateByEmail", {password_:this.password,email_:this.email}).then(response => {
        console.log(response.data + '-------success')
        this.$message({
          type:"success",
          message:"修改成功!"
        })
        this.$router.replace("/login")
      })
    },
    ...mapMutations('user', [
      'saveUser','saveSell','saveAdmin'
    ]),
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
h4 {
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
