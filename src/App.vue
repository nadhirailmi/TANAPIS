<template>
  <topnav/>
  <navbar/>
  <hero/>
  <about/>
  <service/>
  <product/>
  <products/>
  <cta/>
  <galeri/>
  <hormat/>
  <testi/>
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
import inves from './components/InveSa.vue';
import about from './components/AboutUs.vue';
import btn from './components/ButTon.vue';
import service from './components/SerVice.vue';
import testi from './components/TesTi.vue';
import hormat from './components/HorMat.vue';
import galeri from './components/GaleRi.vue'; 
import cta from './components/CtA.vue';
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
    inves,
    about,
    btn,
    testi,
    hormat,
    galeri,
    cta,
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