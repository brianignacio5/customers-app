<template>
  <tr>
    <td>
      <p>{{ invoice.orderId }}</p>
    </td>
    <td>
      <p>{{ invoice.customer ? invoice.customer.name : "" }}</p>
    </td>
    <td>
      <p>{{ invoiceDate }}</p>
    </td>
    <td>
      <p :class="paidStatus">{{ invoice.status }}</p>
    </td>
    <td>
      <b-icon icon="pen" @click.native="edit"></b-icon>
      <b-icon icon="trash" @click.native="del"></b-icon>
    </td>
  </tr>
</template>

<script lang="ts">
import moment from "moment";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Invoice } from "../store/types";
import { Action } from "vuex-class";

@Component
export default class InvoiceRow extends Vue {
  @Action deleteInvoices: (id: string) => Promise<void>;
  @Prop() invoice: Invoice;

  get paidStatus() {
    let paidStatus: string;
    if (!this.invoice || !this.invoice.status) {
      return "unpaid";
    }
    return this.invoice.status.indexOf("Paid") !== -1
      ? "paid"
      : this.invoice.status.indexOf("Partially paid") !== -1
      ? "partial"
      : "unpaid";
  }

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

  @Emit()
  edit() {}

  @Emit()
  del() {
    this.deleteInvoices(this.invoice._id);
  }
}
</script>

<style lang="scss" scoped>
.paid {
  color: green;
}
.unpaid {
  color: red;
}
.partial {
  color: #e0a605;
}
</style>