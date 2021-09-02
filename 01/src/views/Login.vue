<!-- 注册登录 -->
<template>
  <div class="login">
    <div class="aa">🍊</div>
    <div class="title">
      <img src="../../public/01.png" alt="">
    </div>
    <div class="cont">
      <div class="a1">
        <input type="text" placeholder="请输入手机号" v-model="mobile">
        <button  :disabled="flag" @click="huo">{{xmy}}</button>
      </div>
      <div class="a2">
        <input type="text" placeholder="请输入短信验证码" v-model="pass">
      </div>
      <div class="a3">
        <button @click="login">登录</button>
      </div>
      <div class="a4">
        <p>*未注册的手机号将自动注册</p>
        <p @click="go">密码登录</p>
      </div>
      <div class="a5">
        <p>第三方登录</p>
      </div>
      <div class="a6">
        <ul>
          <li>
            <img src="../../public/02.png" alt="">
            <p>微信登录</p>
          </li>
          <li>
            <img src="../../public/03.png" alt="">
            <p>QQ登录</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="xmy"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {smsCode,login} from "@/http/api.js"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      mobile: "",
      pass: "",
      flag: false,
      num: 60,
      xmy:'获取验证码',
    };
  },
  //监听属性 类似于data概念 
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
     async huo(){
       if(this.mobile==""){
         alert('请输入手机号')
       }else{
          var time=setInterval(()=>{
          this.num--;
          this.xmy=this.num+'秒'
          if(this.num==0){
            clearInterval(time)
            this.xmy='发送验证码';
            this.num=60;
            this.flag=false
          }
        },1000);
           var res=await smsCode({mobile:this.mobile,sms_type:"login"})
           console.log(res);
       }
     },
     async login(){
        var res=await login({mobile:this.mobile,type:2,client:'1',sms_code:this.pass})
        console.log(res);
      if(res.data.code==200){
        this.$router.push("/sy")
       }else{
         alert('请输入正确验证码')
       }
      },
      go(){
        this.$router.push("/login1")
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  // async created() {
  //   let res=await smsCode({mobile:18431220359,sms_type:"login"})
  //   console.log(res);
    
  // },
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
.aa {
  font-size: 30px;
}
.title {
  height: 200px;
  width: 100%;
  margin: auto;
  padding-top: 30px;
  /* border: 1px solid gray; */
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
.a3 {
  height: 130px;
  width: 100%;
  text-align: center;
}
.a3 button {
  height: 50px;
  width: 90%;
  margin-top: 80px;
  color: #fff;
  border: none;
  background: orangered;
  border-radius: 10px;
}
.a4 {
  height: 20px;
  width: 90%;
  margin: auto;
  text-align: center;
  display: flex;
  color: gray;
  align-items: center;
  justify-content: space-between;
}
.a5 {
  height: 30px;
  width: 100%;
  margin-top: 120px;
  color: gray;
  text-align: center;
}
.a6 {
  height: 130px;
  width: 100%;
  color: gray;
  text-align: center;
  font-size: 10px;
}
.a6 ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.a6 img {
  height: 80px;
  width: 80px;
}
.xmy {
  height: 300px;
}
</style>
