<template>
  <div>
    <nav-header></nav-header>
    <banner-container></banner-container>
    <scenes-container></scenes-container>
    <maoyan-container></maoyan-container>
    <zhenguo-container></zhenguo-container>
    <recommend-container></recommend-container>
    <button-nav></button-nav>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './NavHeader'
import NavFooter from './NavFooter'
import ButtonNav from './ButtonNav'
import RecommendContainer from './RecommendContainer'
import ZhenguoContainer from './ZhenguoContainer'
import MaoyanContainer from './MaoyanContainer'
import ScenesContainer from './ScenesContainer'
import BannerContainer from './BannerContainer'
export default {
  data () {
    return {}
  },
  components: {
    NavHeader,
    NavFooter,
    ButtonNav,
    RecommendContainer,
    ZhenguoContainer,
    MaoyanContainer,
    ScenesContainer,
    BannerContainer
  }
}
</script>

<style>

</style>
