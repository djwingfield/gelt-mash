<script setup lang="ts">
import { useMashStore } from '../../stores/mash';

const mashStore = useMashStore();
</script>

<template>
    <div class="flex flex-col gap-2">
        <input v-for="category of mashStore.categories" v-model="category.name" />
        <button class="self-start" @click="mashStore.addCategory('')">Add a Category</button>
    </div>
</template>
