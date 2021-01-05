<template>
  <section class="section home">
    <h1 class="title">Hello, {{ customerName }}</h1>
    <h2 class="subtitle">
      The journey of a thousand miles begins with one step.
    </h2>

    <Modal
      :isActive="isInvoiceModalActive"
      :title="selectedInvoice._id"
      @toggleActive="toggleInvoiceModal"
      @save="updateInvoice"
    >
      <InvoiceForm :invoice="selectedInvoice" />
    </Modal>

    <div class="level">
      <div class="level-left"></div>
      <div class="level-right create">
        <b-icon icon="plus" @click.native="createInvoice" /> 
        <span class="has-text-primary">ADD NEW</span>
      </div>
    </div>

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
        <InvoiceRow
          :invoice="invoice"
          :key="i"
          v-for="(invoice, i) of invoices"
          class="invoice-row"
          @del="deleteInvoice(i)"
          @edit="editInvoice(invoice)"
        />
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { Invoice } from "../store/types";
import { Component, Vue } from "vue-property-decorator";
import { Action, Mutation, State } from "vuex-class";
import InvoiceCard from "./InvoiceCard.vue";
import InvoiceForm from "./InvoiceForm.vue";
import InvoiceRow from "./InvoiceRow.vue";
import Modal from "./Modal.vue";

@Component({
  components: {
    InvoiceCard,
    InvoiceForm,
    InvoiceRow,
    Modal,
  },
})
export default class Home extends Vue {
  private customerName = "Customer";
  private isInvoiceModalActive = false;
  @Action private getInvoices: () => void;
  @Action private updateInvoice: (invoice: Invoice) => void;
  @Action private getCustomers: () => void;
  @Mutation private deleteInvoice: () => void;
  @Mutation setSelectedInvoice: (invoice: Invoice) => void;
  @State("invoices") private storeInvoices: Invoice[];
  @State("selectedInvoice") private storeSelectedInvoice: Invoice;

  get invoices() {
    return this.storeInvoices;
  }
  get selectedInvoice() {
    return this.storeSelectedInvoice;
  }
  set selectedInvoice(invoice: Invoice) {
    this.setSelectedInvoice(invoice);
  }
  mounted() {
    this.getInvoices();
    this.getCustomers();
  }

  toggleInvoiceModal() {
    if (this.isInvoiceModalActive) {
      this.updateInvoice(this.selectedInvoice);
    }
    this.isInvoiceModalActive = !this.isInvoiceModalActive;
  }

  editInvoice(invoice: Invoice) {
    this.isInvoiceModalActive = true;
    this.selectedInvoice = invoice;
  }

  createInvoice() {
    this.isInvoiceModalActive = true;
    this.selectedInvoice = {
      _id: undefined,
      amount: 0,
      customer: {
        _id: "",
        address: "",
        city: "",
        country: "",
        disRef: "",
        email: "",
        name: "",
        notes: "",
        payment: "",
        telephone: 1111111,
        type: "",
        zip: 559,
      },
      date: new Date(),
      dueDate: new Date(),
      status: "Unpaid",
      orderId: "",
      orderStatus: "",
    };
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

  .invoice-row:hover {
    margin: 1em 0 1em 0;
    border-left: 1px solid #007d92;
  }
}
</style>