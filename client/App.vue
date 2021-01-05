<template>
  <div>
    <Navbar />
    <div class="section">
      <div class="level">
        <div class="level-left">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        <div class="level-right">
          <SideMenu />
        </div>
      </div>
    </div>
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

.level-left {
  width: 85%;
}
.menu-list {
  a {
    color: #66788a;
  }
  a:hover {
    background-color: $primary;
  }
}

.create .icon:hover,
.invoice-row .icon:hover {
  color: $primary;
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
