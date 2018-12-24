<template>
<div class='maoyan-container'>
  <div class='maoyan-container-content'>
    <div class='title clearfix'>
      <ul class='subtitle-list fl'>
        <li class='subtitle'>猫眼电影</li>
        <li>正在热映</li>
        <li>即将上映</li>
      </ul>
      <div class='more fr'><a>全部></a></div>
    </div>
    <ul class='movie-list clearfix'>
      <li class='movie-item fl'>
        <img class='movie-img' src='../assets/images/movie.jpg'/>
        <img class='cinema-type' src='../assets/images/cinema.png'/>
        <div class='movie-info'>
          <div class='movie-like-person'>
            <span class='person-num'>102888</span>人想看
          </div>
          <div class='movie-descriptor clearfix'>
            <div class='movie-name fl'>蜘蛛侠：平行宇宙</div>
            <div class='movie-buy-link fr'>预售</div>
          </div>
        </div>
      </li>
      <li class='movie-item fl'>
        <img class='movie-img' src='../assets/images/movie.jpg'/>
        <img class='cinema-type' src='../assets/images/cinema.png'/>
        <div class='movie-info'>
          <div class='movie-like-person'>
            <span class='person-num'>102888</span>人想看
          </div>
          <div class='movie-descriptor clearfix'>
            <div class='movie-name fl'>蜘蛛侠：平行宇宙</div>
            <div class='movie-buy-link fr'>预售</div>
          </div>
        </div>
      </li>
      <li class='movie-item fl'>
        <img class='movie-img' src='../assets/images/movie.jpg'/>
        <img class='cinema-type' src='../assets/images/cinema.png'/>
        <div class='movie-info'>
          <div class='movie-like-person'>
            <span class='person-num'>102888</span>人想看
          </div>
          <div class='movie-descriptor clearfix'>
            <div class='movie-name fl'>蜘蛛侠：平行宇宙</div>
            <div class='movie-buy-link fr'>预售</div>
          </div>
        </div>
      </li>
      <li class='movie-item fl'>
        <img class='movie-img' src='../assets/images/movie.jpg'/>
        <img class='cinema-type' src='../assets/images/cinema.png'/>
        <div class='movie-info'>
          <div class='movie-like-person'>
            <span class='person-num'>102888</span>人想看
          </div>
          <div class='movie-descriptor clearfix'>
            <div class='movie-name fl'>蜘蛛侠：平行宇宙</div>
            <div class='movie-buy-link fr'>预售</div>
          </div>
        </div>
      </li>
      <li class='movie-item fl'>
        <img class='movie-img' src='../assets/images/movie.jpg'/>
        <img class='cinema-type' src='../assets/images/cinema.png'/>
        <div class='movie-info'>
          <div class='movie-like-person'>
            <span class='person-num'>102888</span>人想看
          </div>
          <div class='movie-descriptor clearfix'>
            <div class='movie-name fl'>蜘蛛侠：平行宇宙</div>
            <div class='movie-buy-link fr'>预售</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

}
</script>
<style>
.maoyan-container {
  padding-top: 50px;
  background: #f4f4f4;
  color: #999;
  font-size: 12px;
}
.maoyan-container-content {
  background: #fff;
  width: 1190px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.maoyan-container-content .title {
  height: 44px;
  line-height: 44px;
  font-size: 20px;
  background: #FF4949;
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
.subtitle-list .subtitle {
  padding-left: 0;
  font-size: 20px;
}
.title .more {
  padding-right: 18px;
}
.movie-list {
  padding: 10px;
}
.movie-item {
  padding: 10px;
  position: relative;
}
.movie-img {
  width: 214px;
  border-radius: 5px;
}
.cinema-type {
  position: absolute;
  height: 20px;
  top: 20px;
  left: 0px;
}
.movie-info {
  position: absolute;
  left: 20px;
  bottom: 20px;
  line-height: 1.5;
  color: #fff;
}
.person-num {
  color: #FD9827;
  font-size: 16px;
  padding-right: 5px;
}
.movie-descriptor {
  font-size: 16px;
}
.movie-name {
  width: 97px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie-buy-link {
  background: #FF4949;
  padding: 0 10px;
  border-radius: 10px;
  margin-left: 40px;
}
</style>
