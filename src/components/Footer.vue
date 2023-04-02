<template>
  <div id="J_footer" class="footer" style="top:100px;text-align: center;">
    <div style="min-height: 200px;width: 100%"></div>
    <div class="mod_service" clstag="h|keycount|btm|btmnavi_null01" poi="btm|btmnavi|null01" style="text-align: center;">
      <div class="grid_c1 mod_service_inner" style="display: inline-block">
        <ul class="mod_service_list">
          <li class="mod_service_item">
            <div class="mod_service_unit">
              <h5 class="mod_service_tit mod_service_duo">多</h5>
              <p class="mod_service_txt">品类齐全，轻松购物</p>
            </div>
          </li>
          <li class="mod_service_item">
            <div class="mod_service_unit">
              <h5 class="mod_service_tit mod_service_kuai">快</h5>
              <p class="mod_service_txt">多仓直发，极速配送</p>
            </div>
          </li>
          <li class="mod_service_item">
            <div class="mod_service_unit">
              <h5 class="mod_service_tit mod_service_hao">好</h5>
              <p class="mod_service_txt">正品行货，精致服务</p>
            </div>
          </li>
          <li class="mod_service_item">
            <div class="mod_service_unit">
              <h5 class="mod_service_tit mod_service_sheng">省</h5>
              <p class="mod_service_txt">天天低价，畅选无忧</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="mod_help" clstag="h|keycount|btm|btmnavi_null02" poi="btm|btmnavi|null02" style="display: inline-block">
      <div class="grid_c1 mod_help_inner">
        <div class="mod_help_list">
          <div class="mod_help_nav">
            <h5 class="mod_help_nav_tit">购物指南</h5>
            <ul class="mod_help_nav_con">
              <li>
                <a href="https://www.tof-vip.top/jntm.mp4" target="_blank" rel="noopener noreferrer">
                  假的购物流程
                </a>
              </li>
              <li>
                <a href="https://www.tof-vip.top/jntm.mp4" target="_blank" rel="noopener noreferrer">
                  假的会员介绍
                </a>
              </li>
              <li>
                <a href="https://www.tof-vip.top/jntm.mp4" target="_blank" rel="noopener noreferrer">
                  假的生活旅行
                </a>
              </li>
              <li>
                <a href="https://www.tof-vip.top/jntm.mp4" target="_blank" rel="noopener noreferrer">
                  假的常见问题
                </a>
              </li>
              <li>
                <a href="https://www.tof-vip.top/jntm.mp4" target="_blank" rel="noopener noreferrer">
                  假的大家电
                </a>
              </li>
              <li>
                <a href="https://www.tof-vip.top/jntm.mp4" target="_blank" rel="noopener noreferrer">
                  假的联系客服
                </a>
              </li>
            </ul>
          </div>
          <div class="mod_help_nav">
            <h5 class="mod_help_nav_tit">配送方式</h5>
            <ul class="mod_help_nav_con">
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  不能上门自提
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  没有211限时达
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  不能配送服务查询
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  没有配送费收取标准
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  不能海外配送
                </a>
              </li>
            </ul>
          </div>
          <div class="mod_help_nav">
            <h5 class="mod_help_nav_tit">支付方式</h5>
            <ul class="mod_help_nav_con">
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  不能货到付款
                </a>
              </li>
              <li>
                <a href="javascript:" rel="noopener noreferrer" @click="pay">
                  支持在线支付
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  不能分期付款
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  不能公司转账
                </a>
              </li>
            </ul>
          </div>
          <div class="mod_help_nav">
            <h5 class="mod_help_nav_tit">售后服务</h5>
            <ul class="mod_help_nav_con">
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  无售后政策
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  无价格保护
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  无退款说明
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  无返修/退换货
                </a>
              </li>
              <li>
                <a href="javascript:" @click="noapp" rel="noopener noreferrer">
                  取消订单
                </a>
              </li>
            </ul>
          </div>
          <div class="mod_help_nav">
            <h5 class="mod_help_nav_tit">特色服务</h5>
            <ul class="mod_help_nav_con">
              <li>
                <a href="https://www.tof-vip.top/jntm.mp4" target="_blank" rel="noopener noreferrer">
                  鸡你太美
                </a>
              </li>
              <li>
                <a href="https://www.nahida-elysia.asia/" target="_blank" rel="noopener noreferrer">
                  纳西妲
                </a>
              </li>
              <li>
                <a href="https://www.nahida-elysia.asia/www/index.html" target="_blank" rel="noopener noreferrer">
                  爱莉希雅
                </a>
              </li>
              <li>
                <a href="https://www.lb-trumpet.cn/" target="_blank" rel="noopener noreferrer">
                  川普网站
                </a>
              </li>
              <li>
                <a href="https://www.tof-vip.top/" target="_blank" rel="noopener noreferrer">
                  tof支持
                </a>
              </li>
              <li>
                <a href="https://www.nahida-elysia.asia/music_view.html" target="_blank" rel="noopener noreferrer">
                  音乐盛宴
                </a>
              </li>
            </ul>
          </div>
          <div class="mod_help_cover">
            <h5 class="mod_help_cover_tit">只因良品覆盖校区</h5>
            <div class="mod_help_cover_con">
              <p class="mod_help_cover_info">
                只因良品已向全国999个高校提供自营配送服务，不支持货到付款、POS机刷卡和售后上门服务。
              </p>
              <p class="mod_help_cover_more">
                <a href="javascript:"  rel="noopener noreferrer">
                  查看详情
                  <i class="iconfont"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mod_copyright">
      <div class="grid_c1 mod_copyright_inner">
        <p class="mod_copyright_links" clstag="h|keycount|btm|btmnavi_null03" poi="btm|btmnavi|null03">
          <a href="https://www.lb-trumpet.cn/introduction.html" target="_blank" rel="noopener noreferrer">关于我们</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:"  rel="noopener noreferrer" @click="pay">联系我们</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:"  rel="noopener noreferrer" @click="pay">联系客服</a>
          <span class="mod_copyright_split">|</span>
          <a href="https://wpa.qq.com/msgrd?v=3&uin=3107663466&site=qq&menu=yes" target="_blank" rel="noopener noreferrer">合作招商</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp" rel="noopener noreferrer">商家帮助</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp" rel="noopener noreferrer">营销中心</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp" rel="noopener noreferrer">手机只因</a>
          <span class="mod_copyright_split">|</span>
          <a href="https://www.lb-trumpet.cn/introduction.html" target="_blank" rel="noopener noreferrer">友情链接</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp"  rel="noopener noreferrer">销售联盟</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp"  rel="noopener noreferrer">只因社区</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp"  rel="noopener noreferrer">风险监测</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp"  rel="noopener noreferrer">隐私政策</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp" rel="noopener noreferrer">只因公益</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp"  rel="noopener noreferrer">English Site</a>
          <span class="mod_copyright_split">|</span>
          <a href="javascript:" @click="noapp" rel="noopener noreferrer">Media &amp; IR</a>
        </p>


        <div class="mod_copyright_info">
          <div class="mod_copyright_cert" clstag="h|keycount|btm|btmnavi_null04" poi="btm|btmnavi|null04">
            <p>
              <a href="javascript:" @click="pay" rel="noopener noreferrer">
                京公网安备 666666666666666号
              </a>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="pay" rel="noopener noreferrer">
                京ICP备88888888号
              </a>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="pay" rel="noopener noreferrer">
                ICP
              </a>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="pay" rel="noopener noreferrer">
                互联网信息服务资格证编号(京)-经营性-2022-0008
              </a>
              <span class="mod_copyright_split">|</span>
              <span>新出发京零&nbsp;字第大120007号</span>
            </p>
            <p>
              <span>互联网出版许可证编号新出网证(京)字666号</span>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="pay" rel="noopener noreferrer">
                出版物经营许可证
              </a>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="pay" rel="noopener noreferrer">
                网络文化经营许可证京网文[2020]6112-1201号
              </a>
              <span class="mod_copyright_split">|</span>
              <span>违法和不良信息举报电话：4006561155</span>
            </p>
            <p>
              <span class="copyright_txt">Copyright&nbsp;©&nbsp;2004&nbsp;-&nbsp;2022&nbsp;&nbsp;只因良品.com&nbsp;版权所有</span>
              <span class="mod_copyright_split">|</span>
              <span>消费者维权热线：4006067733</span>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="pay" rel="noopener noreferrer" class="mod_copyright_license">
                经营证照
              </a>
              <span class="mod_copyright_split">|</span>
              <span>(京)网械平台备字(2018)第00003号</span>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="pay" rel="noopener noreferrer" class="mod_business_license">
                营业执照
              </a>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="pay" rel="noopener noreferrer" class="mod_business_license">
                增值电信业务经营许可证
              </a>
            </p>
          </div>

          <div class="mod_copyright_inter">
            <p>
              <a class="mod_copyright_inter_lk" href="//www.nahida-elysia.asia/" target="_blank" rel="noopener noreferrer" clstag="h|keycount|btm|btmnavi_null0501" poi="btm|btmnavi|null0501">
                <i class="mod_copyright_inter_ico mod_copyright_inter_ico_global"></i>
                Global Site
              </a>
              <span class="mod_copyright_split">|</span>
              <a class="mod_copyright_inter_lk" href="//www.nahida-elysia.asia/" target="_blank" rel="noopener noreferrer" clstag="h|keycount|btm|btmnavi_null0502" poi="btm|btmnavi|null0502">
                <i class="mod_copyright_inter_ico mod_copyright_inter_ico_rissia"></i>
                Сайт России
              </a>
              <span class="mod_copyright_split">|</span>
              <a class="mod_copyright_inter_lk" href="//www.nahida-elysia.asia/" target="_blank" rel="noopener noreferrer" clstag="h|keycount|btm|btmnavi_null0503" poi="btm|btmnavi|null0503">
                <i class="mod_copyright_inter_ico mod_copyright_inter_ico_indonesia"></i>
                Situs Indonesia
              </a>
              <span class="mod_copyright_split">|</span>
              <a class="mod_copyright_inter_lk" href="//www.nahida-elysia.asia/" target="_blank" rel="noopener noreferrer" clstag="h|keycount|btm|btmnavi_null0504" poi="btm|btmnavi|null0504">
                <i class="mod_copyright_inter_ico mod_copyright_inter_ico_spain"></i>
                Sitio de España
              </a>
              <span class="mod_copyright_split">|</span>
              <a class="mod_copyright_inter_lk" href="//www.nahida-elysia.asia/" target="_blank" rel="noopener noreferrer" clstag="h|keycount|btm|btmnavi_null0505" poi="btm|btmnavi|null0505">
                <i class="mod_copyright_inter_ico mod_copyright_inter_ico_thailand"></i>
                เว็บไซต์ประเทศไทย
              </a>
            </p>
          </div>

          <div class="mod_copyright_subsites" clstag="h|keycount|btm|btmnavi_null06" poi="btm|btmnavi|null06">
            <p>
              <span>只因旗下网站：</span>
              <a href="javascript:" @click="noapp"  rel="noopener noreferrer">
                只因钱包
              </a>
              <span class="mod_copyright_split">|</span>
              <a href="javascript:" @click="noapp"  rel="noopener noreferrer">
                只因云
              </a>
              <span class="mod_copyright_split">|</span>
              <span>网络内容从业人员违法违规行为举报电话：4006561155-3</span>
            </p>
          </div>
        </div>

        <p class="mod_copyright_auth" clstag="h|keycount|btm|btmnavi_null07" poi="btm|btmnavi|null07">
          <a class="mod_copyright_auth_ico mod_copyright_auth_ico_2" href="https://www.12371.cn/dsxx/" target="_blank" rel="noopener noreferrer">
            可信网站信用评估
          </a>
          <a class="mod_copyright_auth_ico mod_copyright_auth_ico_3" href="http://www.cyberpolice.cn" target="_blank" rel="noopener noreferrer">
            网络警察提醒你
          </a>
          <a class="mod_copyright_auth_ico mod_copyright_auth_ico_4" href="https://www.12371.cn/dsxx/" target="_blank" rel="noopener noreferrer">
            诚信网站
          </a>
          <a class="mod_copyright_auth_ico mod_copyright_auth_ico_5" href="http://www.12377.cn/" target="_blank" rel="noopener noreferrer">
            中国互联网举报中心
          </a>
          <a class="mod_copyright_auth_ico mod_copyright_auth_ico_6" href="http://www.12377.cn/node_548446.htm" target="_blank" rel="noopener noreferrer">
            网络举报APP下载
          </a>
          <a class="mod_copyright_auth_ico mod_copyright_auth_ico_7" href="http://www.shdf.gov.cn/shdf/channels/740.html" target="_blank" rel="noopener noreferrer">
            扫黄打非网举报专区
          </a>
          <a class="mod_copyright_auth_ico mod_copyright_auth_ico_8" href="javascript:;" target="_self" rel="noopener noreferrer">
            适老化无障碍服务
          </a>
          <a class="mod_copyright_auth_ico mod_copyright_auth_ico_9" href="http://ggfw.cnipa.gov.cn:8010/PatentCMS_Center?fromsite=www.jd.com" target="_blank" rel="noopener noreferrer">
            国家知识产权公共服务网
          </a>
        </p>
      </div>
    </div>
    <div ref="alipaywap" v-html="alipay" />
  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      alipay:null
    }

  },
  methods:{
    pay(){
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
    noapp(){
      this.$message({
        message:"暂无当前信息，可资助我们以继续开发",
        type:"error"
      });
    }
  }
}
</script>


