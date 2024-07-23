<script setup lang="ts">
import { ref } from 'vue';
import Dice from './Dice.vue';

const emit = defineEmits<{
    (e: 'rollComplete', values: number): void;
}>();
const { numberOfDice } = defineProps<{ numberOfDice: number }>();

const randomDiceValue = () => Math.floor(Math.random() * 6) + 1;

const diceValues = ref(Array.from({ length: numberOfDice }, randomDiceValue));

const rollDice = () => {
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
    }, rollDuration);
};
</script>

<template>
    <div class="flex flex-col gap-2 items-center">
        <div class="flex gap-2">
            <Dice v-for="value of diceValues" :value="value"></Dice>
        </div>
        <button filled @click="rollDice">Roll</button>
    </div>
</template>
