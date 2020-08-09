<template>
  <div>
    <vs-row>
      <vs-card>
        <h4>Calendar</h4>
      </vs-card>
    </vs-row>
    <vs-row>
      <vs-col vs-lg="12">
        <vs-card>
          <FullCalendar :options="calendarOptions" />
        </vs-card>
        <vs-popup :title="Title" color="black" :active.sync="popupActivo">
          <vs-col v-for="(appointment, index) in calendarOptions.appointments" :key="index">
            <vs-card>
              Appointment N°: {{ index + 1 }}
              <br />
              Patient Name: {{ appointment.patientName }}
              <br />
              Time: {{ appointment.time }}
              <br />
              Cause: {{ appointment.cause }}
              <br />
            </vs-card>
          </vs-col>
        </vs-popup>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import UserService from "../../../services/user.service";
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
      Title: "",
    };
  },
  methods: {
    handleDateClick: function (arg) {
      this.calendarOptions.appointments = [];
      for (let i = 0; i < this.calendarOptions.events.length; i++) {
        if (this.calendarOptions.events[i].date === arg.dateStr) {
          this.calendarOptions.appointments.push(
            this.calendarOptions.events[i]
          );
        }
      }
      this.Title = "Appointments For " + arg.dateStr;
      this.popupActivo = true;
    },
  },
  beforeMount: async function () {
    UserService.getDoctorBoard().then(
      async (response) => {
        this.currentUser = response;
        let appoints = await axios.post(`/api/appointments/appointment`, {
          doctorCIN: this.currentUser.CIN,
          state: false,
        });
        for (let i = 0; i < appoints.data.length; i++) {
          appoints.data[i].title = `Appointment At ${appoints.data[i].time}`;
        }
        this.calendarOptions.events = appoints.data;
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
