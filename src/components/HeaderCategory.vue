<template>
    <div class="category">
        <ul>
            <li v-for="category in categories" :key="category.id">
              <router-link :to="'/kind/'+category.id">&nbsp;{{category.name}}&nbsp;</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderCategory',
    data(){
        return{
            categories: []
        }
    },
    // 在created生命周期钩子中向服务端请求所有分类数据
    created(){  
        this.axios.get('/kind')
        .then(response => {
            if(response.status === 200){
                this.categories = response.data.data;
            }
        })
        .catch(error => alert(error));
    }
}
</script>

<style scoped>
.category {
    float: left;
    width: 380px;
    height: 18px;
    font-size: 14px;
    overflow: hidden;
}
.category a{
    text-decoration: none;
    color: #999999;
    padding: 0 5px;

}

li a:hover {
  color: #cc9756
}


li{
  border-right: 1px solid #ccc;
  float: left;
  list-style: none;
}
li:nth-child(5){
  border-right: 0;
}


a{
    text-decoration: none;

}
</style>