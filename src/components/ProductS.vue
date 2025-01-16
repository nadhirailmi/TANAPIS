<template>
    <div 
        loading="lazy" 
        class="w-full text-white px-8 md:px-14 text-xl py-5 md:py-10 text-center md:text-left bg-center-bottom bg-no-repeat mb-8 md:bg-cover bg-[url('/public/assets/bg2.avif')]"
    >
        <div id="custom-controls-gallery" class="relative w-full" data-carousel="static">
            <div class="flex justify-between">
                <h1 class="text-xl font-bold">Tanah Kavling</h1>

                <div class="flex justify-center items-center pt-4">
                    <!-- Previous Button -->
                    <button 
                        type="button" 
                        class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" 
                        data-carousel-prev
                    >
                        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>

                    <!-- Next Button -->
                    <button 
                        type="button" 
                        class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" 
                        data-carousel-next
                    >
                        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>

            <!-- Carousel Wrapper -->
            <div class="relative h-56 overflow-hidden md:h-96 mt-5 text-start">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>

                    <div class="flex">

                        <div class="w-[34%] md:mx-2">

                            <img src="/public/assets/wisata-executive.png" alt="">
                            <h3 class="md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Wisata
                                Executive</h3>
                            <p class="md:text-base sm:text-sm text-xs">
                                Air Terjun Lembah Karaeng,
                                Kab. Gowa
                            </p>


                        </div>

                        
                        <div class="w-[34%] md:mx-2 mx-1">

                            <img src="/public/assets/wisata-premium.png" alt="">
                            <h3 class="md:text-xl sm:text-base text-sm font-bold text-start">Bukit Syirkah Wisata
                                Premium</h3>
                            <p class="md:text-base sm:text-sm text-xs text-start">
                                Air Terjun Lembah Karaeng,
                                Kab. Gowa
                            </p>


                        </div>


                        <div  class="w-[34%] md:mx-2">

                            <img src="/public/assets/wisata-3.png" alt="">
                            <h3 class="md:text-xl sm:text-base text-sm font-bold">Bukit Syirka Wisata 3</h3>
                            <p class="md:text-base sm:text-sm text-xs">
                                Air Terjun Lembah Karaeng,
                                Kab. Gowa
                            </p>


                        </div>

                    </div>

                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>

                    <div class="flex">

                        <div class="w-[34%] md:mx-2">

                            <img src="/public/assets/wisata-4.png" alt="">
                            <h3 class="md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Wisata 4</h3>
                            <p class="md:text-base sm:text-sm text-xs">
                                Air Terjun Lembah Karaeng,
                                Kab. Gowa
                            </p>


                        </div>

                        
                        <div class="w-[34%] md:mx-2 mx-1">

                            <img src="/public/assets/wisata-5.png" alt="">
                            <h3 class="md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Wisata 5</h3>
                            <p class="md:text-base sm:text-sm text-xs">
                                Air Terjun Lembah Karaeng,
                                Kab. Gowa
                            </p>


                        </div>


                        <div  class="w-[34%] md:mx-2">

                            <img src="/public/assets/maros.png" alt="">
                            <h3 class="md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Maros</h3>
                            <p class="md:text-base sm:text-sm text-xs">
                                Desa Tompobulu, Kab. Maros
                            </p>


                        </div>

                    </div>

                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>

                    <div class="flex">

                        <div class="w-[34%] md:mx-2">

                            <img src="/public/assets/kavling-ruko.png" alt="">
                            <h3 class="md:text-xl sm:text-base text-sm font-bold">Tanah Kavling Ruko</h3>
                            <p class="md:text-base sm:text-sm text-xs">
                                Kec. Tompobulu, Kab. Maros
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
