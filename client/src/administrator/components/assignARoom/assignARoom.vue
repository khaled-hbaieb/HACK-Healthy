<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <h4 id="t1" class="text-themecolor">Assign A Room</h4>

          <h6 id="t2" class="text-themecolor">
            <a href="/currentPatients">Current Patients</a> > Assign A Room
          </h6>
        </vs-card>
      </vs-col>
    </vs-row>

    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card class="card">
          <h5 class="card-title">Basic Informations</h5>
          <form class="form-material form-horizontal">
            <label class="col-md-12" for="CINP">CIN Of Patient</label>
            <vs-input
              :success="CINP.length === 8"
              success-text="Thank You For Typing the CIN of the Patient"
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-text"
              name="CINP"
              placeholder="Enter THE Patient's CIN"
              v-model="CINP"
            />
            <label class="col-md-12" for="room">Room Number</label>
            <vs-select
              class="doctor-form-inputs-doctor-creation"
              name="room"
              placeholder="Select The Room"
              v-model="chosenRoom"
              success-text="Thank You For Selecting The Room"
              :success="chosenRoom !== ''"
            >
              <vs-select-item
                v-for="(room, index) in availableRooms"
                :text="room"
                :key="index"
                :value="room"
              ></vs-select-item>
            </vs-select>
            <label class="col-md-12" for="CINP">Entry Date</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="date"
              id="example-text"
              name="CINP"
              success-text="Thank You For Selecting The Entry Date"
              :success="ED !== ''"
              v-model="ED"
            />
          </form>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "createDoctor",
  data: () => {
    return {
      CINP: "",
      ED: "",
      chosenRoom: "",
      availableRooms: ["5", "4", "112", "124"]
    };
  },
  methods: {
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: this.name + " Uploaded The image Successfully!"
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
#button-admin-patient-container {
  margin-top: 15px;
  float: right;
}
#allergies-container {
  justify-content: space-arround !important;
}
#vaccinations-container {
  justify-content: space-arround !important;
}
#add-input-icon {
  width: 5%;
}
#allergy-button,
#vaccination-button {
  margin-bottom: 10px;
}
#allergy {
  float: left;
  width: 100% !important;
  margin-bottom: 20px;
}
#vaccination {
  float: left;
  width: 100% !important;
  margin-bottom: 20px;
}
.vs-con-input,
.vs-con-input-label {
  width: 100%;
}
#textarea-doctor-creation {
  max-height: 150px !important;
  min-height: 150px !important;
}
#select-gender-patient-creation,
#select-bloodType-patient-creation {
  width: 100% !important;
}
.doctor-form-inputs-doctor-creation {
  width: 100% !important;
}
#buttons-doctor-creation {
  float: right;
  margin-top: 25px;
}
#header-titles {
  justify-content: space-around !important;
}
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
</style>
