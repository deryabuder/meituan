<template>
<div class='zhenguo-container'>
  <div class='zhenguo-container-content'>
    <div class='title clearfix'>
      <ul class='subtitle-list fl'>
        <li class='subtitle'>推荐名宿</li>
        <!-- 需要一个变量，控制显示那个标题对应的内容，以及哪个标题拥有小三角形, 通过mouseenter事件，去改变该变量的值 -->
        <li @mouseenter="hotelIndex=0" :class="{'nav-hotel-choose': hotelIndex==0}">长治</li>
        <li @mouseenter="hotelIndex=1" :class="{'nav-hotel-choose': hotelIndex==1}">高平</li>
        <li @mouseenter="hotelIndex=2" :class="{'nav-hotel-choose': hotelIndex==2}">太原</li>
        <li @mouseenter="hotelIndex=3" :class="{'nav-hotel-choose': hotelIndex==3}">大同</li>
        <li @mouseenter="hotelIndex=4" :class="{'nav-hotel-choose': hotelIndex==4}">晋城</li>
        <li @mouseenter="hotelIndex=5" :class="{'nav-hotel-choose': hotelIndex==5}">武汉</li>
        <li @mouseenter="hotelIndex=6" :class="{'nav-hotel-choose': hotelIndex==6}">襄阳</li>
        <li @mouseenter="hotelIndex=7" :class="{'nav-hotel-choose': hotelIndex==7}">十堰</li>
        <li @mouseenter="hotelIndex=8" :class="{'nav-hotel-choose': hotelIndex==8}">宜昌</li>
        <li @mouseenter="hotelIndex=9" :class="{'nav-hotel-choose': hotelIndex==9}">黄冈</li>
      </ul>
      <div class='more fr'><a>全部></a></div>
    </div>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 0">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel2.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel2.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel2.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel2.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel2.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel2.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel2.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel2.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 1">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 2">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel3.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel3.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel3.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel3.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel3.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel3.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel3.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel3.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 3">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 4">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 5">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel4.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 6">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 7">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 8">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
    </ul>
    <ul class='hotel-list clearfix' v-if="hotelIndex == 9">
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
        </div>
      </li>
      <li class='hotel-item fl'>
        <div class='hotel-img-wrapper'>
          <img class='hotel-img' src='../../assets/images/hotel.jpg'>
          <img class='hotel-head' src='../../assets/images/hotel-head.png'/>
        </div>
        <div class='hotel-descript'>日租房，临时房，月租房，双塔山五路对面朗奇园高层。随时拎包入住。</div>
        <div class='hotel-keyword'>整套2居室·可住4人 | 双塔山镇</div>
        <div class='hotel-money'>￥
          <span class='hotel-money-num'>100</span>
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
      hotelIndex: 0
    }
  }
}
</script>
<style>
.zhenguo-container {
  padding-top: 50px;
  background: #f4f4f4;
  color: #999;
  font-size: 12px;
}
.zhenguo-container-content {
  background: #fff;
  width: 1190px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.zhenguo-container-content .title {
  height: 44px;
  line-height: 44px;
  font-size: 20px;
  background: rgba(223, 156, 13, 0.911);
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
.nav-hotel-choose {
  position: relative;
}
.nav-hotel-choose::after {
  position: absolute;
  left: 20px;
  bottom: 0;
  content: '';
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-bottom: 7px solid #fff;
}
.subtitle-list .subtitle {
  padding-left: 0;
  font-size: 20px;
}
.title .more {
  padding-right: 18px;
}
.hotel-img-wrapper {
  position: relative;
}
.hotel-img {
  width: 370px;
  height: 208px;
  border-radius: 5px;
}
.hotel-list {
  padding: 10px;
}
.hotel-list .hotel-item {
  padding: 10px;
  width: 370px;
}
.hotel-head {
  position: absolute;
  width: 52px;
  height: 52px;
  right: 20px;
  bottom: -30px;
  border-radius: 50%;
}
.hotel-descript {
  width: 300px;
  padding-top: 20px;
  font-size: 16px;
  color: #000;
  line-height: 2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hotel-keyword {
  font-size: 2;
}
.hotel-money {
  line-height: 2;
  color: #f60;
}
.hotel-money-num {
  font-size: 18px;
  font-weight: bold;
}
</style>
