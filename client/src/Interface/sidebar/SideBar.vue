<template lang="html">
  <div id="parentx">
    <vs-sidebar
      default-index="1"
      :parent="parent"
      :hiddenBackground="doNotClose"
      :color="sideBarColor"
      class="sidebarx"
      spacer
      v-model="isSidebarActive"
      :click-not-close="doNotClose"
    >
      <div class="header-sidebar text-center" slot="header">
        <div v-if="(role==='patient' ||role === 'doctor')">

        <vs-avatar
          size="70px"
          :src="currentUser.imageName "
        />
        <h4>{{currentUser.fullName}}</h4>
        <small>{{ currentUser.email}}</small>
        </div>
        <div v-else>
 <vs-avatar
          size="70px"
          :src="require('@/assets/images/users/houssem.jpg')"
        />
        <h4>ADMIN</h4>
        <small>ADMIN@gmail.com</small>
        </div>
      </div>
      <template v-for="(sidebarLink, index) in sidebarLinks">
        <vs-sidebar-item
          :icon="sidebarLink.icon"
          :to="sidebarLink.url"
          :key="`sidebarLink-${index}`"
          :index="index"
        >
          <span class="hide-in-minisidebar">{{ sidebarLink.name }}</span>
        </vs-sidebar-item>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
import UserService from '../../services/user.service'
export default {
  name: "SideBar",
  props: {
    sideBarColor: {
      type: String,
    },
    parent: {
      type: String,
    },
    index: {
      default: null,
      type: [String, Number],
    },
  },
  data: () => ({
    doNotClose: false,
    windowWidth: window.innerWidth,
    sidebarLinks: [],
    currentUser: null,
    role: null,
  }),
  computed: {
    //This is for mobile trigger
    isSidebarActive: {
      get() {
        return this.$store.state.isSidebarActive;
      },
      set(val) {
        this.$store.commit("IS_SIDEBAR_ACTIVE", val);
      },
    },
  },
  beforeMount() {
    if (localStorage.role === "administrator") {
      this.role='administrator'
      UserService.getAdministratorBoard().then(
      (response) => {
        this.currentUser = response;
      },
      (error) => {
        this.content =
          (error.currentUser && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
      this.sidebarLinks = [
        {
          url: "/administrator/currentPatients",
          name: "Current Patients",
          icon: "person",
        },
        {
          url: "/administrator/patients",
          name: "Patients",
          icon: "person",
        },
        {
          url: "/administrator/doctors",
          name: "Doctors",
          icon: "person",
        },
        {
          url: "/administrator/clinicState",
          name: "Clinic State",
          icon: "dns",
        },
        {
          url: "/administrator/makeABill",
          name: "Make A Bill",
          icon: "money",
        },
      ];
    } else if (localStorage.role === "doctor") {
      this.role='doctor'
      UserService.getDoctorBoard().then(
        (response) => {
          this.currentUser = response;
        },
        (error) => {
          this.content =
            (error.currentUser && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
      this.sidebarLinks = [
        {
          url: "/doctor/appointments",
          name: "Appointments",
          icon: "dns",
        },
        {
          url: "/doctor/calendar",
          name: "Calendar",
          icon: "history",
        },
        {
          url: "/doctor/patients",
          name: "Patients",
          icon: "person",
        },
        {
          url: "/doctor/doctors",
          name: "Doctors",
          icon: "person",
        },
        {
          url: "/doctor/chatRoom",
          name: "Chat Room",
          icon: "chat",
        },
        {
          url: "/doctor/forum",
          name: "Forum",
          icon: "forum",
        },
        {
          url: "/doctor/assignBill",
          name: "Assign A Bill",
          icon: "money",
        },
      ];
    } else {
      this.role='patient'
      UserService.getPatientBoard().then(
      (response) => {
        this.currentUser = response;
      },
      (error) => {
        this.content =
          (error.currentUser && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
      this.sidebarLinks = [
        {
          url: "/patient/makeAppointment",
          name: "Make An Appointment",
          icon: "dns",
        },
        {
          url: "/patient/appointments",
          name: "Appointments",
          icon: "dns",
        },
        {
          url: "/patient/doctors",
          name: "Doctors",
          icon: "person",
        },
        {
          url: "/patient/billing",
          name: "Billing",
          icon: "money",
        },
        {
          url: "/patient/history",
          name: "History",
          icon: "history",
        },
        {
          url: "/patient/forum",
          name: "Forum",
          icon: "forum",
        },
        {
          url: "/patient/emergency",
          name: "S.O.S Call",
          icon: "alarm",
        },
      ];
    }
  },
  watch: {},
  methods: {
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebar();
    },
    setSidebar() {
      if (this.windowWidth < 1170) {
        this.$store.commit("IS_SIDEBAR_ACTIVE", false);
        this.doNotClose = false;
      } else {
        this.$store.commit("IS_SIDEBAR_ACTIVE", true);
        this.doNotClose = true;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.handleWindowResize);
    });
    this.setSidebar();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
    this.setSidebar();
  },
};
</script>
