<template>
  <div>
    <div>
      <vs-card>
        <div class="row page-titles">
          <vs-col class="col-md-5 align-self-center">
            <h4 class="text-themecolor">Profile</h4>
          </vs-col>
          <vs-col class="col-md-7 align-self-center text-right">
            <div class="d-flex justify-content-end align-items-center">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li class="breadcrumb-item active">Doctor Profile</li>
              </ol>
            </div>
          </vs-col>
        </div>
      </vs-card>
      <vs-col vs-lg="6">
        <vs-card>
          <div class="user-bg">
            <img
              width="80%"
              id="image"
              alt="user"
              :src="currentUser.imageName"
            />
          </div>
          <div class="card-body">
            <!-- .row -->
            <div class="row text-center m-t-10">
              <div class="col-md-6 b-r">
                <strong>Full-Name</strong>
                <p>{{ currentUser.fullName }}</p>
              </div>
              <div class="col-md-6">
                <strong>Speciality</strong>
                <p>{{ currentUser.speciality }}</p>
              </div>
            </div>
            <hr />
            <!-- /.row -->
            <!-- .row -->
            <div class="row text-center m-t-10">
              <div class="col-md-6 b-r">
                <strong>Email ID</strong>
                <p>{{ currentUser.email }}</p>
              </div>
              <div class="col-md-6">
                <strong>Phone</strong>
                <p>{{ currentUser.phoneNumber }}</p>
              </div>
            </div>
            <!-- /.row -->
            <hr />
            <!-- .row -->

            <!-- .row -->
            <vs-row class="row text-center m-t-10">
              <vs-col class="col-md-6 b-r">
                <strong>Gender</strong>
                <p>{{ currentUser.gender }}</p>
              </vs-col>
              <vs-col class="col-md-6">
                <strong>Date of Birth</strong>
                <p>{{ currentUser.DateOfBirth }}</p>
              </vs-col>
            </vs-row>
            <hr />
            <vs-row class="row text-center m-t-10">
              <div class="col-md-12">
                <strong>Address</strong>
                <p>{{ currentUser.address }}</p>
              </div>
            </vs-row>
            <vs-button @click="edit = true">Edit Profile</vs-button>
            <br />
          </div>
        </vs-card>
      </vs-col>
      <vs-col v-if="edit" vs-lg="6">
        <vs-card class="card-body">
          <h2>Update Info</h2>
          <hr />
          <form class="form-horizontal form-material">
            <div class="form-group">
              <div class="col-md-12">
                <vs-input
                  v-model="user.fullName"
                  label="Full Name"
                  placeholder="Johnathan Doe"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <vs-input
                  type="email"
                  label="Email"
                  name="example-email"
                  id="example-email"
                  v-model="user.email"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12">
                <vs-input
                  type="text"
                  v-model="user.phoneNumber"
                  label="Phone Number"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12">
                <vs-input
                  type="text"
                  v-model="user.dateOfBirth"
                  label="Date of Birth"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <vs-input type="text" v-model="user.address" label="address" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <vs-button class="btn btn-success" @click="updateProfile">
                  Update Profile
                </vs-button>
              </div>
            </div>
          </form>
        </vs-card>
      </vs-col>
    </div>
  </div>
</template>
<script>
import UserService from "../../../services/user.service";
import axios from "axios";

export default {
  name: "profileDoc",
  data: () => {
    return {
      currentUser: null,
      user: {
        fullName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        address: "",
      },
      edit: false,
    };
  },
  methods: {
    async updateProfile() {
      let user = await axios.put(
        `/api/users/clinicX/doctors/updateDoctor/${this.currentUser.CIN}`,
        { filter: { CIN: this.currentUser.CIN }, payload: this.user }
      );
      UserService.getDoctorBoard().then((response) => {
        this.currentUser = response;
        this.user = this.currentUser;
        this.edit = false;
      });
    },
  },
  beforeMount() {
    UserService.getDoctorBoard().then(
      (response) => {
        this.currentUser = response;
        this.user = this.currentUser;
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

<style scoped>
#image {
  height: 75%;
}
</style>
