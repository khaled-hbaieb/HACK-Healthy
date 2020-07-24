<template>
  <div>
    <vs-card>
      <vs-row class="row page-titles">
        <vs-col class="col-md-5 align-self-center">
          <h4 class="text-themecolor">Patients</h4>
        </vs-col>
        <vs-col class="col-md-7 align-self-center text-right">
          <div class="d-flex justify-content-end align-items-center">
            <vs-button
              @click="renderCreatePatient"
              type="button"
              class="btn btn-info d-lg-block"
            >
              <vs-icon
                icon="add_circle_outline"
                id="patient-icon"
                round
              ></vs-icon
              >Create New Patient
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-card>
      <vs-row>
        <vs-col vs-sm="6" vs-lg="7"></vs-col>
        <vs-col vs-sm="4" vs-xs="9" vs-lg="3">
          <vs-input
            icon-after="true"
            icon="search"
            class="text-muted"
            label-placeholder="Search Here By Name/CIN"
            v-model="search"
          />
        </vs-col>
        <vs-col vs-sm="2" vs-xs="3" vs-lg="2">
          <vs-button
            size="33px"
            id="search-patient-button"
            color="dark"
            type="border"
            >Search</vs-button
          >
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-row class="row el-element-overlay">
      <vs-col
        v-for="(patient, index) in patients"
        :key="index"
        vs-xs="12"
        vs-sm="6"
        vs-lg="3"
      >
        <vs-card
          vs-xs="12"
          vs-sm="12"
          vs-lg="12"
          id="profile"
          actionable
          class="cardx"
        >
          <div slot="media">
              <img
                @click="rendershowPatientInfo"
                id="patient-profile-image"
                :src="patient.image"
                alt="user"
              />
          </div>

          <div id="footer" slot="footer">
            <h3 class="box-title">{{ patient.fullName }}</h3>
            <small>Job: {{ patient.job }}</small>
            <br />
            <small>Date Of Birth: {{ patient.dateOfBirth }}</small>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "patientsList",
  data: () => ({
    title: "Patients",
    search: "",
    patients: [],
    colorx: "#4a5153",
    popupActivo5: false,
    // popupActivo5:false,
  }),
  methods: {
    renderCreatePatient() {
      this.$router.push("patients/createAPatient");
    },
    rendershowPatientInfo(){
      this.$router.push("patients/PatientMoreInfos")
    }
  },
  beforeMount: async function() {
    let patients = await axios.post("/api/users/clinicX/patients");
    this.patients = patients.data;
  },
};
</script>
<style>
.row {
  margin-left: 0% !important;
  padding: 0 !important;
}
#patient-icon {
  margin-right: 10px !important;
}
#search-patient-button {
  width: 100% !important;
  margin-top: 16.5px !important;
}
#patient-profile-image {
  width: 100% !important;
  height: 400px !important;
}
#icon {
  position: relative !important;
}
#footer {
  height: 160px;
}
.text-muted {
  width: 100% !important;
}
.col-lg-3 {
  max-width: 100% !important;
  /* width: 25% !important; */
}
</style>
