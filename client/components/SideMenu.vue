<template>
  <b-menu>
    <figure class="image">
      <img src="../assets/logo.png" alt="logo" />
    </figure>
    <b-menu-list label="Menu">
      <b-menu-item icon="home" label="Dashboard"></b-menu-item>
      <b-menu-item icon="user" label="Customers"></b-menu-item>
      <b-menu-item icon="money-bill" label="Billing"></b-menu-item>
      <b-menu-item icon="ship" label="Orders"></b-menu-item>
      <b-menu-item icon="box" label="Products"></b-menu-item>
      <b-menu-item icon="cog" label="Settings"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Support">
      <b-menu-item icon="question-circle" label="Support"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SideMenu extends Vue {
  private msg = "hello";
}
</script>

<style lang="scss" scoped>
@import "../style";
.menu {
  background-color: $white;
  padding: 1em;
}
.menu-list li {
  margin: 17px;
}
</style>