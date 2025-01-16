<template>

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/public/assets/Untitled design (3).avif" class="h-10 w-10" alt="Logo Ambisigo" />
            <img src="/public/assets/Untitled design (2).avif" class="h-10 w-10" alt="Logo Tanapis" />
        </div>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <a @click="scrollTo('top')" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary2 md:p-0 dark:text-white md:dark:hover:text-[#FFB100] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-200 cursor-pointer" aria-current="page">Beranda</a>
            </li>
            <li>
            <a @click="scrollTo('layan')" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary2 md:p-0 dark:text-white md:dark:hover:text-[#FFB100] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-200 cursor-pointer">Layanan</a>
            </li>
            <li>
            <a @click="scrollTo('produk')" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary2 md:p-0 dark:text-white md:dark:hover:text-[#FFB100] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-200 cursor-pointer">Produk Kami</a>
            </li>
            <li>
            <a @click="scrollTo('galeri')" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary2 md:p-0 dark:text-white md:dark:hover:text-[#FFB100] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-200 cursor-pointer">Galeri</a>
            </li>
            <!-- <li>
            <a @click="scrollTo('inves')" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary2 md:p-0 dark:text-white md:dark:hover:text-[#FFB100] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-200 cursor-pointer">Investasi</a>
            </li> -->
            <li>
            <a @click="scrollTo('kontak')" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary2 md:p-0 dark:text-white md:dark:hover:text-[#FFB100] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-200 cursor-pointer">Kontak</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>


</template>

<style>
.z-super{
    z-index: 100;
}
</style>

<script>
export default {
  methods: {
    scrollTo(targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
  },
};
</script>