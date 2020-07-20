<template>
  <div class="main-wrapper">
    <!---Navigation-->
    <Navbar
      :topbarColor="topbarColor"
      :logo="require('@/assets/images/logo/logo-light-icon.png')"
      :title="logotitle"
    />
    <!---Sidebar-->
    <SideBar parent=".main-wrapper" :sidebarLinks="sidebarLinks" />
    <!---Page Container-->
    <div class="main-container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/administrator/fullAdmin/header/Navbar.vue";
import SideBar from "@/administrator/fullAdmin/sidebar/SideBar.vue";
import sidebarLinks from "@/administrator/fullAdmin/sidebar/sidebarlinks.js";

export default {
  name: "adminInterface",
  components: {
    Navbar,
    SideBar,
  },
  data: () => ({
    topbarColor: "#3D89FF",
    logotitle: "Ibn Rochd Clinic",
    sidebarLinks: sidebarLinks,
  }),
  methods: {},
};
</script>
