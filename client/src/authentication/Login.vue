<template>
  <center>
    <div class="align-self-center">
      <vs-row class="row page-titles">
        <vs-col class="align-self-center" vs-lg="8" vs-xs="12">
          <vs-card vs-lg="10" vs-xs="12">
            <form
              class="form-horizontal form-material"
              id="loginform"
              action="index.html"
            >
              <h3 class="text-center m-b-20">Sign In</h3>
              <vs-col vs-lg="12">
                <vs-input
                  type="text"
                  required
                  placeholder="Email"
                  v-model="email"
                />
              </vs-col>
              <vs-col vs-lg="12">
                <vs-input
                  type="password"
                  required
                  placeholder="Password"
                  v-model="password"
                />
              </vs-col>
              <div>
                <p>I'am a:</p>
                <vs-button
                  color="primary"
                  id="btnUser"
                  type="border"
                  @click="doctor"
                  >Doctor</vs-button
                >
                <vs-button
                  color="primary"
                  type="border"
                  id="btnUser"
                  @click="administrator"
                  >Administrator</vs-button
                >
                <vs-button
                  color="primary"
                  type="border"
                  id="btnUser"
                  @click="patient"
                  >Patient</vs-button
                >
              </div>
              <vs-col class="col-md-12">
                <div class="d-flex no-block align-items-center">
                  <div class="custom-control custom-checkbox">
                    <vs-input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label class="custom-control-label" for="customCheck1"
                      >Remember me</label
                    >
                  </div>
                </div>
              </vs-col>
              <vs-col class="col-xs-12 p-b-20">
                <vs-button
                  id="btn-login"
                  class="btn btn-block btn-lg btn-info btn-rounded"
                  @click="handleLogin"
                  >Log In</vs-button
                >
              </vs-col>
              <vs-row class="row">
                <vs-col
                  class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center"
                >
                  <vs-button
                    class="btn btn-facebook"
                    data-toggle="tooltip"
                    title="Login with Facebook"
                  >
                    <i aria-hidden="true" class="fab fa-facebook-f"></i>
                  </vs-button>
                  <vs-button
                    class="btn btn-googleplus"
                    data-toggle="tooltip"
                    title="Login with Google"
                  >
                    <i aria-hidden="true" class="fab fa-google-plus-g"></i>
                  </vs-button>
                </vs-col>
              </vs-row>
            </form>
            <form class="form-horizontal" id="recoverform">
              <vs-col class="col-xs-12">
                <h3>Recover Password</h3>
                <p class="text-muted">
                  Enter your Email and instructions will be sent to you!
                </p>
              </vs-col>
              <vs-col class="col-xs-12">
                <vs-input type="text" required placeholder="Email" />
              </vs-col>
              <vs-col class="col-xs-12">
                <vs-button
                  class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
                  type="submit"
                  id="btn-reset"
                  >Reset</vs-button
                >
              </vs-col>
            </form>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
  </center>
</template>
<script>
import doctor from "../models/doctor";
import administrator from "../models/administrator";
import patient from "../models/patient";
export default {
  name: "Login",
  data() {
    return {
      role: "",
      loading: false,
      email: "",
      password: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    doctor() {
      this.role = "doctor";
    },
    patient() {
      this.role = "patient";
    },
    administrator() {
      this.role = "administrator";
    },
    handleLogin() {
      let user;
      this.loading = true;

      if (this.role === "doctor") {
        user = new doctor(this.email, this.password);
      }
      if (this.role === "administrator") {
        user = new administrator(this.email, this.password);
      }
      if (this.role === "patient") {
        user = new patient(this.email, this.password);
      }
      user.role = this.role;
      if (this.email && this.password) {
        this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push(`/${this.role}`);
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
};
</script>
<style scoped></style>
