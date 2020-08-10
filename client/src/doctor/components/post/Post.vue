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
          <vs-card :key="keyValue" id="forum-post-comments-container">
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
                  v-model="comments[index].text"
                  id="comment._id"
                  icon="add_circle"
                  v-on:icon-click="editCommentText(comment._id, index)"
                ></vs-input>
                <vs-dropdown
                  v-if="
                    !toModify[comment._id] &&
                      comment.nameOfCommenter == currentUser.fullName
                  "
                  id="forum-dropdown-container"
                >
                  <h6>{{ comment.text }}</h6>
                  <vs-dropdown-menu>
                    <vs-dropdown-item>
                      <vs-row>
                        <vs-col vs-lg="6">
                          <vs-button
                            @click="deleteComment(comment._id)"
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
                <h6
                  v-if="
                    !toModify[comment._id] &&
                      comment.nameOfCommenter !== currentUser.fullName
                  "
                >
                  {{ comment.text }}
                </h6>
                <hr />
              </vs-col>
              <vs-col vs-lg="4">{{ created[index] }}</vs-col>
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
import moment from "moment";
export default {
  name: "post",
  data() {
    return {
      post: "",
      comment: "",
      toModify: {},
      ready: false,
      change: false,
      keyValue: 0,
      displayed: false,
      created: {},
      created2: {},
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
    for (let i = 0; i < this.comments.length; i++) {
      this.created[i] = this.comments[i].createdAt;
      this.created2[i] = this.comments[i].createdAt;
    }
    this.getmomentDate();
    this.post.views++;
    this.ready = true;
  },
  methods: {
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
    async editCommentText(arg, index) {
      await axios.put(`/api/comments/editComment`, {
        filter: { _id: arg },
        payload: { text: this.comments[index].text },
      });
      this.toModify[arg] = false;
      this.keyValue++;
    },
    async addComment() {
      if (this.comment !== "") {
        await axios.post("/api/comments/createComment", {
          idOfPost: this.post._id,
          nameOfCommenter: this.currentUser.fullName,
          text: this.comment,
          roleOfSender: localStorage.role,
          createdAt:
            moment()
              .format()
              .slice(0, 10)
              .split("-")
              .join("") +
            moment()
              .format()
              .slice(11, 19)
              .split(":")
              .join(""),
        });
        let comments = await axios.post("/api/comments/findComments", {
          idOfPost: this.post._id,
        });
        this.comments = comments.data;
        this.created = {};
        this.created2 = {};
        for (let i = 0; i < this.comments.length; i++) {
          this.created[i] = this.comments[i].createdAt;
          this.created2[i] = this.comments[i].createdAt;
        }
        this.displayed = false;
        this.getmomentDate();
        this.comment = "";
      }
    },
    editComment(arg) {
      this.toModify[arg] = true;
      this.keyValue++;
    },
    async deleteComment(arg) {
      await axios.put(`/api/comments/deleteComment`, { filter: { _id: arg } });
      let comments = await axios.post("/api/comments/findComments", {
        idOfPost: this.post._id,
      });
      this.comments = comments.data;
      this.created = {};
      this.created2 = {};
      for (let i = 0; i < this.comments.length; i++) {
        this.created[i] = this.comments[i].createdAt;
        this.created2[i] = this.comments[i].createdAt;
      }
      this.displayed = false;
      this.getmomentDate();
    },
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
