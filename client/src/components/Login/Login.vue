<template>
  <div class='login'>
    <header class='login-header'>
      <img src='../../assets/images/register-logo.png'/>
    </header>
    <div class='login-body clearfix'>
      <div class='login-left fl'>
        <img src='../../assets/images/login-img.png'/>
      </div>
      <!-- 该表格的设计，先定宽，然后每部分margin-bottom，然后设计内部样式 -->
      <form class='login-right fr'>
        <div class='clearfix'>
          <span class='fl'>账号登录</span>
          <span class='fr'>手机验证码登录</span>
        </div>
        <div class='login-column clearfix'>
          <i class='login-name-icon fl'></i>
          <input value='手机/用户/邮箱' class='login-user-name fl'/>
        </div>
        <div class='login-column clearfix'>
          <i class='login-pwd-icon fl'></i>
          <input value='密码' class='login-user-pwd fl'/>
        </div>
        <div class='forget-pwd clearfix'>
          <a class='fr'>忘记密码？</a>
        </div>
        <div>
          <input type='button' value='登录' class='login-button'/>
        </div>
        <div>
          <span>还没有账号？</span><router-link to='/register' class='free-register'>免费注册</router-link>
        </div>
        <div class='other-method-login'>
          <div class='other-method-remand'>用合作网站账号登录</div>
          <div class='other-method-list'>
            <a class='other-method-item icon1'></a>
            <a class='other-method-item icon2'></a>
          </div>
        </div>
      </form>
    </div>
    <footer class='login-footer'>
      <ul class='login-footer-site clearfix'>
        <li class='fl'><a>关于美团</a></li>
        <li class='fl'><a>加入我们</a></li>
        <li class='fl'><a>商家入驻</a></li>
        <li class='fl'><a>帮助中心</a></li>
        <li class='fl'><a>美团手机版</a></li>
      </ul>
      <div class='login-footer-description'>
        <span>©2018&nbsp;&nbsp;</span><a>美团网团购&nbsp;&nbsp;</a><span>meituan.com&nbsp;&nbsp;</span><a>京ICP证070791号&nbsp;&nbsp;</a><span>京公网安备11010502025545号</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* header*/
.login {
  width: 960px;
  margin: 0 auto;
}
.login a:hover {
  text-decoration: underline;
}
.login-header img{
  padding: 15px 0 30px 0;
  width: 80px;
  height: 50px;
}
/*body*/
.login-left img {
  width: 480px;
  height: 370px;
}
.login-right {
  color: #666;
  font-size: 14px;
  width: 270px;
  margin: 30px 0;
}
.login-right>div {
  margin-bottom: 15px;
}
.login-column {
  border: 1px solid #666;
}
.login-column input {
  padding: 10px 0;
  color: #666;
}
.login-column .login-name-icon, .login-column .login-pwd-icon {
  /* 让inline-block垂直居中的方式，计算 */
  padding: 7px 5px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 17px 17px;
}
.login-column .login-name-icon {
  /*背景图，先设置背景元素大小，然后设置背景图片大小，然后设置位置 */
  background: url('../../assets/images/login-name.png') no-repeat 5px 7px;
}
.login-column .login-pwd-icon {
  background: url('../../assets/images/login-pwd.png') no-repeat 5px 7px;
}
.login-right .login-button {
  display: inline-block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  background: #2ec3b4;
  color: #fff;
}
.forget-pwd {
  color:#2ec3b4;
}
.free-register {
  color:#2ec3b4;
}
.other-method-login {
  position: relative;
  text-align: center;
  border-top: 1px solid #eee;
}
.other-method-remand {
  position: absolute;
  font-size: 12px;
  top: -7px;
  left: 86px;
  padding: 0 10px;
  background: #fff;
  z-index: 1;
}
.other-method-list {
  padding-top: 30px;
}
.other-method-item {
  display: inline-block;
  height: 25px;
  width: 25px;
  background-size: 25px 25px;
  padding-right: 10px;
}
.other-method-list .icon1 {
  background: url('../../assets/images/qq.png') no-repeat left top;
}
.other-method-list .icon2 {
  background: url('../../assets/images/weibo.png') no-repeat left top;
}
/*footer*/
.login-footer {
  color: #999;
}
.login-footer a:hover {
  color: #999;
  text-decoration: underline;
}
.login-footer-site {
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.login-footer-site li {
  margin-right: 30px;
}
.login-footer-description {
  padding: 30px 0;
}
</style>
