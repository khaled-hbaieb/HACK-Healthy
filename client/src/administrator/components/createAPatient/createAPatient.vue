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
              placeholder="Enter your Full Name"
              v-model="fullName"
              :success="fullName !== ''"
              success-text="Thank You For Typing your Full Name"
            />
            <label class="col-md-12" for="bdate">Date of Birth</label>
            <vs-input
              v-model="dateOfBirth"
              class="doctor-form-inputs-doctor-creation"
              type="date"
              id="bdate"
              name="bdate"
              :success="dateOfBirth !== ''"
              success-text="Thank You For Entering Your Date Of Birth"
            />
            <label class="col-sm-12" for="gender">Gender</label>
            <vs-select
              placeholder="Select Your Gender"
              name="gender"
              :success="gender === 'Male' || gender === 'Female'"
              success-text="Thank You For Selecting Your Gender"
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
              placeholder="Your CIN"
              :success="CIN.length === 8"
              success-text="Thank You For Entering Your CIN"
              v-model="CIN"
            />
            <label class="col-md-12" for="job">Job</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="job"
              :success="job !== ''"
              success-text="Thank You For Entering Your Job"
              placeholder="Your Job"
              v-model="job"
            />
            <label class="col-md-12" for="address">address</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="address"
              :success="address !== ''"
              success-text="Thank You For Entering Your Address"
              placeholder="Your CIN"
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
              success-text="Thank You For Entering Your Email"
              placeholder="enter your email"
              v-model="email"
              required
            />
            <label class="col-md-12" for="phone">Phone</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="example-phone"
              name="phone"
              placeholder="enter your phone"
              :success="phoneNumber.length === 8"
              success-text="Thank You For Entering Your Phone Number"
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
              v-model="password"
              placeholder="enter your password"
              required
            />
            <div>
              <label class="col-md-12" for="cpwd">Confirm Password</label>
              <vs-input
                class="doctor-form-inputs-doctor-creation"
                type="password"
                id="cpwd"
                name="cpwd"
                placeholder="confirm your password"
                v-model="cpwd"
                required
              />
              <!-- <slot v-if="validPassword" #message-success>
                Password match
              </slot> -->
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
              success-text="Thank You For Entering Your Father's Name"
              placeholder="Father Name"
              v-model="fatherName"
            />
            <label class="col-md-12" for="example-email"
              >Father Phone Number</label
            >
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-email"
              name="example-email"
              placeholder="Father Name"
              :success="fatherNumber.length === 8"
              success-text="Thank You For Entering Your Father's Phone Number"
              v-model="fatherNumber"
            />
            <label class="col-md-12" for="example-email">Mother Name</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="example-email"
              name="example-email"
              placeholder="Mother Name"
              :success="motherName !== ''"
              success-text="Thank You For Entering Your Mother's Name"
              v-model="motherName"
            />
            <label class="col-md-12" for="example-email"
              >Mother Phone Number</label
            >
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="example-email"
              name="example-email"
              placeholder="Mother Name"
              :success="motherNumber.length === 8"
              success-text="Thank You For Entering Your Mother's Phone Number"
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
            />
            <label class="col-md-12" for="pwd">Blood Type</label>
            <vs-select
              placeholder="Select The Blood Type"
              success-text="Thank You For Selecting The Blood Type"
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
              success-text="Thank You For Entering Your Allergy"
            />
            <vs-button
              color="dark"
              type="line"
              icon="add"
              id="allergy-button"
              @click="addAllergyInput"
              >Add Allergy Input</vs-button
            >
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
              >Add Vaccination Input</vs-button
            >
          </form>
          <div id="button-admin-patient-container">
            <vs-button
              type="submit"
              class="btn btn-inverse waves-effect waves-light"
              >Cancel</vs-button
            >
            <vs-button
              type="submit"
              class="btn btn-info waves-effect waves-light m-r-10"
              @click="handleRegister"
              >Submit</vs-button
            >
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
      successful: false,
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
    handleRegister() {
      let user;
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
      axios.post("/api/users/clinicX/record/createRecord", record);
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
