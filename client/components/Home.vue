<template>
  <section class="section home">
    <h1 class="title is-1">Hello, {{ customerName }}</h1>
    <h2 class="subtitle is-5">Let's get to work! Here's what we need today.</h2>
    <div class="card-list">
      <InvoiceCard
        class="invoice-card"
        :invoice="invoice"
        :key="invoice._id"
        v-for="invoice in invoices"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Invoice } from "../store/types";
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import InvoiceCard from "./InvoiceCard.vue";

@Component({
  components: {
    InvoiceCard,
  },
})
export default class Home extends Vue {
  private customerName = "Customer";
  @Action private getInvoices: () => void;
  @State("invoices") private storeInvoices: Invoice[];

  get invoices() {
    return this.storeInvoices;
  }
  mounted() {
    this.getInvoices();
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #fff;
  width: 100%;
  border-radius: 38px 0px 0px 38px;
  margin: auto;
  padding: 5em;

  .title {
    color: #007d92;
  }

  .card-list {
    padding: 0.1em;
  }

  .invoice-card {
    margin: 1em 0 1em 0;
    border-left: 1px solid #007d92;
  }
}
</style>