<template>
    <div 
        loading="lazy" 
        class="md:hidden block w-full text-white px-8 md:px-14 text-xl py-5 md:py-10 text-center md:text-left bg-center-bottom bg-no-repeat mb-8 md:bg-cover bg-[url('/public/assets/bg2.avif')]"
    >
        <div id="custom-controls-gallery" class="relative w-full" data-carousel="static">
            <div class="flex justify-between">
                <h1 class="text-xl font-bold my-auto">Tanah Kavling</h1>

                <div class="flex justify-center items-center pt-4">
                    <!-- Previous Button -->
                    <button 
                        type="button" 
                        class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" 
                        data-carousel-prev
                    >
                    <svg class="w-10 h-10 text-primary2 bg-white rounded-full pr-1 py-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
                    </svg>
                    </button>

                    <!-- Next Button -->
                    <button 
                        type="button" 
                        class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" 
                        data-carousel-next
                    >
                        <svg class="w-10 h-10 text-primary2 bg-white rounded-full pl-1 py-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Carousel Wrapper -->
            <div class="relative h-96 overflow-hidden mt-5 text-center py-auto justify-center">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out py-auto align-middle" data-carousel-item>

                    <div class="flex h-full">

                        <div class="w-[90%] mx-auto my-auto ">

                        <img src="/public/assets/wisata-executive.png" alt="" class="mx-auto">
                        <h3 class="mt-2  md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Wisata
                            Executive</h3>
                        <p class="md:text-base sm:text-sm text-xs">
                            Air Terjun Lembah Karaeng,
                            Kab. Gowa
                        </p>


                    </div>

                    </div>

                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out py-auto align-middle" data-carousel-item>

                    <div class="flex h-full">

                        <div class="w-[90%] mx-auto my-auto ">

                        <img src="/public/assets/wisata-premium.png" alt="" class="mx-auto">
                        <h3 class="mt-2  md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Wisata
                            Premium</h3>
                        <p class="md:text-base sm:text-sm text-xs">
                            Air Terjun Lembah Karaeng,
                            Kab. Gowa
                        </p>


                    </div>

                    </div>

                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out py-auto align-middle" data-carousel-item>

                    <div class="flex h-full">

                        <div class="w-[90%] mx-auto my-auto ">

                        <img src="/public/assets/wisata-3.png" alt="" class="mx-auto">
                        <h3 class="mt-2  md:text-xl sm:text-base text-sm font-bold">Bukit Syirka Wisata 3</h3>
                        <p class="md:text-base sm:text-sm text-xs">
                            Air Terjun Lembah Karaeng,
                            Kab. Gowa
                        </p>


                        </div>

                    </div>

                </div>

                <!-- Item 4 -->
                <div class="hidden duration-700 ease-in-out py-auto align-middle" data-carousel-item>

                    <div class="flex h-full">

                        <div class="w-[90%] mx-auto my-auto ">

                        <img src="/public/assets/wisata-4.png" alt="" class="mx-auto">
                        <h3 class="mt-2  md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Wisata 4</h3>
                        <p class="md:text-base sm:text-sm text-xs">
                            Air Terjun Lembah Karaeng,
                            Kab. Gowa
                        </p>


                        </div>

                    </div>

                </div>
                
                <!-- Item 5 -->
                <div class="hidden duration-700 ease-in-out py-auto align-middle" data-carousel-item>

                    <div class="flex h-full">

                        <div class="w-[90%] mx-auto my-auto ">

                        <img src="/public/assets/wisata-5.png" alt="" class="mx-auto">
                        <h3 class="mt-2  md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Wisata 5</h3>
                        <p class="md:text-base sm:text-sm text-xs">
                            Air Terjun Lembah Karaeng,
                            Kab. Gowa
                        </p>


                        </div>

                    </div>

                </div>

                <!-- Item 6 -->
                <div class="hidden duration-700 ease-in-out py-auto align-middle" data-carousel-item>

                    <div class="flex h-full">

                        <div class="w-[90%] mx-auto my-auto ">

                        <img src="/public/assets/maros.png" alt="" class="mx-auto">
                        <h3 class="mt-2  md:text-xl sm:text-base text-sm font-bold">Bukit Syirkah Wisata 5</h3>
                        <p class="md:text-base sm:text-sm text-xs">
                            Desa Tompobulu, Kab. Maros
                        </p>


                        </div>

                    </div>

                </div>

                <!-- Item 7 -->
                <div class="hidden duration-700 ease-in-out py-auto align-middle" data-carousel-item>

                    <div class="flex h-full">

                        <div class="w-[90%] mx-auto my-auto ">

                        <img src="/public/assets/kavling-ruko.png" alt="" class="mx-auto">
                        <h3 class="mt-2  md:text-xl sm:text-base text-sm font-bold">Tanah Kavling Ruko</h3>
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
