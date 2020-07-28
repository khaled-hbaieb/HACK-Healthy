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
                <li class="breadcrumb-item active">Patient Profile</li>
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
                <strong>Occupation</strong>
                <p>{{ currentUser.job }}</p>
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
            <!-- /.row -->
            <br />
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-lg="6">
        <vs-card class="card-body">
          <h2>Update Info</h2>
          <hr />
          <form class="form-horizontal form-material">
            <div class="form-group">
              <div class="col-md-12">
                <vs-input label="Full Name" placeholder="Johnathan Doe" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12">
                <vs-input
                  type="email"
                  placeholder="johnathan@admin.com"
                  label="Email"
                  name="example-email"
                  id="example-email"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <vs-select label-placeholder="Gender" v-model="value">
                  <vs-select-item
                    label="Male"
                    value="1"
                    text="Male"
                  ></vs-select-item>
                  <vs-select-item
                    label="Female"
                    value="2"
                    text="Female"
                  ></vs-select-item>
                </vs-select>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12">
                <vs-input
                  type="text"
                  v-model="user.phoneNumber"
                  placeholder="123 456 7890"
                  label="Phone Number"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <vs-input
                  type="text"
                  placeholder="Occupation"
                  v-model="user.occupation"
                  label="Occupation"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <vs-input
                  type="text"
                  placeholder="Date of Birth"
                  v-model="user.dateOfBirth"
                  label="Date of Birth"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <button class="btn btn-success" @click="updateProfile">
                  Update Profile
                </button>
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
  name: "profile",
  data: () => {
    return {
      currentUser: null,
      user: {
        phoneNumber: "",
        occupation: "",
        dateOfBirth: "",
      },
    };
  },
  methods: {
    async updateProfile() {
      let user = await axios.put(
        `/api/users/clinicX/patients/updatePatient/${this.currentUser.CIN}`,
        { filter: { CIN: this.currentUser.CIN }, payload: this.user }
      );

      this.currentUser = user.data;
    },
  },
  beforeMount() {
    UserService.getPatientBoard().then(
      (response) => {
        this.currentUser = response;
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
