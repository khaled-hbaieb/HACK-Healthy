<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <h4 id="t1" class="text-themecolor">Make A Bill</h4>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-col class="col-md-7 align-self-center text-right"></vs-col>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card class="card">
          <h5 class="card-title">Payment Information</h5>
          <form class="form-material form-horizontal">
            <label class="col-md-12" for="example-text">Patient CIN</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="number"
              id="example-text"
              name="example-text"
              placeholder="Patient CIN"
            />
            <label class="col-md-12" for="paydate">Doctor CIN</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="text"
              id="paydate"
              name="paydate"
              placeholder="Doctor CIN"
            />
            <label class="col-md-12" for="pname">Patient Name</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="text"
              id="pname"
              name="pname"
              placeholder="Patient Name"
            />
            <label class="col-md-12" for="dname">Doctor Name</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="text"
              id="dname"
              name="dname"
              placeholder="Doctor Name"
            />

            <label class="col-md-12" for="toamt">Entry Date</label>

            <vs-input class="make-bill-admin-inputs" type="date" id="toamt" name="toamt" />

            <label class="col-md-12" for="toamt">Exit Date</label>

            <vs-input
              class="make-bill-admin-inputs"
              type="date"
              id="toamt"
              name="toamt"
              data-mask="99.99%"
            />
            <label class="col-md-12" for="tests">Tests</label>

            <vs-input
              v-for="(input,index) in testsInputs"
              :key="index"
              :id="input.id"
              :type="input.type"
              :name="input.name"
              :class="input.class"
              :placeholder="input.placeholder"
            />
            <vs-button
              color="dark"
              type="line"
              icon="add"
              id="vaccination-button"
              @click="addTestsInput"
            >Add Test Input</vs-button>
            <br />
            <br />
            <br />
            <label class="col-md-12" for="operations">Operations</label>

            <vs-input
              v-for="(input,index) in operationsInputs"
              :key="index+50"
              :id="input.id"
              :type="input.type"
              :name="input.name"
              :class="input.class"
              :placeholder="input.placeholder"
            />
            <vs-button
              color="dark"
              type="line"
              icon="add"
              id="vaccination-button"
              @click="addOperationsInput"
            >Add Operation Input</vs-button>
            <br />
            <br />
            <br />
            <label class="col-md-12" for="drugs">Drugs</label>

            <vs-input
              v-for="(input,index) in drugsInputs"
              :key="index+100"
              :id="input.id"
              :type="input.type"
              :name="input.name"
              :class="input.class"
              :placeholder="input.placeholder"
            />
            <vs-button
              color="dark"
              type="line"
              icon="add"
              id="vaccination-button"
              @click="addDrugsInput"
            >Add Drug Input</vs-button>
            <br />
            <br />
            <br />

            <label class="col-md-12" for="fiamt">Final Amount</label>

            <vs-input class="make-bill-admin-inputs" type="number" id="fiamt" name="fiamt" />

            <label class="col-sm-12">Payment Method</label>
            <vs-select
              placeholder="Select The Payment Method"
              v-model="method"
              :success="method !== ''"
              success-text="Thank You For Selecting The Payment Method"
              class="select"
            >
              <vs-select-item text="Cash"></vs-select-item>
              <vs-select-item text="Cheque"></vs-select-item>
              <vs-select-item text="Credit Card"></vs-select-item>
              <vs-select-item text="Debit Card"></vs-select-item>
              <vs-select-item text="Netbanking"></vs-select-item>
              <vs-select-item text="Insurance"></vs-select-item>
            </vs-select>
            <label class="col-sm-12">Payment Status</label>
            <vs-select
              placeholder="Select The Payment Status"
              v-model="status"
              :success="status !== ''"
              success-text="Thank You For The Payment Status"
              class="select"
            >
              <vs-select-item text="Paid" value="Paid"></vs-select-item>
              <vs-select-item text="Pending" value="Pending"></vs-select-item>
            </vs-select>
            <div id="button-admin-bill-container">
              <vs-button type="submit" class="btn btn-inverse waves-effect waves-light">Cancel</vs-button>
              <vs-button type="submit" class="btn btn-info waves-effect waves-light m-r-10">Submit</vs-button>
            </div>
          </form>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "makeABill",
  data: () => ({
    title: "Checkbox",
    status: "",
    method: "",
    testsInputs: [
      {
        id: "test",
        type: "text",
        name: "tests",
        placeholder: "Enter The Test",
        class: "make-bill-admin-inputs"
      }
    ],
    operationsInputs: [
      {
        id: "operation",
        type: "text",
        name: "operations",
        placeholder: "Enter The Operation",
        class: "make-bill-admin-inputs"
      }
    ],
    drugsInputs: [
      {
        id: "drug",
        type: "text",
        name: "drugs",
        placeholder: "Enter The Drug",
        class: "make-bill-admin-inputs"
      }
    ]
  }),
  methods: {
    addTestsInput() {
      this.testsInputs.push({
        id: "test",
        type: "text",
        name: "tests",
        placeholder: "Enter The Test",
        class: "make-bill-admin-inputs"
      });
    },
    addOperationsInput() {
      this.operationsInputs.push({
        id: "operation",
        type: "text",
        name: "operations",
        placeholder: "Enter The Operation",
        class: "make-bill-admin-inputs"
      });
    },
    addDrugsInput() {
      this.drugsInputs.push({
        id: "drug",
        type: "text",
        name: "drugs",
        placeholder: "Enter The Drug",
        class: "make-bill-admin-inputs"
      });
    }
  }
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#test,
#operation,
#drug {
  margin-bottom: 20px;
  width: 100% !important;
}
.make-bill-admin-inputs {
  width: 100% !important;
}
#button-admin-bill-container {
  margin-top: 15px;
  float: right;
}
.select {
  width: 100%;
}
</style>

