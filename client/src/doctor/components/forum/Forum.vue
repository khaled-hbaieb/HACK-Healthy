<template>
  <div v-if="ready">
    <vs-row class="row page-titles">
      <vs-col
        vs-lg="3"
        vs-sm="6"
        vs-xs="12"
        v-for="(post, index) in postsList"
        :key="index"
      >
        <vs-card vs-lg="12" actionable>
          <div slot="header">
            <h5 class="font-weight-bold">{{ post.title }}</h5>
          </div>
          <div slot="media">
            <img src="@/assets/images/logo/forum.jpeg" id="imgset" />
          </div>
          <div class="mb-2">
            <h6 class="mb-2">
              {{ post.createdAt }}
              <!-- 23
              <sup>rd</sup> oct 2020 -->
            </h6>
            <span class="py-2 d-inline">{{ post.nameOfPoster }}</span>
          </div>
          <vs-row>
            <vs-col vs-lg="9">
              <vs-button
                color="primary"
                type="border"
                @click="renderPost(post._id)"
                >Read More</vs-button
              >
            </vs-col>
            <vs-col vs-lg="3"> {{ post.views }} Views </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "forum",
  data: () => {
    return {
      postsList: [],
      ready: false,
    };
  },
  async beforeMount() {
    let posts = await axios.get("/api/posts");
    this.postsList = posts.data;
    this.ready = true;
  },
  methods: {
    renderPost(arg) {
      this.$router.push(`/doctor/forum/${arg}`);
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
