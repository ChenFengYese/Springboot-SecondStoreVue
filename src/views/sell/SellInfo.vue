<template>
  <!--    <div class="account">-->
  <!--        <div class="wallet">-->
  <!--          <h3>我的钱包</h3>-->
  <!--          <h5>余额：</h5><span style="font-size: 25px; font-family: 'Avenir', Helvetica, Arial, sans-serif;font-weight: bold;color: #cc9756"></span>-->
  <!--&lt;!&ndash;          <a @click="pay__">充值</a>&ndash;&gt;-->
  <!--          <br>-->

  <!--        <div class="integral">-->
  <!--            <h3>我的积分</h3>-->
  <!--            <h5>积分：</h5><span style="font-size: 20px; font-family: 'Avenir', Helvetica, Arial, sans-serif;font-weight: bold;color: #cc9756">{{points}}</span>-->
  <!--        </div>-->
  <div id="container" style="background-color: rgba(204,204,204,0);margin-top:50px">
    <div style="min-height: 10px;width: 100%"></div>
    <div class="w" style="display: inline-block;transform: scale(1.1);background-color:#f4f0ea00">
      <div id="content" style="display: inline-block">

        <div id="main" style="display: inline-block">
          <!-- 添加的代码 start -->
          <div class="JDrich" style="display: inline-block;background-color:#f4f0ea00">

            <div class="rich-title">
              <a class="font-link" href="https://wpa.qq.com/msgrd?v=3&uin=3107663466&site=qq&menu=yes" target="_blank">客服联系</a>
              <span>保障账号资产安全</span>
            </div>
            <div class="rich-assets">
              <table>
                <colgroup>
                  <col width="278">
                  <col width="278">
                  <col width="">
                </colgroup>
                <tbody>
                <tr>
                  <td class="td1">
                    <div class="td1-title">我的可用余额</div>
                    <div class="td1-price"><em class="td1-p-num">{{wallet.toFixed(2)}}</em>
                    </div>
                  </td>
                  <td class="td2">
                    <div style="text-align: left">{{"\u3000"}}<em class="td2-ico1"></em>全部余额：<em class="td2-num">{{wallet.toFixed(2)}}</em></div>
                    <div style="text-align: left">{{"\u3000"}}<em class="td2-ico2"></em>商店星级：<em class="td2-num">{{this.level}}</em></div>
                    <div style="text-align: left">{{"\u3000"}}<em class="td2-ico3"></em>账户状态：有效</div>
                    <el-button type="text" @click="dialogVisible = true">充值</el-button>
                    <div ref="alipaywap" v-html="alipay" />
                    <el-dialog title="充值" :visible.sync="dialogVisible" :before-close="handleClose" :append-to-body="true">
                      <span>输入充值金额: &nbsp;</span>
                      <input
                          id="_pay_"
                          name="totalAmount"
                          v-model="totalAmount_"
                      />
                      <span slot="footer" class="dialog-footer">
                         <el-button @click="dialogVisible = false">取 消</el-button>
                         <el-button type="primary" @click="PayAll">确 定</el-button>
                       </span>
                    </el-dialog>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="rich-tab">
              <a class="r-t-record" href="javascript:">历史充值记录</a>
              <div class="ui-select-listBox">
                <ul class="clearfix">
                  <li class="ui-select-listBox-list ui-select-listBox-list--now"><a href="javascript:" style="text-decoration:none;color: #be7c19"><span>收支明细</span></a><i class="ui-select-listBox-l-line __web-inspector-hide-shortcut__"></i></li>
                </ul>
                <div class="ui-select-listBox-line">
                  <div class="ui-select-listBox-l-red" style="left: -1px;width: 169px;"></div>
                </div>
              </div>
            </div>
            <div class="rich-detail">
              <div class="d-table-bg" style="display: block;">

                <table>
                  <colgroup>
                    <col width="147">
                    <col width="205">
                    <col width="76">
                    <col width="">
                  </colgroup>
                  <tbody id="tb">
                  <tr>
                    <th style="background-color: rgba(204,204,204,0)">时间</th>
                    <th style="background-color: rgba(204,204,204,0)">金额</th>
                    <th style="background-color: rgba(204,204,204,0)">操作</th>
                    <th style="background-color: rgba(204,204,204,0)">备注</th>
                  </tr>
                  </tbody>
                </table>
                <div class="d-tip">提示：系统仅显示您两年之内的余额明细，更早的余额明细不再显示。</div>
                <div class="d-page">
                  <div class="ui-page">
                    <a class="prev-disabled">&lt; 上一页</a>
                    <a class="ui-page-cur">1</a>                                                                                                                      <a class="next-disabled">下一页 &gt; </a>
                    <span class="ui-page-info">共6条记录</span>

                  </div>
                </div>
              </div>
              <div class="d-table-bg" style="display: none;">
                <div class="d-none">
                  <img src="//img30.360buyimg.com/jr_image/jfs/t3079/183/5827188194/12256/4b49b741/58846e1bNea85a6b6.png" alt="">
                  <span>您还没有任何收支明细记录哦</span>
                </div>
                <div class="d-tip">提示：系统仅显示您两年之内的余额明细，更早的余额明细不再显示。</div>
              </div>

            </div>
          </div>
          <!-- 添加的代码 end -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapState} from "vuex";
