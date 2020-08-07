<template>
  <div v-if="ready">
    <vs-card>
      <vs-row class="row page-titles">
        <vs-col class="col-md-5 align-self-center">
          <h4 class="text-themecolor">Forum</h4>
        </vs-col>
        <vs-col class="col-md-7 align-self-center text-right">
          <div class="d-flex justify-content-end align-items-center">
            <vs-button
              v-if="isPatient"
              @click="renderCreatePost"
              type="button"
              class="btn btn-info d-block d-lg-block"
            >
              <vs-icon icon="add_circle_outline" id="doctor-icon" round></vs-icon>Create New Post
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </vs-card>
    <vs-row class="row page-titles">
      <vs-col vs-lg="3" vs-sm="6" vs-xs="12" v-for="(post, index) in postsList" :key="index">
        <vs-card vs-lg="12" actionable>
          <div slot="header">
            <h5 class="font-weight-bold">{{ post.title }}</h5>
          </div>
          <div slot="media">
            <img src="@/assets/images/logo/forum.jpeg" id="imgset" />
          </div>
          <div class="mb-2">
            <h6 class="mb-2">
              {{
              created[index]
              }}
            </h6>
            <hr />
            <vs-col vs-lg="9">
              <span class="py-2 d-inline">
                {{
                post.nameOfPoster
                }}
              </span>
            </vs-col>
            <vs-col vs-lg="3">{{ post.views }} Views</vs-col>
          </div>
          <vs-row>
            <vs-col vs-lg="12">
              <hr />
              <vs-button color="primary" type="border" @click="renderPost(post._id)">Read More</vs-button>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "forum",
  data: () => {
    return {
      postsList: [],
      ready: false,
      displayed: false,
      created: {},
      created2: {},
    };
  },
  async beforeMount() {
    let posts = await axios.get("/api/posts");
    this.postsList = posts.data;
    for (let i = 0; i < this.postsList.length; i++) {
      this.created[i] = this.postsList[i].createdAt;
      this.created2[i] = this.postsList[i].createdAt;
    }
    this.getmomentDate();
    this.ready = true;
  },
  async updated() {
    let posts = await axios.get("/api/posts");
    this.postsList = posts.data;
    // this.displayed = false
    // this.getmomentDate()
  },
  computed: {
    isPatient() {
      return localStorage.role === "patient";
    },
  },
  methods: {
    renderPost(arg) {
      if (localStorage.role == "patient") {
        this.$router.push(`/patient/forum/${arg}`);
      } else {
        this.$router.push(`/doctor/forum/${arg}`);
      }
    },
    getmomentDate() {
      if (this.displayed) {
        setInterval(() => {
          for (var key in this.created) {
            this.created[key] = moment(
              this.created2[key],
              "YYYYMMDDhhmmss"
            ).fromNow();
          }
        }, 1000);
      } else {
        for (var key in this.created) {
          this.created[key] = moment(
            this.created2[key],
            "YYYYMMDDhhmmss"
          ).fromNow();
        }
        this.displayed = true;
        setTimeout(() => {
          this.getmomentDate();
        }, 2000);
      }
    },

    renderCreatePost() {
      this.$router.push(`/patient/forum/createpost`);
    },
  },
};
</script>
<style>
/* #imgset {
  align-content: center;
  height: 90%;
  width: 100%;
} */
</style>
