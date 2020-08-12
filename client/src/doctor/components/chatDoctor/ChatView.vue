<template>
  <vs-row id="all">
    <vs-col vs-lg="4">
      <vs-card>
        <div class="card-header">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search..."
              name
              class="form-control search"
            />
            <div class="input-group-prepend">
              <span class="input-group-text search_btn">
                <vs-icon icon="search"></vs-icon>
              </span>
            </div>
          </div>
        </div>
        <div class="card-body contacts_body">
          <vs-list v-model="currentRoom" class="contacts">
            <vs-list-item
              id="list-items"
              v-for="(doctor, index) in doctorsList"
              :key="index"
            >
              <div
                v-if="doctor.fullName !== currentUser.fullName"
                @click="changeRoom(doctor)"
                id="list-item-rooms"
                class="d-flex bd-highlight"
              >
                <div class="img_cont">
                  <img
                    v-if="doctor.imageName !== ''"
                    :src="doctor.imageName"
                    class="rounded-circle user_img"
                  />

                  <img
                    v-else
                    src="@/assets/images/logo/doctor.jpg"
                    class="rounded-circle user_img"
                  />
                </div>
                <div class="user_info">
                  <span>{{ doctor.fullName }}</span>
                </div>
              </div>
            </vs-list-item>
          </vs-list>
        </div>
        <div class="card-footer"></div>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="8">
      <vs-card id="cardChat" v-if="currentRoom">
        <div class="card-header msg_head">
          <div class="d-flex bd-highlight">
            <div class="img_cont">
              <img :src="currentRoom.image" class="rounded-circle user_img" />
            </div>
            <div class="user_info">
              <span id="room-name1">{{ currentRoom.name }}</span>
            </div>
            <div class="video_cam">
              <span>
                <vs-icon icon="phone"></vs-icon>
              </span>
              <span>
                <vs-icon icon="video_call"></vs-icon>
              </span>
            </div>
          </div>
          <span id="action_menu_btn" @click="openTab">
            <vs-icon icon="dns"></vs-icon>
          </span>
          <div class="action_menu">
            <vs-list>
              <vs-list-item icon="supervisor_account"
                >View profile</vs-list-item
              >
              <vs-list-item icon="add">Add to close friends</vs-list-item>
            </vs-list>
          </div>
        </div>
        <div class="card-body msg_card_body">
          <div id="chatbox" class="row remote_video_container">
            <div id="remoteTrack"></div>
          </div>
          <div class="spacing"></div>
          <div class="row">
            <div id="localTrack"></div>
          </div>
          <div v-for="(message, index) in currentMessages" :key="index">
            <div
              v-if="message.nameOfSender === currentUser.fullName"
              class="d-flex justify-content-end mb-4"
            >
              <div class="msg_cotainer_send">
                {{ message.message }}
              </div>
              <div class="img_cont_msg">
                <img
                  :src="currentUser.imageName"
                  class="rounded-circle user_img_msg"
                />
              </div>
            </div>

            <div v-else class="d-flex justify-content-start mb-4">
              <div class="img_cont_msg">
                <img
                  :src="message.imageName"
                  class="rounded-circle user_img_msg"
                />
              </div>
              <div class="msg_cotainer">{{ message.message }}</div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div id="msn" class="input-group">
            <div class="input-group-append">
              <span class="input-group-text attach_btn">
                <vs-icon icon="attach_files"></vs-icon>
              </span>
            </div>
            <textarea
              id="message"
              name
              class="form-control type_msg"
              placeholder="Type your message..."
            ></textarea>
            <div class="input-group-append">
              <vs-button
                id="sendMessage"
                @click="sendMessage"
                class="input-group-text send_btn"
              >
                <vs-icon icon="send"></vs-icon>
              </vs-button>
            </div>
          </div>
        </div>
      </vs-card>
    </vs-col>

    <div id="chatbox" class="row remote_video_container">
      <div id="remoteTrack"></div>
    </div>
    <div class="spacing"></div>
    <div class="row">
      <div id="localTrack"></div>
    </div>
  </vs-row>
</template>
<script>
import $ from "jquery";
import UserService from "../../../services/user.service";
import {
  connect,
  // createLocalTracks,
  createLocalVideoTrack,
} from "twilio-video";
import { EventBus } from "../../../Event";
import axios from "axios";
import io from "socket.io-client";
import moment from "moment";

