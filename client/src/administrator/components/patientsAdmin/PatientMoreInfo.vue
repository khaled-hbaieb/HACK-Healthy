<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <h4 id="t1" class="text-themecolor">Patient's Info</h4>
          <h6 id="t2" class="text-themecolor">
            <a href="/administrator/patients">Patients</a> > Patient's Info
          </h6>
        </vs-card>
      </vs-col>
    </vs-row>
    <div class="centerx">
      <vs-row class="row">
        <vs-col class="col-md-4 col-xs-12">
          <vs-card class="card">
            <div class="user-bg">
              <img width="100%" alt="user" :src="patient.imageName" />
            </div>
            <div class="user-btm-box">
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-6 b-r">
                  <strong>Name</strong>
                  <p>{{patient.fullName}}</p>
                </vs-col>
                <div class="col-md-6">
                  <strong>Occupation</strong>
                  <p>{{patient.job}}</p>
                </div>
              </vs-row>
              <!-- /.row -->
              <hr />
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-6 b-r">
                  <strong>Email ID</strong>
                  <p>{{patient.email}}</p>
                </vs-col>
                <vs-col class="col-md-6">
                  <strong>Phone</strong>
                  <p>{{patient.phoneNumber}}</p>
                </vs-col>
              </vs-row>
              <!-- /.row -->
              <hr />
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-12">
                  <strong>Address</strong>
                  <p>{{patient.address}}</p>
                </vs-col>
              </vs-row>
              <hr />
              <!-- /.row -->
              <!-- <vs-row class="row">
                <vs-col class="col-md-4 col-sm-4 text-center">
                  <p class="text-purple">
                    <i class="ti-facebook"></i>
                  </p>
                  <h1>258</h1>
                </vs-col>
                <div class="col-md-4 col-sm-4 text-center">
                  <p class="text-info">
                    <i class="ti-twitter"></i>
                  </p>
                  <h1>125</h1>
                </div>
                <div class="col-md-4 col-sm-4 text-center">
                  <p class="text-danger">
                    <i class="ti-google"></i>
                  </p>
                  <h1>140</h1>
                </div>
              </vs-row>-->
            </div>
          </vs-card>
        </vs-col>
        <div class="col-md-8 col-xs-12">
          <vs-card>
            <h5>Personal Information:</h5>
            <div class="row">
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Full Name</strong>
                <br />
                <p class="text-muted">{{patient.fullName}}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Mobile</strong>
                <br />
                <p class="text-muted">{{patient.phoneNumber}}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Email</strong>
                <br />
                <p class="text-muted">{{patient.email}}</p>
              </div>
            </div>
            <hr />
            <h5>History:</h5>
            <hr />
            <div class="row">
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Room :</strong>
                <br />
                <p class="text-muted">{{history.roomNumber}}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>illness</strong>
                <br />
                <p class="text-muted">{{history.illness}}</p>
              </div>
            </div>
          </vs-card>
        </div>
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
      patient: "",
      history: "",
    };
  },
  beforeMount: async function () {
    let user = window.location.pathname.slice(24);
    let patient = await axios.post(`/api/users/clinicX/patients`, {
      CIN: user,
    });
    this.patient = patient.data[0];
    let history = await axios.post(`/api/users/clinicX/history`, {
      patientCIN: user,
    });
    this.history = history.data[0];
    console.log(this.history);
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
