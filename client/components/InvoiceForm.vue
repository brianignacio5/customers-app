<template>
  <form action="">
    <b-field label="Order ID">
      <b-input v-model="invoice.orderId"></b-input>
    </b-field>
    <b-field label="Amount">
      <b-numberinput v-model="invoice.amount"></b-numberinput>
    </b-field>
    <b-field label="Customer">
      <b-select v-model="invoice.customer._id">
        <option
          v-for="customer in customers"
          :value="customer._id"
          :key="customer._id"
        >
          {{ customer.name }}
        </option>
      </b-select>
    </b-field>
    <b-field label="Invoice date">
      <b-datepicker
        v-model="invoiceDate"
        placeholder="Click to select..."
        icon="calendar-day"
        trap-focus
      >
      </b-datepicker>
    </b-field>
    <b-field label="Due date">
      <b-datepicker
        v-model="invoiceDueDate"
        placeholder="Click to select..."
        icon="calendar-day"
        trap-focus
      >
      </b-datepicker>
    </b-field>
    <b-field label="Status">
      <b-select placeholder="Select Order Status" v-model="invoice.status">
        <option value="Unpaid">Unpaid</option>
        <option value="Partially paid">Partially paid</option>
        <option value="Paid">Paid</option>
      </b-select>
    </b-field>
    <b-field label="Order Status">
      <b-input v-model="invoice.orderStatus"></b-input>
    </b-field>
  </form>
</template>

<script lang="ts">
import { Customer, Invoice } from "../store/types";
import { Component, Prop, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class InvoiceForm extends Vue {
  @Prop() invoice: Invoice;
  @State("customers") private storeCustomers: Customer[];

  get customers() {
    return this.storeCustomers;
  }

  get invoiceDate() {
    if (this.invoice.date) {
      return new Date(this.invoice.date);
    }
    return new Date();
  }
  set invoiceDate(val) {
    this.invoice.date = val;
  }

  get invoiceDueDate() {
    if (this.invoice.dueDate) {
      return new Date(this.invoice.dueDate);
    }
    return new Date();
  }
  set invoiceDueDate(val) {
    this.invoice.dueDate = val;
  }
}
</script>