<template>

    <div class="md:pt-20 md:pb-10">

    <div class="w-full bg-white rounded-md my-2 h-[450px]">

        <div id="carousel" class="relative w-full " data-carousel="static"> <!-- Updated: disable auto-slide -->
            <!-- Carousel wrapper -->
            <div class="relative h-[450px] overflow-hidden rounded-t-md">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out bg-white px-16 md:px-36" data-carousel-item>
                    <div class="bg-white drop-shadow-2xl mt-16 p-5 rounded-md ">
                        <img src="/public/assets/“.png" alt="" class="md:w-10 md:h-8 w-8">

                        <div class="flex justify-between">
                            <img src="/public/assets/d 1.png" alt="" class="mx-auto border-[10px] border-white h-28 w-28 mt-[-100px] rounded-full">
                        </div>

                        <p class="text-center w-[70%] mx-auto my-2 md:my-8 md:text-base text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate veritatis omnis quis voluptates accusantium, dolorum voluptatum incidunt nulla quisquam exercitationem quo sapiente. Est tempora eos aperiam, fugiat mollitia minima.</p>

                        <p class="text-center font-bold md:text-base text-xs">Celebes Digital</p>

                        <div class="flex justify-between">
                            <div></div>
                            <img src="/public/assets/”.png" alt="" class="justify-end md:w-10 md:h-8 w-8">
                        </div>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out bg-white px-16 md:px-36" data-carousel-item>
                    <div class="bg-white drop-shadow-2xl mt-16 p-5 rounded-md ">
                        <img src="/public/assets/“.png" alt="" class="md:w-10 md:h-8 w-8">

                        <div class="flex justify-between">
                            <img src="/public/assets/d 1.png" alt="" class="mx-auto border-[10px] border-white h-28 w-28 mt-[-100px] rounded-full">
                        </div>

                        <p class="text-center w-[70%] mx-auto my-2 md:my-8 md:text-base text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium architecto rerum praesentium dolores accusamus laudantium debitis cumque numquam possimus.</p>

                        <p class="text-center font-bold md:text-base text-xs">Celebes Digital</p>

                        <div class="flex justify-between">
                            <div></div>
                            <img src="/public/assets/”.png" alt="" class="justify-end md:w-10 md:h-8 w-8">
                        </div>
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="hidden my-auto justify-center align-middle duration-700 ease-in-out bg-white px-16 md:px-36" data-carousel-item>
                    <div class="bg-white drop-shadow-2xl mt-16 p-5 rounded-md ">
                        <img src="/public/assets/“.png" alt="" class="md:w-10 md:h-8 w-8">

                        <div class="flex justify-between">
                            <img src="/public/assets/d 1.png" alt="" class="mx-auto border-[10px] border-white h-28 w-28 mt-[-100px] rounded-full">
                        </div>

                        <p class="text-center w-[70%] mx-auto my-2 md:my-8 md:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio provident inventore quasi earum obcaecati ipsam eaque amet doloremque eveniet architecto!</p>

                        <p class="text-center font-bold md:text-base text-xs">Celebes Digital</p>

                        <div class="flex justify-between">
                            <div></div>
                            <img src="/public/assets/”.png" alt="" class="justify-end md:w-10 md:h-8 w-8">
                        </div>
                    </div>
                </div>
                <!-- Additional items as needed -->
            </div>


            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg class="w-4 h-4 text-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg class="w-4 h-4 text-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

    </div>

</div>
    

</template>