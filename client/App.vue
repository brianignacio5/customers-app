<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="level">
        <div class="level-left">
          <b-menu>
            <h1 class="title">LOGO</h1>
            <b-menu-list>
              <b-menu-item icon="home" label="Home"></b-menu-item>
              <b-menu-item icon="user" label="Clients"></b-menu-item>
              <b-menu-item icon="question-circle" label="Billing"></b-menu-item>
              <b-menu-item icon="box" label="Products"></b-menu-item>
              <b-menu-item icon="money-bill" label="Inquiries"></b-menu-item>
              <b-menu-item icon="ship" label="Orders"></b-menu-item>
              <b-menu-item icon="cog" label="Settings"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
        <div class="level-right">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
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

<style lang="scss">
@import "./style";

#main-app {
  top: 50%;
  height: 50%;
  margin: auto;
}

.level {
  width: 100%;
  .level-right {
    width: 90%;
  }
}
.menu-list {
  a {
    color: $white;
  }
  a:hover {
    background-color: #26b5ce;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
