<!--  -->
<template>
<div class='pass'>
    <div class="title">
        <p>设置密码</p>
    </div>
    <div class="cont">
        <p class="a1"><input type="text" placeholder="请设置登录密码"></p>
        <p class="a2"><input type="text" placeholder='请再次输入密码'></p>
        <button>确定</button>
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
return {

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
created() {

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
.pass{
    height: 100%;
    width: 100%;
    .title{
        height: 70px;
        width: 100%;
        line-height: 70px;
        text-align: center;
        font-size: 18px;
    }
    .cont{
        height: 300px;
        width: 100%;
        .a1{
            input{
               height: 50px;
               width: 100%;
               padding-left: 15px;
               font-size: 16px;
               border:none;
            }
        }
         .a2{
            input{
               height: 50px;
               width: 100%;
               padding-left: 15px;
               font-size: 16px;
               border:none;
            }
        }
        button{
            height: 50px;
            width: 70%;
            background:red;
            color:white;
            margin-top: 60px;
            margin-left: 55px;
            border:none;
            border-radius: 5px;
        }
    }
}
</style>