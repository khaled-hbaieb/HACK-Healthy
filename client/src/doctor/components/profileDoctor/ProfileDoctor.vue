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
              <a href="/doctor">Home</a> > Profile
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
                id="doctor-profile-image"
                alt="user"
                :src="currentUser.imageName"
              />
              <img
                v-else
                id="doctor-profile-image"
                alt="user"
                src="@/assets/images/logo/doctor.jpg"
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
              <vs-button class="doctor-profile-buttons" @click="cancelEdit"
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
    </vs-row>
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
<script>
import UserService from "../../../services/user.service";
import axios from "axios";

export default {
  name: "profile",
  data: () => {
    return {
      currentUser: null,
      user: {},
      isPassword: true,
      passwordType: "password",
      edit: false,
      ready: false,
      imageName: "",
      center: null,
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  computed: {
    backEndUrl() {
      return `http://localhost:3000/upload-images`;
    },
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
    onFileUploaded(event) {
      this.imageName = event.target.response;
      this.user.imageName = this.imageName;
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
      if(this.user.password === '') {
        delete this.user.password
      }
      let user = await axios.put(
        `/api/users/clinicX/doctors/updateDoctor`,
        { filter: { CIN: this.currentUser.CIN }, payload: this.user }
      );
      UserService.getDoctorBoard().then((response) => {
        this.currentUser = response;
        this.user = this.currentUser;
        this.user.password = "";
        this.edit = false;
      });
    },
    cancelEdit() {
      UserService.getDoctorBoard().then((response) => {
        this.currentUser = response;
        this.user = this.currentUser;
        this.user.password = "";
        this.edit = false;
      });
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: this.center.lat,
          lng: this.center.lng
        };
      });
    },
  },
  async beforeMount() {
    await UserService.getDoctorBoard().then(
       (response) => {
        
        this.currentUser = response;
        this.user = this.currentUser;
        this.user.password = "";
        
        this.center = {lat: response.marker.lat, lng: response.marker.lng}
        this.ready = true;
        this.geolocate()
        this.addMarker()
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
#doctor-profile-image {
  height: 100%;
  width: 80%;
}
.doctor-profile-buttons {
  margin-top: 58px;
}
</style>
