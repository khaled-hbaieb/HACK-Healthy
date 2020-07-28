<template>
  <div>
    <vs-card id="blog-post">
      <h1>{{ post.title }}</h1>
      <h4>{{ post.author.first_name }} {{ post.author.last_name }}</h4>
      <div v-html="post.body"></div>
      <vs-button @click="drop">Reply</vs-button>
    </vs-card>
    <vs-card id="reply">
      <vs-input icon="add" label-placeholder="response" /><br>
      <vs-button>Add</vs-button>
    </vs-card>
  </div>
</template>
<script>
import { butter } from "buttercms";
import $ from "jquery";
export default {
  name: "post",
  data() {
    return {
      post: {
        title: "first post ",
        author: {
          first_name: " Ali ",
          last_name: "Essoudani",
        },
        body: "hello this is my first post i hate twilio so much  ",
      },
    };
  },
  methods: {
    drop() {
      $("#reply").toggle();
    },
  },
};
</script>
