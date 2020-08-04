<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: () => ({}),
  methods: {},
};
</script>
<style>
#app {
  height: 100vh;
  width: 100vw;
}
::-webkit-scrollbar {
  display: none !important;
}
</style>
