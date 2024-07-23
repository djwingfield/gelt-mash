<script setup lang="ts">
import { useMashStore } from '../../stores/mash';
import DiceRoller from '../dice/DiceRoller.vue';
import CategoryForm from './CategoryForm.vue';
const mashStore = useMashStore();
</script>

<template>
    <button tonal @click="mashStore.reset()" class="mb-3">Reset!</button>
    <button tonal @click="mashStore.randomize()" class="mb-3">Randomise!</button>
    <button tonal @click="mashStore.runGame(4)" class="mb-3">Run Game!</button>
    <div class="grid grid-cols-3 gap-6 card">
        <CategoryForm v-for="category of mashStore.categories" :category="category" />
        <button
            class="self-start"
            filled
            @click="mashStore.addCategory('')"
            :disabled="!mashStore.canAddMoreCategories"
        >
            Add a Category
        </button>
    </div>
    <DiceRoller :numberOfDice="2" @rollComplete="mashStore.runGame($event)"></DiceRoller>
</template>
