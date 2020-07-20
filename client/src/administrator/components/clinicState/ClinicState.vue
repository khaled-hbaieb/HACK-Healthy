<template>
  <div>
    <States />
    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="6"
        vs-sm="12"
        vs-xs="12"
        code-toggler
      >
        <vs-card class="cardx">
          <div slot="header">
            <h5 class="card-title">Yearly Patients</h5>
          </div>
          <div>
            <YearlySales />
          </div>
        </vs-card>
      </vs-col>

      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="6"
        vs-sm="12"
        vs-xs="12"
        code-toggler
      >
        <vs-card class="cardx">
          <div slot="header">
            <h5 class="card-title">Patients Difference</h5>
          </div>
          <div>
            <SalesDifference />
          </div>
        </vs-card>
      </vs-col>

      <vs-col vs-lg="12">
        <vs-card>
          <div slot="header">
            <div class="d-flex align-items-center">
              <div>
                <h5 class="card-title">Bills Overview</h5>
              </div>
              <div class="ml-auto text-right">
                <div>
                  <span class="text-muted">Total Bills</span>
                  <h2 class="text-success mb-0">1000DT</h2>
                </div>
              </div>
            </div>
          </div>
          <SalesOverview />
        </vs-card>
      </vs-col>
    </vs-row>
    <Blogs />
  </div>
</template>

<script>
import YearlySales from "./YearlySales.vue";
import SalesOverview from "./SalesOverview.vue";
import States from "./States.vue";
import Blogs from "./Blogs.vue";
import SalesDifference from "./SalesDifference";

export default {
  name: "Clinic State",
  components: {
    YearlySales,
    SalesOverview,
    States,
    Blogs,
    SalesDifference
  }
};
</script>
