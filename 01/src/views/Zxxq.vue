<!-- 资讯详情 -->
<template>
    <div class="zxxq">
        <div class="title">
            <img :src="zxxq.thumb_img" alt="">
            <p class="aa">{{zxxq.title}}</p>
            <div class="a1">
                    <p>{{zxxq.click_rate}}次预览</p>
                    <p>{{time}}</p>
            </div>
            <p class="a2">{{zxxq.description}}</p>
            <p class="a3" v-html='zxxq.content'></p>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { detail } from "@/http/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      id: "",
      zxxq: [],
      time:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
     
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    this.id = this.$route.query.id;
    var res = await detail({
      information_id: this.id
    });
    console.log(res);
    this.zxxq = res.data.data;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
       var data=new Date();
       var m=data.getMonth()+1;
       var r=data.getDate();
       this.time=m+'-'+r;
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.zxxq {
  height: 100%;
  width: 100%;
  .title {
    height: 350px;
    width: 100%;
    margin: auto;
    img {
      height: 100%;
      width: 100%;
    }
    .aa {
      font-size: 22px;
      margin-left: 20px;
    }
    .a1 {
      width: 100%;
      display: flex;
      margin-top: 10px;
      color: gray;
      align-items: center;
      justify-content: space-between;
      p:first-child{
          margin-left: 20px
      }
       p:last-child{
          margin-right:20px
      }
      }
      .a2{
          height: 150px;
          line-height:150px;
          font-size: 20px;
          color:gray;
          text-align: center;
      }
      .a3{
          font-size:17px;
          margin-left: 20px;
      }
  }
}
</style>