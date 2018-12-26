<template>
  <header class='header'>
    <div class='header-bar'>
      <div class='header-bar-content'>
      <!-- 因为浮动元素不能和前面的元素处于同一行，可以和后面的元素处于同一行 -->
      <nav class='header-bar-nav fr'>
        <ul class='header-nav-first'>
          <li class='fl' :class="{'header-my-meituan': showNavMy}" @mouseenter="onmouseenter1()" @mouseleave="onmouseleave1()"><a>我的美团</a>
            <ul :class="{'header-nav-my': showNavMy, hidden: !showNavMy}">
              <li><a>我的订单</a></li>
              <li><a>我的收藏</a></li>
              <li><a>抵用券</a></li>
              <li><a>账户设置</a></li>
            </ul>
          </li>
          <li class='fl'><a>手机APP</a></li>
          <li class='fl' :class="{'header-seller-center': showSellerCenter}" @mouseenter="onmouseenter2()" @mouseleave="onmouseleave2()"><a>商家中心</a>
            <ul :class="{'header-nav-seller':showSellerCenter, hidden: !showSellerCenter}">
              <li><a>登录商家中心</a></li>
              <li><a>美团智能收银</a></li>
              <li><a>我想合作</a></li>
              <li><a>手机免费开店</a></li>
              <li><a>餐饮代理商招募</a></li>
              <li><a>商家申请发票</a></li>
              <li><a>免费合作美团排队</a></li>
            </ul>
          </li>
          <li class='fl' :class="{'header-site': showSite}" @mouseenter="onmouseenter3()" @mouseleave="onmouseleave3()"><a>网站导航</a>
            <div :class="{'header-nav-site':showSite, hidden: !showSite}">
                <div class='header-nav-site-content clearfix'>
                  <div class='header-nav-site-hotel fl'>
                    <dl class='header-nav-hotel-list clearfix'>
                      <dt class='title'>酒店旅游</dt>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                      <dd class='header-nav-hotel-item fl'><a>国际机票</a></dd>
                    </dl>
                  </div>
                  <div class='header-nav-site-food fl'>
                    <dl class='header-nav-food-list clearfix'>
                      <dt class='title'>吃美食</dt>
                      <dd class='header-nav-food-item fl'><a>特色小吃</a></dd>
                      <dd class='header-nav-food-item fl'><a>特色小吃</a></dd>
                      <dd class='header-nav-food-item fl'><a>特色小吃</a></dd>
                      <dd class='header-nav-food-item fl'><a>特色小吃</a></dd>
                      <dd class='header-nav-food-item fl'><a>特色小吃</a></dd>
                      <dd class='header-nav-food-item fl'><a>特色小吃</a></dd>
                      <dd class='header-nav-food-item fl'><a>特色小吃</a></dd>
                      <dd class='header-nav-food-item fl'><a>特色小吃</a></dd>
                    </dl>
                  </div>
                  <div class='header-nav-site-movie fl'>
                    <dl class='header-nav-movie-list'>
                      <dt class='title'>热映电影</dt>
                      <dd class='header-nav-movie-item fl'><a>热映电影</a></dd>
                      <dd class='header-nav-movie-item fl'><a>热映电影</a></dd>
                      <dd class='header-nav-movie-item fl'><a>热映电影</a></dd>
                      <dd class='header-nav-movie-item fl'><a>热映电影</a></dd>
                      <dd class='header-nav-movie-item fl'><a>热映电影</a></dd>
                      <dd class='header-nav-movie-item fl'><a>热映电影</a></dd>
                      <dd class='header-nav-movie-item fl'><a>热映电影</a></dd>
                      <dd class='header-nav-movie-item fl'><a>热映电影</a></dd>
                    </dl>
                  </div>
                  <div class='header-nav-site-app fr'>
                    <dl class='header-nav-app-list clearfix'>
                      <dt class='title'>手机应用</dt>
                      <dd class='header-nav-app-item fl'><a><img class='app-img' src='../../assets/images/app1.png'/></a></dd>
                      <dd class='header-nav-app-item fl'><a><img class='app-img' src='../../assets/images/app2.png'/></a></dd>
                      <dd class='header-nav-app-item fl'><a><img class='app-img' src='../../assets/images/app3.png'/></a></dd>
                      <dd class='header-nav-app-item fl'><a><img class='app-img' src='../../assets/images/app4.png'/></a></dd>
                      <dd class='header-nav-app-item fl'><a><img class='app-img' src='../../assets/images/app5.png'/></a></dd>
                    </dl>
                  </div>
                </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class='header-bar-position'>
        <span></span>
        <span>北京</span>
        <router-link to='/changecity'>切换城市</router-link>
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
          <img src='../../assets/images/logo.png' alt='美团'/>
        </a>
      </div>
      <div class='header-search-module'>
         <div class='header-search-block'>
           <input placeholder="请输入商家或地点" @focus="onfocus()" @blur="onblur()"/>
           <button>搜索</button>
        </div>
        <div :class="{ 'header-search-suggest': showSearchSuggest, hidden: !showSearchSuggest}">
          <div class='header-search-history clearfix'>
            <h6 class='fl'>最近搜索</h6>
            <span class='fr'>删除搜索历史</span>
          </div>
          <ul class='header-search-historylist'>
            <li><a>麻辣烫</a></li>
          </ul>
          <h6>热门搜索</h6>
          <div class='header-search-suggest-hotword'>
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
      showSearchSuggest: false,
      showNavMy: false,
      showSellerCenter: false,
      showSite: false
    }
  },
  methods: {
    onfocus () {
      this.showSearchSuggest = true
    },
    onblur () {
      this.showSearchSuggest = false
    },
    onmouseenter1 () {
      this.showNavMy = true
    },
    onmouseleave1 () {
      this.showNavMy = false
    },
    onmouseenter2 () {
      this.showSellerCenter = true
    },
    onmouseleave2 () {
      this.showSellerCenter = false
    },
    onmouseenter3 () {
      this.showSite = true
    },
    onmouseleave3 () {
      this.showSite = false
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
  /* 头部右侧导航栏 */
  .header-nav-first > li {
    padding: 0 10px;
  }
  .header-nav-my, .header-nav-seller{
    position: absolute;
    background: #fff;
    z-index: 2;
    text-align: center;
    padding: 0 10px;
    line-height: 35px;
    margin-left: -11px;
    border: 1px solid #ccc;
    border-top: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .header-nav-seller {
    margin-left: -59px;
  }
  .header-my-meituan, .header-seller-center, .header-site {
    background: #fff;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  /* 网址导航 */
  .header-nav-site {
    position: absolute;
    background: #fff;
    width: 1190px;
    border: 1px solid #ccc;
    border-top: 0;
    z-index: 2;
    margin-left: -1133px;
  }
  .header-nav-site-content {
    box-sizing:border-box;
    padding: 20px;
    text-align: center;
    line-height: 30px;
  }
  .header-nav-site-content .title {
    color: #31BBAC;
    padding: 10px 0;
  }
  .header-nav-site-hotel, .header-nav-site-food, .header-nav-site-movie, .header-nav-site-app {
    box-sizing:border-box;
    padding: 0 20px;
  }
  .header-nav-site-hotel {
    width: 30%
  }
  .header-nav-site-food {
    width: 20%;
  }
  .header-nav-site-movie {
    width: 10%;
  }
  .header-nav-site-app {
    width: 35%;
  }
  .header-nav-app-list {
    margin: 0 auto;
  }
  .header-nav-hotel-item {
    width: 33.3%;
  }
  .header-nav-food-item {
    width: 50%;
  }
  .header-nav-movie-item {
    width: 100%;
  }
  .header-nav-app-item {
    width: 20%;
  }
  .app-img {
    width: 60px;
    height: 60px;
  }
  /* 头部搜索栏 */
  .header-content {
    background: #fff;
    width: 1190px;
    margin: 0 auto;
    padding-bottom: 35px;
  }
  .header-title-module {
    position: relative;
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
    color: #999;
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
  .hidden {
    position: absolute;
    visibility: hidden;;
  }
  .header-search-suggest {
    position: absolute;
    width: 332px;
    line-height: 2;
    background: #fff;
    z-index: 2;
    padding: 10px;
    border: 1px solid #ccc;
    border-top: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .header-search-hotword {
    padding: 8px;
  }
  .header-search-hotword a {
    margin-right: 5px;
  }
  .header-search-historylist, .header-search-suggest-hotword {
    color: #666;
  }
</style>
