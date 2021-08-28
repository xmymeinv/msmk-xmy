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