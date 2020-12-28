<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        Send notice: {{ invoice.customer.name}} - {{ invoice.customer.disRef || "No disRef found" }}
      </p>
      <p class="subtitle">Due date: {{ invoiceDueDate }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";
import { Invoice } from "../store/types";

@Component
export default class InvoiceCard extends Vue {
  @Prop() invoice: Invoice;

  get invoiceDate() {
    if (this.invoice.date) {
      return moment(this.invoice.date.toString()).format("MMMM DD, YYYY");
    }
    return "";
  }
  get invoiceDueDate() {
    if (this.invoice.dueDate) {
      return moment(this.invoice.dueDate.toString()).format("MMMM DD, YYYY");
    }
    return "";
  }
}
</script>

<style lang="scss" scoped>
</style>