<script setup lang="ts">
const { value } = defineProps<{ value: 1 | 2 | 3 | 4 | 5 | 6 }>();
</script>

<template>
    <div
        class="w-16 h-16 bg-gray-200 border-gray-500 border rounded-lg grid grid-cols-3 grid-rows-3 gap-[2px] p-2"
    >
        <div>
            <div v-if="[2, 3, 4, 5, 6].includes(value)" class="pip"></div>
        </div>
        <div></div>
        <div>
            <div v-if="[4, 5, 6].includes(value)" class="pip"></div>
        </div>
        <div>
            <div v-if="[6].includes(value)" class="pip"></div>
        </div>
        <div>
            <div v-if="[1, 3, 5].includes(value)" class="pip"></div>
        </div>
        <div>
            <div v-if="[6].includes(value)" class="pip"></div>
        </div>
        <div>
            <div v-if="[4, 5, 6].includes(value)" class="pip"></div>
        </div>
        <div></div>
        <div>
            <div v-if="[2, 3, 4, 5, 6].includes(value)" class="pip"></div>
        </div>
    </div>
</template>

<style scoped>
.pip {
    @apply size-[100%] bg-gray-500 rounded-full;
}
</style>
