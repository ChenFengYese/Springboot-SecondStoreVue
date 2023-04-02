<template>
  <div class="register">
    <video id="v1" autoplay="" muted="" loop="" preload="auto" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true" mtt-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="true" x5-video-orientation="portraint" src="https://www.tof-vip.top/snowing_2.mp4" style="width: 100%; object-fit: fill;">
      <source src="">
    </video>
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-form">
      <el-form-item :label="name_data" prop="name">
        <el-input type="text" id="userid__" v-model="form.name" autocomplete="off" onfocus="this.blur()"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" autocomplete="off" onfocus="this.blur()"></el-input>
      </el-form-item>
      <el-form-item :label="phone_data" prop="phone">
        <el-input type="tel" id="userphone__" v-model="form.phone" autocomplete="off" onfocus="this.blur()"></el-input>
      </el-form-item>
      <el-form-item :label="email_data" prop="email">
        <el-input type="email" id="useremail__" v-model="form.email" autocomplete="off" onfocus="this.blur()"></el-input>
      </el-form-item>
      <el-form-item label="学校" prop="city">
        <el-input type="text" v-model="form.city" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学生证正面" prop="idCardUp">
        <a href="javascript:" class="file">{{IdFront}}
          <input type="file" accept="image/*"  ref="idCardUpFile" autocomplete="off" id="Idfront" @change="this.getImgName" required/></a>
      </el-form-item>
      <el-form-item label="学生证反面" prop="idCardDown">
        <a href="javascript:" class="file">{{IdBack}}
          <input type="file" accept="image/*"  ref="idCardDownFile" autocomplete="off" id="Idback" @change="this.getImgName" required/></a>
      </el-form-item>
      <el-form-item :label="card_data" prop="card">
        <el-input type="tel" id="usercard__" v-model="form.card" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="imageValid">
        <el-input type="text" v-model="form.imageValid"></el-input>
        <canvas ref="canvas" id="canvas" width="120" height="40" @click="updateCanvas()"></canvas>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "UserRegister",
  computed:{
    //user模块带有命名空间
    ...mapState('user',{
      //将this.user映射为this.$store.state.user.user  因为定义变量名称相同，可简写成 ['user']
      user: 'user',
      sell:'sell',
    }),
  },
  data() {
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'));
      } else if (value !== this.num) {
        this.updateCanvas();
        callback(new Error('验证码输入有误'));
      } else {
        callback();
      }
    }
    return {
      form: {
        name: "",
        password: "",
        checkPass: "",
        phone: "",
        email: "",
        city: "",
        card: "",
        imageValid: "",  //用户输入的验证码
        evCodeUseless: "",
      },
      codeBtn: {
        btnStatus: false,
        btnText: '获取验证码',
        btnType: 'primary'
      },
      IdFront: "学生证正面 ",
      IdBack: "学生证背面 ",
      name_data: "用户名",
      phone_data: "电话",
      email_data: "邮箱",
      card_data: "银行卡号",
      evCode: "1",
      num: "", //图片中的随机验证码
      checkFormW: false,
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        imageValid: [
          {validator: validatePass3, trigger: 'blur'}
        ],
        city: [{required: true, message: "请输入学校地址", trigger: 'blur'}],
        card: [
          {required: true, message: "请输入银行卡号", trigger: 'blur'},
          {min: 16, max: 16, message: "银行卡号格式不正确", trigger: 'blur'}
        ],
      }
    };
  },

