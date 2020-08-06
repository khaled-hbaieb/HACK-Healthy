<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <h4 id="t1" class="text-themecolor">Add A Doctor</h4>

          <h6 id="t2" class="text-themecolor">
            <a href="/administrator/doctors">Doctors</a> > Doctor
          </h6>
        </vs-card>
      </vs-col>
    </vs-row>

    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card class="card">
          <h5 class="card-title">Basic Informations</h5>
          <form class="form-material form-horizontal">
            <label class="col-md-12" for="example-text">Name</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="example-text"
              name="example-text"
              placeholder="Enter your Full Name"
              v-model="fullName"
            />
            <label class="col-md-12" for="bdate">Date of Birth</label>
            <vs-input
              v-model="dateOfBirth"
              class="doctor-form-inputs-doctor-creation"
              type="date"
              id="bdate"
              name="bdate"
            />
            <label class="col-sm-12">Gender</label>
            <vs-select
              placeholder="Select Your Gender"
              :success="gender === 'Male' || gender === 'Female'"
              success-text="Thank You For Selecting Your Gender"
              v-model="gender"
              id="select-gender-doctor-creation"
            >
              <vs-select-item text="Male" value="Male"></vs-select-item>
              <vs-select-item text="Female" value="Female"></vs-select-item>
            </vs-select>
            <label class="col-md-12" for="url">CIN</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="url"
              name="url"
              placeholder="Your CIN"
              v-model="CIN"
            />
            <div class="images-container">
              <div class="images-container-body">
                <label class="col-sm-12">Profile Image</label>
                <div class="centerx">
                  <vs-upload
                    automatic
                    :action="backEndUrl"
                    fileName="image"
                    @on-success="onFileUploaded"
                  />
                </div>
              </div>
              <div class="images-container-body">
                <label class="col-sm-12">CIN & Certificate Images</label>
                <div class="centerx">
                  <vs-upload
                    automatic
                    :action="backEndUrl"
                    fileName="image"
                    @on-success="onFileUploaded"
                  />
                </div>
              </div>
            </div>
            <label class="col-md-12" for="special">Speciality</label>
            <vs-select
              placeholder="Select Your Speciality"
              success-text="Thank You For Selecting Your Speciality"
              :success="speciality !== ''"
              id="select-speciality-doctor-creation"
              v-model="speciality"
            >
              <vs-select-item
                v-for="(speciality, index) in specialities"
                :text="speciality"
                :key="index"
                :value="speciality"
              ></vs-select-item>
            </vs-select>
            <label class="col-md-12">Description</label>
            <vs-textarea id="textarea-doctor-creation"></vs-textarea>
            <label class="col-md-12" for="url">Years Of Experience</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="url"
              placeholder="Your Years Of Experience"
              v-model="yearsOfExperience"
            />
            <label class="col-md-12" for="url">Education Background</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="url"
              placeholder="Your Education Background"
              v-model="educationBackground"
            />
            <label class="col-md-12" for="url">Address</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="url"
              placeholder="Your Address"
              v-model="address"
            />
          </form>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row class="row">
      <vs-col class="col-sm-6">
        <vs-card class="card">
          <h5 class="card-title">Doctor's Account Information</h5>
          <form class="form-material form-horizontal">
            <label class="col-md-12" for="example-email">Email</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="email"
              id="example-email"
              name="example-email"
              placeholder="enter your email"
              v-model="email"
            />
            <label class="col-md-12" for="example-phone">Phone</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-phone"
              name="example-phone"
              placeholder="enter your phone"
              data-mask="(999) 999-9999"
              v-model="phoneNumber"
            />
            <label class="col-md-12" for="pwd">Password</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="password"
              id="pwd"
              name="pwd"
              v-model="pwd"
              placeholder="enter your password"
            />
            <label class="col-md-12" for="cpwd">Confirm Password</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="password"
              id="cpwd"
              name="cpwd"
              placeholder="confirm your password"
              v-model="cpwd"
            />
          </form>
        </vs-card>
      </vs-col>
      <vs-col class="col-sm-6">
        <vs-card class="card">
          <h5 class="card-title">Doctor's Social Information</h5>
          <form class="form-material form-horizontal">
            <label class="col-md-12" for="furl">Facebook URL</label>
            <vs-input
              v-model="fURL"
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="furl"
              name="furl"
              placeholder="Your Facebook URL"
            />
            <label class="col-md-12" for="turl">Twitter URL</label>
            <vs-input
              v-model="gURL"
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="gurl"
              name="gurl"
              placeholder="Your Twitter URL"
            />
            <label class="col-md-12" for="inurl">LinkedIN URL</label>
            <vs-input
              v-model="inURL"
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="inurl"
              name="inurl"
              placeholder="Your LinkedIN URL"
            />
            <div id="buttons-doctor-creation">
              <vs-button
                type="submit"
                class="btn btn-inverse waves-effect waves-light"
                >Cancel</vs-button
              >
              <vs-button
                type="submit"
                class="btn btn-info waves-effect waves-light m-r-10"
                @click="handleRegisterDoc"
                >Submit</vs-button
              >
            </div>
          </form>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Doctor from "../../../models/doctor";
