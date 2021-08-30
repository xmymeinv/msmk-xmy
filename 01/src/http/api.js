import service from './service'
import request_url from './request_url'
export function smsCode(arg){
    return service({
        url:request_url.smsCode,
        data:arg,
        method:'post',  
    })
}
export function login(arg){
    return service({
        url:request_url.login,
        data:arg,
        method:'post',  
    })
}
export function password(arg){
    return service({
        url:request_url.password,
        data:arg,
        method:'post',  
    })
}
export function tabber(arg){
    return service({
        url:request_url.tabber,
        data:{},
        method:'get',  
    })
}
export function banner(arg){
    return service({
        url:request_url.banner,
        data:[],
        method:'get',  
    })
}
export function appIndex(arg){
    return service({
        url:request_url.appIndex,
        data:[],
        method:'get',  
    })
}