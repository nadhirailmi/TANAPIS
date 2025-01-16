    <template>

        <div class="px-8 md:px-14 py-10 text-center">

            <h1 class="font-bold mb-2 text-2xl" id="produk">Produk Kami</h1>
            <p>
                Adapun Produk yang di Tawarkan Oleh Perusahaan TANAPIS di antaranya adalah:
            </p>

            <div class="mb-4 mt-4">
                <ul class="flex text-sm font-medium text-center w-full border-4 border-primary2" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li class="w-full" role="presentation">
                        <button class="inline-block p-4 w-full bg-primary1 hover:text-white hover:bg-primary2 transition-all text-white md:text-base text-xs" id="syariah-tab" data-tabs-target="#syariah" type="button" role="tab" aria-controls="syariah" aria-selected="false">Perumahan Syariah</button>
                    </li>
                    <li class="w-full" role="presentation">
                        <button class="inline-block p-4 w-full bg-primary1 hover:text-white hover:bg-primary2 transition-all text-white md:text-base text-xs" id="subsidi-tab" data-tabs-target="#subsidi" type="button" role="tab" aria-controls="subsidi" aria-selected="false">Perumahan Subsidi</button>
                    </li>
                    <li class="w-full" role="presentation">
                        <button class="inline-block p-4 w-full bg-primary1 hover:text-white hover:bg-primary2 transition-all text-white md:text-base text-xs" id="umum-tab" data-tabs-target="#umum" type="button" role="tab" aria-controls="umum" aria-selected="false">Perumahan Umum</button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content">
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="syariah" role="tabpanel" aria-labelledby="syariah-tab">
                    <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="subsidi" role="tabpanel" aria-labelledby="subsidi-tab">
                    <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="umum" role="tabpanel" aria-labelledby="umum-tab">
                    <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
            </div>

        </div>

    </template>