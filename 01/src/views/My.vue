<!--  -->
<template>
    <div class="my">
        <div class="title">
            <div class="aa">
                <div class="a1">
                    <van-icon name="manager-o"/>
                </div>
                <div class="a2">
                    <span @click="login">登录</span>/
                    <span>注册</span>
                </div>
            </div>
        </div>
        <div class="cont">
            <ul>
                <li>
                    <p>0</p>
                    <p>我的学习</p>
                </li>
                <li>
                    <p>0</p>
                    <p>本周课时</p>
                </li>
                <li>
                    <p>3</p>
                    <p>我的积分</p>
                </li>
            </ul>
        </div>
        <div class="bb">
            <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>我的作业</span>
                </p>
                <p>></p>
            </div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>我的社区</span>
                </p>
                <p>></p>
            </div>
            <div class="xmy"></div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>课程订单</span>
                </p>
                <p>></p>
            </div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>图书订单</span>
                </p>
                <p>></p>
            </div>
            <div class="xmy"></div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>优惠卷</span>
                </p>
                <p>></p>
            </div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>学习卡</span>
                </p>
                <p>></p>
            </div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>分销中心</span>
                </p>
                <p>></p>
            </div>
            <div class="xmy"></div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>消息中心</span>
                </p>
                <p>></p>
            </div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>地址管理</span>
                </p>
                <p>></p>
            </div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>关于我们</span>
                </p>
                <p>></p>
            </div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>意见反馈</span>
                </p>
                <p>></p>
            </div>
             <div class="b1">
                <p>
                    <span><van-icon name="description" /></span>
                    <span>设置</span>
                </p>
                <p>></p>
            </div>
            <div class="ymx"></div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      login(){
          this.$router.push("/login")
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.my {
  height: 100%;
  width: 100%;
  .title {
    height: 230px;
    width: 100%;
    position: relative;
    background: rgb(221, 5, 5);
   .aa{
      height: 100px;
      width: 100px;
      text-align: center;
      line-height: 100px;
      border-radius: 50px;
      background: #eaeaea;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      color:white;
      .a1{
          font-size: 50px;
      }
      .a2{
          font-size: 18px;
      }
    }
  }
  .cont{
      width: 100%;
      height: 60px;
      ul{
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          font-size: 14px;
      }
  }
  .bb{
      width: 100%;
      .b1{
          color:gray;
          width: 86%;
          height: 50px;
          margin: auto;
          display: flex;
          font-size: 15px;
          align-items: center;
          justify-content: space-between;
          border-bottom:1px solid #eaeaea;
      }
  }
}
.xmy{
    height: 15px;
    width: 100%;
    background: #eaeaea;
}
.ymx{
    height: 50px;
    width: 100%;
    background: #eaeaea;
}
</style>