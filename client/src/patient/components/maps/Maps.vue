<template>
  <div>
    <div>maps</div>
    <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
    <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="satellite"
  style="width: 500px; height: 300px"
>
  
</GmapMap>
<!-- <input v-model=vm.searchPlace v-gmaps-searchbox=vm> -->
  </div>
</template>
<script>
import { Client, Status } from "@googlemaps/google-maps-services-js";
export default {
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => {
        alert(error);
      });
  },
};
</script>
