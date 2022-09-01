<template>
  <div>
    <!-- navbar -->
    <TheNavbar></TheNavbar>


    
    <!-- contenuto di ogni pagina -->
    <!-- simile allo @yield di balde -->
    <router-view></router-view>

    <!-- <Home v-if="page === 'home'"></Home> -->
    <!-- <About v-else-if="page === 'about'"></About> -->
    <!-- <Contact v-else-if="page === 'contact'"></Contact> -->

    <!-- footer -->
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import PageHEader from '../components/PageHEader.vue';

export default {
  components: { TheNavbar, TheFooter, Home, About, Contact, PageHEader },
  data() {
    return {
      page: "home"
    }
  }
}
</script>