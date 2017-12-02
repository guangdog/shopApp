import fetch from '../utils/fetch'

// 根据手机号码和密码登录
export function LoginByPhone (data) {
  return fetch({
    url: '/login/LoginByPhone',
    method: 'post',
    data// post请求发送的参数属性是data
  })
}

// 根据手机号码注册
export function regUserWithPhone (data) {
  return fetch({
    url: '/login/regWithPhone',
    method: 'post',
    data
  })
}

// 发送短信
export function SendMMSCode (data) {
  return fetch({
    url: '/login/sendCode',
    method: 'post',
    data
  })
}

// 找回密码
export function findPassWord (data) {
  return fetch({
    url: '/login/findPasswordByPhone',
    method: 'post',
    data
  })
}

// 设置新密码
export function setNewPassWord (data) {
  return fetch({
    url: '/login/newPasswordByPhone',
    method: 'post',
    data
  })
}
