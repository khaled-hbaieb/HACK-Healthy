<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <vs-col vs-lg="10">
            <h4 class="text-themecolor">Add A Patient</h4>
          </vs-col>
          <vs-col vs-lg="2">
            <h6 class="text-themecolor">
              <a href="/administrator/patients">Patients</a> > Patient
            </h6>
          </vs-col>
        </vs-card>
      </vs-col>
    </vs-row>

    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card class="card">
          <h5 class="card-title">Basic Informations</h5>
          <form class="form-material form-horizontal">
            <label class="col-md-12" for="fullName">Name</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="example-text"
              name="fullName"
              placeholder="Enter patient's Full Name"
              v-model="fullName"
              :success="fullName.length > 3"
              success-text="Thank You For Typing the Full Name"
            />
            <label class="col-md-12" for="bdate">Date of Birth</label>
            <vs-input
              v-model="dateOfBirth"
              class="doctor-form-inputs-doctor-creation"
              type="date"
              id="bdate"
              name="bdate"
              :success="dateOfBirth !== ''"
              success-text="Thank You For Entering the Date Of Birth"
            />
            <label class="col-sm-12" for="gender">Gender</label>
            <vs-select
              placeholder="Patient's Gender"
              name="gender"
              :success="gender === 'Male' || gender === 'Female'"
              success-text="Thank You For Selecting the Gender"
              v-model="gender"
              id="select-gender-patient-creation"
            >
              <vs-select-item text="Male" value="Male"></vs-select-item>
              <vs-select-item text="Female" value="Female"></vs-select-item>
            </vs-select>
            <label class="col-md-12" for="CIN">CIN</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="url"
              name="CIN"
              placeholder="Patient's CIN"
              :success="CIN.length === 8"
              success-text="Thank You For Entering the CIN"
              v-model="CIN"
              required
            />
            <label class="col-md-12" for="job">Job</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="job"
              :success="job !== ''"
              success-text="Thank You For Entering the Job"
              placeholder="Patient's Job"
              v-model="job"
            />
            <label class="col-md-12" for="address">address</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="address"
              :success="address !== ''"
              success-text="Thank You For Entering the Address"
              placeholder="Patient's Address"
              v-model="address"
            />
          </form>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card class="card">
          <h5 class="card-title">Patient's Account Information</h5>
          <form class="form-material form-horizontal">
            <label class="col-md-12" for="email">Email</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="email"
              id="example-email"
              name="email"
              :success="
                email.length > 8 && email.includes('.') && email.includes('@')
              "
              success-text="Thank You For Entering the Email"
              placeholder="Patient's email"
              v-model="email"
              required
            />
            <label class="col-md-12" for="phone">Phone</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-phone"
              name="phone"
              placeholder="Patient's phone"
              :success="phoneNumber.length === 8"
              success-text="Thank You For Entering the Phone Number"
              data-mask="(+216) 99 999 999"
              v-model="phoneNumber"
              required
              
            />
            <label class="col-md-12" for="password">Password</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="password"
              id="pwd"
              name="password"
              placeholder="Patient's password"
              v-model="password"
              required
            /> 
            <div>
              <label class="col-md-12" for="cpwd">Confirm Password</label>
              <vs-input
                class="doctor-form-inputs-doctor-creation"
                type="password"
                id="cpwd"
                name="cpwd"
                placeholder="confirm the password"
                v-model="cpwd"
                required
              />
              <label v-if="(password === cpwd) && password.length !==0">Password matches</label>
              <label v-else>Passwords do not match</label>
              <!-- <slot v-if="validPassword" #message-success>
                Password match
              </slot>-->
            </div>
          </form>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card class="card">
          <h5 class="card-title">Patient's Record</h5>
          <form class="form-material form-horizontal">
            <label class="col-md-12" for="example-email">CIN</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-email"
              name="example-email"
              placeholder="CIN"
              disabled
              v-model="CIN"
            />
            <label class="col-md-12" for="example-email">Father Name</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="example-email"
              name="example-email"
              :success="fatherName !== ''"
              success-text="Thank You For Entering the Patient's Father's Name"
              placeholder="Patient's Father Name"
              v-model="fatherName"
            />
            <label class="col-md-12" for="example-email">Father Phone Number</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-email"
              name="example-email"
              placeholder="Patient's Father Name"
              :success="fatherNumber.length === 8"
              success-text="Thank You For Entering Patient's Father's Phone Number"
              v-model="fatherNumber"
            />
            <label class="col-md-12" for="example-email">Mother Name</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="example-email"
              name="example-email"
              placeholder="Patient's Mother Name"
              :success="motherName !== ''"
              success-text="Thank You For Entering Patient's Mother's Name"
              v-model="motherName"
            />
            <label class="col-md-12" for="example-email">Mother Phone Number</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-email"
              name="example-email"
              placeholder="Patient's Mother Name"
              :success="motherNumber.length === 8"
              success-text="Thank You For Entering Patient's Mother's Phone Number"
              v-model="motherNumber"
            />
            <label class="col-md-12" for="example-phone">Date Of Birth</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="date"
              id="example-phone"
              name="example-phone"
              disabled
              v-model="dateOfBirth"
              :success="dateOfBirth !== ''"
              success-text="Thank You For Entering the Date Of Birth"
            />
            <label class="col-md-12" for="pwd">Blood Type</label>
            <vs-select
              placeholder="Select The Patient's Blood Type"
              success-text="Thank You For Selecting The Patient's Blood Type"
              :success="bloodType !== ''"
              id="select-bloodType-patient-creation"
              v-model="bloodType"
            >
              <vs-select-item
                v-for="(bloodType, index) in bloodTypes"
                :text="bloodType"
                :key="index"
                :value="bloodType"
              ></vs-select-item>
            </vs-select>
            <label class="col-md-12" for="allergies">Allergies</label>
            <vs-input
              v-for="(input, index) in allergyInputs"
              :key="index"
              :id="input.id"
              :type="input.type"
              :name="input.name"
              :placeholder="input.placeholder"
              v-model="allergy[index]"
              :success="allergy[index] !== ''"
              success-text="Thank You For Entering Patient's Allergy"
            />
            <vs-button
              color="dark"
              type="line"
              icon="add"
              id="allergy-button"
              @click="addAllergyInput"
            >Add Allergy Input</vs-button>
            <br />
            <br />
            <br />
            <label class="col-md-12" for="vaccinations">Vaccinations</label>
            <vs-input
              v-for="(input, index) in vaccinationInputs"
              :key="index + 50"
              :id="input.id"
              :type="input.type"
              :name="input.name"
              v-model="vaccination[index]"
              :success="vaccination[index] !== ''"
              success-text="Thank You For Entering Your Vaccination"
              :placeholder="input.placeholder"
            />
            <vs-button
              color="dark"
              type="line"
              icon="add"
              id="vaccination-button"
              @click="addVaccinationInput"
            >Add Vaccination Input</vs-button>
          </form>
          <div id="button-admin-patient-container">
            <vs-button type="submit" class="btn btn-inverse waves-effect waves-light">Cancel</vs-button>
            <vs-button
              type="submit"
              class="btn btn-info waves-effect waves-light m-r-10"
              @click="handleRegister"
            >Submit</vs-button>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required, email, min, max } from "vee-validate/dist/rules";
