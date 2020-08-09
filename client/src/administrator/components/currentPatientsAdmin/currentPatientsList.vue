<template>
  <vs-row v-if="ready" vs-lg="6" class="row page-titles">
    <vs-card>
      <vs-row>
        <vs-col class="col-md-5 align-self-center">
          <h4 class="text-themecolor">Current Patients</h4>
        </vs-col>
        <vs-col class="col-md-7 align-self-center text-right">
          <div class="d-flex justify-content-end align-items-center">
            <vs-button
              @click="redirectAssignRoom"
              type="button"
              class="btn btn-info d-lg-block"
            >
              <vs-icon
                icon="add_circle_outline"
                id="patient-icon"
                round
              ></vs-icon
              >Assign A Room
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-card>
      <vs-row>
        <vs-col vs-sm="6" vs-lg="7"></vs-col>
        <vs-col vs-sm="4" vs-xs="9" vs-lg="5">
          <vs-input
            icon-after="true"
            icon="search"
            class="text-muted"
            label-placeholder="Search Here By Room/CIN"
            v-model="search"
            @input="searchCurrentPatients({ fullName: search })"
          />
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-row v-if="currentPatients.length > 0" class="row el-element-overlay">
      <vs-col
        v-for="(currentPatient, index) in currentPatients"
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
          class="card"
        >
          <div slot="media">
            <a :href="currentPatientURL(currentPatient.CIN)">
              <img
                v-if="currentPatient.imageName"
                id="current-patient-profile-image"
                :src="currentPatient.imageName"
                alt="user"
              />
              <img
                id="current-patient-profile-image"
                src="@/assets/images/logo/patient.jpg"
                alt="user"
              />
            </a>
          </div>
          <div id="footer" slot="footer">
            <h3 class="box-title">
              {{ currentPatient.fullName }}
            </h3>
            <small>Job: {{ currentPatient.job }}</small>
            <br />
            <small
              >Date Of Birth:
              {{ currentPatient.dateOfBirth }}</small
            >
            <br />
            <small>Room: {{ currentPatient.roomNumber }}</small>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </vs-row>
</template>
<script>
import axios from "axios";
export default {
  name: "currentPatientsList",
  data: () => ({
    title: "currentPatientsList",
    currentPatients: [],
    ready: false,
    search: "",
  }),
  methods: {
    currentPatientURL(arg) {
      return `/administrator/currentPatients/${arg}`;
    },
    redirectAssignRoom() {
      this.$router.push("currentPatients/assignARoom");
    },
    async searchCurrentPatients(criteria) {
      let currentPatients = await axios.post(
        "/api/users/clinicX/currentPatients/searchCurrentPatients",
        criteria
      );
      this.currentPatients = currentPatients.data;
      console.log(this.currentPatients)
    },
  },
  async beforeMount() {
    let currentPatients = await axios.get(
      "/api/users/clinicX/currentPatients",
      {}
    );
    this.currentPatients = currentPatients.data;
    
    this.ready = true;
  },
};
</script>
<style scoped>
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
#current-patient-profile-image {
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
  width: 25% !important;
}
#profile {
  float: left !important;
}
</style>
