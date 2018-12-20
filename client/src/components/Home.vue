<template>
  <div>
    <nav-header></nav-header>
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
export default {
  data () {
    return {

    }
  },
  components: {
    NavHeader,
    NavFooter,
    ButtonNav,
    RecommendContainer,
    ZhenguoContainer
  }
}
</script>

<style>

</style>