<style scoped>
.mod_footer {
  height: 500px;
  background-color: #eaeaea;
}

/* 服务承诺 */
.mod_service {
  padding: 30px 0;
  border-bottom: 1px solid #dedede;
}

.mod_service_list {
  overflow: hidden;
  height: 42px;
}

.mod_service_item {
  float: left;
  width: 297px;
}

.mod_service_unit {
  position: relative;
  margin: 0 auto;
  padding-left: 45px;
  width: 180px;
}

.mod_service_tit {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 42px;
  text-indent: -999px;
}

.mod_service_txt {
  overflow: hidden;
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 18px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #444;
}

/* 多快好省的图标 */
.mod_service_duo {
  background-repeat: no-repeat;
  background-position: 0 -192px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_service_kuai {
  background-repeat: no-repeat;
  background-position: -41px -192px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_service_hao {
  background-repeat: no-repeat;
  background-position: -82px -192px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_service_sheng {
  background-repeat: no-repeat;
  background-position: -123px -192px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

/* 帮助清单 */
.mod_help {
  padding: 20px 0;
}

.mod_help_list {
  overflow: hidden;
  height: 160px;
}

.mod_help_nav {
  float: left;
  width: 198px;
  line-height: 22px;
}

.mod_help_nav_tit {
  margin-bottom: 5px;
  font-size: 14px;
}

.mod_help_cover {
  background-repeat: no-repeat;
  background-position: 0 0;
  float: right;
  width: 200px;
  height: 150px;
}

.mod_help_cover_tit {
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
}

.mod_help_cover_con {
  padding: 0 10px;
}

.mod_help_cover_more {
  text-align: right;
}

/* 版权信息 */
.mod_copyright_inner {
  padding: 15px 0;
  border-top: 1px solid #e1e1e1;
  text-align: center;
}

.mod_copyright_split {
  margin: 0 7px;
  color: #ccc;
}

.mod_copyright_info {
  padding: 10px 0;
  line-height: 22px;
  color: #999;
}

.mod_copyright_info a {
  color: #999;
}

.mod_copyright_info a:hover {
  color: #c81623;
}

.mod_copyright_inter_ico {
  display: inline-block;
  width: 15px;
  height: 10px;
  vertical-align: -1px;
  margin-right: 10px;
  background-repeat: no-repeat;
}

.mod_copyright_inter_ico_global {
  background-repeat: no-repeat;
  background-position: -108px -155px;
  width: 15px;
  height: 12px;
  margin-top: -1px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_inter_ico_rissia {
  background-repeat: no-repeat;
  background-position: -168px -155px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_inter_ico_indonesia {
  background-repeat: no-repeat;
  background-position: -148px -155px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_inter_ico_thailand {
  background-repeat: no-repeat;
  background-position: -108px -172px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_inter_ico_spain {
  background-repeat: no-repeat;
  background-position: -128px -155px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_auth {
  margin: 25px 0;
}

.mod_copyright_auth_ico {
  overflow: hidden;
  display: inline-block;
  margin: 0 3px;
  width: 103px;
  height: 32px;
  line-height: 1000px;
}

.mod_copyright_auth_ico_1 {
  background-repeat: no-repeat;
  background-position: -205px -148px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_auth_ico_2 {
  background-repeat: no-repeat;
  background-position: -205px -111px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_auth_ico_3 {
  background-repeat: no-repeat;
  background-position: -205px -74px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_auth_ico_4 {
  background-repeat: no-repeat;
  background-position: -205px -37px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_auth_ico_5 {
  background-repeat: no-repeat;
  background-position: 0 -66px;
  background-image: url(//img13.360buyimg.com/imagetools/jfs/t1/108497/17/22418/15570/6215e0d0E01387603/81e883d9e15cebb7.png);
}

.mod_copyright_auth_ico_6 {
  background-repeat: no-repeat;
  background-position: 0 -155px;
  background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
}

.mod_copyright_auth_ico_7 {
  background-repeat: no-repeat;
  background-position: 0 -99px;
  background-image: url(//img13.360buyimg.com/imagetools/jfs/t1/108497/17/22418/15570/6215e0d0E01387603/81e883d9e15cebb7.png);
}

.mod_copyright_auth_ico_8 {
  width: 70px;
  background-repeat: no-repeat;
  background-position: -104px -99px;
  background-image: url(//img13.360buyimg.com/imagetools/jfs/t1/108497/17/22418/15570/6215e0d0E01387603/81e883d9e15cebb7.png);
}

.mod_copyright_auth_ico_9 {
  width: 88px;
  background-repeat: no-repeat;
  background-position: -104px -131px;
  background-image: url(//img13.360buyimg.com/imagetools/jfs/t1/108497/17/22418/15570/6215e0d0E01387603/81e883d9e15cebb7.png);
}

/*// .mod_copyright_license {*/
/*   //   margin-left: 16px;*/
/*   // }*/

/* 适配高清屏 */

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (min-device-pixel-ratio: 1.5) {

  .mod_service_duo {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: 0 0;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_service_kuai {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: -38.5px 0;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_service_hao {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: -77px 0;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_service_sheng {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: 0 -44.5px;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_copyright_inter_ico_global {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: -38.5px -44.5px;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_copyright_inter_ico_rissia {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: -56px -44.5px;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_copyright_inter_ico_indonesia {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: -73.5px -44.5px;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_copyright_inter_ico_thailand {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: -91px -44.5px;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_copyright_inter_ico_spain {
    background-repeat: no-repeat;
    background-size: 113px 86.5px;
    background-position: -38.5px -59px;
    background-image: url(//img10.360buyimg.com/imagetools/jfs/t1/211722/38/13035/9322/6215e10cEa9918ac1/7f8686ee76e42123.png);
  }

  .mod_copyright_inter_lk {
    font-family: initial;
  }
}

/* 窄版 */
.o2_mini .mod_service_item {
  width: 247px;
}

.o2_mini .mod_help_nav {
  width: 158px;
}

.o2_mini .mod_copyright_links .mod_copyright_split {
  margin: 0 6px;
}
</style>

<style>
.o2_ie8 .more2_international {
  filter: progid:dximagetransform.microsoft.alphaimageloader(src='//storage.360buyimg.com/mtd/home/more_international1575014601797.png',sizingMethod='scale');
  background: none;
}
.mod_help_cover {
  background-image: none;
}
#settleup:hover .cw-icon {
  border-bottom: 1px solid #c81623;
}
.o2_mini .company .feed-tab {
  margin: 0 auto;
}
.company .feed-tab {
  margin: 0 auto;
}
.channelsB .channels_block_1 .channels_item_1 .channels_item_link {
  height: 370px;
  width: 290px;
}
.channelsB .channels_block_1 .channels_item_2 .channels_item_link {
  height: 370px;
  width: 290px;
}
.JD_close-button--square {
  z-index: 1;
}
</style>