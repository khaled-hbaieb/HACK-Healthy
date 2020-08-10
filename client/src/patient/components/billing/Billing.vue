<template>
  <div v-if="ready">
    <vs-row>
      <vs-col>
        <vs-card>
          <h3>
            <b>INVOICE</b>
            <span class="pull-right">#5669626</span>
          </h3>
          <hr />
          <vs-row>
            <vs-col>
              <div class="pull-left">
                <address>
                  <h3>
                    &nbsp;
                    <b class="text-danger">Ibn Rochd Clinic</b>
                  </h3>
                  <p class="text-muted m-l-5">
                    E 104, Dharti-2,
                    <br />Nr' Viswakarma Temple,
                    <br />Talaja Road,
                    <br />Bhavnagar - 364002
                  </p>
                </address>
              </div>
              <div class="pull-right text-right">
                <address>
                  <h3>To,</h3>
                  <h4 class="font-bold">{{currentUser.fullName}}</h4>
                  <p class="text-muted m-l-30">
                    E 104, Dharti-2,
                    <br />Nr' Viswakarma Temple,
                    <br />Talaja Road,
                    <br />Bhavnagar - 364002
                  </p>
                  <p class="m-t-30">
                    <b>Invoice Date :</b>
                    <i class="fa fa-calendar"></i> 23rd Jan 2017
                  </p>
                  <p>
                    <b>Due Date :</b>
                    <i class="fa fa-calendar"></i> 25th Jan 2017
                  </p>
                </address>
              </div>
            </vs-col>
            <vs-col>
              <vs-col>
                <vs-table :data="bills">
                  <template slot="thead">
                    <vs-th>Email</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>website</vs-th>
                    <vs-th>Nro</vs-th>
                  </template>

                  <template slot-scope="{data}">
                    <vs-tr
                      :key="indextr"
                      v-for="(tr, indextr) in data"
                      :state="data[indextr].toPay ? 'success': 'danger'"
                    >
                      <vs-td :data="data[indextr].toPay">{{data[indextr].toPay}}</vs-td>
                      <vs-td :data="data[indextr].patientName">{{data[indextr].patientName}}</vs-td>
                      <vs-td :data="data[indextr].tests">{{data[indextr].tests}}</vs-td>
                      <vs-td :data="data[indextr].patientCIN">{{data[indextr].patientCIN}}</vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </vs-col>
            </vs-col>
            <vs-col>
              <div class="pull-right m-t-30 text-right">
                <p>Sub - Total amount: ${{subTotal}}</p>
                <p>vat (10%) : ${{tax}}</p>
                <hr />
                <h3>
                  <b>Total :</b>
                  ${{total}}
                </h3>
              </div>
              <div class="clearfix"></div>
              <hr />
              <div class="text-right">
                <vs-button
                  onclick="javascript:window.print();"
                  class="btn btn-danger"
                  type="button"
                >
                  <span>
                    <i class="fa fa-print"></i> Print
                  </span>
                </vs-button>
              </div>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import axios from "axios";
import UserService from "../../../services/user.service";
export default {
  data: () => {
    return {
      bills: null,
      subTotal: 0,
      currentx: 1,
      currentUser: null,
      tax: 0,
      ready: false,
      total: 0,
    };
  },
  computed: {},
  methods: {},
  async beforeMount() {
    let user = await UserService.getPatientBoard();
    this.currentUser = user;
    let receivedBills = await axios.post("/api/clinicX/bills/findBill", {
      patientCIN: this.currentUser.CIN,
    });
    this.bills = receivedBills.data;
    for (let i = 0; i < this.bills.length; i++) {
      this.subTotal += parseInt(this.bills[i].toPay);
    }
    this.tax = (this.subTotal * 10) / 100;
    this.total = this.subTotal + this.tax;
    var op = this.bills[0].operations.slice(0, 1);
    for (let i = 0; i < this.bills.length; i++) {
      this.bills[i].operations.toString();
    }
    console.log(this.bills);
    this.ready = true;
  },
};
</script>

<style>
</style>