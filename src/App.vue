<template>
  <topnav/>
  <navbar/>
  <hero/>
  <about/>
  <daftar/>
  <produk/>
  <anu/>
  <testi/>
  <inves/>
  <ayo/>
  <cta/>
  <maps/>
  <foter/>
  <btn/>
</template>

<script>
import topnav from './components/TopNav.vue';
import navbar from './components/NavBar.vue';
import hero from './components/HeRo.vue';
import produk from './components/ProdukUs.vue';
import anu from './components/AnuNya.vue';
import ayo from './components/AyO.vue';
import maps from './components/MaPs.vue';
import foter from './components/FooTer.vue';
import inves from './components/InveSa.vue';
import about from './components/AboutUs.vue';
import btn from './components/ButTon.vue';
import daftar from './components/DafTar.vue';
import testi from './components/TesTi.vue';
import cta from './components/CtA.vue';
export default {
  name:"app",
  components:{
    topnav,
    navbar,
    hero,
    daftar,
    produk,
    anu,
    ayo,
    maps,
    foter,
    inves,
    about,
    btn,
    testi,
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