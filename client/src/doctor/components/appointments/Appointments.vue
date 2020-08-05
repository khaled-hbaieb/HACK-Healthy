<template lang="html">
  <div>
    <vs-table :data="appoints">
      <template slot="header">
        <h3>
          Appointments
        </h3>
      </template>
      <template slot="thead">
        <vs-th>Patient Name</vs-th>
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
          <vs-td :data="data[indextr].doctorCIN">{{
            data[indextr].patientName
          }}</vs-td>
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
import axios from "axios";
import UserService from "../../../services/user.service";
export default {
  data: () => ({
    
    currentUser:null,
    appoints: [],
  }),
  async beforeMount () {
      UserService.getDoctorBoard().then(
      async (response) => {
        this.currentUser = response;
        
        // console.log(this.currentUser)
        let appoints = await axios.post("/api/appointments/appointment", {
          doctorCIN: this.currentUser.CIN,
        });
        this.appoints = appoints.data;
        console.log(this.appoints)
      },
      (error) => {
        this.content =
          (error.currentUser && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    // console.log(this.appoints)
  },
};
</script>
<style></style>
