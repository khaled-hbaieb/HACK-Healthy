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
            <label class="col-md-12" for="CIND">CIN Of Doctor</label>
            <vs-input
              :success="CIND.length === 8"
              success-text="Thank You For Typing the CIN of the Doctor"
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-text"
              name="CIND"
              placeholder="Enter THE Doctor's CIN"
              v-model="CIND"
            />
            <label class="col-md-12" for="illness">Illness</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              name="illness"
              placeholder="Type In The illness"
              v-model="illness"
              success-text="Thank You For Selecting The Room"
              :success="illness !== ''"
            />
            <label class="col-md-12" for="room">Room Number</label>
            <vs-select
              class="doctor-form-inputs-doctor-creation"
              name="room"
              placeholder="Select The Room"
              v-model="roomNumber"
              success-text="Thank You For Selecting The Room"
              :success="roomNumber !== ''"
            >
              <vs-select-item
                v-for="(room, index) in availableRooms"
                :key="index"
                :text="room.roomNumber"
                :value="room.roomNumber"
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
          <vs-button
            color="primary"
            type="border"
            class="btn btn-info waves-effect waves-light m-r-10 handling-buttons-assign"
            @click="submitAssignRoom"
            >Submit</vs-button
          >
          <vs-button
            class="btn btn-inverse waves-effect waves-light handling-buttons-assign"
            type="submit"
            >Cancel</vs-button
          >
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "createDoctor",
  data: () => {
    return {
      roomNumber: "",
      CINP: "",
      CIND: "",
      ED: "",
      illness: "",
      availableRooms: [],
    };
  },
  methods: {
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: this.name + " Uploaded The image Successfully!",
      });
    },
    submitAssignRoom() {
      axios.post(
        `/api/clinicX/rooms/assignRoom`,
        {
          roomNumber: this.roomNumber,
          CINP: this.CINP,
          CIND: this.CIND,
          ED: this.ED,
          illness: this.illness,
        }
      );
    },
  },
  beforeMount: async function() {
    let available = await axios.post(
      `/api/clinicX/rooms`,
      {
        availibility: true,
      }
    );
    this.availableRooms = available.data;
  },
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
.handling-buttons-assign {
  margin-top: 15px;
  float: right;
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
