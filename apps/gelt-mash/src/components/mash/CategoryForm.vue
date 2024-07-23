<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useMashStore } from '../../stores/mash';
import { MashCategory } from '../../stores/types';

const { category } = defineProps<{ category: MashCategory }>();

const mashStore = useMashStore();
const { canAddMoreOptions } = storeToRefs(mashStore);

const inputRefs = ref<HTMLInputElement[]>([]);
</script>

<template>
    <div class="flex flex-col gap-2">
        <input
            v-model="category.name"
            :id="'category-name-input-' + category.id"
            placeholder="Category name"
        />
        <div v-for="option of category.options" class="flex gap-2">
            <input
                v-model="option.name"
                ref="inputRefs"
                :id="'option-name-input-' + option.id"
                :key="option.id"
                placeholder="Option name"
                class="flex-grow"
            />
            {{ option.removed }}
            <button icon @click="mashStore.removeOption(category.id, option.id)">
                <fa-icon iconName="trash-can"></fa-icon>
            </button>
        </div>
        <button
            class="self-start"
            tonal
            @click="mashStore.addOption(category.id, '')"
            :disabled="!canAddMoreOptions(category)"
        >
            Add an option
        </button>
    </div>
</template>
