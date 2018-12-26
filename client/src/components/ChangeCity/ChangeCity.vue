<template>
  <div>
    <nav-header></nav-header>
    <div class='change-city'>
      <div class='change-city-content'>
        <div class='select-row clearfix'>
          <h3 class='fl'>按省份选择：</h3>
          <div class='province-choose fl clearfix'>
            <i class='more fr'></i>
          </div>
          <div class='city-choose fl clearfix'>
            <i class='more fr'></i>
          </div>
          <div class='fl clearfix search-city-wrapper'>
            <h3 class='fl'>直接搜索</h3>
            <div class='fl'>
              <input class='search-city' value='请输入城市中文或拼音'>
            </div>
          </div>
        </div>
        <div class='select-row clearfix'>
          <h3 class='fl'>热门城市：</h3>
          <div class='hot-cities fl'><a>北京</a><a>上海</a><a>广州</a><a>深圳</a><a>天津</a><a>西安</a><a>重庆</a><a>杭州</a><a>南京</a><a>武汉</a><a>成都</a></div>
        </div>
        <div class='select-row clearfix'>
          <h3 class='fl'>最近访问：</h3>
          <div class='location-cities fl'><a>北京</a><a>南宁</a><a>廊坊</a><a>大厂回族自治县</a></div>
        </div>
        <div class='alphabet clearfix'>
          <h3 class='l-attr fl'>按拼音首字母选择：</h3>
          <div class='r-info fl'>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
            <span class='letter'>A</span>
          </div>
        </div>
        <div class='city-area clearfix'>
          <span class='city-label fl'>A</span>
          <span class='cities fr'>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
            <a class='city-link'>鞍山</a>
          </span>
        </div>
        <div class='city-area clearfix'>
          <span class='city-label fl'>B</span>
          <span class='cities fr'>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
            <a class='city-link'>北京</a>
          </span>
        </div>
        <div class='city-area clearfix'>
          <span class='city-label fl'>C</span>
          <span class='cities fr'>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
            <a class='city-link'>长治</a>
          </span>
        </div>
        <div class='city-area clearfix'>
          <span class='city-label fl'>D</span>
          <span class='cities fr'>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
            <a class='city-link'>大连</a>
          </span>
        </div>
        <div class='city-area clearfix'>
          <span class='city-label fl'>E</span>
          <span class='cities fr'>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
            <a class='city-link'>峨眉山</a>
          </span>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../../components/Home/NavHeader'
import NavFooter from '../../components/Home/NavFooter'

export default {
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>
.change-city {
  background: #f4f4f4;
  color: #666;
  font-size: 14px;
}
.change-city h3 {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  padding-right: 10px;
}
.change-city .change-city-content {
  width: 1170px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0 20px;
}
.select-row {
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #eee;
}
.province-choose, .city-choose, .search-city{
  display: inline-block;
  width: 150px;
  height: 40px;
  padding: 10px 0 10px 10px;
  margin: 0 10px;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 5px;
}
.province-choose, .city-choose {
  /* 块级元素在块级元素中垂直居中的方式 */
  margin: 20px 10px;
}
.change-city .more {
  height: 10px;
  width: 10px;
  padding-top: 5px;
  padding-right: 10px;
  background: url('../../assets/images/more.png') no-repeat left 5px;
  background-size: 10px 10px;
}
.search-city-wrapper {
  margin-left: 40px;
}
.search-city {
  width: 250px;
  color: #666;
}
.hot-cities a, .location-cities a {
  padding: 0 10px;
}
.alphabet {
  height: 80px;
  line-height: 80px;
}
.r-info .letter {
  padding: 0 10px;
}
.city-area {
  padding: 10px;
}
.city-label {
  /* 文字垂直居中的方法 */
  height: 40px;
  line-height: 40px;
  width: 40px;
  background: #0ECAC7;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  color: #fff;
}
.cities {
  max-width: 1100px;
}
.cities .city-link {
  display: inline-block;
  margin: 10px 20px;
}
</style>
