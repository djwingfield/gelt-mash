<script setup lang="ts">
import { ref } from 'vue';
import { useMashStore } from '../../../stores/mash';
import Dice from './Dice.vue';

const mashStore = useMashStore();

const emit = defineEmits<{
    (e: 'rollComplete', values: number): void;
}>();
const { numberOfDice } = defineProps<{ numberOfDice: number }>();

const randomDiceValue = () => Math.floor(Math.random() * 6) + 1;

const diceValues = ref(Array.from({ length: numberOfDice }, randomDiceValue));
const rolling = ref(false);

const rollDice = () => {
    rolling.value = true;
    const rollDuration = 1000;
    const rollInterval = 100;

    const intervalId = setInterval(() => {
        diceValues.value = diceValues.value.map(() => Math.floor(Math.random() * 6) + 1);
    }, rollInterval);

    setTimeout(() => {
        clearInterval(intervalId);
        diceValues.value = diceValues.value.map(() => Math.floor(Math.random() * 6) + 1);
        const total = diceValues.value.reduce((acc, value) => acc + value, 0);
        emit('rollComplete', total);
        rolling.value = false;
    }, rollDuration);
};
</script>

<template>
    <div class="flex flex-col gap-2 items-center">
        <div class="flex gap-2">
            <Dice v-for="value of diceValues" :value="value"></Dice>
        </div>
        <button v-if="!mashStore.mashed" filled @click="rollDice" :disabled="rolling || mashStore.mashing">
            Roll
        </button>
        <button v-else filled @click="rollDice" :disabled="rolling || mashStore.mashing">Roll again!</button>
    </div>
</template>
