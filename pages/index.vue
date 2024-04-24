<script setup lang="ts">
const store = useMyStore();

const date = computed(() => store.date);
</script>
<template>
  <div>
    <p>Current date is: {{ date.toISOString() }}</p>
  </div>
</template>
