<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser }}</strong> Profile
      </h3>
    </header>
    <!-- <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p> -->
    <p>
      <strong>Id:</strong>
      {{ currentUser._id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <p>
      <strong>Phone Number:</strong>
      {{ currentUser.phoneNumber }}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <!-- <li v-for="(role, index) in currentUser.roles" :key="index">
      {{ role }}
      </li> -->
    </ul>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import UserService from "../../../services/user.service";
export default {
  name: "Appointments",
  data: () => {
    return {
      currentUser: null,
    };
  },
  // computed: {
  //   currentUser() {
  //     return this.$store.state.auth.user;
  //   },
  // },
  beforeMount() {
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
  },
};
</script>
