<template>
  <div>
    <vs-card>
      <h4>Make An Appointment</h4>
    </vs-card>
    <vs-row>
      <vs-col vs-lg="4">
        <vs-row>
          <vs-card>
            <form>
              <label for="patientCIN">Your CIN:</label>
              <vs-input name="patientCIN" id="patient-CIN" v-model="patientCIN" disabled></vs-input>
              <label for="Speciality">Speciality:</label>
              <vs-select
                placeholder="Choose The Speciality"
                name="Speciality"
                autocomplete
                v-model="spec"
                @change="getDoctors"
              >
                <vs-select-item
                  v-for="(speciality, index) in specialities"
                  :key="index"
                  :text="speciality"
                  :value="speciality"
                ></vs-select-item>
              </vs-select>
              <label v-if="doctorsList.length !== 0" for="DoctorName">Doctor Name:</label>
              <vs-select
                placeholder="Choose The Doctor"
                v-model="doctorName"
                @change="inputChange"
                v-if="doctorsList.length !== 0"
                name="DoctorName"
                autocomplete
              >
                <vs-select-item
                  v-for="(doctor, index) in doctorsList"
                  :key="index"
                  :text="doctor.fullName"
                  :value="doctor.fullName"
                ></vs-select-item>
              </vs-select>
            </form>
          </vs-card>
        </vs-row>
        <vs-col v-if="isChosen">
          <vs-card>
            <label for="date">Please Choose The Date:</label>
            <vs-input @change="change" v-model="date" type="date" name="date"></vs-input>
          </vs-card>
        </vs-col>
        <vs-col v-if="isChosen && date !== ''">
          <vs-card>
            <label for="time">Please Choose The Hour:</label>
            <vs-select placeholder="Choose The Hour" v-model="time" name="time">
              <vs-select-item
                v-for="(appoint, index) in availableAppointments"
                :key="index"
                :value="appoint"
                :text="appoint+' H'"
              ></vs-select-item>
            </vs-select>
          </vs-card>
        </vs-col>
        <vs-col v-if="isChosen && time !== ''">
          <vs-card>
            <label for="cause">Please Type In Your Cause:</label>
            <vs-input v-model="cause" name="cause" placeholder="Type The Cause"></vs-input>
          </vs-card>
        </vs-col>
        <vs-col vs-lg="2">
          <vs-button v-if="cause !== ''" color="primary" @click="makeAppoint">Submit</vs-button>
        </vs-col>
      </vs-col>

      <vs-col v-if="isChosen" vs-lg="8">
        <vs-card>
          <FullCalendar :options="calendarOptions"></FullCalendar>
        </vs-card>
        <vs-popup :title="Title" color="black" :active.sync="popupActivo">
          <vs-col v-for="(appointment, index) in appointments" :key="index">
            <vs-card>
              <vs-row>
                <vs-col>
                  <p
                    v-if="appointment.patientCIN == patientCIN"
                  >Your Appointment Is Appointment N°: {{ index + 1 }}</p>
                  <p v-else>Appointment N°: {{ index + 1 }}</p>

                  <br />
                  Time: {{ appointment.time }}
                  <br />
                  <br />
                  <p v-if="appointment.patientCIN == patientCIN">Cause: {{ appointment.cause }}</p>
                  <br />
                </vs-col>
              </vs-row>
              <vs-row>
                <vs-button
                  v-if="appointment.patientCIN == patientCIN"
                  @click="cancelAppoint(appointment)"
                >Cancel Appointment</vs-button>
              </vs-row>
            </vs-card>
          </vs-col>
        </vs-popup>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import axios from "axios";
import TeleSignSDK from "telesignsdk";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import UserService from "../../../services/user.service";
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        events: [],
        weekends: true,
        titleColor: "red",
      },
      patientCIN: '',
      patientName:'',
      currentUser:null,
      doctorCIN: "",
      date: "",
      time: "",
      cause: "",
      appointments: [],
      spec: "",
      popupActivo: false,
      isChosen: false,
      doctorsList: [],
      Title: "",
      availableAppointments: [],
      nonAvailable: [],
      doctorName: "",
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
    };
  },
  methods: {
    async cancelAppoint(appoint) {
      axios.post("/api/appointments/cancelAppointment", { _id: appoint._id });
      this.inputChange();
      this.popupActivo = false;

  

    },
    async makeAppoint() {
      await axios.post("/api/appointments/createAppointment", {
        patientCIN: this.patientCIN,
        patientName: this.patientName,
         doctorName: this.doctorName,
        doctorCIN: this.doctorCIN,
       date: this.date,
        
        
        time: this.time,
        
        cause: this.cause,
        state: false,
      });
      this.inputChange();
    },
    change() {
      this.nonAvailable = [];
      this.availableAppointments = [];
      this.time = "";
      this.cause = "";
      for (let i = 0; i < this.calendarOptions.events.length; i++) {
        if (this.calendarOptions.events[i].date === this.date) {
          this.nonAvailable.push(this.calendarOptions.events[i].time);
        }
      }
      for (let i = 8; i <= 18; i++) {
        if (!this.nonAvailable.includes(i.toString()) && i !== 12) {
          this.availableAppointments.push(i.toString());
        }
      }
    },
    handleDateClick(arg) {
      this.appointments = [];
      for (let i = 0; i < this.calendarOptions.events.length; i++) {
        if (this.calendarOptions.events[i].date === arg.dateStr) {
          this.appointments.push(this.calendarOptions.events[i]);
        }
      }
      this.Title = "Appointments For " + arg.dateStr;
      this.popupActivo = true;
    },
    async inputChange() {
      this.calendarOptions.events = [];
      let doctor = await axios.post(
        `/api/users/clinicX/doctors/searchDoctors`,
        {
          fullName: this.doctorName,
        }
      );
      this.doctorCIN = doctor.data[0].CIN;
      let appoints = await axios.post(`/api/appointments/appointment`, {
        doctorCIN: doctor.data[0].CIN,
        state: false,
      });
      this.calendarOptions.events = appoints.data;
      for (let i = 0; i < this.calendarOptions.events.length; i++) {
        if (this.calendarOptions.events[i].patientCIN === this.patientCIN) {
          this.calendarOptions.events[
            i
          ].title = `Your Appointment At ${this.calendarOptions.events[i].time}`;
        } else {
          this.calendarOptions.events[
            i
          ].title = `Appointment At ${this.calendarOptions.events[i].time}`;
        }
      }
      this.date = "";
      this.time = "";
      this.cause = "";
      this.nonAvailable = [];
      this.availableAppointments = [];
      this.isChosen = true;
    },
    getDoctors: async function () {
      let doctors = await axios.post(
        `/api/users/clinicX/doctors/searchDoctors`,
        {
          speciality: this.spec,
        }
      );
      this.doctorsList = doctors.data;
      if (this.doctorsList.length === 0) {
        this.date = "";
        this.time = "";
        this.cause = "";
        this.nonAvailable = [];
        this.availableAppointments = [];
        this.isChosen = false;
        this.doctorName = "";
      }
    },
  },
  beforeMount() {
    UserService.getPatientBoard().then(
      async (response) => {
        this.currentUser = response;
        this.patientCIN = this.currentUser.CIN
        this.patientName = this.currentUser.fullName
      },
      (error) => {
        this.content =
          (error.currentUser && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>


