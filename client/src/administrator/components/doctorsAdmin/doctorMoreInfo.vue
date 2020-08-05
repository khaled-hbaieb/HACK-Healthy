<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <h4 id="t1" class="text-themecolor">Doctor's Info</h4>
          <h6 id="t2" class="text-themecolor">
            <a href="/administrator/doctors">Doctors</a> > Doctor's Info
          </h6>
        </vs-card>
      </vs-col>
    </vs-row>
    <div class="centerx">
      <vs-row class="row">
        <vs-col class="col-md-4 col-xs-12">
          <vs-card class="card">
            <div class="user-bg">
              <img width="100%" alt="user" :src="doctor.imageName" />
            </div>
            <div class="user-btm-box">
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-6 b-r">
                  <strong>Name</strong>
                  <p>{{doctor.fullName}}</p>
                </vs-col>
                <div class="col-md-6">
                  <strong>Speciality</strong>
                  <p>{{doctor.speciality}}</p>
                </div>
              </vs-row>
              <!-- /.row -->
              <hr />
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-6 b-r">
                  <strong>Email ID</strong>
                  <p>{{doctor.email}}</p>
                </vs-col>
                <vs-col class="col-md-6">
                  <strong>Phone</strong>
                  <p>{{doctor.phoneNumber}}</p>
                </vs-col>
              </vs-row>
              <!-- /.row -->
              <hr />
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-12">
                  <strong>Address</strong>
                  <p>{{doctor.address}}</p>
                </vs-col>
              </vs-row>
              <hr />
            </div>
          </vs-card>
        </vs-col>
        <vs-col class="col-md-8 col-xs-12">
          <vs-card>
            <h5>Personal Information:</h5>
            <div class="row">
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Full Name</strong>
                <br />
                <p class="text-muted">{{doctor.fullName}}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Mobile</strong>
                <br />
                <p class="text-muted">{{doctor.phoneNumber}}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Email</strong>
                <br />
                <p class="text-muted">{{doctor.email}}</p>
              </div>
            </div>
          </vs-card>
          <vs-card>
            <h5>History:</h5>
            <hr />
            <div class="row">
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Room :</strong>
                <br />
                <p class="text-muted">{{doctor.yearsOfExperience}}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>illness:</strong>
                <br />
                <p class="text-muted">{{doctor.educationBackground}}</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Drugs :</strong>
                <br />
                <p class="text-muted">{{doctor.dateOfBirth}}</p>
              </div>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
​
<script>
import axios from "axios";
import UserService from "../../../services/user.service";
export default {
  name: "DoctorMoreInfos",
  props: ["name"],
  data: () => {
    return {
      doctor: "",
      center: null,
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  methods: {
addMarker() {
      
        const marker = {
          lat: this.center.lat,
          lng: this.center.lng
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: this.center.lat,
          lng: this.center.lng
        };
        console.log('center',this.center)
      });
    },
  },
  beforeMount: async function () {
    let user = window.location.pathname.slice(23);
    let doctor = await axios.post(`/api/users/clinicX/doctors/getDoctor`, {
      CIN: user,
    });
    this.doctor = doctor.data[0];
    console.log('doctor',this.doctor)
      this.center = {lat: this.doctor.marker.lat, lng: this.doctor.marker.lng}
      console.log(this.center)
      this.geolocate()
      this.addMarker()
    
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
