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
            <vs-select name="Speciality" autocomplete v-model="spec" @change="getDoctors">
              <vs-select-item
                v-for="(speciality, index) in specialities"
                :key="index"
                :text="speciality"
                :value="speciality"
              ></vs-select-item>
            </vs-select>
            <label v-if="doctorsList.length !== 0" for="DoctorName">Doctor Name:</label>
            <vs-select
              @change="inputChange"
              v-if="doctorsList.length !== 0"
              name="DoctorName"
              autocomplete
              v-model="doctorName"
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
        <vs-row>
          <vs-col>
            <vs-card>

            Hellooo
            </vs-card>
          </vs-col>
        </vs-row>
      
      </vs-col>
      <vs-col v-if="isChosen" vs-lg="8">
        <vs-card>
          <FullCalendar :options="calendarOptions"></FullCalendar>
        </vs-card>
        <vs-popup :title="Title" color="black" :active.sync="popupActivo">
          <vs-col v-for="(appointment,index) in appointments" :key="index">
            <vs-card>
              Appointment N°: {{index+1}}
              <br />
              Time: {{appointment.time}}
              <br />
            </vs-card>
          </vs-col>
        </vs-popup>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import axios from "axios";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

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
      appointments: [],
      spec: "",
      popupActivo: false,
      popupActivo2: false,
      patientCIN: "14404510",
      doctorsList: [],
      Title: "",
      isChosen: false,
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
    handleDateClick: function (arg) {
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
      let doctor = await axios.post("/api/users/clinicX/doctors", {
        fullName: this.doctorName,
      });
      let appoints = await axios.post("/api/appointments/appointment", {
        doctorCIN: doctor.data.CIN,
      });
      this.calendarOptions.events = appoints.data;
      for (let i = 0; i < appoints.data.length; i++) {
        appoints.data[i].title = `Appointment At ${appoints.data[i].time}`;
      }
      console.log(this.calendarOptions.events);
      this.isChosen = true;
    },
    getDoctors: async function () {
      let doctors = await axios.post("/api/users/clinicX/doctors/", {
        speciality: this.spec,
      });
      this.doctorsList = doctors.data;
    },
  },
};
</script>
