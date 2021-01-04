<template>
  <section class="section home">
    <h1 class="title">Hello, {{ customerName }}</h1>
    <h2 class="subtitle">The journey of a thousand miles begins with one step.</h2>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>OrderID</th>
          <th>Customer</th>
          <th>Invoice Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice._id">
          <td><p>{{invoice._id}}</p></td>
          <td><p>{{invoice.customer ? invoice.customer.name : ""}}</p></td>
          <td><p>{{invoice.date}}</p></td>
          <td><p>{{invoice.status}}</p></td>
          <td>Actions</td>
        </tr>
      </tbody>
    </table>
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

  .card-list {
    box-shadow: 0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15);
  }

  .invoice-card {
    margin: 1em 0 1em 0;
    border-left: 1px solid #007d92;
  }
}
</style>