created() {
    this.$message("用户名密码手机邮箱均已绑定,仅可修改学校学生证以及银行卡号!")
},
  mounted() {
    this.form.name = this.user.name
    this.form.password = this.user.password
    this.form.phone= this.user.phone
    this.form.email = this.user.email
    this.form.card = this.user.card
    this.form.city = this.user.city
    this.draw()

  },
  methods: {
    register(formName) {
          this.$refs[formName].validate((valid) => {   //表单验证
            // eslint-disable-next-line no-empty
            if (!valid) {
              this.$message("输入错误")
            } else {
              this.axios.post("user/UpdateInfo",{name_: this.form.name,city_:this.form.city,card_:this.form.card}).then(response => {
                console.log(response)
                  let form = {
                    name: this.form.name,
                    password: this.form.password,
                    phone: this.form.phone,
                    sex: this.form.sex,
                    card: this.form.card
                  };
                  this.message = '';
                  var param = new FormData();
                  param.append("idCardUp", this.$refs.idCardUpFile.files[0]);
                  param.append("idCardBack", this.$refs.idCardDownFile.files[0]);
                  param.append("sell", JSON.stringify(form));
                  this.axios.post("/user/updateSellInfo", param, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }).then(response => {
                        console.log(response.data.code);
                        if (response.data.code === 0) {
                          this.$message({
                            type: 'success',
                            message: "申请成功！"
                          })
                          this.resetForm('form');
                          this.$router.replace('/login');
                        } else {
                          this.resetForm('form');
                          this.$message("申请失败！");
                        }
                      })                  .catch(error => {
                    alert(error.message)
                  })
              });
            }
          });
      },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.form.name = this.user.name
      this.form.password = this.user.password
      this.form.phone= this.user.phone
      this.form.email = this.user.email
    },

    // 随机颜色函数
    getColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    draw() {
      var context = this.$refs.canvas.getContext("2d");//舞台，getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。
      context.strokeRect(0, 0, 120, 40);//绘制矩形（无填充）
      var aCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      // 绘制字母
      var arr = [] //定义一个数组用来接收产生的随机数
      for (var i = 0; i < 4; i++) {
        let x = 20 + i * 20;//每个字母之间间隔20
        let y = 20 + 10 * Math.random();//y轴方向位置为20-30随机
        var index = Math.floor(Math.random() * aCode.length);//随机索引值
        var txt = aCode[index];
        context.font = "bold 20px 微软雅黑";//设置或返回文本内容的当前字体属性
        context.fillStyle = this.getColor;//设置或返回用于填充绘画的颜色、渐变或模式，随机
        context.translate(x, y);//重新映射画布上的 (0,0) 位置，字母不可以旋转移动，所以移动容器
        var deg = 90 * Math.random() * Math.PI / 180;//0-90度随机旋转
        context.rotate(deg);//  旋转当前绘图
        context.fillText(txt, 0, 0);//在画布上绘制“被填充的”文本
        context.rotate(-deg);//将画布旋转回初始状态
        context.translate(-x, -y);//将画布移动回初始状态
        arr[i] = txt //接收产生的随机数
      }
      this.num = arr[0] + arr[1] + arr[2] + arr[3] //将产生的验证码放入num
      // 绘制干扰线条
      for (let i = 0; i < 8; i++) {
        context.beginPath();//起始一条路径，或重置当前路径
        context.moveTo(Math.random() * 120, Math.random() * 40);//把路径移动到画布中的随机点，不创建线条
        context.lineTo(Math.random() * 120, Math.random() * 40);//添加一个新点，然后在画布中创建从该点到最后指定点的线条
        context.strokeStyle = this.getColor();//随机线条颜色
        context.stroke();//  绘制已定义的路径
      }
      // 绘制干扰点，和上述步骤一样，此处用长度为1的线代替点
      for (let i = 0; i < 20; i++) {
        context.beginPath();
        let x = Math.random() * 120;
        let y = Math.random() * 40;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.strokeStyle = this.getColor();
        context.stroke();
      }
    },
    //更新验证码
    updateCanvas() {
      var context = this.$refs.canvas.getContext("2d");
      context.clearRect(0, 0, 120, 40);//在给定的矩形内清除指定的像素
      this.draw();
      console.log(this.num);
    },
    getImgName() {
      console.log("on")
      if (document.getElementById("Idfront").files[0] !== undefined) {
        console.log("11111")
        this.IdFront = "学生证正面:" + document.getElementById("Idfront").files[0].name
      }
      if (document.getElementById("Idback").files[0] !== undefined) {
        console.log("22222")
        this.IdBack = "学生证背面:" + document.getElementById("Idback").files[0].name
      }
    },
  }
}


</script>

<style>
.el-input__inner{
  background-color: rgb(220 236 226 / 50%);
  border:1px solid #3c5d5161

}
.el-radio__input + .el-radio__label {
  color: rgba(52, 197, 36, 0.93)
  /*color: #16e35e*/

}.el-radio__input.is-checked + .el-radio__label {
   color: #16e35e
 }
.el-form-item__label{
  color: #11eb8ebd;
}
.file {
  position: relative;
  display: inline-block;
  background: rgb(220 236 226 / 50%);
  border: 1px solid #3c5d5161;
  border-radius: 4px;
  padding: 15px 112px;
  overflow: hidden;
  color: rgb(38 50 42 / 50%);
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.file:hover {
  background: rgba(31, 86, 74, 0.38);
  border-color: rgba(31, 86, 74, 0.61);
  color: rgba(31, 86, 74, 0.31);
  text-decoration: none;
}

.register {
  margin: 0 auto;
  padding: 2em 0;
  width: 500px;
}

.imageVaild{
  position:relative;
}

canvas{
  position: absolute;
  top: 0;
  right: 0;
}
.toMerchantRegister{
  position: relative;
}
.toMerchantRegister a{
  position: absolute;
  top: -50px;
  right: 0;
}
a{
  text-decoration: none;
}

video{

  position: fixed;

  /*right:-9.8%;*/

  /*bottom: -26%;*/
  right:0;

  bottom: 0;
  min-width: 100%;

  min-height: 100%;

  width: auto;

  height: auto;

  z-index: -9999;}
</style>