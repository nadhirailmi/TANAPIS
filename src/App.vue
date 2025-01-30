<template>
  <topnav/> 
  <navbar/>
  <hero/>
  <about/>
  <service/>
  <product/>
  <products/>
  <products2/>
  <cta/>
  <galeri/>
  <cta2/>
  <hormat/>
  <maps/>
  <foter/>
  <btn/>
</template>

<script>
import topnav from './components/TopNav.vue';
import navbar from './components/NavBar.vue';
import hero from './components/HeRo.vue';
import product from './components/ProDuct.vue';
import products from './components/ProductS.vue';
import cta2 from './components/CtA2.vue';
import maps from './components/MaPs.vue';
import foter from './components/FooTer.vue';
import about from './components/AboutUs.vue';
import btn from './components/ButTon.vue';
import service from './components/SerVice.vue';
import hormat from './components/HorMat.vue';
import galeri from './components/GaleRi.vue'; 
import cta from './components/CtA.vue';
import products2 from './components/ProdUcts2.vue';
export default {
  name:"app",
  components:{
    topnav,
    navbar,
    hero,
    service,
    product,
    products,
    cta2,
    maps,
    foter,
    about,
    btn,
    hormat,
    galeri,
    cta,
    products2,
  }
}
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>