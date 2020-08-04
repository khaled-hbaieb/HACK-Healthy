<template>
  <div>
    <vs-row id="all">
      <!-- class="row justify-content-center h-100" -->
      <div class="col-md-4 col-xl-3 chat">
        <div class="card mb-sm-3 mb-md-0 contacts_card">
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
                v-for="(room, index) in roomsList"
                :key="index"
              >
                <div
                  @click="changeRoom(room)"
                  id="list-item-rooms"
                  class="d-flex bd-highlight"
                >
                  <div class="img_cont">
                    <img :src="room.source" class="rounded-circle user_img" />
                  </div>
                  <div class="user_info">
                    <span>{{ room.name }}</span>
                  </div>
                </div>
              </vs-list-item>
            </vs-list>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-md-8 col-xl-6 chat">
        <div class="card">
          <div class="card-header msg_head">
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img
                  :src="currentRoom.source"
                  class="rounded-circle user_img"
                />
              </div>
              <div class="user_info">
                <span id="room-name1">{{ currentRoom.name }}</span>
              </div>
              <div class="video_cam">
                <span>
                  <vs-icon icon="phone"></vs-icon>
                </span>
                <span>
                  <vs-icon icon="video_call" @click="createChat"></vs-icon>
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

            <div class="d-flex justify-content-start mb-4">

              <div class="img_cont_msg">
                <img class="rounded-circle user_img_msg" />
              </div>
              <div class="msg_cotainer">
                <!-- <span class="msg_time">8:40 AM, Today</span> -->
              </div>
            </div>
            <div class="d-flex justify-content-end mb-4">

              <div class="msg_cotainer_send">
                <!-- <span class="msg_time_send">8:55 AM, Today</span> -->
              </div>
              <div class="img_cont_msg">

                <img class="rounded-circle user_img_msg" />
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text attach_btn">
                  <vs-icon icon="attach_files"></vs-icon>
                </span>
              </div>
              <textarea
                name
                class="form-control type_msg"
                placeholder="Type your message..."
              ></textarea>
              <div class="input-group-append">
                <span class="input-group-text send_btn">
                  <vs-icon icon="send"></vs-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="chatbox" class="row remote_video_container">
        <div id="remoteTrack"></div>
      </div>
      <div class="spacing"></div>
      <div class="row">
        <div id="localTrack"></div>
      </div>
    </vs-row>
  </div>
