<template>
  <div v-if="ready">
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <vs-col vs-lg="11">
            <h4 class="text-themecolor">My Profile</h4>
          </vs-col>
          <vs-col vs-lg="1">
            <h6 class="text-themecolor">
              <a href="/patient">Home</a> > Profile
            </h6>
          </vs-col>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-lg="6">
        <vs-card>
          <vs-row>
            <vs-col vs-lg="6">
              <img
                v-if="currentUser.imageName !== ''"
                id="patient-profile-image"
                alt="user"
                :src="currentUser.imageName"
              />
              <img
                v-else
                id="patient-profile-image"
                alt="user"
                src="@/assets/images/logo/patient.jpg"
              />
            </vs-col>
            <vs-col vs-lg="6">
              <strong>Full-Name</strong>
              <p class="informations">{{ currentUser.fullName }}</p>
              <strong>Email</strong>
              <p class="informations">{{ currentUser.email }}</p>
              <hr />
              <strong>Phone</strong>
              <p class="informations">{{ currentUser.phoneNumber }}</p>
              <strong>Gender</strong>
              <p class="informations">{{ currentUser.gender }}</p>
              <hr />
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col>
              <strong>Date of Birth</strong>
              <p class="informations">{{ currentUser.dateOfBirth }}</p>
            </vs-col>
            <vs-col>
              <strong>Job</strong>
              <p class="informations">{{ currentUser.job }}</p>
            </vs-col>
            <vs-col>
              <strong>Address</strong>
              <p class="informations">{{ currentUser.address }}</p>
            </vs-col>
          </vs-row>
          <hr />
          <vs-row>
            <vs-col vs-lg="9">
              <vs-button class="patient-profile-buttons" @click="edit = true">Edit Profile</vs-button>
            </vs-col>
            <vs-col vs-lg="3">
              <vs-button class="patient-profile-buttons" @click="createPDF">Create PDF</vs-button>
            </vs-col>
          </vs-row>
          <br />
        </vs-card>
      </vs-col>
      <vs-col v-if="edit" vs-lg="6">
        <vs-card>
          <h2>Update Info</h2>
          <hr />
          <vs-col vs-lg="4">
            <vs-row>
              <vs-input maxlength="25" v-model="user.fullName" label="Full Name" />
            </vs-row>
            <vs-row>
              <vs-input
                maxlength="25"
                v-model="user.email"
                type="email"
                label="Email"
                name="example-email"
                id="example-email"
              />
            </vs-row>
            <vs-row>
              <vs-input
                icon="dns"
                v-on:icon-click="showPassowrd"
                :type="passwordType"
                v-model="user.password"
                label="Password"
              />
            </vs-row>
          </vs-col>
          <vs-col vs-lg="4">
            <vs-row>
              <vs-input
                maxlength="8"
                type="number"
                v-model="user.phoneNumber"
                label="Phone Number"
              />
            </vs-row>
            <vs-row>
              <vs-input maxlength="20" type="text" v-model="user.job" label="Job" />
            </vs-row>
            <vs-row>
              <vs-input maxlength="5" type="date" v-model="user.dateOfBirth" label="Date of Birth" />
            </vs-row>
          </vs-col>
          <vs-col vs-lg="4">
            <label class="col-sm-12" for="image">Profile Image</label>
            <div class="centerx">
              <vs-upload
                automatic
                limit="1"
                name="image"
                :action="backEndUrl"
                fileName="image"
                @on-success="onFileUploaded"
              />
            </div>
          </vs-col>

          <vs-row>
            <vs-col vs-lg="7">
              <vs-button class="patient-profile-buttons" @click="cancelEdit">Cancel Edit</vs-button>
            </vs-col>

            <vs-col vs-lg="5">
              <vs-button
                id="delete"
                class="patient-profile-buttons"
                @click="deletePicture"
              >Delete Picture</vs-button>
              <vs-button class="patient-profile-buttons" @click="updateProfile">Update Profile</vs-button>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-lg="6">
        <vs-card v-if="ready">
          <div>
            <h4>My Record</h4>
            <hr />
            <strong>CIN</strong>
            <p class="record">{{ currentUserRecord.patientCIN }}</p>
            <strong>Father's Name</strong>
            <p class="record">{{ currentUserRecord.fatherName }}</p>
            <hr />
            <strong>Father's Phone Number</strong>
            <p class="record">{{ currentUserRecord.fatherNumber }}</p>
            <hr />
            <strong>Mother's Name</strong>
            <p class="record">{{ currentUserRecord.motherName }}</p>
            <hr />
            <strong>Mother's Phone Number</strong>
            <p class="record">{{ currentUserRecord.motherNumber }}</p>
            <strong>Blood Type</strong>
            <p class="record">{{ currentUserRecord.bloodType }}</p>
            <strong>Allergies</strong>
            <p
              class="recordAllergies"
              v-for="(allergy, index) in JSON.parse(
                currentUserRecord.allergies
              )"
              :key="index"
            >{{ allergy }}</p>
            <strong>Vaccinations</strong>
            <p
              class="recordVaccinations"
              v-for="(vaccination, index) in JSON.parse(
                currentUserRecord.vaccinations
              )"
              :key="index + 10"
            >{{ vaccination }}</p>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-lg="6">
        <vs-card>
          <div>
            <h4>My History</h4>
            <hr />
            <div>
              <vs-table id="my-table" max-items="8" pagination search :data="history">
                <template slot="thead">
                  <vs-th>N°</vs-th>
                  <vs-th>Entry Date</vs-th>
                  <vs-th>Exit Date</vs-th>
                  <vs-th>Room Number</vs-th>
                  <vs-th>Illness</vs-th>
                  <vs-th>Doctor Name</vs-th>
                </template>

                <template slot-scope="{ data }">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data" @click="showHistory(tr)">
                    <vs-td class="history">{{ indextr+1 }}</vs-td>
                    <vs-td
                      class="history"
                      :data="data[indextr].entryDate"
                    >{{ data[indextr].entryDate }}</vs-td>
                    <vs-td
                      class="history"
                      :data="data[indextr].exitDate"
                    >{{ data[indextr].exitDate }}</vs-td>
                    <vs-td
                      class="history"
                      :data="data[indextr].roomNumber"
                    >{{ data[indextr].roomNumber }}</vs-td>
                    <vs-td class="history" :data="data[indextr].illness">
                      {{
                      data[indextr].illness
                      }}
                    </vs-td>
                    <vs-td class="history" :data="data[indextr].doctorName">
                      {{
                      data[indextr].doctorName
                      }}
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import UserService from "../../../services/user.service";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import $ from "jquery";
export default {
  name: "profile",
  data: () => {
    return {
      currentUser: null,
      currentUserRecord: null,
      history: null,
      user: {},
      isPassword: true,
      passwordType: "password",
      edit: false,
      ready: false,
      imageName: "",
    };
  },
  computed: {
    backEndUrl() {
      return `http://localhost:3000/upload-images`;
    },
  },
  methods: {
    showHistory(arg) {
      console.log("here", arg);
    },
    createPDF() {
      let pdfName = "Record";
      var doc = new jsPDF();
      let informations = $(".informations");
      let record = $(".record");
      let recordAllergies = $(".recordAllergies");
      let recordVaccinations = $(".recordVaccinations");
      let history = $(".history");
      let historyContainer = [];
      let historyTable = [];
      let IDCounter = 1;
      let informationsLabels = [
        "Full Name",
        "Email",
        "Phone Number",
        "Gender",
        "Date Of Birth",
        "Job",
        "Address",
      ];
      let recordLabels = [
        "CIN",
        "Father's Name",
        "Father's Phone Number",
        "Mother's Name",
        "Mother's Phone Number",
        "Blood Type",
      ];
      for (let j = 0; j < history.length; j++) {
        if (j === 0 || j % 5 === 0) {
          historyTable = [];
          historyTable.push(IDCounter);
          IDCounter++;
          historyTable.push(history[j].innerText);
        } else {
          historyTable.push(history[j].innerText);
        }
        if (historyTable.length === 5) {
          historyContainer.push(historyTable);
        }
      }
      for (let i = 0; i < informations.length; i++) {
        doc.text(
          informationsLabels[i] + ": " + informations[i].innerText,
          20,
          (i + 1) * 10 + 50
        );
      }
      for (let i = 0; i < record.length; i++) {
        doc.text(
          recordLabels[i] + ": " + record[i].innerText,
          110,
          (i + 1) * 10 + 50
        );
      }
      for (let i = 0; i < recordAllergies.length; i++) {
        doc.text(
          "Allergies: " + recordAllergies[i].innerText,
          110,
          (record.length + 1) * 10 + 50
        );
        record.length++;
      }
      for (let i = 0; i < recordVaccinations.length; i++) {
        doc.text(
          "Vaccinations: " + recordVaccinations[i].innerText,
          110,
          (record.length + 1) * 10 + 50
        );
        record.length++;
      }
      doc.autoTable({
        head: [
          [
            "ID",
            "Entry Date",
            "Exit Date",
            "Room Number",
            "Illness",
            "Doctor Name",
          ],
        ],
        body: historyContainer,
      });
      doc.save(pdfName + ".pdf");
    },
    async deletePicture() {
      if (this.user.password === "") {
        delete this.user.password;
      }
      await axios.put("/api/users/clinicX/patients/updatePatient", {
        filter: { CIN: this.user.CIN },
        payload: { imageName: "" },
      });
      let user = await UserService.getPatientBoard();
      this.currentUser = user;
      this.user = this.currentUser;
      this.user.password = "";
      this.$vs.notify({
        title: "Hack-Healthy:",
        text: "Image Successfully Deleted",
        color: "success",
        position: "top-center",
      });
    },
    onFileUploaded(event) {
      this.imageName = event.target.response;
      this.user.imageName = this.imageName;
      this.$vs.notify({
        title: "Hack-Healthy:",
        text: "Image Successfully Uploaded",
        color: "success",
        position: "top-center",
      });
    },

    showPassowrd() {
      if (this.isPassword) {
        this.passwordType = "text";
        this.isPassword = !this.isPassword;
      } else {
        this.passwordType = "password";
        this.isPassword = !this.isPassword;
      }
    },
    async updateProfile() {
      if (this.user.password === "") {
        delete this.user.password;
      }
      await axios.put(`/api/users/clinicX/patients/updatePatient`, {
        filter: { CIN: this.currentUser.CIN },
        payload: this.user,
      });
      let user = await UserService.getPatientBoard();
      this.currentUser = user;
      this.user = this.currentUser;
      this.user.password = "";
      this.edit = false;
      this.$vs.notify({
        title: "Hack-Healthy:",
        text: "Proile Successfully Updated",
        color: "success",
        position: "top-center",
      });
    },
    async cancelEdit() {
      let user = await UserService.getPatientBoard();
      this.currentUser = user;
      console.log(this.currentUser);
      this.user = this.currentUser;
      this.user.password = "";
      this.edit = false;
    },
  },
  async beforeMount() {
    let user = await UserService.getPatientBoard();
    this.currentUser = user;
    this.user = this.currentUser;
    this.user.password = "";
    let record = await axios.post("/api/users/clinicX/record/findRecord", {
      patientCIN: this.currentUser.CIN,
    });
    let history = await axios.post("/api/users/clinicX/history", {
      patientCIN: this.currentUser.CIN,
    });
    this.history = history.data;
    this.currentUserRecord = record.data[0];
    this.ready = true;
  },
};
</script>

<style>
#delete {
  margin-right: 8px;
}
#patient-profile-image {
  height: 100%;
  width: 80%;
}
.patient-profile-buttons {
  margin-top: 58px;
}
</style>
