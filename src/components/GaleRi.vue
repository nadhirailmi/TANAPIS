<template>
    <div class="px-8 md:px-14 text-center md:py-10">
        <h1 id="galeri" class="text-2xl font-bold mb-4 cursor-default">Galeri Foto</h1>

        <!-- BATCH 1 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/bumi-2.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/griya kencana.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/auliyah.webp" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/ayesha.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/tanah-2.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/bumi-borongloe.webp" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-3.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-2.webp" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/tanah-4.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-4.webp" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/tanah.webp" alt="">
                </div>
            </div>
        </div>

        <!-- Lihat Lebih Banyak Button -->
        <h1 
            class="my-10 font-bold cursor-pointer text-primary1 hover:text-primary2 transition-colors"
            v-if="!showMore"
            @click="toggleMore"
        >
            Lihat lebih banyak...
        </h1>

        <!-- BATCH 2 -->
        <transition name="fade-slide">
            <div 
                v-if="showMore"
                class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
            >
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-11.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/tanah-5.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/nyamanna.webp" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-10.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/tanah-3.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/tanah-6.webp" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-12.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-5.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-7.webp" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-9.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-8.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/rumah-6.webp" alt="">
                    </div>
                </div>
            </div>
        </transition>

        <!-- BATCH 3 -->

        <transition name="fade-slide">
            <div 
                v-if="showMore"
                class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
            >
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/RUMAH-OUTSIDE-1.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/DALAM-RUMAH-4.webp" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/RUMAH-OUTSIDE.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/DALAM-RUMAH-3.webp" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/DALAM-RUMAH.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/DALAM-RUMAH-2.webp" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/RUMAH-BARU.webp" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-[5px]" src="/public/assets/DALAM-RUMAH-1.webp" alt="">
                    </div>
                </div>

                <!-- Tutup Button -->
                <div class="col-span-2 md:col-span-4 text-center mt-4 mb-10">
                    <h1 
                        class="font-bold cursor-pointer text-primary1 hover:text-primary2 transition-colors"
                        @click="toggleMore"
                    >
                        Tutup
                    </h1>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const showMore = ref(false);

        const toggleMore = () => {
            showMore.value = !showMore.value;
        };

        return { showMore, toggleMore };
    },
};
</script>

<style>
.fade-slide-enter-active, .fade-slide-leave-active {
    transition: all 0.5s ease;
}
.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>