</template>
<script>
import $ from "jquery";
import {
  connect,
  // createLocalTracks,
  createLocalVideoTrack,
} from "twilio-video";
import { EventBus } from "../../../Event";
import axios from "axios";
export default {
  name: "ChatView",
  data: () => {
    return {
      roomsList: {
        General: {
          name: "General",
          source:
            "data:image/png;base64,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",
        },
        Surgery: {
          source:
            "data:image/jpeg;base64,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",
          name: "Surgery",
        },
        Anesthesiology: {
          source:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMFvtKorY2MLB9HT37t1UeNu3uvOQDs7XORg&usqp=CAU",
          name: "Anesthesiology",
        },
        Dermatology: {
          source:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3prAINUrvN6ohFL17LhNehHBeyL5-Ahl1ZQ&usqp=CAU",
          name: "Dermatology",
        },
        Neurology: {
          source:
            "data:image/png;base64,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",
          name: "Neurology",
        },
        Ophthalmology: {
          source:
            "data:image/jpeg;base64,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",
          name: "Ophthalmology",
        },
        Pediatrics: {
          source:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeV-j3c5JJvdWYbd6z6-_b99H-9kh8TBXHHQ&usqp=CAU",
          name: "Pediatrics",
        },
        Psychiatry: {
          source:
            "data:image/png;base64,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",
          name: "Psychiatry",
        },
        Urology: {
          source:
            "data:image/png;base64,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",
          name: "Urology",
        },
        "Obstetrics & Gynecology": {
          source:
            "data:image/jpeg;base64,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",
          name: "Obstetrics & Gynecology",
        },
        "Family Medicine": {
          source:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWX3klOKD02EhOQYkbZ09ZrQs6P9_1XtUGvA&usqp=CAU",
          name: "Family Medicine",
        },
        "Diagnostic & Radiology": {
          source:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfBqYFg_hlxK7QECndapadNH8o646Se7QRCQ&usqp=CAU",
          name: "Diagnostic & Radiology",
        },
        "Allergy & Immunology": {
          source:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUQEBIVFhUXFxgWGRgXGBgcGBcbHR0dHhUcGRgbHCggHBolGxcVITEhJykrLi46Fx85ODMsNygtLysBCgoKDg0OGxAQGy0mHyUvLS81Ly0xMDUtLTYrNi8tNS01LS8vLy0tLS0rLS01LS0tLS8tLS8wLy0tLS8vLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EAEEQAAIBAwIDBQQIBAQFBQAAAAECAwAEERIhBRMxBiJBUWEyUnGBFBYjQlSRk9EzYoKhFXKxwVNzkrLhJDREg6L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALBEAAgIBAwMDAgYDAAAAAAAAAAECEQMSITEEIkETUXEFMoGRobHB8BQVYf/aAAwDAQACEQMRAD8A/caUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApWbuO1is7RWUMl1Ip0nR3YlPiGmbuj5Zq5eOSWHSxMUjJglCCY2I30kjBwfEirOLXJVST4JdeJZVQamYKPMkAfmaz0fYyAkNNLczsDnMs8nXOfZQqvyxV5f2Mc6GOaNZEOCVYAjI3Gxo0gnKuD7FexucLIjHyDA/wChrvVPB2VskdZEtYVZSGUhACCNwR6g1I4xwpbpQjSSx6TqDRSMjA4I6r169Dmm1i5VuWFKpeFcIuIJATeyTQ4I0SohfPgRKoB+RBr1xjtDHaOonSVYyM84IWiU5xpZhkqfiMb9aad6W41UrexcUrla3KSqJI3V1O4ZSCD8CK61UsKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSqfjPGzDJFbxRGWaU5Cg4CoCNcjtg4UZ+ZwKlJvghtJWz1x3jyWuldLSTSZEcKDLuR1+CjxY7CunA/pJQtecsMxyqR5xGuPZLk95vM1YaBnVgZxjPjjx3+Qr1S1VEU7uzyiAbAAfD+9eqVCueJxptnJ8l3/v0ok3wRPJGCuTom0qil44x9lQPjvVbfdpuT/Fnjjz4MVB+QO9arBNnHL6lhTpW/hGvpWIg7aROdK3cRPkSoz+eKuIuNuPaVT8Mj96PBNEL6lh82vlF/XxlzsagW/F422PdPr0/P96ng1k4tcnZjywyK4OyHw7hMNtr5ESx621MF2BOMZ09Bt5YqDw7tErzNazI0E4J0o5GJVHRo2GzbbkdRv5Vd1A4xweG7QRzrkAhlIJVkYdGRhup9RUpp/cWaa+0n0qHdcTiikjhkcK8urlgg4YrjI1YwDuNicnwziplVotYpSlAKUpQClKUApSlAKUpQClKUApSqri3aG3tWCSudZGrSiO7BfFiEBIX1NSk3wQ2krZ94t2gt7Uqs8mlmBIUKzNgdSQgJC+p2qfbTrIqyRsGVhlWByCD0INZeaObntfWSR3MdxFGP4gQqU1YIYggodW46girLgNr9AtALh1GjmSOR7CamZ2C5+6NWB8Ku4pLbkzjOTk01sXdcrm4WMamOB/r8KpbPtZBI2grNGWUsnNjKc0DroJ6nG+Dg+lQb27MhLscAeHgBVoYm3uc3VdbHFHt3bJF7xNpNh3V8h1PxP+1QaqRxSURrdNb6bZyuH1jWFYgI7R42UkjxJGaticdfCupRSVI8LM8jleTkgcYuGUJGjBGlcRh2xiMYLO++2Qqtj1xXvhU9rF/7G1muWz3plQHUfEmeUqD/AEkiu3A+DDiBFzcrm3BzDEekmNubIPEHfSvTG5zmtuiADAAAGwA6CscuVLZHq9H0bUNUtr/MyN3xB2XTc8MuCh692GYY9VRyfyBqigmgiljFnJqglZozEc6oJApYYVu8qkKwKnocYr9Nqi7Rdmo7rEqYjuE3jmAGQfJx95Dkgg+e1VhmSe5vn6PVBqP6lTUmzvni9k5Hunp/4qr4fdM4ZZF0SxtokT3WHiPNWGCD5GpddLSa3PBTnjlts0aqyvFlGV6+IPUf+Kk1j4ZShDKcEVprC7Eq5HXxHkf2rkyYtO64Pd6LrVm7Zfd+5x47wmO7haGXODgqw9pGHsup8GBpwNJ1hVboq0q5UsvRwDhWxjYkYJFWFVPaZ7hIeZabvGyuY8A81B7cYz0JByCN8gedZpt9p3NJdxbUrzG2QDgjIBweo9D616qpYUpSgFKUoBSlKAUpSgFKUoBWU4uklncS3oj5sMiJzSp+0hEecsFPtJg5IG4was7rtPaxTciSXDghT3W0KW9kNJjQpPkSOtQ+0l000iWELFeYvMmdeqQ5xhT4M57oPgAxrSCaZjmcXF7lR2f48LdZLSOCSaQSySKIwAhjlbmRuXYhVUh8f0navna7id1JZziWzVE5ZOoXCllIwVOnRhtwNgd+ldeznBgYLWSVZI5oVKgglH0BjiNx4oQF7p+VX93aJMuiRQy5U4PTKkFf7gVs1FSujj9WenTZk+LcRE95DbsyqYVEpB9p5XQgKvoqNqPnqHlUi+vYoVzNIiKdu8cZ8x61YScEt7nnsTzBMykkMDoeNQgMbDdWGkePhWYsRcQ3EsZVZriMaRLMwEYib2CkaDJZ8HUfNSM1rBqqRwZ8OqWpvYkxcMdo0gNyXtV0lY9K5KqQ0amUbsgIX1261340hkWO3BwbiVISR1CnLSn/AKFYfOuvCbLkQpDnVpGM4xk9TgeAydhXma4SO8snlYKgkk7zHABMTKuT4ZLY+dWeydGGJ+plipO1ZrOI8Uis+UrqViY8vWAOXEQAEDnPdB6A9Nt8bVZg1TdpuJLGghEYmlmykcJ3D+8X8o1G7H96rOG8FvbGNVt5knAHehlyqg+IhkAJRfAKwI28K4dKas+k1NSrx+xraVnfrM6bT2N2jfyR85fk0RO3xAo3arOeXZXrny5BT+8hUVGiRPqRK/tTByb2GZdhOjQv6sg1wn445o/Kvlcu1HGYLqOzaCRWJuo205Gte5IGDL1XGSDmutdmK9Ks8D6il61ryK8DjaWsi6iSzbCNAWkcfyoN/n0qLxK4caIYQDNK2lM9FwMu7fyqN/XYVecH4NFaKSvedt5JX3dz/M3gPJRsKmbSVMz6bFJtTTqj4eOXkn8Gx0jwM8yof+hA5FP8Vv13azgceSXBz/8AuID+9ReO5lns4FmkRZJJQ5ifSxCxOy7jwyorlxLhxs5rQpc3LCSYowllLKV5bnofVRWGmPFHsKeVpyvYtbXtXEXEVwkltI2wEwAVj5LICUY+mc1f1T3EMcymNwjqRupwQfiKq+EytYzJaOzNby5EDMSWicDPJZjuVIBKk77EeVUlBeDTH1DbqRrKUpWR1ClKUApSlAKUpQClKUBl73s1MXm5E8YinbmPHLCJBqIAbfUO6dI2NVfYnh/JkvA0ccbrKkZWLOjCxhgVzvg6ycetbysrOfo3EG1bJdopU+HNjGGX4tHpI/yGt4TbtM48+KKWpFo06BghZQx3CkjUcdcDqajcZhleLFu4WQMjDJIDaWBKMRuFYAg/Gs1DOLWSdpLaSS7aSRonERcSKdogsgGEUKQpBIxv51rrbVoXmY16Rq09NWO9j0zmrtUcpU9nuHSRvPNKkcXOZSIozqVdK4LE6QC7HrgeA8agcdtbj6Ws0EcTjlcvSZQjnvagWBHQb4xk941ob28SEKXJGp0jGATlnOFG1Yy64fBd3k8vLUogEWsbF5RvI4Yb5XCoCPI1aFt2ZZnFQ7uCdbXEola3uI1SRVWQaGLIykkbEgEEEEYIr7YcNiur5o7hdaxwK8aEnSSzOshK5w22gb+YpY2KRlmVmd2wGd3LuceyCT0A32r492ttd291IdMeJYZG3wocBkLY6DXGBn+atJXpdHL00oLqE62/6afgfZyK0ZnQuzMAgMjFjHGPZjQncIDk4/PoKuK8xuGAZSCCAQR0IPQivVcDbfJ9IkkqQpSlQSZPt1we3FrNciNUljVpEdO63MxhclcassRsc9ajrnAz1xXbtzfI/LsVbVI8sTOgySsSnWWbwAJRRv1zXKu3Denc8H6m4+okvY4cKGeIHP3bUaf6pDr/AO1Kl9tkDWhVgCDLbgg9CDPHkGqziGuJ47uJSzRagyDrJE2Nar/MCAw+HrWhBt76D7ssL4Pjg4IIz0IIIG3UYpPaSY6aScK9iZY9m7OBxLDbRI4zhlQAjIwcH4Ej51K4lwyG5UJcRJIoOoBwCAemd/HBNYu9s7Xh91ZTALCnMlDsWbTjkvpBLHHtEV27S8UtL6SzgjmjmBuCXRHz3eVJ10nOM4rBwla3fyeqssdDdL4O8fCobbiSrbxJGDasSEUAE8xdziuvbHa3DD2lmt2T/MJUxj8yPnUrh3A7e3YvDEEYjSTlicZzjcnxAqJGf8QuEEe9tbvrd/uyzL7CIfFUPeJ6ZAHnWl+fY5a1y2XJrqUpXKemKUpQClKUApSlAKUpQFb2j4g1tazXEa6mjjZgDnGQPHG+B1PwrDzcLF9NHD9J+kSsolluFIxBGCCi26r3Y3ZgME5OFY71+lGo1nZRQgiGNIwTkhFVQT5nA3NaQnpW3Jjkxa2rexl5+I3FguL1DLECALiIDO5AXmxZyGyQMrkHPQV8l7XWpDKskgbcYWGUup/ylOo2ODU/tlA7C3cRvLFHMJJY492YBW5ZC/eCvpbT6elVFlbSfbXDRvEk05dEfZ/YRSzL93UUJwd62hUlucPVJ4rcVwVLXVxexvZyall/jW0rKImk5ZGQygkI+/UY2OcDFdrca7WSC2UwuiNFobZon07ZPj1B1eOc1MvbVmaOWKTlyxklWK6lwww6suRkEeoO1fbG0ZC7yPzJJG1O2Ao2AVQqjooUAdSa3Wx5eTKpwTfJW8NtVEsbQ2rWyrEyy6iv2rHTp6MdWCGOs+dXUsYZSrdGBB+B2NeqVJjObm7ZO7D8Q1Q/RZD9tb4jYeLIP4Tj0K4+YNaWvzqayMt9bKsjxMY58SRkBhp0FQcghlyT3TtvWgTit1ad28hMyeE9uhP6kIyyn1XI+FcmXH3bH0XSZ3PEnI0tcrq4WJGkkYKqgszHoAOpNUT9rom2ghuZn8FWCRd/VpFVVHqTVD2ss7l4o5ryQAG4t1FtH/CAaRc8xiMytj4KPAeNUjjbdPY2nlUYtrej5w2Rpmlu3BUzuGVT1WNRpiB9SMt/XU6lK7T5ec3OTk/Iqp4jEttquYpmt3J30gMkp8A0J2dj02w3rVtVZe8FWWZZ+bMrqMLoZQF8yuVJUnzBFSMctMrujQWF6wtkmvxHE2MvnZV649onBxjIyfGo8HELifv2dmpjPsyzPyg38wQIX0+R2z5Vx4B2ehMwkkVpWUZDTO0pB8MayQD8B4VtK5cklF0e70sFmjq8GTn4LLIrPxG6VYVBZooAUj0jc8yUkuy48BpFaTh6RiJBAFEekaAuAukjK4x4Yrlxmw+kwS2+orzEZNQGSNQwdvnUm2hEaKg6KoUfADArKUrW52wgovZHSlKVQ0FKUoBSlKAUpSgFKUoBVPbcLeO9muQV5c0UYYZOrmISAcdMaDj5VcVTdrZZo7ZprYnXEVlK7faIpzInTxXV032q0ea9ysqq34LmovEoOZGVHXqPiK92V0s0aSxnKuoZT5gjIrvUJtMicVOLi+GYylWHGLTQ+oDutv8AA+I/3qltI57x2S1KxxoxV52GrLD2liToxHQsdh613qa06j5n/Gyeo8aW5Kqsl49AGEaOZZCcBIQZGJ647uwOAep8DV/H2Mt/auXluMb/AGr/AGY/+tdKfmDXjhUEct8zRIqwWicpAgAXmyANKQBtlUEa/wBZrP1o+Dth9Me2t/kVnYi4FzdzSyZSSFTEkTe0FLYlkJ6E600bZxp9a3tfnPB7dpLdZbcgXlvLMxVsg5eRmeKQHcB1IwfMAitxwXiaXUKzx5w3VTsyMNmVh4MDkH4VjmVuz0ek0xhoXgnVTdsLZJLOUSPywoEgf3GQhkOPHvKNvHpVzWU40/025W0G8MBWWfyd+sMXrg4dh6KPGqQXcbZpJQdmase0gMSyXEUsQJ0l9DGPWDgjUAdJyDswBq0s+IRTbwyo/wDlYE/MDcV14baJdniVqpzG0iOsi50rKVGsK3Qsjxqxx71TuFWFtxGBXuraIzKTHL3QHWVDh+8Nxk94b9GFdTypco8n/XKauLoi0qRc9jigzZ3MsZHRJGMsR9CG7wHqGqJwMtO7Qypy5YyBKuc48QynxVh0P7VKyRatHLl6HLjaVXfsaTgUGlNR6tv8h0/3/OrKvirjYV9rjlLU7PoMONY4KC8Gf45dubu0tYnK6maaTH/DjHQ+jOyj5VoBUG2ghkk+lx6XZoxGJFOQUDEgAg4xqJ6VOo3wi8VyxSlKqWFKUoBSlKAUpSgFKUoBXwivtKAq4ryC3ljsVXllkZowFwhCnvKvhqGc48qtKqe0fBhdxBQxjlRhJFIOsbjofUHoR4g1ZREgAMQWwM42z5kDJwM1Z1RVXdFZ2tuhDZzyYyVQ6R5udo8euorXbg9mlnaxxEgLFGNTHYZAy7E+p1En1qu7T/azWlr4PNznH8kI1b+mvl147Vvz5IOHBsCYl5d8Hkpuyj/O2F+GqrJWkvxKOlJy+EcLKzPFD9JuQfovWCA7B18JZh94t1VTsBjxNdeHWq2d/wDR4VCQzwtKEGyrJGyq5UdBqR1yB7laZVAGAMAbYFZ+973E7Zfctrhz/U8Kj/SildrwHFKn5O3G+ACZhPC/JuVGFkAyGHuSr99P7jwrLWnGjZXTGdOTzCPpEecpq6Lcwt96M7B/EbEjY1+iVW8d4JDexmKdMjwI2ZD5qfA/2PjmkJ+JcEZMVvVHk8dpOLi1gMigM7EJEufbkb2Bny8SfAA1lOA2Ml1HyYnZbfJae5G0l1Ix+05Puxk7a/IADzrradh5pHjjvpxLb24KwoMgyA/8X4DC4HUDr1zuUQKAAAABgAbADwAFW1KCqO7K6HkdyVJeDlZWaQosUSBEUYCrsAKzd/eJw69MsjBYLpe91OmeMYBwN+/HgbDqg861dZK6ZV4oxnwC0EYty3TZn54QnbXkx58cY8Krj3bstmlpjaNBwvisN0pe3kVwDg46qfJgdwfjVTxcci+trgbLKGtX+JGuEn+pWX+uotqytxNTBglYHFwV6bleQHxtrzrx44zVn2xs2ltJeX/EQCaPz1xEOmPiVx86mlGVe5EZucL9v4LqqLta0zRLbWytrnblmQA4iTGZHJ8DpyB6mu9zx6NLQXuGZGRHVVGWYvjQoHmSwFS+FSSvEjXCBJCMsinIU+Az4nGM/OqK1uaNqWx7sLNII0hjGERQqj0H+9SKUqpcUpSgFKUoBSlKAUpSgFKUoBSlKAVT8W4EJpormOQxTRkDWBnXHnLxuPFTvjyO4q4pUptcENJ7MzvD/tuI3Ev3YI47dfLU32kv9jEPlVb2k7LT3E00qchuYsaxs/MWW2KA4aNkzvqJbwzsOgq+7OcOeCN+aVMkk0szlckd5joAJGdkCD5VbVfXpexnoUo9xRdouKyWVujgK7akjaR8iNMjeSTSCQuQOnvDpVf2UlkuLu5uJWibQkVurQkmM9ZHKk/50Hy9K1jLnY9K4WdlHCCsMaRqSWIRQoJPU4HjUKS00WcW5J3sSKUpVC4pSlAKi8Q4dFcLy54kkXrh1BGfMZ6H1qVSg5IvD+HRW68uCJI164RQBnzOOp9alUpQVRnexv2SzWZ/+PMyr/y378Xy0tp/prRVULw51vTcpjlyQ6JBnfWjZiIGN+60gPwFW9Wk7dlYKlQpSlVLClKUApSlAKUpQClKUApSlAKUpQCoPGr76PC8oGWAAVfediFjX5sVHzqdVRxzhz3DwJkiJXMkhVirZUfZAY39s6s/yDzqY1e5WV1sQ5eOyfRFnCqJRMkEi7kK3PEUoG+feIPqDUq34yF57TkARzmJNKsWbuoQAq5Zmyx2A+VVdz2flXnRREtG81tOpd8sGV054JO/sxqw9Sa9XvApmYyKMlbtpgokKF0aIRnDr7LjJI8DjBxnNaVEzuf9/Etpe0VsqLK0hCszIBofVrUElCmnUHwp7pGTsAMkV5uu0ltEWV5CNIGo8uQqmRkKzhdKuQRhSQ2423FQIeDNzLeRYimm4eaUPKZGOYHjVsknJyY9s+FVnHRJDBd245LLLKSrczv6pSDyzHgkyZIC74wQdsYJRi3RLlJKzSDjCK1xzXQLE6INIctlkVgpGnvOS+wTOcjx2r7/AI/b6OZrbGvl6eXJzNeM6eTp5mrT3saem/TeqfiHAJnknkXG9zDOi6yhcJCsbjWu6HOog+g8DXRuDgxsfo0utpFfP0g80FU0q6yFtjjK4z0656VFRGqZftfRiLns2mPTrLOCuFxnLBgCu3gRmqe27RrJdCJTiIW8kzGRHjdSroASJApCaWY5xg467V6u+GXE1gsMjq1wFjYknus6Mr4JC+ySukkL4k48Kg8T4PcXkkjOiwq9pLbjLhyGZkYFgBjTseh8PWkVHyJOXgu7HjkE7FY3OdOsB0dNS+LJrUa03HeXI3HmKiXfaqBYZZ4xJII0L7RShX8tEhTSy5+8CQOp2qHfcKnvSomRYAsE0eQ+ti8qhe7gDEYAJ3wT3dhiu9xbXE9nLavCkbmBowwcGMsV0jTtqC+O42pURqluTX7QQKqMxk74JVBDMZMKcMTEE1hQfvFQNx5ivUnH7deX9qDzRqj0hm1jKjKhQc41rnyGT0BxAWG4SYXQgDF4VieMyKGQozFSG9kq2s58Rhevhy4LwKSGS3d9J0R3OvB2V5pUkwuQCVGHGdug86VEapF1Z8VimdkjLErnJ0SBDg4bTIV0Ng7d0mptUHBrGWOdmCGKAqxMZkDgyFgQ0Y+4uNeRkAlhttmr+qyST2Lxba3FKUqpYUpSgFKUoBSlKAUpSgFKUoBWeTtN3Y5ZITHC7BRI0keBnIBYZyBt/etDVLB2dRNA5szIjaljZlKAjONtOcbnxq0a8lZX4O/1htPxUH6qfvT6w2n4qD9VP3qfyF91fyFOQvur+Qp2juIH1htPxUH6qfvT6w2n4qD9VP3qfyF91fyFOQvur+Qp2juIH1htPxUH6qfvXA8U4fr5vOteZ0164tX/AFZzVtyF91fyFOQnur+QpaFMgfWG0/FQfqp+9PrDafioP1U/ep/IX3V/IU5C+6v5CnaO4gfWG0/FQfqp+9PrDafioP1U/ep/IX3V/IU5C+6v5CnaO4gfWG0/FQfqp+9PrDafioP1U/ep/IX3V/IU5C+6v5CnaO4gfWG0/FQfqp+9PrDafioP1U/ep/JT3V/IU5C+6v5CnaO4gfWG0/FQfqp+9PrDafioP1U/ep/IX3V/IU5C+6v5CnaO4pn7RajJ9Gi56RgFnSSPTuCcDJ3IAq3s5xJGkgGA6qwB6jIz/vVfdcCV3d1llj1gBljKhTgYGxU+BqxtoRGixr0VQo+AGB/pR14EdV7nWlKVUsKUpQClKUApSlAKUpQClKUAqn7Yj/0N1/yZP+01cVzuIFkVo5FDKwIZSMgg9QR4ipTp2RJWqMjxDhCJEkbWlrEr3VuGWIArINf3wY0z1O2D1qJ2oto4FuobZVSM2UryxpsiNqURMEGyswMvTGdPpWrXgFqFKC3jCsVJAUYJXdT8QScV1j4TAsbQrDGI3zqUKMNnrqHj860WSjJ421RQXnA7T/EIy1tBg288rZiTdxJD3223Yam73XvHzqL2duyLkTtG6i9DkswwCy5a2C7/APA156ewK189nG5y6Kx0NHkjfQ2Na/A6VyPQV9e0QhQUUhCGQYHdIGAV8iASPnUa9qZPp72jAcFtuUtu5ijjEtvMoaI96ZtGr7caV6BWIPe3PUZ3tuIxauEwLpVsrZjS3st34tm2Ox6HY1oLbg1vESY4Y1JBUkKM6T1XPu+lc07PWiqUW2iCsACAgwQCCAR6EA/KpeRN2QsbSo+cL4cIomjWGG3LFtrf2ckY1ewne+XgKpuD8KgVjZXNnbl+WshdUVlnCnGpwy5D6mzhs+0cMd60Vrw2GJGjjiRUbOpQoAbIwcjx22pY8MhgzyYkTOM6QATjoCfIZOB4VXVyX08GHg4TAtlYlLaFmkli1jQgEuEkxrOk5xknfNd7CFWeK3kULA9xcBoNuWjoq8qDyZCBJLpxgk9K2a2EQVEEahYyCgwMIQCAVHgcE/nXmbhkLh1eJCJGDuCo7zAABj/MAqjPXujyq3qFPSMfxqBYGuIbZFEYFpJy1wsaym42wAMIWVQTgeAON9/N3AJIPtUSS5a8hS4ST2SwfuJ7J+w0kFdjs2SNRatjFwuFUMSxIELByukYLAghj5tkA5O+wpd8KglJMsSOW0g6lBzpJKZ88EkjyyaLIHiZ54NZiGIIIYYdydEPsDJ6juLufHap1R7KyjhXREiouc4UYGfE/wBhUis3yargUpSoJFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgP//Z",
          name: "Allergy & Immunology",
        },
        "Physical Medicine Rehabilitation": {
          source:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSSrzs5ChMphOEztrpYEazSsTuwl-02yLBOw&usqp=CAU",
          name: "Physical Medicine Rehabilitation",
        },
      },
      currentRoom: "",
    };
  },
  methods: {
    // Generate access token
    async getAccessToken() {
      let token = await axios.get(`/token?identity=${localStorage.username}`);
      return token.data;
    },
    dispatchLog(message) {
      EventBus.$emit("new_log", message);
    },
    // Attach the Tracks to the DOM.
    attachTracks(tracks, container) {
      tracks.forEach(function(track) {
        container.appendChild(track.attach());
      });
    },
    // Attach the Participant's Tracks to the DOM.
    attachParticipantTracks(participant, container) {
      let tracks = Array.from(participant.tracks.values());
      this.attachTracks(tracks, container);
    },
    // Create a new chat
    createChat() {
      this.loading = true;
      const VueThis = this;
      this.getAccessToken().then((data) => {
        VueThis.roomName = "General";
        const token = data.token;

        let connectOptions = {
          name: "General",
          // logLevel: "debug",
          audio: true,
          video: { width: 400 },
        };
        // before a user enters a new room,
        // disconnect the user from they joined already

        // remove any remote track when joining a new room
        document.getElementById("remoteTrack").innerHTML = "";
        // document.getElementById("message").style.display = "block";

        // this.leaveRoomIfJoined();

        connect(token, connectOptions).then((room) => {
          VueThis.dispatchLog("Successfully joined a Room: " + "General");

          // set active toom
          // VueThis.activeRoom = room;
          VueThis.roomName = "General";
          // VueThis.loading = false;

          // Attach the Tracks of all the remote Participants.
          room.participants.forEach(function(participant) {
            let previewContainer = document.getElementById("remoteTrack");
            VueThis.attachParticipantTracks(participant, previewContainer);
          });
          // When a Participant joins the Room, log the event.
          room.on("participantConnected", function(participant) {
            VueThis.dispatchLog("Joining: '" + participant.identity + "'");
          });
          // When a Participant adds a Track, attach it to the DOM.
          room.on("trackAdded", function(track, participant) {
            VueThis.dispatchLog(
              participant.identity + " added tracks: " + track.kind
            );
            let previewContainer = document.getElementById("remoteTrack");
            VueThis.attachTracks([track], previewContainer);
          });
          // When a Participant removes a Track, detach it from the DOM.
          room.on("trackRemoved", function(track, participant) {
            VueThis.dispatchLog(
              participant.identity + " removed track: " + track.kind
            );
            VueThis.detachTracks([track]);
          });
          // When a Participant leaves the Room, detach its Tracks
          room.on("participantDisconnected", function(participant) {
            VueThis.dispatchLog(
              "Participant '" + participant.identity + "' left the room"
            );
            VueThis.detachParticipantTracks(participant);
          });
          // if local preview is not active, create it
          if (!VueThis.localTrack) {
            createLocalVideoTrack().then((track) => {
              let localMediaContainer = document.getElementById("localTrack");

              localMediaContainer.appendChild(track.attach());
              VueThis.localTrack = true;
            });
          }
        });
      });
    },
    openTab() {
      $(".action_menu").toggle();
    },
    changeRoom(room) {
      this.currentRoom = room;
    },
  },
  beforeMount: function() {
    this.currentRoom = this.roomsList.General;
  },
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
  border: 1.5px solid #f5f6fa;
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
  color: white;
}
.user_info p {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
}
.video_cam {
  margin-left: 50px;
  margin-top: 5px;
}
.video_cam span {
  color: white;
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
  color: white;
  cursor: pointer;
  font-size: 20px;
}
.action_menu {
  z-index: 1;
  position: absolute;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
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
  background-color: darkgrey;
  cursor: pointer;
}
.vs-list--slot {
  margin-left: 0 !important;
}
</style>
