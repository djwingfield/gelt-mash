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
    <div class="flex flex-col items-center gap-2 card">
        <div class="w-[100%] mb-3">
            <div v-if="!mashStore.mashing && !mashStore.mashed" class="flex items-center gap-2">
                <input
                    v-model="category.name"
                    :id="'category-name-input-' + category.id"
                    placeholder="Category name"
                    class="grow"
                />
                <button
                    filled
                    icon
                    @click="mashStore.removeCategory(category.id)"
                    :disabled="mashStore.mashing || mashStore.mashed"
                >
                    <fa-icon iconName="trash-can"></fa-icon>
                </button>
            </div>
            <div v-else class="flex-grow">
                <span class="text-xl font-semibold">{{ category.name }}</span>
            </div>
        </div>
        <div
            :class="{
                'flex flex-col gap-3': true,
                'w-[50%]': !mashStore.mashing && !mashStore.mashed,
                'w-[100%]': mashStore.mashing || mashStore.mashed,
            }"
        >
            <div v-for="option of category.options">
                <div v-if="!mashStore.mashing && !mashStore.mashed" class="flex gap-2">
                    <input
                        v-model="option.name"
                        ref="inputRefs"
                        :id="'option-name-input-' + option.id"
                        :key="option.id"
                        placeholder="Option name"
                        class="grow"
                    />
                    <button
                        icon
                        outline
                        @click="mashStore.removeOption(category.id, option.id)"
                        :disabled="mashStore.mashing"
                    >
                        <fa-icon iconName="trash-can"></fa-icon>
                    </button>
                </div>
                <span v-else :class="{ 'opacity-50': option.removed }">{{ option.name }}</span>
            </div>
            <button
                v-if="!mashStore.mashing && !mashStore.mashed"
                class="self-start"
                outline
                @click="mashStore.addOption(category.id, '')"
                :disabled="!canAddMoreOptions(category)"
            >
                Add an option
            </button>
        </div>
    </div>
</template>
