<script setup lang="ts">
import { useMashStore } from '../../stores/mash';
import CategoryForm from './CategoryForm.vue';
import DiceRoller from './dice/DiceRoller.vue';
import MashHeader from './MashHeader.vue';
const mashStore = useMashStore();
</script>

<template>
    <div class="flex flex-col items-center gap-4">
        <MashHeader></MashHeader>

        <div class="flex gap-2">
            <button tonal @click="mashStore.reset()" class="mb-3" :disabled="mashStore.mashing">
                Reset!
            </button>
            <button tonal @click="mashStore.randomize()" class="mb-3" :disabled="mashStore.mashing">
                Randomise!
            </button>
        </div>

        <DiceRoller :numberOfDice="2" @rollComplete="mashStore.runGame($event)"></DiceRoller>

        <CategoryForm v-for="category of mashStore.nonMashCategories" :category="category" class="w-[100%]" />

        <button
            v-if="!mashStore.mashing && !mashStore.mashed"
            filled
            @click="mashStore.addCategory('')"
            :disabled="!mashStore.canAddMoreCategories"
            class="item-start"
        >
            Add a Category
        </button>
    </div>
</template>
