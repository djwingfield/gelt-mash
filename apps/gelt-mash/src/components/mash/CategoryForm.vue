<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { useMashStore } from '../../stores/mash';

const mashStore = useMashStore();
const inputRefs = ref<HTMLInputElement[]>([]);

const addCategory = (name: string) => {
    mashStore.addCategory(name);
    focusOnLastCategory();
};

const focusOnLastCategory = async () => {
    await nextTick();
    const lastCategoryInput = inputRefs.value.slice(-1)[0];
    lastCategoryInput.focus();
    lastCategoryInput.select();
};
</script>

<template>
    <div class="flex flex-col gap-2">
        <input
            v-for="category of mashStore.categories"
            v-model="category.name"
            ref="inputRefs"
            :id="'category-name-input-' + category.id"
            :key="category.id"
            placeholder="Category name"
        />
        <button class="self-start" @click="addCategory('')">Add a Category</button>
    </div>
</template>
