<template>
  <vs-row>
    <vs-col vs-lg="12" vs-xs="12">
      <vs-card>
        <h1 class="mb-1 font-weight-normal">{{availableRooms(number)}}%</h1>
        <span class="text-muted"><h1>Available Rooms</h1></span>
        <vs-progress :percent="availableRooms(number)" color="success">success</vs-progress>
      </vs-card>
    </vs-col>
   
  </vs-row>
</template>
<script>
import axios from "axios";
export default {
  name: "States",
  data() {
    return {
      number: "",
    };
  },
  methods:{
    availableRooms(num){
      return ((num/250)*100)
    }
  },
  async beforeMount() {
  let available =  await axios.post("/api/clinicX/rooms", {
        availibility: true,
      });
      
      this.number = available.data.length
  }
};
</script>