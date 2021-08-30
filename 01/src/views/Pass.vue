<!--  -->
<template>
    <div class="pass">
        <div class="title">
            <div class="a1">
                <p>
                    <input type="text" placeholder="设置密码" @click="$router.push('/pass1')">
                </p>
                <p>></p>
            </div>
            <div class="a2">
                <p>
                    <input type="text" placeholder="注销账号">
                </p>
                <p>></p>
            </div>
        </div>
        <button class="btn" @click="tui">退出登录</button>
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
      tui(){
          this.$store.commit('tui'),
          this.$router.push("/my")
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
.pass {
  height: 100%;
  width: 100%;
  .title {
    height: 120px;
    width: 100%;
    margin-top: 20px;

    .a1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      margin: auto;
      margin-bottom: 20px;
      border-bottom: 1px solid #eeeeee;
      input {
        height: 35px;
        width: 280px;
        border: none;
      }
    }
    .a2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      margin: auto;
      border-bottom: 1px solid #eeeeee;
      input {
        height: 35px;
        width: 280px;
        border: none;
      }
    }
  }
  .btn{
      height: 40px;
      width: 300px;
      background:red;
      color:#fff;
      margin-left: 40px;
      border:none;
      border-radius: 10px;  
  }
}
</style>