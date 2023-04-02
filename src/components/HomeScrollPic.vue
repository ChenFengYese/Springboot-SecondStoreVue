<template>
  <el-carousel :interval="3000" type="card" height="300px">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <a :href="item.href" target="_blank"><img :src="item.img" /></a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    name:'HomeScrollPic',
    data(){
        return{
            imgList:[
                {img:require("../assets/img1_.png"),id:32,href:'https://jd.com'},
                {img:require("../assets/img2_.png"),id:31,href:'https://www.119.gov.cn/'},
                {img:require("../assets/img3_.png"),id:33,href:'https://www.12371.cn/dsxx/'},
                {img:require("../assets/img4_.png"),id:30,href:'http://www.sx.sgcc.com.cn/sgcc/index.html'},
                {img:require("../assets/img5_.png"),id:29,href:'https://www.icourse163.org/'},
            ]
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;

    line-height: 200px;
    margin: 0;
    border-radius: 30px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: white;
    border-radius: 30px;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: white;
    border-radius: 30px;
  }

  img{
      width: 100%;
      height: 100%;
  }
</style>