<template>
  <vs-row>
    <vs-col vs-lg="6" vs-xs="12">
      <vs-card>
        <h3 class="mb-1 font-weight-normal">86%</h3>
        <span class="text-muted">Available Rooms</span>
        <vs-progress :percent="86" color="success">success</vs-progress>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="6" vs-xs="12">
      <vs-card>
        <h3 class="mb-1 font-weight-normal">40%</h3>
        <span class="text-muted">Available Doctors</span>
        <vs-progress :percent="40" color="primary">primary</vs-progress>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
export default {
  name: "States"
};
</script>