<!-- 密码登录 -->
<template>
  <div class="login">
    <div class="title">
      <img src="../../public/01.png" alt="">
    </div>
    <div class="cont">
      <div class="a1">
        <input type="text" placeholder="请输入手机号" v-model="mobile">
      </div>
      <div class="a2">
        <input type="text" placeholder="请输入密码" v-model="password">
      </div>
      <div class="a3">
          <p>找回密码</p>
          <p @click="gologin">注册/验证码登录</p>
      </div>
      <div class="a4">
        <button @click="llogin">登录</button>
      </div>
      <div class="a5">
          <van-icon name="passed"/>
          我同意用户注册协议和隐私保护协议
        </div>  
    </div>
    <div class="xmy"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {password,login} from "@/http/api.js"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      mobile: "",
      password: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
   gologin(){
       this.$router.push("/login")
   },
    async llogin(){
     var res=await login({mobile:this.mobile,type:1,client:'1',password:this.password})
     console.log(res);
     if(res.data.code==200){
         this.$router.push("/my")
         this.$store.commit("dotoken",res.data.data)
        // localStorage.setItem('xmy',JSON.stringify(res.data.data))
     }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
//    this.getPassword()
    
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
<style >
.login {
  height: 100%;
  width: 100%;
}
.title {
  height: 170px;
  width: 100%;
  margin: auto;
}
.title img {
  height: 150px;
  width: 100%;
  text-align: center;
  line-height: 150px;
}
.a1 {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.a1 input {
  height: 40px;
  width: 50%;
  padding-left: 40px;
  border: none;
}
.a1 button {
  height: 30px;
  width: 100px;
  background: orangered;
  margin-left: 10px;
  border: none;
  color: #fff;
}
.a2 {
  height: 50px;
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #eaeaea;
}
.a2 input {
  height: 40px;
  width: 65%;
  padding-left: 40px;
  border: none;
}
.a3{
    display: flex;
    width: 80%;
    height: 40px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
}
.a4 {
  height: 100px;
  width: 100%;
  text-align: center;
}
.a4 button {
  height: 50px;
  width: 90%;
  margin-top: 50px;
  color: #fff;
  border: none;
  background: orangered;
  border-radius: 10px;
}
.a5{
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    width: 100%;
}
.xmy {
  height: 100px;
}
</style>
