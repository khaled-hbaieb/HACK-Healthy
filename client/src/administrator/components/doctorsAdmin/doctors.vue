<template>
  <div>  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "doctors",
  data: () => ({
    title: "Doctors",
    search: ""
  }),
  methods: {
    increment() {
      this.badge1++;
      this.badge2++;
    },
  }
};
</script>
<style scoped>
</style>

