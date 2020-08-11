<template>
  <div v-if="ready">
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <h4 id="t1" class="text-themecolor">Patient's Info</h4>
          <h6 id="t2" class="text-themecolor" v-if="role === 'administrator'">
            <a  href="/administrator/patients">Patients</a> > Patient's Info
                     

          </h6>
          <h6 v-else id="t2" class="text-themecolor">
             <a  href="/doctor/patients">Patients</a> > Patient's Info
          </h6>
        </vs-card>
      </vs-col>
    </vs-row>
    <div class="centerx">
      <vs-row class="row">
        <vs-col class="col-md-4 col-xs-12">
          <vs-card class="card">
            <div class="user-bg">
              <img v-if="patient.imageName" width="100%" alt="user" :src="patient.imageName" />
              <img v-else width="100%" alt="user" src="@/assets/images/logo/patient.jpg" />
            </div>
            <div class="user-btm-box">
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-6 b-r">
                  <strong>Name</strong>
                  <p>{{ patient.fullName }}</p>
                </vs-col>
                <div class="col-md-6">
                  <strong>Occupation</strong>
                  <p>{{ patient.job }}</p>
                </div>
              </vs-row>
              <hr />
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-6 b-r">
                  <strong>Email ID</strong>
                  <p>{{ patient.email }}</p>
                </vs-col>
                <vs-col class="col-md-6">
                  <strong>Phone</strong>
                  <p>{{ patient.phoneNumber }}</p>
                </vs-col>
              </vs-row>
              <hr />
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-12">
                  <strong>Address</strong>
                  <p>{{ patient.address }}</p>
                </vs-col>
              </vs-row>
              <hr />
            </div>
          </vs-card>
        </vs-col>
        <vs-col class="col-md-8 col-xs-12">
          <vs-card>
            <h3>Personal Information:</h3>
            <div class="row">
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Full Name</strong>
                <br />
                <p class="text-muted">{{ patient.fullName }}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Mobile</strong>
                <br />
                <p class="text-muted">{{ patient.phoneNumber }}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Email</strong>
                <br />
                <p class="text-muted">{{ patient.email }}</p>
              </div>
            </div>
          </vs-card>
          <vs-card>
            <h3>History:</h3>
            <div class="table-responsive">
              <table class="table v-middle border">
                <thead>
                  <tr class>
                    <th class="border-top-0">Entry Date</th>
                    <th class="border-top-0">Exit Date</th>
                    <th class="border-top-0">Illness</th>
                    <th class="border-top-0">Operations</th>
                    <th class="border-top-0">Tests</th>
                    <th class="border-top-0">Doctor CIN</th>
                    <th class="border-top-0">Drugs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, index) in history" :key="index">
                    <!-- <td>{{index+1}}</td>  -->
                    <td>
                      <span v-if="!!data.entryDate">{{data.entryDate}}</span>
                      <span v-else>...</span>
                    </td>
                    <td>
                      <span v-if="!!data.exitDate">{{data.exitDate}}</span>
                      <span v-else>...</span>
                    </td>
                    <td>
                      <span v-if="!!data.illness">{{data.illness}}</span>
                      <span v-else>...</span>
                    </td>
                    <td>
                      <span v-if="!!data.operations">{{JSON.parse(data.operations)[0]}}</span>
                      <span v-else>...</span>
                    </td>
                    <td>
                      <span v-if="!!data.tests">{{JSON.parse(data.tests)[0]}}</span>
                      <span v-else>...</span>
                    </td>
                    <td>
                      <span v-if="!!data.doctorCIN">{{data.doctorCIN}}</span>
                      <span v-else>...</span>
                    </td>
                    <td>
                      <vs-select v-if="!!data.drugs" placeholder="Drugs" >
                        <vs-select-item  :text='dataa' v-for="(dataa,i) in JSON.parse(data.drugs)" :key="i"   :value="dataa"></vs-select-item>
                      </vs-select>
                    
                      <span v-else>...</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
          </vs-card>
          <vs-card>
            <h5>Records:</h5>
            <hr />
            <div class="row">
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Tests :</strong>
                <br />
                <!-- <p class="text-muted">{{ history.roomNumber }}</p> -->
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Operation:</strong>
                <br />
                <!-- <p class="text-muted">{{ history.illness }}</p> -->
              </div>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
​
<script>
import axios from "axios";
export default {
  name: "patientsMoreInfos",
  props: ["name"],
  data: () => {
    return {
      patient: {},
      history: [],
      ready: false,
      role: localStorage.role
    };
  },
  beforeMount: async function () {
    let user;
    if (localStorage.role === "administrator") {
      if (window.location.pathname.includes("current")) {
        user = window.location.pathname.slice(31);
      } else {
        user = window.location.pathname.slice(24);
      }
    } else {
      user = window.location.pathname.slice(17);
    }
    let patient = await axios.post(`/api/users/clinicX/patients/findPatients`, {
      CIN: user,
    });
    this.patient = patient.data[0];
    let history = await axios.post(`/api/users/clinicX/history`, {
      patientCIN: this.patient.CIN,
    });
    this.history = history.data;
    this.ready = true;
  },
};
</script>
<style>
#t1,
#t2 {
  width: 49%;
}
#t2 {
  float: right;
  text-align: right;
  margin-top: 0%;
  position: relative !important;
}
.flot-chart {
  display: block;
  height: 400px;
}
​ .flot-chart-content {
  width: 100%;
  height: 100%;
}
​ html body .jqstooltip,
html body .flotTip {
  width: auto !important;
  height: auto !important;
  background: #343a40;
  color: #fff;
  padding: 5px 10px;
}
​ body .jqstooltip {
  border-color: transparent;
  border-radius: 60px;
}
</style>
