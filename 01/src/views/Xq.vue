<!--课程详情1  -->
<template>
    <div class="xq">
        <div class="title">
            <img :src="xq.avatar" alt="">
            <p>{{xq.real_name}}</p>
        </div>
        <div class="cont">
            <van-tabs>
                <van-tab class="aa" title="讲师介绍">
                    <p>老师简介</p>
                    <p>{{xq.introduction}}</p>
                </van-tab>
                <van-tab title="主讲课程">
                    <div class="c1" v-for="(item,index) in zjkc" :key="index" @click="gokcxq(item.id)">
                        <div class="c2">
                            <div class="c3">
                                <div>
                                    <img :src="item.cover_img" alt="">
                                </div>
                                <div class="c33">
                                    <p>{{item.title}}</p>
                                    <p>{{item.sales_num}}个人报名</p>
                                </div>
                            </div>
                            <div class="c4">
                                <p>{{item.price}}</p>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { teacher, mainCourse } from "@/http/api.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      xq: [],
      id: "",
      zjkc: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    gokcxq(id){
      this.$router.push({path:'/kcxq',query:{id:id}})
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    this.id = this.$route.query.id;
    var res = await teacher(this.id);
    this.xq = res.data.data.teacher;

    var ress = await mainCourse({
      teacher_id: this.id
    });
    this.zjkc = ress.data.data.list;
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
.xq {
  height: 100%;
  width: 100%;
  .title {
    display: flex;
    align-items: center;
    margin: 20px;
    img {
      height: 80px;
      width: 80px;
      border-radius: 50px;
    }
    p{
        margin-left: 20px;
    }
  }
}
.cont{
    .aa{
        margin-left: 60px;
        margin-top: 30px;
    }
}
.c2 {
  display: flex;
  align-items: center;
  margin: auto;
  height: 80px;
  width: 330px;
  border-radius: 10px;
  background: #fff;
  margin: 20px;
  .c3 {
    display: flex;
    align-items: center;
    img {
      height: 75px;
      width: 115px;
    }
    .c33 {
      margin-left: 20px;
      p:first-child {
        font-size: 16px;
        margin-bottom: 15px;
      }
      p:last-child {
        color: gray;
      }
    }
  }
  .c4 {
    margin-left: 70px;
    color: red;
  }
}
</style>