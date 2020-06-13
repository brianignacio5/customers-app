<template>
  <div class="main">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default class App extends Vue {
  private msg = "Hello";
}
</script>

<style></style>
