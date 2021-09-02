<!-- 资讯 -->
<template>
    <div class="zx">
        <div class="title">
            <van-tabs v-model="active" @change="go">
                <van-tab title="全部">
                    <div>
                        <div class="aa" v-for="(item,index) in zxIndex" :key="index" >
                            <van-card
                            @click="zxxq(item.id)"
                                num="2021/07/05 16:57"
                                :price="item.click_rate"
                                :desc="item.description"
                                :title="item.title"
                                :thumb="item.thumb_img"
                            />
                        </div>
                    </div>
                </van-tab>
                <van-tab
                    v-for="(item,index) in classify"
                    :key="index"
                    :title="item.name"
                    :name="item.id"
                >
                    <div>
                        <div class="aa" v-for="(item,index) in zxIndex" :key="index" >
                            <van-card
                            @click="zxxq(item.id)"
                                num="2021/07/05 16:57"
                                :price="item.click_rate"
                                :desc="item.description"
                                :title="item.title"
                                :thumb="item.thumb_img"
                            />
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
import { classify, zxIndex } from "@/http/api.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      active: 0,
      classify: [],
      zxIndex: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async go(name) {
      var ress = await zxIndex({
        classify_id: name
      });
      this.zxIndex = ress.data.data.list;
    },
    zxxq(id){
        
        this.$router.push({path:'/zxxq',query:{id:id}})
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    var res = await classify();
    console.log(res);
    this.classify = res.data.data;
    console.log(this.classify);

    var ress = await zxIndex();
    console.log(ress);
    this.zxIndex = ress.data.data.list;
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
.aa {
  margin: 15px auto;
  .van-card {
    height: 100px;
    width: 90%;
    margin: auto;
  }
}
</style>