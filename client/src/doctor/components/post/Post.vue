<template>
  <div v-if="ready">
    <vs-row>
      <vs-col vs-lg="6">
        <vs-card>
          <div slot="header">
            <h1>{{ post.title }}</h1>
          </div>

          <div slot="media">
            <img src="@/assets/images/logo/forum.jpeg" id="imgset" />
          </div>
          <br />
          <div v-html="post.content"></div>
          <hr />
          <vs-row>
            <vs-col vs-lg="9">
              <h4>Poster: {{ post.nameOfPoster }}</h4>
            </vs-col>
            <vs-col vs-lg="3">
              <h4>Views: {{ post.views }}</h4>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
      <vs-col vs-lg="6">
        <vs-row v-if="this.comments.length > 0">
          <vs-card id="forum-post-comments-container">
            <vs-col v-for="(comment, index) in comments" :key="index">
              <vs-col vs-lg="8">
                <h6 v-if="comment.roleOfSender === 'doctor'">
                  Doctor
                  <strong>{{ comment.nameOfCommenter }}</strong>
                </h6>
                <h6 v-else>
                  <strong>{{ comment.nameOfCommenter }}</strong>
                </h6>
                <br />
                <vs-input
                  v-if="toModify[comment._id]"
                  :value="comment.text"
                  id="comment._id"
                ></vs-input>
                <vs-dropdown
                  v-if="!toModify[comment._id]"
                  id="forum-dropdown-container"
                >
                  <h6>{{ comment.text }}</h6>
                  <vs-dropdown-menu>
                    <vs-dropdown-item>
                      <vs-row>
                        <vs-col vs-lg="6">
                          <vs-button
                            @click="deleteComment"
                            class="forum-post-buttons"
                            >Delete</vs-button
                          >
                        </vs-col>
                        <vs-col vs-lg="6">
                          <vs-button
                            @click="editComment(comment._id)"
                            class="forum-post-buttons"
                            >Edit</vs-button
                          >
                        </vs-col>
                      </vs-row>
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
                <hr />
              </vs-col>
              <vs-col vs-lg="4">{{ comment.createdAt.slice(0, 10) }}</vs-col>
            </vs-col>
          </vs-card>
        </vs-row>
        <vs-row>
          <vs-card>
            <vs-textarea
              v-model="comment"
              label
              counter="250"
              maxlength="250"
              counter-danger.sync
              height="75px"
              width="100%"
              id="commentTo"
            />
            <br />
            <vs-button @click="addComment">Add</vs-button>
          </vs-card>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import UserService from "../../../services/user.service";
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      post: "",
      comment: "",
      toModify: {},
      ready: false,
      currentUser: null,
      comments: [],
    };
  },
  async beforeMount() {
    let user, post;
    if (localStorage.role == "patient") {
      user = await UserService.getPatientBoard();
      post = await axios.post("/api/posts/findPost", {
        _id: window.location.pathname.slice(15),
      });
    } else {
      user = await UserService.getDoctorBoard();
      post = await axios.post("/api/posts/findPost", {
        _id: window.location.pathname.slice(14),
      });
    }
    this.currentUser = user;
    this.post = post.data[0];
    let comments = await axios.post("/api/comments/findComments", {
      idOfPost: this.post._id,
    });
    this.comments = comments.data;
    axios.put("/api/posts/updatePost", {
      filter: { _id: this.post._id },
      payload: { views: (Number(this.post.views) + 1).toString() },
    });
    this.post.views++;
    this.ready = true;
  },
  methods: {
    async addComment() {
      if (this.comment !== "") {
        await axios.post("/api/comments/createComment", {
          idOfPost: this.post._id,
          nameOfCommenter: this.currentUser.fullName,
          text: this.comment,
          roleOfSender: localStorage.role,
          createdAt: new Date(),
        });
        let comments = await axios.post("/api/comments/findComments", {
          idOfPost: this.post._id,
        });
        this.comments = comments.data;
        this.comment = "";
      }
    },
    editComment(arg) {
      this.toModify[arg] = true;
    },
    deleteComment() {},
  },
};
</script>
<style>
#forum-post-comments-container {
  height: 480px !important;
  scroll-behavior: smooth;
  overflow: scroll;
}
.forum-post-buttons {
  width: 70px !important;
}
#reply {
  width: 500px;
}
</style>
