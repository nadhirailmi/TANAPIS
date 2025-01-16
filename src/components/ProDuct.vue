<template>
    <div class="px-8 md:px-14 py-10 text-center">
        <h1 class="font-bold mb-2 md:text-2xl sm:text-xl text-lg cursor-default" id="produk">Produk Kami</h1>
        <p class="cursor-default md:text-base sm:text-sm text-xs">
            Adapun Produk yang di Tawarkan Oleh Perusahaan TANAPIS di antaranya adalah:
        </p>

        <div class="md:mb-4 mb-2 mt-2 md:mt-4">
            <ul
                class="flex text-sm font-medium text-center w-full border-4 border-primary2"
                id="default-tab"
                role="tablist"
            >
                <li class="w-full" role="presentation">
                    <button
                        class="inline-block p-4 w-full transition-all md:text-base text-xs"
                        :class="activeTab === 'syariah' ? 'bg-primary2 text-white' : 'bg-primary1 text-white hover:bg-[#92CD55]'"
                        id="syariah-tab"
                        @click="setActiveTab('syariah')"
                        type="button"
                        role="tab"
                        aria-controls="syariah"
                        :aria-selected="activeTab === 'syariah'"
                    >
                        Perumahan Syariah
                    </button>
                </li>
                <li class="w-full" role="presentation">
                    <button
                        class="inline-block p-4 w-full transition-all md:text-base text-xs"
                        :class="activeTab === 'subsidi' ? 'bg-primary2 text-white' : 'bg-primary1 text-white hover:bg-[#92CD55]'"
                        id="subsidi-tab"
                        @click="setActiveTab('subsidi')"
                        type="button"
                        role="tab"
                        aria-controls="subsidi"
                        :aria-selected="activeTab === 'subsidi'"
                    >
                        Perumahan Subsidi
                    </button>
                </li>
                <li class="w-full" role="presentation">
                    <button
                        class="inline-block p-4 w-full transition-all md:text-base text-xs"
                        :class="activeTab === 'umum' ? 'bg-primary2 text-white' : 'bg-primary1 text-white hover:bg-[#92CD55]'"
                        id="umum-tab"
                        @click="setActiveTab('umum')"
                        type="button"
                        role="tab"
                        aria-controls="umum"
                        :aria-selected="activeTab === 'umum'"
                    >
                        Perumahan Umum
                    </button>
                </li>
            </ul>
        </div>
        <div id="default-tab-content">
            <!-- PERUMAHAN SYARIAH -->
            <div
                v-show="activeTab === 'syariah'"
                class="p-4 text-start"
                id="syariah"
                role="tabpanel"
            >

                <div class="md:flex">

                    <div class="md:w-[25%] sm:mx-2">
                        <h6 class="md:text-2xl sm:text-xl text-base font-bold cursor-default">Bukit Shafa Residence</h6>
                        <p class="cursor-default md:text-base sm:text-sm text-xs md:mb-0 mb-2">
                            Perumahan eksklusif di Kota Makassar yang cantik dan berkelas, berlokasi strategis di kawasan Daya
                        </p>
                    </div>

                    <div class="flex md:w-[75%]">

                        <div class="w-[34%] md:mx-2 mr-1">
                            <img src="/public/assets/ayesha-flyer.jpg" alt="" class="rounded-[5px] object-cover">
                            <h5 class="md:text-lg text-sm font-bold cursor-default">
                                Cluster Ayesha
                            </h5>
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">3 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">3 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                        <div class="w-[34%] md:mx-2">
                            <img src="/public/assets/auliyah-flyer.jpg" alt="" class="rounded-[5px] object-cover">
                            <h5 class="md:text-lg text-sm font-bold cursor-default">
                                Cluster Auliyah
                            </h5>
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                        <div class="w-[34%] md:mx-2 ml-1">
                            <img src="/public/assets/fatinah-flyer.jpg" alt="" class="rounded-[5px] object-cover">
                            <h5 class="md:text-lg text-sm font-bold cursor-default">
                                Cluster Fatinah
                            </h5>
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="md:flex mt-4 border-t-2 border-t-black md:border-t-0">

                    <div class="md:w-[25%] md:mx-2 mt-2">

                        <h6 class="md:text-2xl sm:text-xl text-base font-bold cursor-default">Akademika Townhouse</h6>
                        <p class="cursor-default md:text-base sm:text-sm text-xs md:mb-0 mb-2">
                            Perumahan dengan Hunian exlusif yang mempesona berada di Jalan Poros Malino
                        </p>

                        <h6 class="md:text-xl sm:text-lg text-base font-bold cursor-default">
                            Features
                        </h6>
                        <div class=" md:mx-2 ml-1">
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                    </div>

                    <div class="flex mt-4 md:w-[75%]">

                        <img src="/public/assets/akademika-flyer-1.jpg" alt="akademika1" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">
                        <img src="/public/assets/akademika-flyer-2.jpg" alt="akademika2" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">

                    </div>

                </div>

            </div>

            <!-- PERUMAHAN SUBSIDI -->
            <div
                v-show="activeTab === 'subsidi'"
                class="p-4 text-start"
                id="subsidi"
                role="tabpanel"
            >
                <div class="md:flex">

                    <div class="md:w-[25%] sm:mx-2">
                        <h6 class="md:text-2xl sm:text-xl text-base font-bold cursor-default">Alfazza Residence</h6>
                        <p class="cursor-default md:text-base sm:text-sm text-xs md:mb-0 mb-2">
                            Berlokasi di Moncong Loe, cocok untuk investasi dan hunian nyaman dengan suasana pedesaan yang tenang serta pemandangan indah
                        </p>
                    </div>

                    <div class="md:w-[75%]">
                        <div class="flex">

                            <div class="w-[34%] md:mx-2 mr-1">
                                <img src="/public/assets/subsidi.png" alt="" class="rounded-[5px] object-cover">
                                <h5 class="md:text-lg text-sm font-bold cursor-default">
                                    Type 28/60
                                </h5>
                                <div class="flex">
                                    <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                                </div>
                            </div>

                            <div class="w-[34%] md:mx-2">
                                <img src="/public/assets/subsidi.png" alt="" class="rounded-[5px] object-cover">
                                <h5 class="md:text-lg text-sm font-bold cursor-default">
                                    Type 30/78
                                </h5>
                                <div class="flex">
                                    <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                                </div>
                            </div>

                            <div class="w-[34%] md:mx-2 ml-1">
                                <img src="/public/assets/subsidi.png" alt="" class="rounded-[5px] object-cover">
                                <h5 class="md:text-lg text-sm font-bold cursor-default">
                                    Type 32/72
                                </h5>
                                <div class="flex">
                                    <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                                </div>
                            </div>

                        </div>

                        <div class="flex mt-4">

                            <div class="w-[34%] md:mx-2 mr-1">
                                <img src="/public/assets/subsidi.png" alt="" class="rounded-[5px] object-cover">
                                <h5 class="md:text-lg text-sm font-bold cursor-default">
                                    Type 36/78
                                </h5>
                                <div class="flex">
                                    <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                                </div>
                            </div>

                            <div class="w-[34%] md:mx-2">
                                <img src="/public/assets/subsidi.png" alt="" class="rounded-[5px] object-cover">
                                <h5 class="md:text-lg text-sm font-bold cursor-default">
                                    Type 42/78
                                </h5>
                                <div class="flex">
                                    <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                                </div>
                            </div>

                            <div class="w-[34%] md:mx-2 ml-1">
                                <img src="/public/assets/subsidi.png" alt="" class="rounded-[5px] object-cover">
                                <h5 class="md:text-lg text-sm font-bold cursor-default">
                                    Type 48/78
                                </h5>
                                <div class="flex">
                                    <img src="/public/assets/icon-wc.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-turu.avif" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                                </div>
                                <div class="flex">
                                    <img src="/public/assets/icon-car.png" alt="icon wc" class="w-[10%]">
                                    <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <!-- GRIYA KENCANA -->
                <div class="md:flex mt-4 border-t-2 border-t-black md:border-t-0">

                    <div class="md:w-[25%] md:mx-2 mt-2">

                        <h6 class="md:text-2xl sm:text-xl text-base font-bold cursor-default">Griya Kencana Pakatto</h6>
                        <p class="cursor-default md:text-base sm:text-sm text-xs md:mb-0 mb-2">
                            Berlokasi di Jalan Poros Malino Pakkatto, menawarkan lingkungan tenang, aman, dan pemandangan asri nan mempesona
                        </p>

                        <h6 class="md:text-xl sm:text-lg text-base font-bold cursor-default">
                            Features
                        </h6>
                        <div class=" md:mx-2 ml-1">
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                    </div>

                    <div class="flex mt-4 md:w-[75%]">

                        <img src="/public/assets/griya-kencana-flyer-1.jpg" alt="akademika1" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">
                        <img src="/public/assets/griya-kencana-dena.jpg" alt="akademika2" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">

                    </div>

                </div>

                <!-- PATTIRO -->
                <div class="md:flex mt-4 border-t-2 border-t-black md:border-t-0">

                    <div class="md:w-[25%] md:mx-2 mt-2">

                        <h6 class="md:text-2xl sm:text-xl text-base font-bold cursor-default">Pattiro Hills</h6>
                        <p class="cursor-default md:text-base sm:text-sm text-xs md:mb-0 mb-2">
                            Terletak di Pattallassang, dekat dengan fasilitas pendidikan, kesehatan, serta pusat bisnis Gowa dan Makassar
                        </p>

                        <h6 class="md:text-xl sm:text-lg text-base font-bold cursor-default">
                            Features
                        </h6>
                        <div class=" md:mx-2 ml-1">
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                    </div>

                    <div class="flex mt-4 md:w-[75%]">

                        <img src="/public/assets/pattiro-hills-flyer.jpg" alt="akademika1" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">
                        <img src="/public/assets/pattiro-hills.jpg" alt="akademika2" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">

                    </div>

                </div>

                <!-- BUMI BORONGLOE -->
                <div class="md:flex mt-4 border-t-2 border-t-black md:border-t-0">

                    <div class="md:w-[25%] md:mx-2 mt-2">

                        <h6 class="md:text-2xl sm:text-xl text-base font-bold cursor-default">Perumahan Bumi 
                            Borongloe</h6>
                        <p class="cursor-default md:text-base sm:text-sm text-xs md:mb-0 mb-2">
                            Dekat dengan Pusat Kota Sungguminasa dan Makassar, suasana tenang, aman, dan sejuk. Tersedia satu rumah take over
                        </p>

                        <h6 class="md:text-xl sm:text-lg text-base font-bold cursor-default">
                            Features
                        </h6>
                        <div class=" md:mx-2 ml-1">
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                    </div>

                    <div class="flex mt-4 md:w-[75%]">

                        <img src="/public/assets/bumi.jpg" alt="akademika1" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">
                        <img src="/public/assets/bumi-borongloe.jpg" alt="akademika2" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">

                    </div>

                </div>

            </div>

            <!-- PERUMAHAN UMUM -->
            <div
                v-show="activeTab === 'umum'"
                class="p-4 text-start"
                id="umum"
                role="tabpanel"
            >
                <div class="md:flex sm:mt-4 ">

                    <div class="md:w-[25%] md:mx-2 mt-2">

                        <h6 class="md:text-2xl sm:text-xl text-base font-bold cursor-default">Perumahan Mega Rezky</h6>
                        <p class="cursor-default md:text-base sm:text-sm text-xs md:mb-0 mb-2">
                            Terletak di Samata, Gowa, dekat dengan pusat pendidikan dan kesehatan
                        </p>

                        <h6 class="md:text-xl sm:text-lg text-base font-bold cursor-default">
                            Features
                        </h6>
                        <div class=" md:mx-2 ml-1">
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                    </div>

                    <div class="flex mt-4 md:w-[75%]">

                        <img src="/public/assets/mega-rezky.jpg" alt="akademika1" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">
                        <img src="/public/assets/mega rezky.jpg" alt="akademika2" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">

                    </div>

                </div>

                <div class="md:flex mt-4 border-t-2 border-t-black md:border-t-0">

                    <div class="md:w-[25%] md:mx-2 mt-2">

                        <h6 class="md:text-2xl sm:text-xl text-base font-bold cursor-default">Cluster Villa 
                            Nyamanna Residence</h6>
                        <p class="cursor-default md:text-base sm:text-sm text-xs md:mb-0 mb-2">
                            Lingkungan eksklusif dengan hanya lima rumah dan dua ruko. Sisa dua rumah dan dua ruko take over, ideal untuk hunian sekaligus usaha.
                        </p>

                        <h6 class="md:text-xl sm:text-lg text-base font-bold cursor-default">
                            Features
                        </h6>
                        <div class=" md:mx-2 ml-1">
                            <div class="flex">
                                <img src="/public/assets/icon-wc.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Kamar Mandi</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-turu.avif" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">2 Kamar Tidur</p>
                            </div>
                            <div class="flex">
                                <img src="/public/assets/icon-car.png" alt="icon wc" class="md:w-[10%] sm:w-[20px] w-[10px]">
                                <p class="my-auto mx-2 lg:text-base md:text-sm sm:text-xs text-[8px]">1 Mobil</p>
                            </div>
                        </div>

                    </div>

                    <div class="flex mt-4 md:w-[75%]">

                        <img src="/public/assets/nyamanna.jpg" alt="akademika1" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">
                        <img src="/public/assets/nyamanna-2.jpg" alt="akademika2" class="md:mx-2 mx-1 md:w-[34%] w-[50%] object-cover rounded-[5px]">

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeTab = ref('syariah'); // Default active tab
        const setActiveTab = (tab) => {
            activeTab.value = tab;
        };

        return { activeTab, setActiveTab };
    },
};
</script>