    <template>

        <h1 class="font-bold text-center text-2xl my-10" id="produk">PRODUK KAMI</h1>

        <div class="px-8 md:px-14 ">
            <h1 class="font-bold text-2xl my-1">Ruko</h1>
            <div class="md:flex justify-between">

                <div class="w-full bg-white rounded-md shadow md:mx-4 my-2 h-fit">

                    <div id="carousel" class="relative w-full" data-carousel="static"> <!-- Updated: disable auto-slide -->
                        <!-- Carousel wrapper -->
                        <div class="relative h-56 overflow-hidden rounded-t-md md:h-64">
                            <!-- Item 1 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah3.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Item 2 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah2.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Item 3 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah3.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Additional items as needed -->
                        </div>

                        <!-- Slider indicators -->
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        </div>

                        <!-- Slider controls -->
                        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                    <div class="p-5 lg:text-base text-xs">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90">Nama</h5>
                        </a>
                        <div class="flex justify-between">
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/majesticons_bath-shower.avif" alt="" class="mr-2 h-7 w-7">1 Kamar Mandi
                            </div>
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/material-symbols_stairs.avif" alt="" class="mr-2 h-7 w-7">100 Lantai
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/mingcute_bed-fill.avif" alt="" class="mr-2 h-7 w-7">2 Kamar Tidur
                            </div>
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/Vector.avif" alt="" class="mr-2 h-7 w-7">3 Mobil
                            </div>
                        </div>

                    </div>

                </div>

                <div class="w-full bg-white rounded-md shadow md:mx-4 my-2 h-fit">

                    <div id="carousel" class="relative w-full" data-carousel="static"> <!-- Updated: disable auto-slide -->
                        <!-- Carousel wrapper -->
                        <div class="relative h-56 overflow-hidden rounded-t-md md:h-64">
                            <!-- Item 1 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah3.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Item 2 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah2.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Item 3 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah3.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Additional items as needed -->
                        </div>

                        <!-- Slider indicators -->
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        </div>

                        <!-- Slider controls -->
                        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                    <div class="p-5 lg:text-base text-xs">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90">Nama</h5>
                        </a>
                        <div class="flex justify-between">
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/majesticons_bath-shower.avif" alt="" class="mr-2 h-7 w-7">1 Kamar Mandi
                            </div>
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/material-symbols_stairs.avif" alt="" class="mr-2 h-7 w-7">100 Lantai
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/mingcute_bed-fill.avif" alt="" class="mr-2 h-7 w-7">2 Kamar Tidur
                            </div>
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/Vector.avif" alt="" class="mr-2 h-7 w-7">3 Mobil
                            </div>
                        </div>

                    </div>

                </div>

                <div class="w-full bg-white rounded-md shadow md:mx-4 my-2 h-fit">

                    <div id="carousel" class="relative w-full" data-carousel="static"> <!-- Updated: disable auto-slide -->
                        <!-- Carousel wrapper -->
                        <div class="relative h-56 overflow-hidden rounded-t-md md:h-64">
                            <!-- Item 1 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah3.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Item 2 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah2.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Item 3 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../assets/rumah3.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            </div>
                            <!-- Additional items as needed -->
                        </div>

                        <!-- Slider indicators -->
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        </div>

                        <!-- Slider controls -->
                        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                    <div class="p-5 lg:text-base text-xs">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90">Nama</h5>
                        </a>
                        <div class="flex justify-between">
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/majesticons_bath-shower.avif" alt="" class="mr-2 h-7 w-7">1 Kamar Mandi
                            </div>
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/material-symbols_stairs.avif" alt="" class="mr-2 h-7 w-7">100 Lantai
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/mingcute_bed-fill.avif" alt="" class="mr-2 h-7 w-7">2 Kamar Tidur
                            </div>
                            <div class="mb-3 font-normal text-gray-700 flex my-auto w-full">
                                <img src="../assets/Vector.avif" alt="" class="mr-2 h-7 w-7">3 Mobil
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    </template>