export default {
  name: "sellInfo",
  computed:{
    ...mapState('user',{
      sell: 'sell'
    })
  },
  data(){
    return{
      wallet:0,//余额
      points: 0,  //积分
      totalAmount_:0.00,
      dialogVisible: false,
      alipay:null,
      orders:[],
      level:"",
      count:0
    }
  },


  // http://localhost:8084/ali/pay__?out_trade_no=123&subject=1&total_amount=89&body=1

  //https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=XSz5%2FrGRl8qlYjYMjz%2BdWGUEMFo%2BchCZ1Dvk36aGqAY0qQXTbMLzW5kOLz4ISRfICMWk%2FWmse4UnXajr1G913MoXpUNf3PvRvygrsMn1mqeUxaRIXBskZfuO0yGt%2FwBfJ1XVa%2BNxRs%2BTfbDXb8lHClhLF3CYFsRhiw8CAt5kTX4k5ZNSSs8OWl1tTkxT8StOzVYFtio%2BQFhmQH6XuCH3L1xlvIO0ErnAYS5Ijfm%2B7eHf2TplQ0tp4HB69iABI9Th%2FvYyCiPDXxO49ZPTHIEAYowocDktAC4LWnQRWbI2kKeDza7wSiQxxHzGCVaqFQLjWe%2FgzZt2LTUZj0GPCf5CFw%3D%3D&return_url=http%3A%2F%2Flocalhost%3A8084%2Fali%2Fsuccess&notify_url=http%3A%2F%2Flocalhost%3A8084%2Fali%2Fsuccess&version=1.0&app_id=2021000121686534&sign_type=RSA2&timestamp=2022-11-07+16%3A24%3A48&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json
  //https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=vurZcy7yeOgeyGiwKC%2FjU47ZlHwd%2BPIxv9ZtFlp4IXm9o6GMx1nS3R572MtsQgnqf62M19KGTWoSwzscvX3hOf6aOwJumCPhqTkjrAL4egEsn1dXCAS94QlhVLbiMVLFLFTKCwdKYNNXZ5mW4X%2B8yz2%2BM2L7nETOZF3B8OF24%2BSN6yMIhF3ekD%2BeuIhGRiteO2AT9VnvDcg3MOZc1YFL6nCbxY9n177U7h%2BsSIvrQyDhia24a43nqtjMBEU%2B4MOmdqmG1BzZF9qSCR7Zuv8M%2FNeSaiD6NOUqbC4Fx4lbtAm4MOQP3UYfcyLvRXN3IClMyzMFsRCdbXw%2F3XZjhLmRjA%3D%3D&return_url=http%3A%2F%2Flocalhost%3A8084%2Fali%2Fsuccess&notify_url=http%3A%2F%2Flocalhost%3A8084%2Fali%2Fsuccess&version=1.0&app_id=2021000121686534&sign_type=RSA2&timestamp=2022-11-07+16%3A23%3A40&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json

  methods: {
    PayAll(){
      console.log(typeof this.totalAmount_+!isNaN(this.totalAmount_)+this.totalAmount_)
      if(parseFloat(this.totalAmount_).toString() !== "NaN" && this.totalAmount_>0)
      {
        this.axios.post("/ali/pay",
            {
              totalAmount:this.totalAmount_,
              outTradeNo:Date.now().toString() + sessionStorage.getItem("name").slice(1,-1),
              subject:"钱包充值",
              body:"用于为"+sessionStorage.getItem("name").slice(1,-1)+"的只因商城钱包充值",
              name: sessionStorage.getItem("name").slice(1,-1),
            }).then(response =>{
          this.alipay = response.data;
          this.$nextTick(() =>{
            this.$refs.alipaywap.children[0].submit();
            setTimeout(()=>{},500);
          });
        })
      }
      else
      {
        this.$message({
          message:"输入错误！",
          type:"error"
        });}
    },
    handleClose(done){
      this.$confirm('确定关闭吗').then(() => {
        // function(done)，done 用于关闭 Dialog
        done();
      }).catch(() => {
      });
    }
  },












  // methods:{
  //     pay__(){
  //
  //     }
  // },
  created(){
    this.axios.get('/sell/'+this.sell.id)
        .then(response => {
          if(response.status === 200){
            this.wallet = response.data.data.wallet;
            this.level = response.data.data.level;
          }
        })
    this.axios.get("/order/transform/"+this.sell.name).then(response => {
      if(response.status === 200){
        // console.log(response)
        // console.log(typeof response.data)
        this.orders = response.data;
        // console.log(this.orders.length)
        // console.log(this.orders[0].descriptions)
      }
      for(let i=0; i<this.orders.length; i++){

        var orderTime = this.orders[i].timeNow;
        var money = this.orders[i].transf;
        var Instyle = this.orders[i].instyle;
        var descriptions = this.orders[i].descriptions;
        // var ls = "<tr><td>"+orderTime+"</td><td><em class='td-num'>"+money+"</em></td><td>"+Instyle+"</td><td><div class='td-msg'>" +
        //     description+"</div> </td></tr>"
        var tr_ = document.createElement("tr")
        var td_a = document.createElement("td")
        var td_b = document.createElement("td")
        var td_c = document.createElement("td")
        var td_d = document.createElement("td")
        var em_ = document.createElement("em")
        var div_ = document.createElement("div")
        td_a.innerHTML = orderTime;
        td_b.innerHTML = money;
        td_c.innerHTML = Instyle;
        div_.innerHTML = descriptions
        em_.className ="td-num";
        div_.className = "td-msg"
        td_b.appendChild(em_);
        td_d.appendChild(div_);
        tr_.append(td_a,td_b,td_c,td_d);
        document.getElementById("tb").appendChild(tr_);
        // "                  <tr>\n" +
        // "                    <td>2022-10-29 17:57:44</td>\n" +
        // "                    <td><em class=\"td-num\">+0.55</em>\n" +
        // "                    </td>\n" +
        // "                    <td>转入</td>\n" +
        // "                    <td>\n" +
        // "                      <div class=\"td-msg\">拆分订单,父订单255193964956，返还余额</div>\n" +
        // "                    </td>\n" +
        // "                  </tr>"
      }


    })
  },
}
</script>
<style scoped>
@import "https://static.360buyimg.com/finance/assets/jd/rich/1.0.0/css/JDrich.css";
@import "https://misc.360buyimg.com/user/myjd-2015/css/myjd.balance.css";
@import "https://misc.360buyimg.com/user/myjd-2015/widget/??common/common.css";
@import "//misc.360buyimg.com/jdf/1.0.0/unit/??ui-base/5.0.0/ui-base.css,shortcut/5.0.0/shortcut.css,global-header/1.0.0/global-header.css,myjd/5.0.0/myjd.css,nav/2.0.0/nav.css,shoppingcart/2.0.0/shoppingcart.css,global-footer/5.0.0/global-footer.css,service/5.0.0/service.css,basePatch/1.0.0/basePatch.css";
.account{
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  height: 75vh;
  line-height: 30px;
}
.account .integral{
  margin-top: 30px;
}
</style>


<!--<style scoped>-->
<!--.sellInfo{-->
<!--  width: 1200px;-->
<!--  margin: 0 auto;-->
<!--  text-align: left;-->
<!--  height: 75vh;-->
<!--  line-height: 30px;-->
<!--}-->
<!--.sellInfo .integral{-->
<!--  margin-top: 30px;-->
<!--}-->
<!--</style>-->