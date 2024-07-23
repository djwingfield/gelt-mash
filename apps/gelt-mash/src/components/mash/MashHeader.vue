<script setup lang="ts">
import { computed } from 'vue';
import { useMashStore } from '../../stores/mash';

const mashStore = useMashStore();

const options = computed(() => mashStore.mashCategory?.options || []);
</script>

<template>
    <div class="flex gap-10">
        <div
            v-for="option in options"
            :key="option.id"
            :class="{
                relative: true,
                'opacity-50': option.removed,
                'animate-strike-through': option.removed,
            }"
            class="flex gap-1 justify-center items-center transition-all duration-500"
        >
            <div class="text-9xl">
                {{ option.name[0] }}
            </div>
            <div>
                {{ option.name.substring(1) }}
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes strike-through-animation {
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
}

.animate-strike-through {
    animation: strike-through-animation 0.5s ease forwards;
}
</style>
