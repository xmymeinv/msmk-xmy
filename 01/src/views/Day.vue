<!--  -->
<template>
    <div class="day">
        <div class="xmy">
            <!-- <div class="title">
        <div class="a"><van-icon name="smile-o" /></div>
        <div>
            <p>{{$store.state.token.nickname}}</p>
            <p>积分：3</p>
        </div>
    </div>
    <div class="cont">
    <van-calendar
         title="日历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '300px' }"
        :row-height='35'
        />
            </div>-->
            <div class="title">
                <div class="left">
                    <div class="a">
                        <van-icon name="smile-o"/>
                    </div>
                    <div>
                        <p>{{$store.state.token.nickname}}</p>
                        <p>积分：3</p>
                    </div>
                </div>
                <div class="right">
                    <p>签到规则</p>
                </div>
            </div>
            <div class="cont">
                <van-calendar
                    title="日历"
                    :poppable="false"
                    :show-confirm="false"
                    :style="{ height: '300px',width:'300px' }"
                    :row-height="35"
                />
            </div>
        </div>
        <div class="bb">
            <div class="b1">
                <div class="b2">
                    <p>好课推荐</p>
                    <p>更多></p>
                </div>
                <div class="b3">
                    <div class="b4">
                        <div>
                            <p>
                                <img
                                    src="http://120.53.31.103:84/uploads/image/2021-01-21/0iHDEF8fiqFAern6hLl0erzc1P1d94OAHUPkgNBw.jpeg"
                                    alt=""
                                >
                            </p>
                        </div>
                        <div>
                            <p>论渣男的自我修养</p>
                            <p>1积分</p>
                        </div>
                    </div>
                    <div class="b5">去兑换</div>
                </div>
            </div>
            <div class="b1">
                <div class="b2">
                    <p>热门推荐</p>
                    <p>更多></p>
                </div>
                <div class="b3">
                    <div class="b4">
                        <div>
                            <p>
                                <img
                                    src="http://120.53.31.103:84/uploads/image/2021-04-07/H2FyMmqIV87LZIUR0qG1AQziJsgVtgGcidQFoGZz.jpeg"
                                    alt=""
                                >
                            </p>
                        </div>
                        <div>
                            <p>VUE开发后台管理系统</p>
                            <p>1积分</p>
                        </div>
                    </div>
                    <div class="b5">去兑换</div>
                </div>
            </div>
        </div>
        <div class="ymx"></div>
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
  methods: {},
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

.day {
  height: 800px;
  width: 100%;
  background:whitesmoke;

  .xmy {
    height: 300px;
    width: 100%;
    background: red;
    font-size: 18px;
    .title {
        color:#fff;
      display: flex;
      width: 80%;
      margin: auto;
      height: 100px;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        .a {
          font-size: 50px;
        }
      }
      .right {
        height: 20px;
        width: 70px;
        text-align: center;
        border-radius: 20px;
        border: 1px solid #fff;
        p {
          font-size: 10px;
        }
      }
    }
    .cont {
      height: 300px;
      width: 100%;
      margin: auto;
      .van-calendar {
        margin: auto;
        border-radius: 20px;

      }
    }
  }

  .bb {
    height: 300px;
    width: 100%;
    // border:2px solid red;
    margin-top: 120px;
    .b1 {
      width: 100%;
      height: 150px;
      // border: 3px solid greenyellow;
      .b2 {
        display: flex;
        width: 90%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        margin-bottom: 10px;
        p:last-child{
            color:gray;
        }
      }
      .b3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90px;
        width: 90%;
        margin: auto;
        border: 2px solid #eaeaea;
        border-radius: 20px;
        background:#fff;
        .b4 {
          display: flex;
          align-items: center;
          img {
            height: 80px;
            width: 100px;
          }
        }
        .b5 {
          height: 20px;
          width: 50px;
          border: 1px solid gray;
          text-align: center;
          border-radius: 30px;
          margin-right: 10px;
        }
      }
    }
  }
}
.ymx {
  height: 100px;
}
</style>