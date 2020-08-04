<template>
  <div>
    <vs-card id="blog-post">
      <h1>{{ post.title }}</h1>
      <h4>{{ post.author.first_name }} {{ post.author.last_name }}</h4>
      <div v-html="post.body"></div>
      <vs-button @click="drop">Reply</vs-button>
    </vs-card>
	<vs-card id="to add ">
		<vs-list>
			
		</vs-list>
	</vs-card>
    <vs-card id="reply" >
     <vs-textarea  @input="addComment" label="" height="150px" width="100%" id="commentTo"/><br>
      <vs-button @click="addC"  >Add</vs-button>
    </vs-card>
  </div>
</template>
<script>
// import { butter } from "buttercms";
import $ from "jquery";
import axios from 'axios'
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
    comment:"",
    comments:[]
		
	  
	};
	
  },
  methods: {
    drop() {
	  $("#reply").toggle();
	 
	},
	addComment(value){
    this.comment = value
    
  },
async addC() {
  this.comments.push(this.comment)
    console.log(this.comments,this.comment)
    $("#reply").toggle();
      await axios.post("/api/comments/createComment", {
        idOfPost:4,
        nameOfCommenter:"ali",
         text: this.comment,
         createdAt:new Date()
      });
},
  
  },
  
};
</script>
<style >
#reply{
	width:500px;
}
</style>
