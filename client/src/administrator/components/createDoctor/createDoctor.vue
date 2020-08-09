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
            <div>
              <div>
                <h2>Doctor's Cabinet Location</h2>
                <vs-label>
                  <gmap-autocomplete @place_changed="setPlace" id="inputLocation"></gmap-autocomplete>
                  <vs-button @click="addMarker">Submit Location</vs-button>
                </vs-label>
                <br />
              </div>
              <br />
              <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  @click="center=m.position"
                ></gmap-marker>
              </gmap-map>
            </div>
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
              <vs-button type="submit" class="btn btn-inverse waves-effect waves-light">Cancel</vs-button>
              <vs-button
                type="submit"
                class="btn btn-info waves-effect waves-light m-r-10"
                @click="handleRegisterDoc"
              >Submit</vs-button>
            </div>
          </form>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import axios from "axios";
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
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      marker: null,
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
  mounted() {
    this.geolocate();
  },
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
    async handleRegisterDoc() {
      let user;
      this.pwd = Math.random().toString(36).slice(-8);
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
        this.imageName,
        this.marker
      );
      this.$store
        .dispatch("auth/register", { user, role: "doctor" })
        .then((err) => {
          if (!err) {
            this.successful = true;
          } else {
            this.successful = false;
          }
        });
      await axios.post("/api/service/SMS", {
        password: this.pwd,
        email: this.email,
        phoneNumber: this.phoneNumber,
      });
    },
    setPlace(place) {
      this.currentPlace = place;
      console.log(this.currentPlace);
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.marker = marker;
        console.log("marker", this.marker);
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
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
#inputLocation {
  width: 30%;
  margin-right: 1%;
}
</style>
