<template>
<!-- Vue开发中，建议把与父组件紧密耦合的子组件用父组件为前缀命名，这里search搜索框的父组件是header -->
    <div class="headerSearch">
        <input type="search" style="border: 1px solid #CC9756" v-model.trim="keyword">
        <button @click="search">搜索</button>
    </div>
</template>

<script>
export default {
    name: 'HeaderSearch',
    data(){
        return {
            keyword: ''
        }; 
    },
    methods:{
        //当查询关键字与当前路由对象中的查询参数wd值不同时，才调用$router.push方法
        search(){

            if(this.keyword !== this.$route.query.wd){
                // 页面通过path和query传递参数
                this.$router.push({
                    path: '/searchOrder', 
                    query: {
                        keyword: this.keyword
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.headerSearch{
    float: left;
    position: relative;
}
.headerSearch input {
  width: 400px;
  height: 40px;
  border-radius: 30px;

}

.headerSearch button{
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 40px;
    margin: 0;
    border: none;
    color: white;
    background-color: #cc9756;
    cursor: pointer;  /*手形光标*/
    border-radius: 0 20px 20px 0;
}
.headerSearch button{
  font-size: 16px;
}
</style>