<template>
  <vs-col id="login-page-container" vs-lg="6">
    <vs-card vs-lg="12" vs-xs="12">
      <center>
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
            type="password"
            required
            label-placeholder="Password"
            v-model="password"
            icon="lock"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <div>
          <vs-button
            class="login-page-buttons"
            color="primary"
            type="border"
            @click="doctor"
            >Doctor</vs-button
          >
          <vs-button
            class="login-page-buttons"
            color="primary"
            type="border"
            @click="administrator"
            >Administrator</vs-button
          >
          <vs-button
            class="login-page-buttons"
            color="primary"
            type="border"
            @click="patient"
            >Patient</vs-button
          >
          <br />
          <vs-button
            id="btn-login"
            class="login-page-buttons"
            @click="handleLogin"
            >Log In</vs-button
          >
        </div>
        <h3>Recover Password</h3>
        <p class="text-muted">
          Enter your Email and instructions will be sent to you!
        </p>
        <vs-input
          class="login-page-inputs"
          type="text"
          required
          placeholder="Email"
          v-model="recoveryEmail"
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
        
      </center>
    </vs-card>
  </vs-col>
</template>
<script>
import doctor from "../models/doctor";
import administrator from "../models/administrator";
import patient from "../models/patient";
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import axios from "axios";
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
  data() {
    return {
      role: "",
      loading: false,
      email: "",
      password: "",
      recoveryEmail: "",
      recoveryCIN: "",
      recoveryPhone: "",
      hasVisiblePassword: false,
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
            if (this.role !== "administrator") {
              this.$router.push(`/${this.role}/profile`);
            } else {
              this.$router.push(`/${this.role}`);
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
      };
      let user = await axios.post(`api/users/clinicX/patients/checkPatient`, {
        CIN: inputs.CIN,
        email: inputs.email,
        phoneNumber: inputs.phone,
      });
      console.log(user);

      if (user.data.length > 0) {
        let data = await axios.post("/send", inputs);
      } else {
        console.log("entered");
        let user = await axios.post(`api/users/clinicX/doctors/getDoctor`, {
          CIN: inputs.CIN,
          email: inputs.email,
          phoneNumber: inputs.phone,
        });
        if (user.data.length > 0) {
          let data = await axios.post("/send", inputs);
        }
      }
    },
  },
};
</script>
<style scoped>
#login-page-container {
  margin-left: 22% !important;
  margin-top: 15% !important;
}
.login-page-inputs {
  margin-bottom: 10px;
}
.login-page-buttons {
  margin-bottom: 10px;
}
</style>
