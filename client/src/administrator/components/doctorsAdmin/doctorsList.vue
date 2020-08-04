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
              v-if="administrator"
              @click="renderCreateDoctor"
              type="button"
              class="btn btn-info d-block d-lg-block"
            >
              <vs-icon icon="add_circle_outline" id="doctor-icon" round></vs-icon>Create New Doctor
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-card>
      <vs-row>
        <vs-col vs-sm="6" vs-lg="5">
          <div></div>
        </vs-col>
        <vs-col v-if="!withSpeciality" vs-sm="4" vs-xs="9" vs-lg="3">
          <vs-input
            id="search-by-name"
            icon-after="true"
            icon="search"
            class="text-muted"
            label-placeholder="Search Here By Name"
            v-model="searchCriteria"
          />
        </vs-col>
        <vs-col v-if="!withSpeciality" vs-sm="2" vs-xs="3" vs-lg="2">
          <vs-button
            size="33px"
            id="search-doctor-button"
            color="dark"
            type="border"
            @click="searchDoctors({ fullName: searchCriteria })"
          >Search</vs-button>
        </vs-col>
        <vs-col v-if="!withSpeciality" vs-lg="2">
          <vs-button
            size="33px"
            id="search-doctor-button"
            color="dark"
            type="border"
            @click="filterSpeciality"
          >Filter By Speciality</vs-button>
        </vs-col>
        <vs-col v-if="withSpeciality" vs-lg="5">
          <vs-select
            placeholder="Select The Speciality"
            v-model="searchCriteria"
            id="speciality-select"
            @change="searchDoctors({ speciality: searchCriteria })"
          >
            <vs-select-item @click="searchDoctors({})" text="Search All"></vs-select-item>
            <vs-select-item
              v-for="(oneSpeciality, index) in specialities"
              :text="oneSpeciality"
              :value="oneSpeciality"
              :key="index"
            ></vs-select-item>
          </vs-select>
        </vs-col>
        <vs-col v-if="withSpeciality" vs-lg="2">
          <vs-button
            size="33px"
            id="search-doctor-button"
            color="dark"
            type="border"
            @click="filterName"
          >Filter By Name</vs-button>
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
            <vs-col vs-xs="6" vs-sm="8" vs-lg="4">
              <img
                @click="rendershowDoctorInfo(doctor.CIN)"
                id="doctor-profile-image"
                :src="doctor.imageName"
                alt="user"
                class="img-circle img-responsive"
              />
            </vs-col>
            <vs-col vs-xs="6" vs-sm="4" vs-lg="8">
              <vs-col vs-lg="5">
                <h5 class="card-title m-b-0">{{ doctor.fullName }}</h5>
                <small>{{ doctor.speciality }}</small>
                <address>
                  {{ doctor.address }}
                  <br />
                  <br />
                  <abbr title="Phone">Phone:</abbr>
                  (+216)
                  {{ doctor.phoneNumber }}
                </address>
              </vs-col>
              <vs-col vs-lg="7">
                <img
                  id="doctor-profile-image"
                  :src="require('@/assets/images/background/doctors2.jpg')"
                  alt="logo"
                  class="img-circle img-responsive"
                />
              </vs-col>
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
    withSpeciality: false,
    searchCriteria: "",
    speciality: "",
    specialities: [
      "ALLERGY & IMMUNOLOGY",
      "ANESTHESIOLOGY",
      "DERMATOLOGY",
      "DIAGNOSTIC RADIOLOGY",
      "EMERGENCY MEDICINE",
      "FAMILY MEDICINE",
      "INTERNAL MEDICINE",
      "MEDICAL GENETICS",
      "NEUROLOGY",
      "NUCLEAR MEDICINE",
      "OBSTETRICS AND GYNECOLOGY",
      "OPHTHALMOLOGY",
      "PATHOLOGY",
      "PEDIATRICS",
      "PHYSICAL MEDICINE & REHABILITATION",
      "PREVENTIVE MEDICINE",
      "PSYCHIATRY",
      "RADIATION ONCOLOGY",
      "SURGERY",
      "UROLOGY",
    ],
    administrator: localStorage.role === "administrator",
  }),
  methods: {
    filterSpeciality() {
      this.withSpeciality = true;
      this.searchCriteria = "";
      this.searchDoctors({});
    },
    filterName() {
      this.withSpeciality = false;
      this.searchCriteria = "";
      this.searchDoctors({});
    },
    async searchDoctors(criteria) {
      let doctors = await axios.post(
        `/api/users/clinicX/doctors/searchDoctors`,
        criteria
      );
      this.doctors = doctors.data;
    },
    renderCreateDoctor() {
      this.$router.push("/administrator/doctors/createDoctor");
    },
    rendershowDoctorInfo(args) {
      this.$router.push(`/administrator/doctors/${args}`);
    },
  },
  beforeMount: async function () {
    let doctors = await axios.get(`/api/users/clinicX/doctors`);
    this.doctors = doctors.data;
  },
};
</script>
<style>
#speciality-select {
  width: 100%;
  margin-top: 8.5px !important;
}
.row {
  margin-left: 0% !important;
  padding: 0 !important;
}
#doctor-icon {
  margin-right: 10px !important;
}
#doctor-profile-image {
  width: 100% !important;
  height: 180px !important;
  border-radius: 100%;
  background-color: transparent;
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
