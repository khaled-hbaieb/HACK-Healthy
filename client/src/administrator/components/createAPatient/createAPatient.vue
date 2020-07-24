<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <h4 id="t1" class="text-themecolor">Add A Patient</h4>

          <h6 id="t2" class="text-themecolor">
            <a href="/patients">Patients</a> > Patient
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
              id="select-gender-patient-creation"
            >
              <vs-select-item text="Male" value="Male"></vs-select-item>
              <vs-select-item text="Female" value="Female"></vs-select-item>
            </vs-select>
            <label class="col-sm-12">Profile Image</label>
            <div class="centerx">
              <vs-upload
                automatic
                action="http://localhost:3000/upload-images"
                fileName="image"
                @change="onFilePicked"
                @on-success="onFileUploaded"
              />
            </div>
            <label class="col-md-12" for="special">CIN</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="number"
              id="url"
              name="url"
              placeholder="Your CIN"
              v-model="CIN"
            />
            <label class="col-md-12" for="special">Job</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="url"
              placeholder="Your Job"
              v-model="job"
            />
            <label class="col-md-12" for="special">address</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="url"
              name="url"
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
              type="text"
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
              v-model="fatherNumber"
            />
            <label class="col-md-12" for="example-email">Mother Name</label>
            <vs-input
              class="doctor-form-inputs-doctor-creation"
              type="text"
              id="example-email"
              name="example-email"
              placeholder="Mother Name"
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
              @click="submitForm"
              >Submit</vs-button
            >
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "createDoctor",
  data: () => {
    return {
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
      pwd: "",
      cpwd: "",
      job: "",
      address: "",
      imageName: "",
      bloodType: "",
      image: null,
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
  methods: {
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: this.name + " Uploaded The image Successfully!",
      });
    },
    addAllergyInput() {
      this.allergyInputs.push({
        id: "allergy",
        type: "text",
        name: "allergies",
        placeholder: "Enter The Allergy",
      });
    },
    addVaccinationInput() {
      this.vaccinationInputs.push({
        id: "vaccination",
        type: "text",
        name: "vaccinations",
        placeholder: "Enter The Vaccination",
      });
    },
    submitForm() {
      let newPatient = {
        fullName: this.fullName,
        email: this.email,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        password: this.pwd,
        CIN: this.CIN,
        phoneNumber: this.phoneNumber,
        address: this.address,
        job: this.job,
        image: this.image,
      };
      axios.post("/api/users/clinicX/patients/createPatient", newPatient);
    },

    onFilePicked(event) {
      const fileName = event.slice(12);
      this.imageName = fileName;
    },
    onFileUploaded(event) {
      this.image = event.target.response;
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
