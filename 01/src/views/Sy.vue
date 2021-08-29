<!--  -->
<template>
  <div class="sy">
    <div class="title">
      <p class="a1">📕</p>
      <p class="a2">
        <input type="text" placeholder="搜索">
      </p>
      <p class="a3">✉</p>
    </div>
    <div class="cont">
      <van-swipe  :autoplay="3000" indicator-color="white">
        <van-swipe-item >
          <img
            src="../../public/04.png"
            alt=""
          >
        </van-swipe-item>
        <van-swipe-item >
          <img
            src="http://120.53.31.103:84/uploads/image/2021-04-08/3g04sBbCgNAG6WRlnJANB7BtWVHXhwdiZHTM6uDp.jpeg"
            alt=""
          >
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="a4">
      <p>大威天龙</p>
    </div>
    <div class="shi">
      <div class="bb">
        <div class="a5">
          <p>资深讲师</p>
          <p>更多></p>
        </div>
        <div class="b1" v-for="(item,index) in appIndex[0].list" :key="index">
          <div class="b2">
            <img :src="item.teacher_avatar" alt="">
          </div>
          <div class="b3">
            <p>{{item.teacher_name}}</p>
            <p>{{item.introduction}}</p>
          </div>
        </div>
        <div class="ke">
          <p>课程推荐</p>
          <p>更多></p>
        </div>
        <div class="c1" v-for="(item1,index) in appIndex[1].list" :key="index">
          <div class="c2">
            <div class="c3">
              <div>
                <img :src="item1.cover_img" alt="">
              </div>
              <div class="c33">
                <p>{{item1.title}}</p>
                <p>{{item1.sales_num}}个人报名</p>
              </div>
            </div>
            <div class="c4">
              <p>{{item1.price}}</p>
            </div>
          </div>
        </div>
        <div class="a5">
          <p>名师</p>
          <p>更多></p>
        </div>
        <div class="b1" v-for="(item2,index) in appIndex[2].list" :key="index">
          <div class="b2">
            <img :src="item2.teacher_avatar" alt="">
          </div>
          <div class="b3">
            <p>{{item2.teacher_name}}</p>
            <p>{{item2.introduction}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="xmy"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { banner, appIndex } from "@/http/api.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      swipe: [],
      appIndex: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getswipe() {
      var res = await banner();
      // console.log(res);
      this.swipe = res.data.data;
    },
    async getappIndex() {
      var res = await appIndex();
      console.log(res);
      this.appIndex = res.data.data;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // var res=await banner();
    // console.log(res);
    this.getswipe();
    this.getappIndex();
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
.sy {
  // height: 100%;
  width: 100%;
  background: #eaeaea;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    .a1 {
      font-size: 20px;
    }
    .a2 {
      input {
        height: 30px;
        width: 280px;
        padding-left: 20px;
        border-radius: 30px;
        border: 1px solid #eaeaea;
      }
    }
    .a3 {
      font-size: 30px;
    }
  }
  .cont {
    height: 200px;
    width: 100%;
    // border: 1px solid red;
    background: #fff;
    img{
      height: 200px;
      width: 100%;
    }
  }
  .a4 {
    background: #fff;
    height: 50px;
    width: 100%;
    line-height: 50px;
    p {
      margin-left: 20px;
    }
  }
  .shi {
    .a5 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      width: 90%;
      margin: auto;
      font-size: 16px;
    }
  }
  .bb {
    width: 100%;
    .b1 {
      margin: auto;
      height: 80px;
      width: 330px;
      display: flex;
      // border: 1px solid red;
      align-items: center;
      padding-left: 20px;
      border-radius: 10px;
      background: #fff;
      margin: 20px;
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
    .ke {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      width: 90%;
      margin: auto;
      font-size: 16px;
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
  }

  .xmy {
    height: 300px;
  }
}
</style>