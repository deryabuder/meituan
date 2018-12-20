<template>
  <header class='header'>
    <div class='header-bar'>
      <div class='header-bar-content'>
      <!-- 因为浮动元素不能和前面的元素处于同一行，可以和后面的元素处于同一行 -->
      <nav class='header-bar-nav fr'>
        <ul class='header-nav-first'>
          <li class='fl'><a>我的美团</a>
            <ul class='header-nav-my'>
              <li><a>我的订单</a></li>
              <li><a>我的收藏</a></li>
              <li><a>抵用券</a></li>
              <li><a>账户设置</a></li>
            </ul>
          </li>
          <li class='fl'><a>手机APP</a></li>
          <li class='fl'><a>商家中心</a>
            <ul class='header-nav-seller'>
              <li><a>登录商家中心</a></li>
              <li><a>美团智能收银</a></li>
              <li><a>我想合作</a></li>
              <li><a>手机免费开店</a></li>
              <li><a>餐饮代理商招募</a></li>
              <li><a>商家申请发票</a></li>
              <li><a>免费合作美团排队</a></li>
            </ul>
          </li>
          <li class='fl'><a>网站导航</a>
            <ul class='header-nav-site'></ul>
          </li>
        </ul>
      </nav>
      <div class='header-bar-position'>
        <span></span>
        <span>北京</span>
        <a>切换城市</a>
        <div class='header-other-city'>[
          <a>大厂回族自治县</a>
          <a>廊坊</a>
          <a>固安县</a>
          ]
        </div>
        <div class='user-entry'>
          <a class='user-login'>立即登录</a>
          <a class='user-register'>注册</a>
        </div>
      </div>
      </div>
    </div>
    <div class='header-content clearfix'>
      <div class='header-title-module'>
        <a>
          <img src='../assets/images/logo.png' alt='美团'/>
        </a>
      </div>
      <div class='header-search-module'>
         <div class='header-search-block'>
           <input placeholder="请输入商家或地点"/>
           <button>搜索</button>
        </div>
        <div class='header-search-suggest'>
          <div class='header-search-history'>
            <h6>最近搜索</h6>
            <span>删除搜索历史</span>
            <ul>
              <li><a>麻辣烫</a></li>
            </ul>
            <h6>热门搜索</h6>
          </div>
          <div class='header-search-hotword'>
            <a>北京故宫博物院</a>
            <a>尚隐·泉都市生活馆</a>
            <a>故宫珍宝馆</a>
            <a>北京欢乐谷</a>
          </div>
        </div>
        <div class='header-search-hotword'>
          <a>北京故宫博物院</a>
          <a>尚隐·泉都市生活馆</a>
          <a>故宫珍宝馆</a>
          <a>北京欢乐谷</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
  /* 头部导航栏 */
  .header {
    font-size: 12px;
    color: #999;
  }
  .header-bar {
    height: 40px;
    line-height: 40px;
    background-color: #f4f4f4;
  }
  .header-bar-content {
    width: 1190px;
    margin: 0 auto;
  }
  .header-bar-position {
    line-height: 40px;
  }
  .header-bar-position > a {
    border: 1px solid #ccc;
    margin: 0 5px;
  }
  .user-entry, .user-login, .user-register {
    margin-left: 10px;
  }
  .user-login {
    color: #31BBAC;
  }
  .header-other-city, .user-entry {
    display: inline-block;
  }
  .header-nav-first li {
    margin: 0 10px;
  }
  .header-nav-my, .header-nav-seller,.header-nav-site {
    display: none;
  }
  /* 头部搜索栏 */
  .header-content {
    background: #fff;
    width: 1190px;
    margin: 0 auto;
  }
  .header-title-module {
    float: left;
    padding: 40px 110px 40px 0;
  }
  .header-title-module img{
    height: 46px;
    width: auto;
  }
  .header-search-module {
    float: left;
  }
  .header-search-block {
    margin-top: 40px;
    border: 1px solid #31BBAC;
    border-radius: 4px;
    height: 40px;
    width: 420px;
  }
  .header-search-block input {
    border-radius: 5px;
    padding: 10px;
    height: 40px;
    width: 84%;
    vertical-align: center;
    box-sizing: border-box;
  }
  .header-search-block button {
    /* 一直不能放在同一行，设置浮动后才实现 */
    float: right;
    box-sizing: border-box;
    height: 40px;
    width: 16%;
    background: #31BBAC;
    color: #fff;
    border: 0;
    border-radius: 0 4px 4px 0;
  }
  .header-search-suggest {
    display: none;
  }
  .header-search-hotword {
    padding: 8px;
  }
  .header-search-hotword a {
    margin-right: 5px;
  }
</style>
