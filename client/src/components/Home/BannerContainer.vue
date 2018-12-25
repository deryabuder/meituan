<template>
  <div class='banner-container'>
    <div class='banner-container-content clearfix'>
      <div class='left-banner fl'>
        <div class='left-banner-title'>
          全部分类
        </div>
        <ul class='left-banner-list'>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>美食</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>外卖</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>酒店</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>榛果民宿</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>猫眼电影</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>机票&nbsp;/&nbsp;火车</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>休闲娱乐&nbsp;/&nbsp;KTV</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>生活服务</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>丽人&nbsp;/&nbsp;美发&nbsp;/&nbsp;医学美容</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>酒吧&nbsp;/&nbsp;密室逃脱</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>酒吧&nbsp;/&nbsp;密室逃脱</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>酒吧&nbsp;/&nbsp;密室逃脱</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>酒吧&nbsp;/&nbsp;密室逃脱</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>酒吧&nbsp;/&nbsp;密室逃脱</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>酒吧&nbsp;/&nbsp;密室逃脱</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class='left-banner-item' @mouseenter="onmouseenter()" @mouseleave="onmouseleave()">
            <span><a>酒吧&nbsp;/&nbsp;密室逃脱</a></span>
            <div :class="{'left-banner-content-wrapper': showDetail, hidden: !showDetail}">
              <div class='left-banner-content'>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='right fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                    <a>足疗按摩</a>
                  </div>
                </div>
                <div class='banner-item'>
                  <div class='content-header clearfix'>
                    <a class='left fl'>休闲娱乐</a>
                    <a class='roght fr'>更多></a>
                  </div>
                  <div class='content-links'>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                    <a>KTV</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class='right-banner fl'>
        <div class='banner-link'>
          <a>美团外卖</a>
          <a>猫眼电影</a>
          <a>美团酒店</a>
          <a>民宿／公寓</a>
          <a>商家入驻</a>
          <a>美团公益</a>
        </div>
        <div class='banner-row clearfix'>
          <div class='banner-swipper fl'>
            <swiper :options="swiperOption">
              <swiper-slide><a><img src='../../assets/images/banner-swipper1.jpg'/></a></swiper-slide>
              <swiper-slide><a><img src='../../assets/images/banner-swipper2.jpg'/></a></swiper-slide>
              <swiper-slide><a><img src='../../assets/images/banner-swipper3.jpg'/></a></swiper-slide>
              <swiper-slide><a><img src='../../assets/images/banner-swipper4.jpg'/></a></swiper-slide>
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
          <div class='banner-life fl'><img src='../../assets/images/banner-life.jpg'/></div>
          <div class='user-center fl'>
            <div class='user-center-content'>
              <div class='user-img-wrapper'><img src='../../assets/images/user.png' class='user-img'/></div>
              <div class='welcome'>Hi&nbsp;!&nbsp;你好</div>
              <router-link tag='div' to='/register' class='banner-user-regist'>注册</router-link>
              <router-link tag='div' to='/login' class='banner-user-login'>立刻登录</router-link>
            </div>
          </div>
        </div>
        <div class='banner-row clearfix'>
          <div class='banner-hotel fl'><img src='../../assets/images/banner-hotel.png'/></div>
          <div class='banner-enioy fl'><img src='../../assets/images/banner-enjoy.jpg'/></div>
          <div class='banner-seller fl'><img src='../../assets/images/banner-seller.jpg'/></div>
          <div class='banner-app fl'>
            <div class='banner-QR-code'><img src='../../assets/images/QR-code.png'/></div>
            <div class='banner-app-info'>
              <div class='banner-app-mobile'>美团APP手机版</div>
              <div><span class='money'>1元起</span>&nbsp;吃喝玩乐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDetail: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        paginationType: 'bullets',
        observeParents: true,
        observer: true
      }
    }
  },
  // 老是打成methods
  methods: {
    onmouseenter () {
      this.showDetail = true
    },
    onmouseleave () {
      this.showDetail = false
    }
  }

}
</script>

<style>
.banner-container {
  background: #f4f4f4;
  color: #fff;
}
.banner-container-content {
  width: 1190px;
  margin: auto;
}
.left-banner {
  position: relative;
  background: rgba(2,181,157,.85);
  width: 230px;
  font-size: 13px;
  margin-top: -50px;
  margin-right: 10px;
}
.left-banner-title {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding: 0 15px;
}
.left-banner-list {
  padding-top: 12px;
}
.left-banner-item {
  height: 26px;
  line-height: 26px;
  padding: 0 15px;
}
.left-banner-item:hover {
  background: rgba(255, 255, 255, 0.2);
}
.left-banner-item span a:hover {
  color: #fff;
}
/* 左侧banner的详细分类 */
.left-banner-content-wrapper {
  position: absolute;
  top: 60px;
  left: 230px;
  background: #fff;
  z-index: 2;
  color:#999;
  height: 400px;
  width: 425px;
}
.hidden {
  position: absolute;
  display: hidden;
}
.left-banner-content {
  padding: 10px 30px;
}
.banner-item {
  margin-bottom: 20px;
}
.content-header {
  border-bottom: 1px solid #ccc;
  line-height: 40px;
}
.content-header .left{
  font-size: 16px;
  color: #000;
}
.content-header .right:hover{
  color: #999;
}
.content-links {
  line-height: 30px;
}
.content-links a {
  padding-right: 10px;
}
.content-links a:hover {
  color: rgba(2,181,157,.85)
}
/* 右侧的banner */
.right-banner {
  position: relative;
}
.banner-link {
  width: 950px;
  font-size: 16px;
  color: #000;
  font-weight: bold;
  position: absolute;
  top: -30px;
  left: 0;
}
.banner-link a {
  margin: 0 20px;
}
.banner-link a:hover {
  color: #fbc700
}
/* 轮播图的包裹div必须设置宽度高度，不然会独占一行 */
.banner-swipper {
  overflow: hidden;
  width: 550px;
  height: 240px;
  padding: 10px 10px 0 0;
}
.banner-life img, .banner-hotel img,.banner-enioy img,.banner-seller img {
  padding: 10px 10px 0 0;
}
.banner-swipper img{
  width: 550px;
  height: 240px;
}
.banner-life img{
  width: 150px;
  height: 240px;
}
.banner-hotel img,.banner-enioy img{
  width: 270px;
  height: 165px;
}
.banner-seller img {
  width: 150px;
  height: 165px;
}
.user-center {
  width: 228px;
  height: 238px;
  margin-top: 10px;
  background: #fff;
  color: #000;
  font-size: 14px;
  text-align: center;
}
.user-center-content {
  padding-top: 30px;
}
.user-center-content .user-img-wrapper img{
  width: 54px;
  height: 54px;
  border-radius: 50%;
}
.user-center-content .welcome {
   padding-top: 5px;
}
.user-center-content .banner-user-regist, .user-center-content .banner-user-login{
  width: 118px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #ccc;
  border-radius: 25px;
  margin: 10px auto 0;
}
.banner-app {
  width: 228px;
  margin-top: 10px;
  height: 165px;
  background: #fff;
  text-align: center;
  color: #000;
}
.banner-QR-code {
  padding: 20px 0 10px;
}
.banner-app-mobile {
  line-height: 1.5;
  font-size: 14px;
}
.banner-app-info .money {
  color: #ff0000;
}
</style>
