import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

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
      children: [
        {
          path: "currentPatients",
          name: "currentPatients",
          index: 1,
          component: () =>
            import(
              "./administrator/components/currentPatientsAdmin/currentPatients.vue"
            ),

          children: [
            {
              path: "/",
              name: "currentPatientsList",
              component: () =>
                import(
                  "./administrator/components/currentPatientsAdmin/currentPatientsList.vue"
                ),
            },
            {
              path: "assignARoom",
              name: "assignARoom",
              component: () =>
                import(
                  "./administrator/components/assignARoom/assignARoom.vue"
                ),
            },
          ],
        },
        {
          path: "patients",
          name: "patients",
          index: 2,
          component: () =>
            import("./administrator/components/patientsAdmin/patients.vue"),
          children: [
            {
              path: "/",
              name: "patientsList",
              index: 1,
              component: () =>
                import(
                  "./administrator/components/patientsAdmin/patientsList.vue"
                ),
            },
            {
              path: "createAPatient",
              name: "createAPatient",
              index: 2,
              component: () =>
                import(
                  "./administrator/components/createAPatient/createAPatient.vue"
                ),
            },
            {
              path: "PatientMoreInfos",
              name: "PatientMoreInfos",
              index: 3,
              component: () =>
                import(
                  "./administrator/components/patientsAdmin/PatientMoreInfo.vue"
                ),
            },
          ],
        },
        {
          path: "doctors",
          name: "doctors",
          index: 3,
          component: () =>
            import("./administrator/components/doctorsAdmin/doctors.vue"),
          children: [
            {
              path: "/",
              name: "doctorsList",
              index: 1,
              component: () =>
                import(
                  "./administrator/components/doctorsAdmin/doctorsList.vue"
                ),
            },
            {
              path: "createDoctor",
              name: "createDoctor",
              index: 2,
              component: () =>
                import(
                  "./administrator/components/createDoctor/createDoctor.vue"
                ),
            },
          ],
        },
        {
          path: "clinicState",
          name: "clinicState",
          index: 4,
          component: () =>
            import("./administrator/components/clinicState/ClinicState.vue"),
        },
        {
          path: "makeABill",
          name: "Checkbox",
          index: 7,
          component: () =>
            import("./administrator/components/makeABillAdmin/makeABill.vue"),
        },
      ],
    },
    {
      path: "/doctor",
      name: "doctor",
      component: () => import("./Interface/AdminInterface.vue"),
      children: [
        {
          path: "appointments",
          name: "appointments",
          index: 1,
          component: () =>
            import("./doctor/components/appointments/Appointments.vue"),
        },
        {
          path: "calendar",
          name: "calendar",
          index: 2,
          component: () => import("./doctor/components/Calendar/Calendar.vue"),
        },
        {
          path: "patients",
          name: "patients",
          index: 3,
          component: () =>
            import("./administrator/components/patientsAdmin/patients.vue"),
          children: [
            {
              path: "/patient",
              name: "patient",
              index: 1,
              component: () =>
                import("./doctor/components/patientProfile/PatientProfile.vue"),
            },
          ],
        },
        {
          path: "forum",
          name: "forum",
          index: 4,
          component: () => import("./doctor/components/forum/Forum.vue"),
          children: [
            {
              path: "post",
              name: "post",
              index: 1,
              component: () => import("./doctor/components/post/Post.vue"),
            },
          ],
        },
        {
          path: "chatRoom",
          name: "chatRoom",
          index: 5,
          component: () =>
            import("./doctor/components/chatDoctor/ChatView.vue"),
        },
        {
          path: "doctors",
          name: "doctors",
          index: 6,
          component: () =>
            import("./administrator/components/doctorsAdmin/doctorsList.vue"),
          children: [
            {
              path: "/doctorProfile",
              name: "doctorProfile",
              component: () =>
                import(
                  "./administrator/components/doctorProfile/DoctorProfile.vue"
                ),
            },
          ],
        },
        {
          path: "assignBill",
          name: "assignBill",
          component: () =>
            import("./doctor/components/assignBill/AssignBill.vue"),
        },
      ],
    },
    {
      path: "/patient",
      name: "patient",
      index: 4,
      component: () => import("./Interface/AdminInterface.vue"),
      
      children: [
        {
          path:'profile',
          name:'profile',
          index:7,
          component: () => import('./patient/components/profilePatient/ProfilePatient.vue')
        },
        {
          path: "makeAppointment",
          name: "makeAppointment",
          index: 1,
          component: () =>
            import("./patient/components/makeAppointment/MakeAppointment.vue"),
        },
        {
          path: "appointments",
          name: "appointments",
          index: 2,
          component: () =>
            import("./patient/components/appointments/Appointments.vue"),
        },
        {
          path: "doctors",
          name: "doctors",
          index: 3,
          component: () =>
            import("./administrator/components/doctorsAdmin/doctorsList.vue"),
          children: [
            {
              path: "doctor",
              name: "doctor",
              index: 1,
              component: import(
                "./patient/components/doctorProfile/doctorProfile.vue"
              ),
            },
          ],
        },
        {
          path: "billing",
          name: "billing",
          index: 4,
          component: () => import("./patient/components/billing/Billing.vue"),
        },
        {
          path: "history",
          name: "history",
          index: 5,
          component: () => import("./patient/components/history/History.vue"),
          children: [
            {
              path: "oneHistory",
              name: "oneHistory",
              index: 1,
              component: () =>
                import("./patient/components/oneHistory/oneHistory.vue"),
            },
          ],
        },
        {
          path: "forum",
          name: "forum",
          index: 6,
          component: () => import("./doctor/components/forum/Forum.vue"),
          children: [
            {
              path: "post",
              name: "post",
              index: 1,
              component: () => import("./doctor/components/post/Post.vue"),
            },
            {
              path: "createPost",
              name: "createPost",
              index: 1,
              component: () =>
                import("./patient/components/createPost/createPost.vue"),
            },
          ],
        },
        
        
      ],
    },
  ],
});
