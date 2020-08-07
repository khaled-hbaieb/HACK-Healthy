<template>
  <vs-row vs-justify="center">
    <vs-col
      type="flex"
      vs-justify="center"
      vs-align="center"
      vs-lg="12"
      vs-xs="12"
    >
      <vs-card>
        <h4 class="card-title d-flex">
          Write your post here
          <vs-button
            class="ml-auto p-0"
            @click="heighttextarea = true"
            type="line"
          >
            <vs-icon icon="code"></vs-icon>
          </vs-button>
        </h4>
        <vs-input
          maxLength="30"
          v-model="title"
          placeholder="Post title"
        ></vs-input
        ><br />

        <div>
          <vs-textarea
            v-model="PostDescription"
            placeholder="Post description"
            height="200px"
          />
        </div>

        <vs-popup
          class="holamundo"
          title="How it will looks"
          :active.sync="heighttextarea"
        >
          <vs-card vs-lg="12" actionable>
            <div slot="header">
              <h5 class="font-weight-bold">{{ title }}</h5>
            </div>
            <div slot="media">
              <img src="@/assets/images/logo/forum.jpeg" id="imgset" />
            </div>
            <div class="mb-2">
              <h6 class="mb-2">
                {{ createdAt }}
              </h6>
              <hr />
              <vs-col vs-lg="9"
                ><span class="py-2 d-inline">{{
                  currentUser.fullName
                }}</span></vs-col
              >
              <vs-col vs-lg="3"> 0 Views </vs-col>
            </div>
            <vs-row>
              <vs-col vs-lg="12">
                <hr />
                <vs-button color="primary" type="border">Read More</vs-button>
              </vs-col>
            </vs-row>
          </vs-card>
        </vs-popup>

        <vs-button @click="addChangeView">Add</vs-button>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import moment from "moment"
import UserService from "../../../services/user.service";
import axios from "axios";
export default {
  name: "createPost",
  data: () => ({
    currentUser: null,
    widthtextarea: false,
    heighttextarea: false,
    title: "",
    createdAt: "",
    PostDescription: "",
    views: "",
    date:""

  }),
  methods: {
    addChangeView() {
      if (this.title !== "" && this.PostDescription !== "") {
        axios.post("/api/posts/createPost", {
          nameOfPoster: this.currentUser.fullName,
          title: this.title,
          content: this.PostDescription,
          views: this.views,
          createdAt:moment().format().slice(0,10).split('-').join('')+ moment().format().slice(11,19).split(':').join('')
        });

        this.$router.push("/patient/forum");
      }
    },
  },
  async beforeMount() {
    let user = await UserService.getPatientBoard();
    this.currentUser = user;
   
  },
};
</script>
