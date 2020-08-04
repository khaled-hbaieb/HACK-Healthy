<template>
  <div>
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
      <vs-col v-if="ready" vs-lg="6">
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
              <p>{{ currentUser.fullName }}</p>
              <strong>Occupation</strong>
              <p>{{ currentUser.job }}</p>
              <hr />
              <strong>Email ID</strong>
              <p>{{ currentUser.email }}</p>
              <strong>Phone</strong>
              <p>{{ currentUser.phoneNumber }}</p>
              <hr />
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col>
              <strong>Gender</strong>
              <p>{{ currentUser.gender }}</p>
            </vs-col>
            <vs-col>
              <strong>Date of Birth</strong>
              <p>{{ currentUser.dateOfBirth }}</p>
            </vs-col>
            <vs-col>
              <strong>Address</strong>
              <p>{{ currentUser.address }}</p>
            </vs-col>
          </vs-row>
          <hr />
          <vs-button @click="edit = true">Edit Profile</vs-button>
          <br />
        </vs-card>
      </vs-col>
      <vs-col v-if="edit" vs-lg="6">
        <vs-card>
          <h2>Update Info</h2>
          <hr />
          <vs-col vs-lg="4">
            <vs-row>
              <vs-input
                maxlength="25"
                v-model="user.fullName"
                label="Full Name"
              />
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
              <vs-input
                maxlength="20"
                type="text"
                v-model="user.job"
                label="Job"
              />
            </vs-row>
            <vs-row>
              <vs-input
                maxlength="5"
                type="date"
                v-model="user.dateOfBirth"
                label="Date of Birth"
              />
            </vs-row>
          </vs-col>
          <vs-col vs-lg="4"
            ><label class="col-sm-12" for="image">Profile Image</label>
            <div class="centerx">
              <vs-upload
                automatic
                limit="1"
                name="image"
                :action="backEndUrl"
                fileName="image"
                @on-success="onFileUploaded"
              /></div
          ></vs-col>
          <vs-row>
            <vs-col vs-lg="9">
              <vs-button class="patient-profile-buttons" @click="cancelEdit"
                >Cancel Edit</vs-button
              >
            </vs-col>
            <vs-col vs-lg="3">
              <vs-button class="patient-profile-buttons" @click="updateProfile"
                >Update Profile</vs-button
              >
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
            <p>{{ currentUserRecord.patientCIN }}</p>
            <strong>Father's Name</strong>
            <p>{{ currentUserRecord.fatherName }}</p>
            <hr />
            <strong>Father's Phone Number</strong>
            <p>{{ currentUserRecord.fatherNumber }}</p>
            <hr />
            <strong>Mother's Name</strong>
            <p>{{ currentUserRecord.motherName }}</p>
            <hr />
            <strong>Mother's Phone Number</strong>
            <p>{{ currentUserRecord.motherNumber }}</p>
            <strong>Blood Type</strong>
            <p>{{ currentUserRecord.bloodType }}</p>
            <strong>Allergies</strong>
            <p
              v-for="(allergy, index) in JSON.parse(
                currentUserRecord.allergies
              )"
              :key="index"
            >
              {{ allergy }}
            </p>
            <strong>Vaccinations</strong>
            <p
              v-for="(vaccination, index) in JSON.parse(
                currentUserRecord.vaccinations
              )"
              :key="index + 10"
            >
              {{ vaccination }}
            </p>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-lg="6">
        <vs-card>
          <div>
            <h4>My History</h4>
            <hr />
            <div>
              <vs-table max-items="8" pagination :data="history">
                <template slot="thead">
                  <vs-th>Entry Date</vs-th>
                  <vs-th>Exit Date</vs-th>
                  <vs-th>Room Number</vs-th>
                  <vs-th>Illness</vs-th>
                </template>

                <template slot-scope="{ data }">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].entryDate">{{
                      data[indextr].entryDate
                    }}</vs-td>
                    <vs-td :data="data[indextr].exitDate">{{
                      data[indextr].exitDate
                    }}</vs-td>
                    <vs-td :data="data[indextr].roomNumber">{{
                      data[indextr].roomNumber
                    }}</vs-td>
                    <vs-td :data="data[indextr].illness">{{
                      data[indextr].illness
                    }}</vs-td>
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
      return `https://hackhealthy.herokuapp.com/upload-images`;
    },
  },
  methods: {
    onFileUploaded(event) {
      this.imageName = event.target.response;
      let str = "";
      for (let i = 0; i < this.imageName.length; i++) {
        if (this.imageName[i-3]+this.imageName[i-2]+this.imageName[i-1]+this.imageName[i] === 'http') {
          str+=this.imageName[i]+'s'
        } else {
          str+=this.imageName[i]
        }
      }
      console.log(str)
      this.user.imageName = str;
    },
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: this.name + " Uploaded The image Successfully!",
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
      let user = await axios.put(
        `/api/users/clinicX/patients/updatePatient/${this.currentUser.CIN}`,
        { filter: { CIN: this.currentUser.CIN }, payload: this.user }
      );
      UserService.getPatientBoard().then((response) => {
        this.currentUser = response;
        this.user = this.currentUser;
        this.user.password = "";
        this.edit = false;
      });
    },
    cancelEdit() {
      UserService.getPatientBoard().then((response) => {
        this.currentUser = response;
        this.user = this.currentUser;
        this.user.password = "";
        this.edit = false;
      });
    },
  },
  beforeMount() {
    UserService.getPatientBoard().then(
      async (response) => {
        this.currentUser = response;
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
      (error) => {
        this.content =
          (error.currentUser && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>

<style>
#patient-profile-image {
  height: 100%;
  width: 80%;
}
.patient-profile-buttons {
  margin-top: 58px;
}
</style>
