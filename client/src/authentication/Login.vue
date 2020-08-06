<template>
  <div id ="home-page-container">
    <vs-row>
      <vs-col vs-lg="9"></vs-col>
      <vs-col id="login-page-container" vs-lg="3">
        <vs-card vs-lg="12" vs-xs="12">
          <center>
            <vs-row>
              <vs-col vs-lg="12" v-if="!showRecover" id="loginform">
                <h3 class="text-center m-b-20">Sign In</h3>
                <br />
                <label class="col-md-12" for="example-email">Email</label>
                <ValidationProvider rules="required|email">
                  <span slot-scope="{ errors }">
                    <vs-input
                      icon="account_circle"
                      class="login-page-inputs"
                      required
                      placeholder="E-mail"
                      v-model="email"
                      type="email"
                    />
                    <p>{{ errors[0] }}</p>
                  </span>
                </ValidationProvider>

                <ValidationProvider rules="required" v-slot="{ errors }">
                  <vs-input
                    dark
                    class="login-page-inputs"
                    :type="passwordType"
                    required
                    label-placeholder="Password"
                    v-model="password"
                    icon="lock"
                    v-on:icon-click="showPassowrd"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <vs-select
                  icon="account_circle"
                  placeholder="Select Your Role"
                  v-model="userRole"
                >
                  <vs-select-item
                    text="Patient"
                    value="patient"
                  ></vs-select-item>
                  <vs-select-item text="Doctor" value="doctor"></vs-select-item>
                  <vs-select-item
                    text="Administrator"
                    value="administrator"
                  ></vs-select-item>
                </vs-select>
                <div>
                  <br />
                  <vs-button
                    id="btn-login"
                    class="login-page-buttons"
                    @click="handleLogin"
                    >Log In</vs-button
                  >
                </div>
                <div class="ml-auto">
                  <a
                    icon="lock"
                    id="to-recover"
                    class="text-muted"
                    @click="recover"
                  >
                    Forgot pwd?</a
                  >
                </div>
              </vs-col>
            </vs-row>
            <div id="recoverform" v-if="showRecover">
              <h3>Recover Password</h3>
              <p class="text-muted">
                Enter your Email and instructions will be sent to you!
              </p>
              <vs-select
                class="login-page-inputs"
                type="text"
                required
                placeholder="Select Your Role"
                v-model="recoveryRole"
              >
                <vs-select-item text="Patient" value="Patient"></vs-select-item>
                <vs-select-item text="Doctor" value="Doctor"></vs-select-item>
              </vs-select>
              <vs-input
                class="login-page-inputs"
                type="text"
                required
                placeholder="Email"
                v-model="recoveryEmail"
                v-if="recoveryRole !== ''"
              />
              <vs-input
                v-if="
                  recoveryEmail.includes('@') &&
                    recoveryEmail.includes('.') &&
                    recoveryEmail.length > '8'
                "
                class="login-page-inputs"
                type="number"
                required
                placeholder="CIN"
                v-model="recoveryCIN"
              />
              <vs-input
                v-if="recoveryCIN.length === 8"
                class="login-page-inputs"
                type="number"
                required
                placeholder="Phone Number"
                v-model="recoveryPhone"
              />
              <vs-button
                v-if="recoveryPhone.length === 8"
                class="login-page-buttons"
                @click="sendEmail"
                >Reset</vs-button
              >
              <vs-button @click="getBack">Back</vs-button>
            </div>
          </center>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import doctor from "../models/doctor";
import administrator from "../models/administrator";
import patient from "../models/patient";
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import axios from "axios";
import $ from "jquery";
extend("email", {
  ...email,
  message: "This field must be a valid email",
});
extend("required", {
  ...required,
  message: "This field is required",
});
export default {
  components: {
    ValidationProvider,
  },
  name: "Login",
  beforeMount() {
    console.log("mounted");
    $("#recoverform").hide();
  },
  data() {
    return {
      role: "",
      recoveryRole: "",
      loading: false,
      email: "",
      password: "",
      recoveryEmail: "",
      recoveryCIN: "",
      recoveryPhone: "",
      hasVisiblePassword: false,
      userRole: "",
      showRecover: false,
      passwordType: "password",
      isPassword: true,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    getBack() {
      console.log(this.showRecover);
      this.showRecover = false;
      console.log(this.showRecover);
    },
    handleLogin() {
      let user;
      this.loading = true;

      if (this.userRole === "doctor") {
        console.log("doc");
        user = new doctor(this.email, this.password);
      }
      if (this.userRole === "administrator") {
        user = new administrator(this.email, this.password);
        console.log("admi");
      }
      if (this.userRole === "patient") {
        console.log("pat");
        user = new patient(this.email, this.password);
      }
      user.role = this.userRole;
      if (this.email && this.password) {
        this.$store.dispatch("auth/login", user).then(
          () => {
            if (this.userRole !== "administrator") {
              this.$router.push(`/${this.userRole}/profile`);
            } else {
              this.$router.push(`/${this.userRole}`);
            }
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
    async sendEmail() {
      let inputs = {
        email: this.recoveryEmail,
        CIN: this.recoveryCIN,
        phone: this.recoveryPhone,
        role: this.recoveryRole,
      };
      let user = await axios.post(`/send`, inputs);
    },
    recover() {
      this.showRecover = true;
      $("#loginform").slideUp();
      $("#recoverform").fadeIn();
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
  },
};
</script>
<style>
#login-page-container {
  /* margin-left: 83% !important; */
  /* margin-top: 10% !important; */
  /* width: auto !important; */
  height: 120%;
  padding: 0px !important;
}
.login-page-inputs {
  margin-bottom: 10px;
}
.login-page-buttons {
  margin-bottom: 10px;
}
#home-page-container {
  height: 100vh;
  background-image: url("../assets/images/background/login3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
