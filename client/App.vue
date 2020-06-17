<template>
  <div class="main">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private msg = "Hello";
}
</script>

<style></style>
