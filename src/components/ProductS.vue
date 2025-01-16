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

        <div id="custom-controls-gallery" class="relative w-full" data-carousel="slide">

            <div class="flex justify-between">

                <h1 class="text-xl font-bold">Tanah Kavling</h1>

                <div class="flex justify-center items-center pt-4">
                    <button type="button" class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>


            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                </div>
            </div>
        </div>


    </div>
</template>
