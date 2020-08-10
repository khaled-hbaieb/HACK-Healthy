import Vue from "vue";
import Router from "vue-router";
import axios from "axios";
import jwtDecode from "jwt-decode";
// ./authentication/Login.vue
Vue.use(Router);

//middleware functions to check role of the user

// f1 isAdmin
const isAdmin = async function(next) {
  let token = jwtDecode(localStorage.getItem("token"));
  let user = await axios
    .post("/api/users/clinicX/administrators", { _id: token.userId })
  if (user.data.length > 0) {
    next();
  } else {
    localStorage.clear();
    next({ path: `/` });
  }
  // console.log('token',token)
  // console.log('user',user)
};

// f2 isPatient
const isPatient = async function(next) {
  let token = jwtDecode(localStorage.getItem("token"));
  let user = await axios
  .post("/api/users/clinicX/patients", { _id: token.userId })
  .catch((err) => console.log(err));
  if (user.data.length > 0) {
    next();
  } else {
    localStorage.clear()
    next({ path: `/` });
  }
};
// f3 isDoctor
const isDoctor = async function(next) {
  let token = jwtDecode(localStorage.getItem("token"));
  let user = await axios
    .post("/api/users/clinicX/doctors/getDoctor", { _id: token.userId })
    .catch((err) => console.log(err));
  if (user.data.length > 0) {
    next();
  } else {
    localStorage.clear();
    next({ path: `/` });
  }
};
// for each of these functions, on success, invoke next()
// on fail route.push(/login) or not found or not authorized

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      index: 1,
      component: () => import("./authentication/Login.vue"),
    },
    {
      path: "/administrator",
      index: 2,
      component: () => import("./Interface/AdminInterface.vue"),
      beforeEnter: (to, from, next) => {
        isAdmin(next);
      },
      // meta :{

      // }
      // beforeEnter: f1
      children: [
        {
          path: "currentPatients",
          name: "currentPatients",
          index: 1,
          component: () =>
            import(
              "./administrator/components/currentPatientsAdmin/currentPatients.vue"
            ),
            beforeEnter: (to, from, next) => {
              isAdmin(next);
            },
          children: [
            {
              path: "/",
              name: "currentPatientsList",
              component: () =>
                import(
                  "./administrator/components/currentPatientsAdmin/currentPatientsList.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isAdmin(next);
                },
            },
            {
              path: "assignARoom",
              name: "assignARoom",
              component: () =>
                import(
                  "./administrator/components/assignARoom/assignARoom.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isAdmin(next);
                },
            },
          ],
        },
        {
          path: "patients",
          name: "patients",
          index: 2,
          component: () =>
            import("./administrator/components/patientsAdmin/patients.vue"),
            beforeEnter: (to, from, next) => {
              isAdmin(next);
            },
          children: [
            {
              path: "/",
              name: "patientsList",
              index: 1,
              component: () =>
                import(
                  "./administrator/components/patientsAdmin/patientsList.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isAdmin(next);
                },
            },
            {
              path: "createAPatient",
              name: "createAPatient",
              index: 2,
              component: () =>
                import(
                  "./administrator/components/createAPatient/createAPatient.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isAdmin(next);
                },
            },
            {
              path: ":CIN",
              name: "PatientMoreInfos",
              index: 3,
              component: () =>
                import(
                  "./administrator/components/patientsAdmin/PatientMoreInfo.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isAdmin(next);
                },
            },
          ],
        },
        {
          path: "doctors",
          name: "doctors",
          index: 3,
          component: () =>
            import("./administrator/components/doctorsAdmin/doctors.vue"),
            beforeEnter: (to, from, next) => {
              isAdmin(next);
            },
          children: [
            {
              path: "/",
              name: "doctorsList",
              index: 1,
              component: () =>
                import(
                  "./administrator/components/doctorsAdmin/doctorsList.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isAdmin(next);
                },
            },
            {
              path: "createDoctor",
              name: "createDoctor",
              index: 2,
              component: () =>
                import(
                  "./administrator/components/createDoctor/createDoctor.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isAdmin(next);
                },
            },
            {
              path: ":CIN",
              name: "DoctorMoreInfos",
              index: 3,
              component: () =>
                import(
                  "./administrator/components/doctorsAdmin/doctorMoreInfo.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isAdmin(next);
                },
            },
          ],
        },
        {
          path: "clinicState",
          name: "clinicState",
          index: 4,
          component: () =>
            import("./administrator/components/clinicState/ClinicState.vue"),
            beforeEnter: (to, from, next) => {
              isAdmin(next);
            },
        },
        {
          path: "makeABill",
          name: "Checkbox",
          index: 7,
          component: () =>
            import("./administrator/components/makeABillAdmin/makeABill.vue"),
            beforeEnter: (to, from, next) => {
              isAdmin(next);
            },
        },
      ],
    },
    {
      path: "/doctor",
      name: "doctor",
      component: () => import("./Interface/AdminInterface.vue"),
      // beforeEnter: (to, from, next) => {
      //   isDoctor(next);
      // },
      children: [
        {
          path: "profile",
          name: "profileDoc",
          index: 1,
          component: () =>
            import("./doctor/components/profileDoctor/ProfileDoctor.vue"),
            
                beforeEnter: (to, from, next) => {
                isDoctor(next)
          },
        },
        {
          path: "appointments",
          name: "appointments",
          index: 2,
          component: () =>
            import("./doctor/components/appointments/Appointments.vue"),
            beforeEnter: (to, from, next) => {
              isDoctor(next);
            },
        },
        {
          path: "calendar",
          name: "calendar",
          index: 3,
          component: () => import("./doctor/components/Calendar/Calendar.vue"),
          beforeEnter: (to, from, next) => {
            isDoctor(next);
          },
        },
        {
          path: "patients",
          name: "patients",
          index: 2,
          component: () =>
            import("./administrator/components/patientsAdmin/patients.vue"),
            beforeEnter: (to, from, next) => {
              isDoctor(next);
            },
          children: [
            {
              path: "/",
              name: "patientsList",
              index: 1,
              component: () =>
                import(
                  "./administrator/components/patientsAdmin/patientsList.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isDoctor(next);
                },
            },
            {
              path: ":CIN",
              name: "PatientMoreInfos",
              index: 2,
              component: () =>
                import(
                  "./administrator/components/patientsAdmin/PatientMoreInfo.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isDoctor(next);
                },
            },
          ],
        },
        {
          path: "forum",
          index: 4,
          component: () => import("./doctor/components/forum/Forums.vue"),
          beforeEnter: (to, from, next) => {
            isDoctor(next);
          },
          children: [
            {
              path: "/",
              name: "forum",
              index: 1,
              component: () => import("./doctor/components/forum/Forum.vue"),
              beforeEnter: (to, from, next) => {
                isDoctor(next);
              },
            },
            {
              path: ":id",
              name: "post",
              index: 2,
              component: () => import("./doctor/components/post/Post.vue"),
              beforeEnter: (to, from, next) => {
                isDoctor(next);
              },
            },
          ],
        },
        {
          path: "chatRoom",
          name: "chatRoom",
          index: 6,
          component: () =>
            import("./doctor/components/chatDoctor/ChatView.vue"),
            beforeEnter: (to, from, next) => {
              isDoctor(next);
            },
        },
        {
          path: "doctors",
          name: "doctors",
          index: 7,
          component: () =>
            import("./administrator/components/doctorsAdmin/doctorsList.vue"),
            beforeEnter: (to, from, next) => {
              isDoctor(next);
            },
          children: [
            {
              path: "/doctorProfile",
              name: "doctorProfile",
              component: () =>
                import(
                  "./administrator/components/doctorProfile/DoctorProfile.vue"
                ),
                beforeEnter: (to, from, next) => {
                  isDoctor(next);
                },
              index: 1,
            },
          ],
        },
        {
          path: "assignBill",
          name: "assignBill",
          component: () =>
            import("./doctor/components/assignBill/AssignBill.vue"),
            beforeEnter: (to, from, next) => {
              isDoctor(next);
            },
          index: 8,
        },
      ],
    },
    {
      path: "/patient",
      name: "patient",
      index: 4,
      component: () => import("./Interface/AdminInterface.vue"),
      beforeEnter: (to, from, next) => {
        isPatient(next);
      },
      children: [
        {
          path: "profile",
          name: "profile",
          index: 7,
          component: () =>
            import("./patient/components/profilePatient/ProfilePatient.vue"),
            beforeEnter: (to, from, next) => {
              isPatient(next);
            },
        },
        {
          path: "makeAppointment",
          name: "makeAppointment",
          index: 1,
          component: () =>
            import("./patient/components/makeAppointment/MakeAppointment.vue"),
            beforeEnter: (to, from, next) => {
              isPatient(next);
            },
        },
        {
          path: "appointments",
          name: "appointments",
          index: 2,
          component: () =>
            import("./patient/components/appointments/Appointments.vue"),
            beforeEnter: (to, from, next) => {
              isPatient(next);
            },
        },
        {
          path: "doctors",
          name: "doctors",
          index: 3,
          component: () =>
            import("./administrator/components/doctorsAdmin/doctorsList.vue"),
            beforeEnter: (to, from, next) => {
              isPatient(next);
            },
          children: [
            {
              path: "doctor",
              name: "doctor",
              index: 1,
              component: import(
                "./patient/components/doctorProfile/doctorProfile.vue"
              ),
              beforeEnter: (to, from, next) => {
                isPatient(next);
              },
            },
          ],
        },
        {
          path: "billing",
          name: "billing",
          index: 4,
          component: () => import("./patient/components/billing/Billing.vue"),
          beforeEnter: (to, from, next) => {
            isPatient(next);
          },
        },
        {
          path: "history",
          name: "history",
          index: 5,
          component: () => import("./patient/components/history/History.vue"),
          beforeEnter: (to, from, next) => {
            isPatient(next);
          },
          children: [
            {
              path: "oneHistory",
              name: "oneHistory",
              index: 1,
              component: () =>
                import("./patient/components/oneHistory/oneHistory.vue"),
                beforeEnter: (to, from, next) => {
                  isPatient(next);
                },
            },
          ],
        },
        {
          path: "forum",
          index: 6,
          component: () => import("./doctor/components/forum/Forums.vue"),
          beforeEnter: (to, from, next) => {
            isPatient(next);
          },
          children: [
            {
              path: "/",
              name: "forum",
              index: 1,
              component: () => import("./doctor/components/forum/Forum.vue"),
              beforeEnter: (to, from, next) => {
                isPatient(next);
              },
            },
            {
              path: "createPost",
              name: "createPost",
              component: () =>
                import("./patient/components/createPost/createPost.vue"),
                beforeEnter: (to, from, next) => {
                  isPatient(next);
                },
            },
            {
              path: ":id",
              name: "post",
              component: () => import("./doctor/components/post/Post.vue"),
              beforeEnter: (to, from, next) => {
                isPatient(next);
              },
            },
          ],
        },
      ],
    },
  ],
});
