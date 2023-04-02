<template>
<div class="home">
    <Navigation/>
    <Header/>
    <router-view/>
  <Footer/>
</div>
</template>

<script>
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default {
    name: 'home',
    components: {
        Header,
        Navigation,
        Footer
    }
}
</script>

<style scoped>
.home {
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  background-color: #F4F0EA;
  color: #846e6e;
  overflow: hidden;
}

</style>