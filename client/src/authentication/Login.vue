<template>
  <div
    class="login-register"
    style="background-image:url(../assets/images/background/login-register.jpg);"
  >
    <vs-card class="login-box">
      <form class="form-horizontal form-material" id="loginform" action="index.html">
        <h3 class="text-center m-b-20">Sign In</h3>
        <div class="form-group">
          <div class="col-xs-12">
            <vs-input type="text" required placeholder="Email" v-model="email" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12">
            <vs-input type="password" required placeholder="Password" v-model="password" />
          </div>
        </div>
        <!-- <div class="con-select-example">
    <vs-select
      class="selectExample"
      label="Pick a Role"
      v-model="users"
      >
      <vs-select-item v-for="user in users" :text="user.text" :value="user.text" @input="setSelected" />
      
    </vs-select>
    
        </div>-->
        <div>
          <p>I'am a:</p>
          <vs-button :color="colorx" type="border" @click="doctor">Doctor</vs-button>
          <vs-button :color="colorx" type="border" v-model="role">Administrator</vs-button>
          <vs-button :color="colorx" type="border" v-model="role">Patient</vs-button>
        </div>
        <div class="form-group row">
          <div class="col-md-12">
            <div class="d-flex no-block align-items-center">
              <div class="custom-control custom-checkbox">
                <vs-input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">Remember me</label>
              </div>

              <div class="ml-auto">
                <a href="javascript:void(0)" id="to-recover" class="text-muted">
                  <i class="fas fa-lock m-r-5"></i> Forgot pwd?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group text-center">
          <div class="col-xs-12 p-b-20">
            <vs-button class="btn btn-block btn-lg btn-info btn-rounded" @click="handleLogin">Log In</vs-button>
          </div>
        </div>
        <vs-row class="row">
          <vs-col class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
            <button class="btn btn-facebook" data-toggle="tooltip" title="Login with Facebook">
              <i aria-hidden="true" class="fab fa-facebook-f"></i>
            </button>
            <vs-button class="btn btn-googleplus" data-toggle="tooltip" title="Login with Google">
              <i aria-hidden="true" class="fab fa-google-plus-g"></i>
            </vs-button>
          </vs-col>
        </vs-row>
        <div class="form-group m-b-0">
          <div class="col-sm-12 text-center">
            Don't have an account?
            <a class="text-info m-l-5">
              <b>Sign Up</b>
            </a>
          </div>
        </div>
      </form>
      <form class="form-horizontal" id="recoverform">
        <div class="form-group">
          <vs-col class="col-xs-12">
            <h3>Recover Password</h3>
            <p class="text-muted">Enter your Email and instructions will be sent to you!</p>
          </vs-col>
        </div>
        <div class="form-group">
          <vs-col class="col-xs-12">
            <vs-input type="text" required placeholder="Email" />
          </vs-col>
        </div>
        <div class="form-group text-center m-t-20">
          <div class="col-xs-12">
            <vs-button
              class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
              type="submit"
            >Reset</vs-button>
          </div>
        </div>
      </form>
    </vs-card>
  </div>
</template>

<script>
import doctor from "../models/doctor";
import administrator from "../models/doctor";
import patient from "../models/doctor";

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
  created() {
    if (this.loggedIn) {
      this.$router.push("/doctor");
    }
  },
  methods: {
    doctor() {
      this.role = "doctor";
    },
    handleLogin() {
      let user;
      this.loading = true;

      // this.store.$validator.validateAll().then(isValid => {
      //   if (!isValid) {
      //     this.loading = false;
      //     return;
      //   }
      if (this.role === "doctor") {
        user = new doctor(this.email, this.password);
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