import { ValidationProvider } from "vee-validate";
import axios from "axios";
import Patient from "../../../models/patient";
import crypto from "crypto";

extend("required", {
  ...required,
  message: "This field is required",
});

// Add the email rule
extend("email", {
  ...email,
  message: "This field must be a valid email",
});

export default {
  name: "createDoctor",
  data: () => {
    return {
      allergy: [""],
      vaccination: [""],
      fullName: "",
      CIN: "",
      fatherName: "",
      fatherNumber: "",
      motherName: "",
      motherNumber: "",
      dateOfBirth: "",
      gender: "",
      phoneNumber: "",
      email: "",
      password: "",
      cpwd: "",
      job: "",
      address: "",
      bloodType: "",
      bloodTypes: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
      allergyInputs: [
        {
          id: "allergy",
          type: "text",
          name: "allergies",
          placeholder: "Enter The Allergy",
        },
      ],
      vaccinationInputs: [
        {
          id: "vaccination",
          type: "text",
          name: "vaccinations",
          placeholder: "Enter The Vaccination",
        },
      ],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  methods: {
    addAllergyInput() {
      this.allergyInputs.push({
        id: "allergy",
        type: "text",
        name: "allergies",
        placeholder: "Enter The Allergy",
      });
      this.allergy.push("");
    },
    addVaccinationInput() {
      this.vaccinationInputs.push({
        id: "vaccination",
        type: "text",
        name: "vaccinations",
        placeholder: "Enter The Vaccination",
      });
      this.vaccination.push("");
    },
    async handleRegister() {
      if(this.password === this.cpwd) {
        
        let user;
        this.password = Math.random().toString(36).slice(-8);
        user = new Patient(
          this.email,
          this.password,
          this.fullName,
          this.gender,
          this.dateOfBirth,
          this.CIN,
          this.phoneNumber,
          this.address,
          this.job,
          ""
        );
        this.$store.dispatch("auth/register", { user, role: "patient" }).then(
          (data) => {
            if (data.name === "MongoError") {
              this.$vs.notify({
                title: "",
                text: "An Error has occurred!",
                color: "danger",
                position: "top-center",
              });
            } else {
              this.$vs.notify({
                title: "",
                text: "Patient created successfully!",
                color: "primary",
                position: "top-center",
              });
              setTimeout(() => {this.$router.push("/administrator/patients")},2000)
              
            }
          },
          (error) => {
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
        let record = {
          patientCIN: this.CIN,
          dateOfBirth: this.dateOfBirth,
          bloodType: this.bloodType,
          allergies: JSON.stringify(this.allergy),
          vaccinations: JSON.stringify(this.vaccination),
          fatherName: this.fatherName,
          fatherNumber: this.fatherNumber,
          motherName: this.motherName,
          motherNumber: this.motherNumber,
          createdAt: new Date(),
        };
        await axios.post("/api/users/clinicX/record/createRecord", record);
  
        await axios.post("/api/service/SMS", {
          password: this.password,
          email: this.email,
          phoneNumber: this.phoneNumber,
        });
      } else {
        this.$vs.notify({
                title: "",
                text: "An Error has occurred!",
                color: "danger",
                position: "top-center",
              });
      }
    },
  },
};
</script>

<style>
#button-admin-patient-container {
  margin-top: 15px;
  float: right;
}
#allergies-container {
  justify-content: space-arround !important;
}
#vaccinations-container {
  justify-content: space-arround !important;
}
#add-input-icon {
  width: 5%;
}
#allergy-button,
#vaccination-button {
  margin-bottom: 10px;
}
#allergy {
  float: left;
  width: 100% !important;
  margin-bottom: 20px;
}
#vaccination {
  float: left;
  width: 100% !important;
  margin-bottom: 20px;
}
.vs-con-input,
.vs-con-input-label {
  width: 100%;
}
#textarea-doctor-creation {
  max-height: 150px !important;
  min-height: 150px !important;
}
#select-gender-patient-creation,
#select-bloodType-patient-creation {
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
</style>
