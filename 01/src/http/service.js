import axios from 'axios'
import {baseUrl} from "@/config"
import {Toast} from 'vant';
let service=axios.create({
    baseURL:baseUrl,
    timeout:60000
})
// 请求拦截
let loading;
service.interceptors.request.use(config=>{
    loading=Toast.loading({
        duration: 5000 ,
        message: '加载中...',
        forbidClick: true,
    })
    // config.headers['Authorization']=sessionStorage.getItem('token')
    // console.log(config);
    
    return config
},
error => {
    console.log(error) 
    return Promise.reject(error)
  }
)
// 响应拦截 关闭loding动画
service.interceptors.response.use(res=>{
    loading.clear()
    // console.log(res);
    
    return Promise.resolve(res)
},error=>{
    loading.clear()
    console.log('err'+error)
    return Promise.reject(error)
})

export default service