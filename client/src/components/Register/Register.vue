<template>
  <div class='register-wrapper'>
    <header class='register-header'>
      <div class='register-header-content clearfix'>
        <div class='register-left fl'>
          <img src='../../assets/images/register-logo.png'/>
        </div>
        <div class='register-right fr'>
          <span>已有美团账号？</span>
          <router-link class='login-button' tag='span' to='/login'>登录</router-link>
        </div>
      </div>
    </header>
    <div class='register-body'>
      <div class='register-body-content'>
        <div class='register-column'>
          <label>手机号</label>
          <input value=''/>
          <span>请输入您的手机号</span>
          <span>√</span>
        </div>
        <div class='free-message'>
          <button class='free-message-button'>免费获取短信动态码</button>
        </div>
        <div class='register-column'>
          <label>短信动态密码</label>
          <input value=''/>
          <span>请输入短信动态密码</span>
          <span>√</span>
        </div>
        <div class='register-column'>
          <label>创建密码</label>
          <input value=''/>
          <span>请填写密码</span>
          <span>√</span>
        </div>
        <div class='pw-strength__letter'>
          <span>弱</span>
          <span>中</span>
          <span>强</span>
        </div>
        <div class='register-column'>
          <label>确认密码</label>
          <input value=''/>
          <span>请再次输入密码</span>
          <span>√</span>
        </div>
        <div class='register-column agreement'>
          <button>同意以下协议并注册</button>
        </div>
        <div class='agreement-content'>
          <router-link to='/useragreement'>《美团网用户协议》</router-link>
        </div>
      </div>
    </div>
    <footer class='register-footer'>
      <div class='register-footer-content'>
        ©<a>meituan.com&nbsp;</a>
        <a> 京ICP证070791号&nbsp;</a>京公网安备11010502025545号
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* header */
.register-wrapper {
  background: #fff;
  color: #666;
}
.register-wrapper a:hover {
  text-decoration: underline;
  color: #666;
}
.register-header {
  height: 70px;
  border-bottom: 2px solid#2ec3b4;
  margin-bottom: 30px;
}
.register-header-content {
  width: 960px;
  margin: 0 auto;
  line-height: 70px;
}
.register-left {
  line-height: 70px;
}
/* 使用line-height和vertical-align都无法使图片垂直居中 */
.register-left img{
  width: 60px;
  height: 40px;
  /* 让图片垂直居中的方法，需要计算 */
  padding: 15px 0;
}
.register-right {
  font-size: 14px;
}
.register-right .login-button {
  margin-left: 5px;
  background: #2ec3b4;
  padding: 5px 10px;
  color: #fff;
}
/* body */
.register-body-content {
  width: 960px;
  margin: 0 auto;
  vertical-align: right;
  margin-bottom: 30px;
}
.register-column {
  height: 50px;
  line-height: 50px;
}
.register-column  label, .register-column input{
  font-size: 14px;
  color: #000;
}
.register-column  label {
  /* 能够让标签右边对齐 */
  display: inline-block;
  width: 100px;
  text-align: right;
  padding-right: 5px;
}
.register-column input {
  padding: 8px 5px;
  border: 1px solid #2ec3b4;
  width: 248px;
}
.agreement, .free-message,.agreement-content, .pw-strength__letter{
    margin-left: 108px;
}
.pw-strength__letter {
  width: 260px;
}
.pw-strength__letter span {
  display: inline-block;
  width:84px;
  /* 让文字垂直居中的方式，vertical-align行不通 */
  height: 20px;
  line-height: 20px;
  background: #ccc;
  color: #fff;
  text-align: center;
}
.agreement button {
  border: 0;
  background: #2ec3b4;
  color: #fff;
  padding: 10px 20px;
}
.agreement-content a {
  color:#2ec3b4;
}
.agreement-content a:hover {
  color:#2ec3b4;
}
/* footer */
.register-footer {
  border-top: 1px solid #ccc;
  padding-top: 20px;
  text-align: center;
}
.register-footer-content {
  width:960px;
  margin: 0 auto;
}
</style>
