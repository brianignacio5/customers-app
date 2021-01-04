<template>
  <div>
    <section class="hero is-fullheight-with-navbar">
      <Navbar />
      <div class="hero-body">
        <div class="container">
          <div class="main-content columns is-fullheight">
            <div class="column is-12">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </div>
            <div class="column is-2">
              <SideMenu />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./components/CustomNavBar.vue";
import SideMenu from "./components/SideMenu.vue";

@Component({
  components: {
    Navbar,
    SideMenu,
  },
})
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
  margin: 1em;
  .level-left {
    width: 90%;
  }
}
.menu-list {
  a {
    color: #66788a;
  }
  a:hover {
    background-color: $primary;
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
