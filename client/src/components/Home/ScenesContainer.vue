<template>
  <div class='scenes-container'>
    <div class='scenes-container-content'>
      <div class='title clearfix'>
        <ul class='subtitle-list fl'>
          <li class='subtitle'>有格调</li>
          <li :class="{'nav-scene-choose': titleIndex==1}" @mouseenter="titleIndex=1">全部</li>
          <li :class="{'nav-scene-choose': titleIndex==2}" @mouseenter="titleIndex=2">约会</li>
          <li :class="{'nav-scene-choose': titleIndex==3}" @mouseenter="titleIndex=3">聚餐</li>
          <li :class="{'nav-scene-choose': titleIndex==4}" @mouseenter="titleIndex=4">丽人SPA</li>
          <li :class="{'nav-scene-choose': titleIndex==5}" @mouseenter="titleIndex=5">电影演出</li>
          <li :class="{'nav-scene-choose': titleIndex==6}" @mouseenter="titleIndex=6">品质出游</li>
        </ul>
    </div>
    <ul class='play-list clearfix' v-if="1 == titleIndex">
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play2.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play2.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play2.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play2.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play2.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play2.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
    </ul>
    <ul class='play-list clearfix' v-if="2 == titleIndex">
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play3.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play3.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play3.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play3.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play3.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play3.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
    </ul>
    <ul class='play-list clearfix' v-if="3 == titleIndex">
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play4.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play4.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play4.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play4.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play4.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play4.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
    </ul>
    <ul class='play-list clearfix' v-if="4 == titleIndex">
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play5.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play5.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play5.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play5.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play5.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play5.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
    </ul>
    <ul class='play-list clearfix' v-if="5 == titleIndex">
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play6.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play6.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play6.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play6.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play6.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play6.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
    </ul>
    <ul class='play-list clearfix' v-if="6 == titleIndex">
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
      <li class='play-item fl'>
        <div class='play-item-img-wrapper'>
          <img class='play-item-img' src='../../assets/images/play.jpg'/>
        </div>
        <div class='play-item-name'>COSTA COFFEE（华威大厦店）</div>
        <div class='one-play-item'>美式中杯1份</div>
        <div class='play-item-info clearfix'>
          <div class='play-item-price fl'><span class='current-price'>￥<span class='current-price-num'>22</span></span><del>门市价￥27</del></div>
          <div class='play-item-location fr'>西单</div>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleIndex: 0
    }
  }
}
</script>

<style>
.scenes-container {
  padding-top: 50px;
  background: #f4f4f4;
  color: #999;
  font-size: 12px;
}
.scenes-container-content {
  background: #fff;
  width: 1190px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.scenes-container-content .title {
  height: 44px;
  line-height: 44px;
  font-size: 20px;
  background: #BE9E4D;
  color: #fff;
  padding-left: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.subtitle-list li{
  float: left;
  font-size: 16px;
  padding-left: 10px;
}
.nav-scene-choose {
  position: relative;
}
.nav-scene-choose:after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  bottom: 0;
  left: 20px;
  border-top: 7px solid transparent;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-bottom: 7px solid #fff;
}
.subtitle-list .subtitle {
  padding-left: 0;
  font-size: 20px;
}
.play-list {
  padding: 10px;
}
.play-item {
  padding: 10px;
}
/* 任何元素都有hover伪类 */
.play-item:hover {
  background: #eee;
  border-radius: 5px;
}
.play-item-img {
  width: 370px;
  border-radius: 5px;
}
.play-item-name {
  line-height: 2;
  font-size: 16px;
  color: #000;
}
.one-play-item {
  line-height: 2;
}
.play-item-price .current-price{
  color: #BE9E4D;
}
.current-price-num {
  font-size: 18px;
  font-weight: bold;
  padding-right: 5px;
}
</style>