export default {
  name: "createDoctor",
  data: () => {
    return {
      fullName: "",
      email: "",
      gender: "",
      dateOfBirth: "",
      speciality: "",
      yearsOfExperience: "",
      fURL: "",
      gURL: "",
      inURL: "",
      phoneNumber: "",
      pwd: "",
      cpwd: "",
      address: "",
      imageName: "",
      educationBackground: "",
      CIN: "",
      specialities: [
        "ALLERGY & IMMUNOLOGY",
        "ANESTHESIOLOGY",
        "DERMATOLOGY",
        "DIAGNOSTIC RADIOLOGY",
        "EMERGENCY MEDICINE",
        "FAMILY MEDICINE",
        "INTERNAL MEDICINE",
        "MEDICAL GENETICS",
        "NEUROLOGY",
        "NUCLEAR MEDICINE",
        "OBSTETRICS AND GYNECOLOGY",
        "OPHTHALMOLOGY",
        "PATHOLOGY",
        "PEDIATRICS",
        "PHYSICAL MEDICINE & REHABILITATION",
        "PREVENTIVE MEDICINE",
        "PSYCHIATRY",
        "RADIATION ONCOLOGY",
        "SURGERY",
        "UROLOGY",
      ],
      successful: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    backEndUrl() {
      return `http://localhost:3000/upload-images`;
    },
  },
  mounted() {},
  validations: {
    name: {
      required,
    },
    gender: {},
  },
  methods: {
    onFileUploaded(event) {
      this.imageName = event.target.response;
    },
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: this.name + " Uploaded The image Successfully!",
      });
    },
    submitForm() {},
    handleRegisterDoc() {
      let user;
      user = new Doctor(
        this.email,
        this.pwd,
        this.fullName,
        this.gender,
        this.dateOfBirth,
        this.phoneNumber,
        this.speciality,
        this.yearsOfExperience,
        this.educationBackground,
        this.address,
        this.CIN,
        this.imageName
      );
      console.log(user)
      this.$store.dispatch("auth/register", { user, role: "doctor" }).then(
        () => {
          this.successful = true;
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    },
  },
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.images-container-body {
  width: 49% !important;
  float: left;
}
#images-container {
  justify-content: space-arround !important;
  width: 100% !important;
  height: 100% !important;
}
#textarea-doctor-creation {
  max-height: 150px !important;
  min-height: 150px !important;
}
#select-gender-doctor-creation,
#select-speciality-doctor-creation {
  width: 100% !important;
}
.doctor-form-inputs-doctor-creation {
  width: 100% !important;
}
#buttons-doctor-creation {
  float: right;
  margin-top: 25px;
}
#header-titles {
  justify-content: space-around !important;
}
#t1,
#t2 {
  width: 49%;
}
#t2 {
  float: right;
  text-align: right;
  margin-top: 0%;
  position: relative !important;
}
</style>
