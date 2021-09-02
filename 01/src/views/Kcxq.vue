<!-- 课程详情2 -->
<template>
    <div class="kcxq">
        <div class="title">
            <img :src="kcxq.cover_img" alt="">
        </div>
        <div class="cont">
            <div class="aa">
                <p class="a1">{{kcxq.title}}</p>
                <p class="a2">剩余名额:{{kcxq.store_num}}</p>
                <p class="a2">报名截止时间：2021.07.15 00：00</p>
                <p class="a2">开课时间：2021/0705 00:00-2021/07/06 00:00</p>
                <p class="a2">开课地点：{{kcxq.province_name}}{{kcxq.district_name}}{{kcxq.address}}</p>
                <p class="a3">{{kcxq.price}}</p>
            </div>
        </div>
        <div class="xmy"></div>
        <div class="bb">
            <div class="b1">
                <p>
                    优惠：领取优惠券最多可减
                    <span style="color:orange">80</span>
                </p>
                <p style="color:gray">领取></p>
            </div>
            <div class="b2">
                <p>服务：课程售后</p>
                <p style="color:gray">详情></p>
            </div>
        </div>
        <div class="xmy"></div>
        <div class="cc">
            <p class="c2">教学团队</p>
            <div class="c1">
                <ul class="c3">
                    <li v-for="(item,index) in teacher" :key="index">
                        <img :src="item.teacher_avatar" alt="">
                        <p>{{item.teacher_name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="xmy"></div>
        <div class="dd">
            <van-tabs>
                <van-tab title="课程介绍">
                    <p class="d1">课程介绍</p>
                    <p class="d2">少林功夫</p>
                    <p class="d2">金钟罩铁布衫</p>
                    <p class="d2">飞檐走壁</p>
                </van-tab>
                <van-tab title="课程大纲"></van-tab>
                <van-tab title="课程评价"></van-tab>
            </van-tabs>
        </div>
        <div class="xmy"></div>
        <div class="ee">
            <p class="e1">课程大纲</p>
            <p class="e2">1、站马步</p>
        </div>
        <div class="xmy"></div>
        <div class="ff">
            <div class="f1">课程评论</div>
            <div class="f2">
                <img src="http://120.53.31.103:86/img/empty.0d284c2e.png" alt="">
                <p>暂无评论</p>
            </div>
        </div>
        <div class="gg">
            <button>立即报名</button>
        </div>
        <div class="yxm"></div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { courseInfo } from "@/http/api.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      id: "",
      kcxq: [],
      teacher: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    this.id = this.$route.query.id;
    var res = await courseInfo(this.id);
    console.log(res);
    this.kcxq = res.data.data.info;
    this.teacher = res.data.data.teachers;
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
.kcxq {
  height: 100%;
  width: 100%;
  .title {
    height: 200px;
    width: 100%;
    background: whitesmoke;
    img {
      height: 200px;
      width: 220px;
    }
  }
  .cont {
    height: 200px;
    width: 100%;

    .aa {
      margin: 15px;
      .a1 {
        font-size: 18px;
        margin: 10px;
      }
      .a2 {
        font-size: 15px;
        color: gray;
        margin: 10px;
      }
      .a3 {
        font-size: 18px;
        margin-left: 10px;
        color: red;
      }
    }
  }
  .bb {
    height: 70px;
    width: 100%;
    .b1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 85%;
      margin: auto;
      margin-top: 10px;
    }
    .b2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 85%;
      margin: auto;
      margin-top: 10px;
    }
  }
  .cc {
    .c2 {
      font-size: 18px;
      margin-left: 15px;
    }
    .c1 {
      height: 230px;
      width: 100%;
      .c3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        li {
          height: 100px;
          width: 70px;
          padding-top: 10px;
        }
        img {
          height: 50px;
          width: 50px;
          border-radius: 50px;
        }
      }
    }
  }
  .dd {
    height: 140px;
    width: 100%;
    .d1 {
      font-size: 16px;
      margin-left: 10px;
    }
    .d2 {
      margin-left: 15px;
      font-size: 14px;
    }
  }
  .ee {
    height: 60px;
    width: 100%;
    .e1 {
      margin-left: 10px;
      font-size: 15px;
    }
    .e2 {
      margin-left: 15px;
      font-size: 15px;
    }
  }
  .ff {
    height: 300px;
    width: 100%;
    .f1 {
      margin-left: 10px;
      font-size: 16px;
    }
    .f2 {
      width: 100%;
      height: 210px;
      text-align: center;
      img {
        height: 200px;
        width: 200px;
        margin: auto;
      }
    }
  }
  .gg {
    height: 50px;
    width: 100%;
    text-align: center;
    position: fixed;
    left: 0;
    bottom:0;
    button {
      height: 40px;
      width: 88%;
      color: #fff;
      background: red;
      border: none;
      border-radius: 30px;
    }
  }
}
.xmy {
  height: 10px;
  width: 100%;
  background: whitesmoke;
}
.ymx {
  height: 2000px;
}
</style>