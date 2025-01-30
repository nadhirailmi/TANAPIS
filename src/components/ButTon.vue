<template>
    <div>
      <transition name="fade">
        <button
          v-if="showButton"
          @click="scrollTo('top')"
          class="fixed top-[90%] right-[3%] bg-primary2 p-4 rounded-sm z-super transition-all duration-300"
        >
          <img src="/public/assets/ep_arrow-up-bold.webp" alt="Arrow Up" />
        </button>
      </transition>
    </div>
</template>  


<style>
.z-super{
    z-index: 100;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>


<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 200; 
    },
    scrollTo(targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>

