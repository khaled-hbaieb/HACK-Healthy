<template lang="html">
  <div>
    <vs-table :data="appoints">
      <template slot="header">
        <h3>
          Appointments
        </h3>
      </template>
      <template slot="thead">
  <vs-th>Doctor Name</vs-th>
  <vs-th>Date</vs-th>
  <vs-th>Hour</vs-th>
  <vs-th>Cause</vs-th>
  <vs-th>State</vs-th>
</template>

      <template slot-scope="{ data }">
  <vs-tr
    :state="data[indextr].state == true ? 'success' : 'primary'"
    :key="indextr"
    v-for="(tr, indextr) in data"
  >
    <vs-td :data="data[indextr].doctorCIN">
      {{
      data[indextr].doctorName
      }}
    </vs-td>
    <vs-td :data="data[indextr].date">{{ data[indextr].date }}</vs-td>
    <vs-td :data="data[indextr].time">{{ data[indextr].time }}</vs-td>
    <vs-td :data="data[indextr].cause">{{ data[indextr].cause }}</vs-td>
    <vs-td :data="data[indextr].state">{{ data[indextr].state }}</vs-td>
  </vs-tr>
</template>
    </vs-table>
  </div>
</template>
<script>
import UserService from "../../../services/user.service";
import axios from "axios";
export default {
  data: () => ({
    currentUser: null,
    appoints: [],
    currentUser: null,
    appoints: [],
  }),
  async beforeMount() {
    let patient = await UserService.getPatientBoard();
    this.currentUser = patient;
    let appoints = await axios.post("/api/appointments/findAppointments", {
      patientCIN: this.currentUser.CIN,
    });
    this.appoints = appoints.data;
  },
};
</script>
<style></style>
