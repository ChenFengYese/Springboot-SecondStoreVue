<template>
  <div class="commodityCommentListItem">
    <div style="margin-left:20px;;display: none; background-image: linear-gradient(to right, rgb(209 186 158 / 57%), rgb(214 204 190));" class="relation" v-if="item.relationId">
        <div><span style="color:red;font-size:medium">{{ item.sellerName }} --店主</span></div>
        <div>{{ item.evaluation }}</div>
        <span class="display_rid" style="display: none">{{ item.relationId}}</span>
        <div><br><br></div>
    </div>
    <div class="comments" style=" background-image: linear-gradient(to right, rgb(244 240 234), rgba(211,191,164,0.53));" v-else>
      <div>
        <span>{{ item.name }}:</span>
      </div>
      <el-rate v-model="item.score" :colors="colors" disabled></el-rate>
      <div>{{ item.evaluation }}<a style="float: right" href="javascript:" class="reply"  v-if="sell">回复</a>
        <span class="display_id" style="display: none">{{ item.id }}</span>
        <span class="display_name" style="display: none">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'commodityCommentListItem',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    },
    computed:{
      ...mapState('user',['user']),
      ...mapState('user',{
        sell: 'sell'
      }),
    },
    data(){
      return{
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']   //星级评定不同分数的颜色
      }
    },
  }
</script>

<style scoped>
.commodityCommentListItem{
  border-bottom: solid 1px rgb(240, 230, 230);
  margin-bottom: 10px;
  font-size: 12px;
}
.commodityCommentListItem span{
  margin-right: 20px;
}
</style>