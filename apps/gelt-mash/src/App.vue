<script setup lang="ts">
import Header from './components/Header.vue';
import Mash from './components/mash/Mash.vue';
</script>

<template>
    <div className="flex h-screen w-full">
        <Header />

        <main class="grow content-px py-4 overflow-auto">
            <Mash />
        </main>
    </div>
</template>
