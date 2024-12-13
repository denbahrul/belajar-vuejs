<script lang="ts">
export default {
  data() {
    return {
      name: "Nuwun sewu",
    };
  },
  methods: {
    showName() {
      console.log(this.name);
    },
  },
};
</script>

<template>
  <p>{{ name }}</p>
  <button @click="showName">Button</button>
</template>

<style></style>
