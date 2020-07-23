<template>
  <div>
    <vs-card>
      <h4>Make An Appointment</h4>
    </vs-card>
    <vs-row>
      <vs-col vs-lg="4">
        <vs-card>
          <form>
            <vs-label for="patientCIN">Your CIN:</vs-label>
            <vs-input name="patientCIN" id="patient-CIN" v-model="patientCIN" disabled></vs-input>
          </form>
        </vs-card>
      </vs-col>
      <vs-col vs-lg="8">
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
    };
  },
  methods: {
    handleDateClick: function () {
      this.popupActivo = true;
    },
  },
  beforeMount: async function () {},
};
</script>
