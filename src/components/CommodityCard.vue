<template>
    <div class="commodityCard">
        <router-link :to="sell?'/shop/commodity/'+item.id:'/commodity/'+item.id"> 
            <div class="p-img">
<!--                <a><img  :src="this.HOST+item.photoOne"></a>-->
                <a><img :src=imgsrc></a>
            </div>
            <div class="p-price center-card">{{item.price*item.discount | currency}}<span v-if="item.discount!==1"><i class="price">[{{item.price | currency}}]</i></span></div>
            <div class="p-name center-card"><center><h5>{{item.name}}</h5></center></div>
            <div class="p-commit center-card"><a>{{item.evaluationCount}}</a><strong>条评论</strong></div>
<!--            <div class="p-shop center-card">{{item.shopName}}店</div>-->
            <div class="p-degree center-card"><br/>平均分：{{Math.round(item.score).toFixed(1)}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.shopName}}店</div>

        </router-link>
        <div v-if="isNeedMask" class="mask">
            <el-button v-if="sell" size="mini"  @click="checkCommodity(item.id)">详情</el-button>
            <el-button v-if="sell" size="mini"  @click="updateCommodity">修改</el-button>
            <el-button v-if="admin" size="mini"  @click="auditCommodity('1')">审核通过</el-button>
            <el-button v-if="admin" size="mini"  @click="auditCommodity('2')">审核失败</el-button>
            <el-button size="mini"  @click="deleteCommodity">下架</el-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "CommodityCard",
    props: {  
        item: {
            type: Object,
            default: () => {}
        },
        isNeedMask:{
            type: Boolean,
            default: () => false
        }
    },
    computed:{
        ...mapState('user',["user"]),
        ...mapState('user',['sell']),
        ...mapState('user',['admin'])
    },
  mounted() {
      console.log("item:"+this.item.photoOne)
      // console.log("item:"+typeof this.item.photoOne)
      // console.log("item2:"+document.getElementById("test").innerText)
      console.log("imgsrc:"+this.imgsrc)
      console.log("photo:"+this.item.photoOne)
  },
  data(){
      return{
        imgsrc: require("../assets"+this.item.photoOne),

      }
  },
  methods:{
        //下架商品
        deleteCommodity(){
            this.$confirm("确认下架吗？").then(()=>{
                this.item.status = 3;
                this.axios.post('/commodity/update',this.item).then(response =>{
                    if(response.data.code === 0){
                        this.$router.go(0);
                    }
                });
            }).catch(() => {});
        },

        //查看商品详情
        checkCommodity(id){
            this.$router.push("/shop/commodity/"+id)
        },

        //修改：父组件通信
        updateCommodity(){
            this.$emit('updateCommodity',this.item);
        },

        auditCommodity(status){
            var msg="";
            if(status=="1") msg="确认审核通过？"
            else msg="确认审核不通过？"
            this.$confirm(msg).then(()=>{
                this.item.status = status;
                this.axios.post('/commodity/update',this.item).then(response =>{
                    if(response.data.code == 0){
                        this.$router.go(0);
                        this.$message({
                            type:'success',
                            message: "操作成功！"
                        })
                    }
                });
            }).catch(() => {});
        }
    }
}
</script>

<style scoped>
.commodityCard{
    text-align: left;
    width: 220px;
    height: 340px;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    border: 10px solid #F4F0EA;
    padding: 2px 1px;
    font-size: 12px;
    transition: border-color .1s ease;
}
.center-card{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
}
.commodityCard:hover{
    border-color: #d8d2d2;
    box-shadow: 1px 1px 2px 2px #e6e1e1;
}
.p-img{
    height: 220px;
    padding: 0 0;
}
.p-img img{
    width: 100%;
    height: 100%;
}
.p-price{
    margin-top: 10px;
    color: #e4393c;
    font-size: 20px;
    font-weight: bold;
}
.p-name h5{
    margin: 5px 0;
    overflow: hidden;
}

.p-shop{
    color: #000000;
    font-weight: lighter;
}
.p-degree{
  font-weight: lighter;
  color: #999999;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-bottom: 0;
  font-size: 8px !important;
}
a {
    color: #999999;
    font-family: verdana;
    font-weight: lighter;
    text-decoration: none;
}
strong{
    color: #a7a7a7;
    font-weight: 400;
}

.p-price span{
  padding-left: 10px;
  font-size: 15px;
  margin-bottom: 5px;
}

.p-price .price {
  color: gray;
  text-decoration: line-through;
}
/* 遮罩层，商家和管理员 */
.mask{
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
}
.commodityCard:hover .mask{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>