<script setup lang="ts">
import { IconName, library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, far);
defineProps<{ selected?: boolean; iconName: IconName }>();
</script>

<template>
    <FontAwesomeIcon v-bind="{ icon: { iconName, prefix: selected ? 'fas' : 'far' } }"></FontAwesomeIcon>
</template>
