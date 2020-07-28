<template>
  <div class="main-wrapper">
    <!---Navigation-->
    <Navbar
      :topbarColor="topbarColor"
      :logo="require('@/assets/images/logo/logo-light-icon.png')"
      :title="logotitle"
    />
    <!---Sidebar-->
    <SideBar
      parent=".main-wrapper"
      :sideBarColor="sideBarColor"
      :sidebarLinks="sidebarLinks"
    />
    <!---Page Container-->
    <div class="main-container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./header/Navbar.vue";
import SideBar from "./sidebar/SideBar.vue";
import sidebarLinks from "./sidebar/sidebarlinks.js";

export default {
  name: "Interface",
  components: {
    Navbar,
    SideBar,
  },
  data: () => ({
    topbarColor: "#2F65FF",
    sideBarColor: "dark",
    logotitle: "Ibn Rochd Clinic",
    sidebarLinks: sidebarLinks,
  
  }),
  methods: {},

};
</script>
