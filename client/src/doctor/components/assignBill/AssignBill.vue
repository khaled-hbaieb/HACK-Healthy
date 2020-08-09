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
              <vs-button @click="assignBill(appointment)">Assign Bill</vs-button>
            </vs-card>
          </vs-col>
        </vs-popup>
        <vs-popup :title="this.date" color="black" :active.sync="popupActivo2">
          <form v-if="appointment!==null" class="form-material form-horizontal">
            <label class="col-md-12" for="example-text">Patient CIN</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="number"
              id="example-text"
              name="example-text"
              placeholder="Patient CIN"
              v-model="appointment.patientCIN"
              disabled
            />
            <label class="col-md-12" for="paydate">Doctor CIN</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="text"
              id="paydate"
              name="paydate"
              placeholder="Doctor CIN"
              v-model="appointment.doctorCIN"
              disabled
            />
            <label class="col-md-12" for="pname">Patient Name</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="text"
              id="pname"
              name="pname"
              v-model="appointment.patientName"
              disabled
            />
            <label class="col-md-12" for="dname">Doctor Name</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="text"
              id="dname"
              name="dname"
              v-model="appointment.doctorName"
              disabled
            />
            <label class="col-md-12" for="time">Hour</label>
            <vs-input
              class="make-bill-admin-inputs"
              type="text"
              id="time"
              name="time"
              v-model="appointment.time"
              disabled
            />
            <label class="col-md-12" for="fiamt">Final Amount</label>
            <vs-input
              v-model="finalAmount"
              class="make-bill-admin-inputs"
              type="number"
              id="fiamt"
              name="fiamt"
            />
            <label class="col-sm-12">Payment Method</label>
            <vs-select
              placeholder="Select The Payment Method"
              v-model="paymentMethod"
              :success="paymentMethod !== ''"
              success-text="Thank You For Selecting The Payment Method"
              class="select"
            >
              <vs-select-item text="Cash" value="Cash"></vs-select-item>
              <vs-select-item text="Cheque" value="Cheque"></vs-select-item>
              <vs-select-item text="Credit Card" value="Credit Card"></vs-select-item>
              <vs-select-item text="Debit Card" value="Debit Card"></vs-select-item>
              <vs-select-item text="Netbanking" value="Netbanking"></vs-select-item>
              <vs-select-item text="Insurance" value="Insurance"></vs-select-item>
            </vs-select>
            <label class="col-sm-12">Payment Status</label>
            <vs-select
              placeholder="Select The Payment Status"
              v-model="paymentStatus"
              :success="paymentStatus !== ''"
              success-text="Thank You For The Payment Status"
              class="select"
            >
              <vs-select-item text="Paid" value="Paid"></vs-select-item>
              <vs-select-item text="Pending" value="Pending"></vs-select-item>
            </vs-select>
            <hr />
            <vs-row>
              <vs-col vs-lg="8"></vs-col>
              <vs-col vs-lg="4" id="button-admin-bill-container">
                <vs-button type="submit" class="btn btn-inverse waves-effect waves-light">Cancel</vs-button>
                <vs-button
                  type="submit"
                  class="btn btn-info waves-effect waves-light m-r-10"
                  @click="confirmBill"
                >Submit</vs-button>
              </vs-col>
            </vs-row>
          </form>
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
      popupActivo2: false,
      Title: "",
      date: "",
      patientName: "",
      doctorName: "",
      finalAmount: "",
      paymentStatus: "",
      paymentMethod: "",
      appointment: null,
      id: "",
    };
  },
  methods: {
    async getAppoints() {
      let user = await UserService.getDoctorBoard();
      this.currentUser = user;
      let appoints = await axios.post(`/api/appointments/appointment`, {
        doctorCIN: this.currentUser.CIN,
        state: false,
      });
      for (let i = 0; i < appoints.data.length; i++) {
        appoints.data[i].title = `Appointment At ${appoints.data[i].time}`;
      }
      this.calendarOptions.events = appoints.data;
    },
    assignBill(arg) {
      let appointmentBill = {
        patientName: arg.patientName,
        doctorName: arg.doctorName,
        patientCIN: arg.patientCIN,
        doctorCIN: arg.doctorCIN,
        time: arg.time,
      };
      this.id = arg._id;
      this.appointment = appointmentBill;
      this.popupActivo = false;
      this.popupActivo2 = true;
    },
    async confirmBill() {
      this.appointment.toPay = this.finalAmount;
      this.appointment.state = this.paymentStatus;
      this.appointment.paymentMethod = this.paymentMethod;
      this.appointment.date = this.date;
      await axios.post(
        `/api/clinicX/appointmentBills/makeAppointmentBill`,
        this.appointment
      );
      await axios.post("/api/appointments/checkoutAppointment", {
        _id: this.id,
      });
      this.popupActivo2 = false;
      this.finalAmount = "";
      this.paymentStatus = "";
      this.paymentMethod = "";
      this.getAppoints();
    },
    handleDateClick: function (arg) {
      this.calendarOptions.appointments = [];
      this.date = arg.dateStr;
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
    this.getAppoints();
  },
};
</script>
