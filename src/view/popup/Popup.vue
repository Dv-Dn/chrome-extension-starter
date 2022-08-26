<template>
  <main
    class="min-w-[250px] px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <h2>Popup page</h2>
    <p class="mt-2 opacity-50">This is the options page</p>

    <div>{{ counter }}</div>
    <button @click="increment">COUNTER</button>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";

let counter = ref(0);

function increment() {
  counter.value++;
}
</script>