export default {
  name: "ChatView",
  data: () => {
    return {
      message: "",
      doctorName: "",
      doctorsList: {},
      currentRoom: "",
      currentUser: null,
      currentMessages: null,
      socket: io("localhost:3000"),
      chat: null,
    };
  },
  methods: {
    async sendMessage() {
      var message = $("#message").val();
      this.socket.emit("chat", {
        nameOfSender: this.currentUser.fullName,
        nameOfReceiver: this.currentRoom.name,
        message: message,
        imageName: this.currentUser.imageName,
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

      let messages = await axios.post(`/api/chatRoom/findMessages`, {
        nameOfReceiver: this.currentUser.fullName,
        nameOfSender: this.currentRoom.name,
      });

      let messages2 = await axios.post(`/api/chatRoom/findMessages`, {
        nameOfReceiver: this.currentRoom.name,
        nameOfSender: this.currentUser.fullName,
      });
      this.currentMessages = [];
      this.currentMessages = messages2.data.concat(messages.data);
      console.log(this.currentMessages);
      // for(let i = 0 ; i < this.currentMessages.length; i++) {
      //   this.socket.emit('chat', {nameOfSender: this.currentMessages[i].nameOfSender,
      //   nameOfReceiver: this.currentMessages[i].nameOfReceiver,
      //   message: this.currentMessages[i].message,
      //   imageName: this.currentMessages[i].imageName,
      //   createdAt:
      //     this.currentMessages[i].createdAt})}
      this.message = "";
    },
    openTab() {
      $(".action_menu").toggle();
    },
    async changeRoom(doctor) {
      this.currentRoom = {
        image: doctor.imageName,
        name: doctor.fullName,
        imageName: doctor.imageName,
      };
      // this.currentRoom = room;
      let messages = await axios.post(`/api/chatRoom/findMessages`, {
        nameOfReceiver: doctor.fullName,
        nameOfSender: this.currentUser.fullName,
      });

      let messages2 = await axios.post(`/api/chatRoom/findMessages`, {
        nameOfSender: doctor.fullName,
        nameOfReceiver: this.currentUser.fullName,
      });
      this.currentMessages = messages2.data.concat(messages.data);
    },
    sendMsn() {
      var snd = document.getElementById("send");
      var inputmsn = document.getElementById("inputmsn");
      var rec = document.getElementById("rec");
      this.message = inputmsn.value;
      rec.value = this.message;
      socket.to(currentRoom.name).emit("chat", { message: "num" });
      this.message = "";
    },
  },
  beforeMount: async function() {
    UserService.getDoctorBoard().then(
      async (response) => {
        this.currentUser = response;
        this.doctorName = this.currentUser.fullName;
        let doctors = await axios.get(`/api/users/clinicX/doctors`);
        this.doctorsList = doctors.data;
        this.currentRoom = this.doctorsList[0];
      },
      (error) => {
        this.content =
          (error.currentUser && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
  //   async updated() {
  //  let messages = await axios.get(`/api/chatRoom/`)
  //  this.messages = messages
  //  console.log('chat',this.chat.data)
  //   }
};
</script>
<style>
.chat {
  height: 50%;
  /* border: 5px solid green; */
}
#all {
  /* border: 5px solid red; */
  height: 100%;
}
.remote_video_container {
  left: 0;
  margin: 0;
}
#localTrack video {
  border: 3px solid rgb(124, 129, 124);
  margin: 0px;
  max-width: 50% !important;
  background-repeat: no-repeat;
}
.spacing {
  width: 100%;
}
.chat {
  margin-top: auto;
  margin-bottom: auto;
}
.card {
  height: 500px;
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
}
.contacts_body {
  padding: 0.75rem 0 !important;
  overflow-y: auto;
  white-space: nowrap;
}
.msg_card_body {
  overflow-y: auto;
}
.card-header {
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
}
.card-footer {
  border-radius: 0 0 15px 15px !important;
  border-top: 0 !important;
}
.container {
  align-content: center;
}
.search {
  border-radius: 15px 0 0 15px !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
}
.search:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.type_msg {
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  height: 60px !important;
  overflow-y: auto;
}
.type_msg:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.attach_btn {
  border-radius: 15px 0 0 15px !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}
.send_btn {
  border-radius: 0 15px 15px 0 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}
.search_btn {
  border-radius: 0 15px 15px 0 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}
.contacts {
  list-style: none;
  padding: 0;
}
.contacts li {
  width: 100% !important;
  padding: 5px 10px;
  margin-bottom: 15px !important;
}
.active {
  background-color: rgba(0, 0, 0, 0.3);
}
.user_img {
  height: 70px;
  width: 70px;
  border: 1.5px solid #f5f6fa;
}
.user_img_msg {
  height: 40px;
  width: 40px;
  border: 1.5px solid black;
}
.img_cont {
  position: relative;
  height: 70px;
  width: 70px;
}
.img_cont_msg {
  height: 40px;
  width: 40px;
}
.online_icon {
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #4cd137;
  border-radius: 50%;
  bottom: 0.2em;
  right: 0.4em;
  border: 1.5px solid white;
}
.offline {
  background-color: #c23616 !important;
}
.user_info {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
}
.user_info span {
  font-size: 20px;
  color: black;
}
.user_info p {
  font-size: 10px;
  color: black;
}
.video_cam {
  margin-left: 50px;
  margin-top: 5px;
}
.video_cam span {
  color: black;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
}
.msg_cotainer {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}
.msg_cotainer_send {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 25px;
  background-color: #78e08f;
  padding: 10px;
  position: relative;
}
.msg_time {
  position: absolute;
  left: 0;
  bottom: -15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
}
.msg_time_send {
  position: absolute;
  right: 0;
  bottom: -15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
}
.msg_head {
  position: relative;
}
#action_menu_btn {
  position: absolute;
  right: 10px;
  top: 10px;
  color: black;
  cursor: pointer;
  font-size: 20px;
}
.action_menu {
  z-index: 1;
  position: absolute;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
  border-radius: 15px;
  top: 30px;
  right: 15px;
  display: none;
}
.action_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.action_menu ul li {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 5px;
}
.action_menu ul li i {
  padding-right: 10px;
}
.action_menu ul li:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}

#list-items:hover {
  background-color: rgba(240, 236, 236, 0.849);
  cursor: pointer;
}
.vs-list--slot {
  margin-left: 0 !important;
}
#cardChat {
  height: 100%;
}
#msn {
  color: rgba(240, 236, 236, 0.849);
}
</style>
