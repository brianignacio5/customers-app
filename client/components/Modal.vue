<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <div class="modal-card-title">
          {{ title }}
        </div>
        <button
          class="delete"
          aria-label="close"
          @click="toggleActive"
        ></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop() title: string;
  @Prop() isActive: boolean;

  @Emit("toggleActive")
  toggleActive() {}
}
</script>