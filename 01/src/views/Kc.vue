<!--  -->
<template>
    <div class="kc">
        <div class="b1" v-for="(item,index) in kc" :key="index" @click="goxq(item.id)">
            <div class="b2">
                <img :src="item.avatar" alt="">
            </div>
            <div class="b3">
                <p>{{item.real_name}}</p>
                <p>{{item.introduction}}</p>
            </div>
        </div>
        <!-- <div class="xmy"></div> -->
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { teach } from "@/http/api.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      kc: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    
     goxq(id){
      this.$router.push({path:'/xq',query:{id:id}})
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    var res=await teach()
     console.log(res);
    this.kc=res.data.data.list

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.kc {
  width: 100%;
  background: #eaeaea;
  .b1 {
    margin: auto;
    padding-top: 20px;
    height: 80px;
    width: 330px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-radius: 10px;
    background: #fff;
    margin: 20px;
    box-sizing: border-box;
    .b2 img {
      height: 40px;
      width: 40px;
      border-radius: 20px;
    }
    .b3 {
      margin-left: 20px;
      p:first-child {
        font-size: 16px;
      }
      p:last-child {
        color: gray;
      }
    }
  }
}
.xmy{
  height: 400px;
}
</style>