<!--tabber  -->
<template>
<div class='home'>
 <div class="tab">
    <router-link v-for="(item,index) in tab" :key="index" :to='item.url'>
    <img :src="item.nav_img" alt="">
    <p>{{item.name}}</p>
  </router-link>
 </div>
 <router-view></router-view>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {tabber} from "@/http/api.js"
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  tab:[],
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
  var res=await tabber();
  // console.log(res);
  this.tab=res.data.data.index
  // console.log(this.tab);
  var list=['/sy','/kc','/zx','/ts','/my']
  this.tab.forEach((element,key) => {
    element.url=list[key]
  });
  // console.log(index);
  this.tab=index
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.home{
  height: 100%;
  width: 100%;
  .tab{
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0;
     display: flex;
     align-items: center;
     justify-content: space-around;
    a{
      height: 60px;
      width: 50px;
      img{
        height: 70%;
        width: 90%;
      }
      p{
        text-align: center;
      }
    }
  }
}
</style>