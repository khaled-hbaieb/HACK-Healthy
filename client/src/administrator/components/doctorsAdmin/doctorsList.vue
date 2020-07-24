<template>
  <div>
    <vs-card>
      <vs-row class="row page-titles">
        <vs-col class="col-md-5 align-self-center">
          <h4 class="text-themecolor">Doctors</h4>
        </vs-col>
        <vs-col class="col-md-7 align-self-center text-right">
          <div class="d-flex justify-content-end align-items-center">
            <vs-button
              @click="renderCreateDoctor"
              type="button"
              class="btn btn-info d-block d-lg-block"
            >
              <vs-icon
                icon="add_circle_outline"
                id="doctor-icon"
                round
              ></vs-icon
              >Create New Doctor
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-card>
      <vs-row>
        <vs-col vs-sm="6" vs-lg="7">
          <div></div>
        </vs-col>
        <vs-col vs-sm="4" vs-xs="9" vs-lg="3">
          <vs-input
            icon-after="true"
            icon="search"
            class="text-muted"
            label-placeholder="Search Here By Name/CIN"
          />
        </vs-col>
        <vs-col vs-sm="2" vs-xs="3" vs-lg="2">
          <vs-button
            size="33px"
            id="search-doctor-button"
            color="dark"
            type="border"
            >Search</vs-button
          >
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-row class="row">
      <vs-col
        v-for="(doctor, index) in doctors"
        :key="index"
        id="yess"
        vs-xs="12"
        vs-sm="6"
        vs-lg="4"
      >
        <vs-card id="profile" class="card" vs-xs="12" vs-sm="12" vs-lg="12">
          <vs-row class="row">
            <vs-col vs-xs="6" vs-sm="8" vs-lg="6">
              <a href="/doctors/doctor">
                <img
                  id="doctor-profile-image"
                  :src="require('@/assets/images/users/houssem.jpg')"
                  alt="user"
                  class="img-circle img-responsive"
                />
              </a>
            </vs-col>
            <vs-col vs-xs="6" vs-sm="4" vs-lg="6">
              <h5 class="card-title m-b-0">{{ doctor.fullName }}</h5>
              <small>{{ doctor.speciality }}</small>
              <address>
                {{ doctor.address }}
                <br />
                <br />
                <abbr title="Phone">Phone:</abbr> (+216)
                {{ doctor.phoneNumber }}
              </address>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "doctorsList",
  data: () => ({
    title: "Doctors",
    doctors: [],
  }),
  methods: {
    renderCreateDoctor() {
      this.$router.push("/doctors/createDoctor");
    },
  },
  beforeMount: async function() {
    let doctors = await axios.post("/api/users/clinicX/doctors", {});
    this.doctors = doctors.data;
  },
};
</script>
<style>
.row {
  margin-left: 0% !important;
  padding: 0 !important;
}
#doctor-icon {
  margin-right: 10px !important;
}
#doctor-profile-image {
  width: 100% !important;
  height: 100% !important;
  border-radius: 100%;
}
#search-doctor-button {
  width: 100% !important;
  margin-top: 16.5px !important;
}
.text-muted {
  width: 100% !important;
}
#profile {
  float: left !important;
}
</style>
