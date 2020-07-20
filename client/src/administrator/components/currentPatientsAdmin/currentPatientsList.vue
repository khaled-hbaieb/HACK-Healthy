<template>
  <div>
    <vs-card>
      <vs-row class="row page-titles">
        <vs-col class="col-md-5 align-self-center">
          <h4 class="text-themecolor">Current Patients</h4>
        </vs-col>
        <vs-col class="col-md-7 align-self-center text-right">
          <div class="d-flex justify-content-end align-items-center">
            <vs-button @click="redirectAssignRoom" type="button" class="btn btn-info d-lg-block">
              <vs-icon icon="add_circle_outline" id="patient-icon" round></vs-icon>Assign A Room
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
            label-placeholder="Search Here By Room/CIN"
            v-model="search"
          />
        </vs-col>
        <vs-col vs-sm="2" vs-xs="3" vs-lg="2">
          <vs-button size="33px" id="search-patient-button" color="dark" type="border">Search</vs-button>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-row class="row el-element-overlay">
      <vs-col vs-xs="12" vs-sm="6" vs-lg="3">
        <vs-card vs-xs="12" vs-sm="12" vs-lg="12" id="profile" actionable class="card">
          <div slot="media">
            <a href="/patients/patient">
              <img
                id="current-patient-profile-image"
                :src="require('@/assets/images/users/ali.jpg')"
                alt="user"
              />
            </a>
          </div>
          <div id="footer" slot="footer">
            <h3 class="box-title">Ali Essoudani</h3>
            <small>Job: Life Coach</small>
            <br />
            <small>Age: 24 years</small>
            <br />
            <small>Room: 420</small>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="6" vs-lg="3">
        <vs-card vs-xs="12" vs-sm="12" vs-lg="12" id="profile" actionable class="card">
          <div slot="media">
            <a href="/patients/patient">
              <img
                id="current-patient-profile-image"
                :src="require('@/assets/images/users/khaled.jpg')"
                alt="user"
              />
            </a>
          </div>
          <div id="footer" slot="footer">
            <h3 class="box-title">Khaled Hbaieb</h3>
            <small>Job: Jobless</small>
            <br />
            <small>Age: 24 years</small>
            <br />
            <small>Room: 419</small>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  name: "currentPatientsList",
  data: () => ({
    title: "currentPatientsList",
    defaultalert: false,
    titlealert: false,
    coloralert: false,
    closablealert: false,
    active1: true,
    active2: true,
    examplealert: false,
    value1: ""
  }),
  methods: {
    redirectAssignRoom() {
      this.$router.push("currentPatients/assignARoom");
    }
  },
  computed: {
    inputValid() {
      if (/^\d+$/.test(this.value1)) {
        return false;
      } else {
        return true;
      }
    }
  }
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