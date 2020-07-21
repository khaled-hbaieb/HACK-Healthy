<template>
  <div
    class="login-register"
    style="background-image:url(../assets/images/background/login-register.jpg);"
  >
    <vs-card class="login-box">
      <form
        class="form-horizontal form-material"
        id="loginform"
        action="index.html"
      >
        <h3 class="text-center m-b-20">Sign In</h3>
        <div class="form-group ">
          <div class="col-xs-12">
            <vs-input
              type="text"
              required=""
              placeholder="Email"
              v-model="email"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12">
            <vs-input
              type="password"
              required=""
              placeholder="Password"
              v-model="password"
            />
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
    
    </div> -->
    <div>
        <p>I'am a: </p>
    <vs-button :color="colorx" type="border" v-bind="doctor" @click="clickDoctor">Doctor</vs-button>
    <vs-button :color="colorx" type="border" v-bind="admin" @click="clickAdmin">Administrator</vs-button>
    <vs-button :color="colorx" type="border" v-bind="patient" @click="clickPatient">Patient</vs-button>
    </div>
        <div class="form-group row">
          <div class="col-md-12">
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
              
              <div class="ml-auto">
                <a href="javascript:void(0)" id="to-recover" class="text-muted"
                  ><i class="fas fa-lock m-r-5"></i> Forgot pwd?</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="form-group text-center">
          <div class="col-xs-12 p-b-20">
            <vs-button
              class="btn btn-block btn-lg btn-info btn-rounded"
              @click="login"
            >
              Log In
            </vs-button>
          </div>
        </div>
        <vs-row class="row">
          <vs-col class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
            <button
              class="btn  btn-facebook"
              data-toggle="tooltip"
              title="Login with Facebook"
            >
              <i aria-hidden="true" class="fab fa-facebook-f"></i>
            </button>
            <vs-button
              class="btn btn-googleplus"
              data-toggle="tooltip"
              title="Login with Google"
            >
              <i aria-hidden="true" class="fab fa-google-plus-g"></i>
            </vs-button>
          </vs-col>
        </vs-row>
        <div class="form-group m-b-0">
          <div class="col-sm-12 text-center">
            Don't have an account?
            <a class="text-info m-l-5" ><b>Sign Up</b></a>
          </div>
        </div>
      </form>
      <form class="form-horizontal" id="recoverform">
        <div class="form-group ">
          <vs-col class="col-xs-12">
            <h3>Recover Password</h3>
            <p class="text-muted">
              Enter your Email and instructions will be sent to you!
            </p>
          </vs-col>
        </div>
        <div class="form-group ">
          <vs-col class="col-xs-12">
            <vs-input type="text" required="" placeholder="Email" />
          </vs-col>
        </div>
        <div class="form-group text-center m-t-20">
          <div class="col-xs-12">
            <vs-button
              class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
              type="submit"
            >
              Reset
            </vs-button>
          </div>
        </div>
      </form>
    </vs-card>
    
     
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data:() => {
    return {
      email: "",
      password: "",
      users:[{text: 'Administrator', value: 1},
        {text: 'Doctor', value: 2},
        {text: 'Patient', value: 3}],
        colorx:'#c72a75',
        admin:'',
        patient:'',
        doctor:'',
    };
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      console.log(this.admin.length)
      if(this.admin.length !== 0 && this.patient.length === 0 && this.doctor.length === 0) {
axios.post("/api/users/clinicX/administrators", user).then((res) => {
  console.log(res)
    // if(res.status === 200)
    // this.$router.push("/administrator");
})
      }
      else if (this.admin.length === 0 && this.patient.length !== 0 && this.doctor.length === 0) {
          axios.post("/api/users/clinicX/patients", user).then((res) => {
    // if(res.status === 200)
    // this.$router.push("/patient");
})
      }
      else if(this.admin.length === 0 && this.patient.length === 0 && this.doctor.length !== 0) {
          axios.post("/api/users/clinicX/doctors", user).then((res) => {
    // if(res.status === 200)
    // this.$router.push("/doctor");
})
      }
    //   axios.post("/api/users/clinicX/administrators", user).then((res) => {
        //if successfull
        // console.log(res.data);
        // if(res.data)
        // const id = res.data.
        // this.$router.push("/administrator");
        // if (res.status === 200) {
        //   localStorage.setItem("token", res.data.token);
        //   this.$router.push('/administrator')
        // }
    //   });
    },
    clickAdmin() {
        this.admin = 'admin'
        console.log(this.admin)
    },
    clickPatient() {
this.patient = 'patient'
        console.log(this.patient)
    },
    clickDoctor() {
this.doctor = 'doctor'
        console.log(this.doctor)
    },
  },
};
</script>

<style scoped></style>
