<script setup lang="ts">
const name = "Hello, my name is bahrul";
const showName = () => console.log(name);
</script>

<template>
  <p>{{ name }}</p>
  <button @click="showName">Button</button>
</template>

<style></style>
