import service from './service'
import request_url from './request_url'
// 获取短信验证码
export function smsCode(arg){
    return service({
        url:request_url.smsCode,
        data:arg,
        method:'post',  
    })
}
// 登录
export function login(arg){
    return service({
        url:request_url.login,
        data:arg,
        method:'post',  
    })
}
// 设置密码
export function password(arg){
    return service({
        url:request_url.password,
        data:arg,
        method:'post',  
    })
}
// tabber
export function tabber(arg){
    return service({
        url:request_url.tabber,
        data:{},
        method:'get',  
    })
}
// 首页轮播图
export function banner(arg){
    return service({
        url:request_url.banner,
        data:[],
        method:'get',  
    })
}
// 首页数据
export function appIndex(arg){
    return service({
        url:request_url.appIndex,
        data:[],
        method:'get',  
    })
}
// 课程列表
export function teach(){
    return service({
        url:request_url.teach,
        data:[],
        method:'get',  
    })
}
// 主讲课程
export function mainCourse(arg){
    return service({
        url:request_url.mainCourse,
        data:arg,
        method:'post',  
    })
}
// 讲师介绍
export function teacher(arg){
    return service({
        url:request_url.teacher+arg,
        method:'get',  
    })
}
export function signRecord(){
    return service({
        url:request_url.signRecord,
        method:'get',  
    })
}
// 大威天龙
export function nav(){
    return service({
        url:request_url.nav,
        method:'get',  
    })
}
// 大威天龙详情
export function courseBasis(){
    return service({
        url:request_url.courseBasis,
        method:'get',  
    })
}
// 课程详情
export function courseInfo(arg){
    return service({
        url:request_url.courseInfo+arg,
        method:'get',  
    })
}
 // 课程tabber
export function classify(arg){
    return service({
        url:request_url.classify,
        data:arg,
        method:'get',  
    })
}
 // 资讯列表
export function zxIndex(arg){
    return service({
        url:request_url.zxIndex,
        data:arg,
        method:'post',  
    })
}
// 资讯详情
export function detail(arg){
    return service({
        url:request_url.detail,
        data:arg,
        method:'post',  
    })
}