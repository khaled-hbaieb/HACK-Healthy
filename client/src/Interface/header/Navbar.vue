<template>
  <header class="gridx">
    <vs-navbar
      v-model="indexActive"
      :color="topbarColor"
      class="topnavbar"
      text-color="rgba(255,255,255,0.7)"
      active-text-color="rgba(255,255,255,1)"
    >
      <div slot="title" class="themelogo">
        <img :src="logo" v-if="logo" alt="Dashboard" />
        <span class="logo-text" v-if="title">{{ title }}</span>
      </div>
      <div slot="title">
        <div class="hiddenDesktop cursor-pointer" @click.stop="activeSidebar">
          <vs-icon icon="menu"></vs-icon>
        </div>
      </div>
      <vs-spacer></vs-spacer>
      <vs-dropdown vs-trigger-click left class="cursor-pointer pr-2 pl-2 ml-1 mr-1">
        <a class="text-white-dark" href="#">
          <vs-icon icon="menu"></vs-icon>
        </a>
        <vs-dropdown-menu class="topbar-dd">
          <vs-dropdown-item @click="darkMode">Dark</vs-dropdown-item>
          <vs-dropdown-item @click="lightMode">Light</vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>

      <vs-dropdown vs-trigger-click left class="cursor-pointer pr-2 pl-2 ml-1 mr-1">
        <a class="text-white-dark" href="#">
          <vs-icon icon="mode_comment"></vs-icon>
        </a>
        <vs-dropdown-menu class="topbar-dd">
          <vs-dropdown-item>Action</vs-dropdown-item>
          <vs-dropdown-item>Another Action</vs-dropdown-item>
          <vs-dropdown-item>Something</vs-dropdown-item>
          <vs-dropdown-item>Here</vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
      <div>
        <vs-dropdown vs-trigger-click left class="cursor-pointer pr-2 pl-2 ml-1 mr-md-3">
          <a v-if="role === 'patient'" class="text-white-dark user-image" href="#">
            <img
              v-if="ready && currentUser.imageName !== ''"
              :src="currentUser.imageName"
              alt="User"
            />
            <img v-else src="@/assets/images/logo/patient.jpg" alt="User" />
          </a>
          <a v-if="role === 'doctor'" class="text-white-dark user-image" href="#">
            <img
              v-if="ready && currentUser.imageName !== ''"
              :src="currentUser.imageName"
              alt="User"
            />
            <img v-else src="@/assets/images/logo/doctor.jpg" alt="User" />
          </a>
          <a v-if="role === 'administrator'" class="text-white-dark user-image" href="#">
            <img src="@/assets/images/logo/admin.jpg" alt="User" />
          </a>
          <vs-dropdown-menu class="topbar-dd">
            <vs-dropdown-item v-if="role !== 'administrator'" @click="renderProfile">
              <vs-icon icon="person_outline" class="mr-1"></vs-icon>My Profile
            </vs-dropdown-item>
            <hr v-if="role !== 'administrator'" class="mb-1" />
            <vs-dropdown-item @click="logout">
              <vs-icon icon="logout" class="mr-1"></vs-icon>Logout
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>
    </vs-navbar>
  </header>
</template>

<script>
import UserService from "../../services/user.service";
export default {
  name: "Navbar",
  props: {
    topbarColor: {
      type: String,
    },
    title: {
      type: String,
    },
    logo: {
      type: String,
    },
  },
  data: () => ({
    indexActive: 0,
    showToggle: false,
    search: "",
    currentUser: null,
    role: null,
    ready: false,
  }),

  methods: {
    darkMode() {
      this.topbarColor = "black";
    },
    lightMode() {
      this.topbarColor = "#2F65FF";
    },
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push(`/`);
      });
    },
    //This is for sidebar trigger in mobile
    activeSidebar() {
      this.$store.commit("IS_SIDEBAR_ACTIVE", true);
    },
    renderProfile() {
      this.$router.push(`/${localStorage.role}/profile`);
    },
  },
  beforeUpdate() {
    if (localStorage.getItem("role") === "patient") {
      UserService.getPatientBoard().then(
        (response) => {
          this.currentUser = response;
          this.ready = true;
        },
        (error) => {
          this.content =
            (error.currentUser && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
    if (localStorage.getItem("role") === "doctor") {
      UserService.getDoctorBoard().then(
        (response) => {
          this.currentUser = response;
          this.ready = true;
        },
        (error) => {
          this.content =
            (error.currentUser && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
    if (localStorage.getItem("role") === "administrator") {
      UserService.getAdministratorBoard().then(
        (response) => {
          this.currentUser = response;
          this.ready = true;
        },
        (error) => {
          this.content =
            (error.currentUser && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
  },
  beforeMount() {
    if (localStorage.getItem("role") === "patient") {
      this.role = "patient";
      UserService.getPatientBoard().then(
        (response) => {
          this.currentUser = response;
          this.ready = true;
        },
        (error) => {
          this.content =
            (error.currentUser && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
    if (localStorage.getItem("role") === "doctor") {
      this.role = "doctor";
      UserService.getDoctorBoard().then(
        (response) => {
          this.currentUser = response;
          this.ready = true;
        },
        (error) => {
          this.content =
            (error.currentUser && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
    if (localStorage.getItem("role") === "administrator") {
      this.role = "administrator";
      UserService.getAdministratorBoard().then(
        (response) => {
          this.currentUser = response;
          this.ready = true;
        },
        (error) => {
          this.content =
            (error.currentUser && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
  },
};
</script>
