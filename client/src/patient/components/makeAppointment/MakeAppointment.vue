<template>
  <div>
    <vs-card>
      <h4>Make An Appointment</h4>
    </vs-card>
    <vs-row>
      <vs-col vs-lg="4">
        <vs-card>
          <form>
            <label for="patientCIN">Your CIN:</label>
            <vs-input
              name="patientCIN"
              id="patient-CIN"
              v-model="patientCIN"
              disabled
            ></vs-input>
            <label for="Speciality">Speciality:</label>
            <vs-select
              name="Speciality"
              autocomplete
              v-model="doctor.speciality"
              @change="getDoctors"
            >
              <vs-select-item
                v-for="(speciality, index) in specialities"
                :key="index"
                :text="speciality"
                :value="speciality"
              ></vs-select-item>
            </vs-select>
            <label v-if="doctor.speciality !== ''" for="DoctorName"
              >Doctor Name:</label
            >
            <vs-select
              @change="inputChange"
              v-if="doctor.speciality !== ''"
              name="DoctorName"
              autocomplete
              v-model="doctor"
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
      </vs-col>
      <vs-col v-if="isChosen" vs-lg="8">
        <vs-card>
          <FullCalendar :options="calendarOptions"></FullCalendar>
        </vs-card>
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
        appointments: [],
      },
      popupActivo: false,
      patientCIN: "14404510",
      doctorsList: [],
      doctor: { name: "", speciality: "", CIN: "" },
      isChosen: false,
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
    handleDateClick: function() {
      this.popupActivo = true;
    },
    inputChange() {
      // let doctors = await axios.post("/api/appointments", {});
      this.isChosen = true;
    },
    getDoctors: async function() {
      let doctors = await axios.post("/api/users/clinicX/doctors/", {
        speciality: this.doctor.speciality,
      });
      this.doctorsList = doctors.data;
    },
  },
};
</script>
