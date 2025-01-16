<template>
    <div loading="lazy" class="w-full text-white px-8 md:px-14 text-xl py-10 text-center md:text-left bg-center-bottom bg-no-repeat mb-8 md:bg-cover bg-[url('/public/assets/bg2.avif')]">
        <!-- <h1 class="font-bold text-2xl text-primary2 mx-auto" id="layan">Cluster</h1>

        <div class="md:flex justify-between my-3 md:my-5 h-fit">

            <div class="md:w-[40%] md:mr-2">

                <h1 class="font-semibold text-2xl md:text-3xl my-1 md:my-2">Nama Cluster</h1>
                <p class="md:text-xl text-sm my-2 md:my-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, assumenda!
                </p>    
                <h1 class="md:my-5 my-2 text-lg md:text-5xl font-bold text-primary2">Yuk! Menjadi bagian dari keluarga cluster villa nyamanna</h1>

                <div class="bg-white text-black p-5 rounded-md mt-4 md:mt-16 w-full">
                    <h1 class="my-2 font-bold">Fondasi</h1>
                    <div class="h-1 rounded-full w-full bg-primary2"></div>
                    <ul class="my-3 list-disc ml-6 text-left md:text-lg text-sm">
                        <li class="my-2">Beton bertulang</li>
                        <li class="my-2">Plafon bertingkat (Gypsun)</li>
                        <li class="my-2">Rangka besi (Hollow)</li>
                        <li class="my-2">Dinding batu merah ukuran besar</li>
                        <li class="my-2">Fondasi batu gunung</li>
                        <li class="my-2">Lantai granit</li>
                        <li class="my-2">Cat jotun</li>
                    </ul>
                </div>

            </div>

            <div class=" md:w-[55%] items-center h-full">                
                <img src="/public/assets/home.avif" alt="" class="w-full h-auto md:w-[426px] object-cover max-w-lg mx-auto">

                <div class="bg-white text-black p-5 rounded-md w-full mt-4 md:mt-8">
                    <h1 class="my-1 font-bold">Fasilitas</h1>
                    <div class="h-1 rounded-full w-full bg-primary2"></div>
                    <ul class="my-1 list-disc ml-6 text-left md:text-lg text-sm">
                        <li class="my-1">Listrik 1300 watt</li>
                        <li class="my-1">Sumur bor</li>
                        <li class="my-1">Rangka besi (Hollow)</li>
                        <li class="my-1">Pintu dan jendela kayu kelas 1</li>
                        <li class="my-1">Closet duduk</li>
                        <li class="my-1">Wastafel cuci piring stainless steel</li>
                    </ul>
                </div>
            </div>

        </div> -->

        <div class="flex justify-between">

            <h1 class="text-xl font-bold">Tanah Kavling</h1>

            <div>

                <button>ini</button>
                <button>itu</button>

            </div>

        </div>

        

        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <p>wow</p>
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <p>wow</p>
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <p>wow</p>
                </div>
            </div>
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

    </div>
</template>
