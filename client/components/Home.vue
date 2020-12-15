<template>
  <section class="section home">
    <div class="container">
      <h1 class="title is-1">Hello, {{customerName}}</h1>
      <h2 class="subtitle is-5">Let's get to work! Here's what we need today.</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private customerName = "Customer";
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #fff;
  width: 100%;
  border-radius: 38px 0px 0px 38px;
  margin: auto;
  padding: 1%;

  .title {
    color: #007d92;
  }
}
</style>