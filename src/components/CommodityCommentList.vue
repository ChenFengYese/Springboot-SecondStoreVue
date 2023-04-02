<template>
  <div class="comment">
    <h3 v-if="comments.length===0">当前没有任何评论！</h3>
    <div v-if="user">
      <el-button class="commentbt" size="mini" @click="writeComment">写评论</el-button>
      <el-dialog
        title="写评论"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
        :append-to-body="true"
      >
        <span>好评度：</span><el-rate v-model="score" :colors="colors"></el-rate>
        <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 5}"
            placeholder="请输入内容"
            v-model="evaluation1">
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
     <div v-else>
      <el-dialog
          title="回复"
          :visible.sync="dialogReplyVisible"
          width="30%"
          :before-close="handleClose"
          :append-to-body="true">
        <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 5}"
            placeholder="请输入内容"
            v-model="evaluation1">
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogReplyVisible = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <CommodityCommentListItem 
      v-for="comment in comments" 
      :item="comment" 
      :key="comment.id"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
  import CommodityCommentListItem from './CommodityCommentListItem'

  export default {
    name: 'CommodityCommentList',
    data () {
      return {
        dialogVisible:false,
        dialogReplyVisible:false,
        evaluation1:"",
        score: null,
        relationId:null,
        username:"",
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']   //星级评定不同分数的颜色
      };
    },
    computed:{
      ...mapState('user',['user']),
      ...mapState({comments:'evaluation'}),
      message(){
        return this.comments.length === 0 ? '当前没有任何评论！' : '';
      }
    },
    components: {
      CommodityCommentListItem,
    },
    created(){
      let url = "/commodityEvaluation"+this.$route.path;
      window.writeComment = this.writeComment;
      if(url.indexOf("/shop/commodity")!=-1){
          url = "/commodityEvaluation/commodity/"+this.$route.params.id;
      }
      this.axios.get(url,{params:{page:1}})
          .then(response => {
            if(response.status == 200){              
              this.getEvaluation(response.data.data.records);
            }
          })
          .catch(error => alert(error));
    },
    updated() {
      console.log("start")
      for(var i=0;i<document.getElementsByClassName("reply").length;i++){
        document.getElementsByClassName("reply")[i].href = "javascript:writeComment("+document.getElementsByClassName("display_id")[i].innerHTML+",'"+document.getElementsByClassName("display_name")[i].innerHTML+"')";
      }
      try{
        for(var a=0;a<document.getElementsByClassName("relation").length;a++){
          var j = document.getElementsByClassName("relation")
          var k = document.getElementsByClassName("comments")
          for(i=0;i<k.length;i++){
            if(document.getElementsByClassName("display_rid")[a].innerHTML===document.getElementsByClassName("display_id")[i].innerHTML)
            {
              j[a].style.display = "block"
              document.getElementsByClassName("comments")[i].appendChild(j[a])
              console.log(j[a])
            }
          }
        }
      }catch (e){

        console.log(e)
      }
      for(var s=0;s<document.getElementsByClassName("commodityCommentListItem").length;s++){
        if(!document.getElementsByClassName("commodityCommentListItem")[s].hasChildNodes()){
          document.getElementsByClassName("commodityCommentListItem")[s].style.display = "none"
          console.log("s:"+s)
        }
      }
      console.log("end")
    },
    methods:{
      //写评论
      writeComment(sid,sname){
        if(this.user)
          this.dialogVisible = true
        else if(this.sell){
          this.relationId = sid
          this.username = sname
          this.dialogReplyVisible = true
        }
        else
        {
          this.$message({  type: 'error',
            message: "请先登录！"
          })
          this.$router.replace('/login');
        }
      },

      addSubmit(){
        var data = {};
        data.commodityId = this.$route.params.id;
        data.score = this.score;
        data.evaluation = this.evaluation1;
        try{  data.userId = this.user.id }catch (e){data.userName=this.username}

        data.relationId = this.relationId;
        this.axios.post("/commodityEvaluation",data).then(response => {
            if(response.data.code == 0){
              this.addEvaluation(data);
              this.dialogVisible  = false;
              this.dialogReplyVisible = false
              this.$message({
                type: 'success',
                message: "评论成功！"
              })
            }
        })
      },

      ...mapMutations(['addEvaluation','getEvaluation']),

       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
      }
    }
  }

</script>
<style scoped>
.comment{
  position: relative;
}
.comment .commentbt{
  position: absolute;
  top: 10px;
  right: 50px;
}
</style>