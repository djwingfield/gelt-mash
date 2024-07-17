<script setup lang="ts">
import Header from './components/Header.vue';
import Mash from './components/mash/Mash.vue';
</script>

<template>
    <div className="flex flex-col h-screen w-full">
        <Header />

        <main class="content-px py-4">
            <Mash />
        </main>
    </div>
</template>
