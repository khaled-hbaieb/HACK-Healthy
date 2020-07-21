import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
path:"/",
component: () => import("./authentication/Login.vue"),

    },
    {
      // ======================
      // Full Layout
      // ======================
      path: "/administrator",
      component: () => import("./administrator/fullAdmin/AdminInterface.vue"),
      // ======================
      // Theme routes / pages
      // ======================

      children: [
        {
          path: "/currentPatients",
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
          path: "/patients",
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
          ],
        },
        {
          path: "/doctors",
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
          path: "/clinicState",
          name: "clinicState",
          index: 4,
          component: () =>
            import("./administrator/components/clinicState/ClinicState.vue"),
        },
        {
          path: "/makeABill",
          name: "Checkbox",
          index: 7,
          component: () =>
            import("./administrator/components/makeABillAdmin/makeABill.vue"),
        },
      ],
    },
    {
      path:"/doctor",
component: () => import("./doctor/fullDoctor/AdminInterface.vue"),
    },
    // {
    //   path: "/patient",
    //   component: () => import("./patient/fullDoctor/AdminInterface.vue")
    // }
  ],

});
