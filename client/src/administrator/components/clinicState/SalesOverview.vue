<template>
  <div class="table-responsive">
    <table class="table v-middle border">
      <thead>
        <tr class>
          <th class="border-top-0">#</th>
          <th class="border-top-0">NAME</th>
          <th class="border-top-0">STATUS</th>
          <th class="border-top-0">DATE</th>
          <th class="border-top-0">PRICE</th>
          <th class="border-top-0">Doctor</th>
          <th class="border-top-0">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <span>Charaf Chroudi</span>
          </td>
          <td>
            <span class="font-weight-normal badge badge-success badge-pill px-2 py-1">Paid</span>
          </td>
          <td>April 18, 2017</td>
          <td>
            <h5 class="mb-0 text-success">480DT</h5>
          </td>
          <td>
            <h5 class="mb-0 text-success">Doctor Houssem Guesmi</h5>
          </td>
          <td>
            <div class="d-flex">
              <a v-if="!status" href="javascript:void(0)" class="text-success mr-2">
                <vs-icon @click="changeStatus" icon="add_circle"></vs-icon>
              </a>
              <a v-else href="javascript:void(0)" class="text-success mr-2">
                <vs-icon icon="check_circle"></vs-icon>
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <span>Ali Essoudani</span>
          </td>
          <td>
            <span class="font-weight-normal badge badge-danger badge-pill px-2 py-1">Pending</span>
          </td>
          <td>April 20, 2017</td>
          <td>
            <h5 class="mb-0 text-success">520DT</h5>
          </td>
          <td>
            <h5 class="mb-0 text-success">Doctor Houssem Guesmi</h5>
          </td>
          <td>
            <div class="d-flex">
              <a v-if="status" href="javascript:void(0)" class="text-success mr-2">
                <vs-icon @click="changeStatus" icon="add_circle"></vs-icon>
              </a>
              <a v-else href="javascript:void(0)" class="text-success mr-2">
                <vs-icon icon="check_circle"></vs-icon>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "SalesOverview",
  data: function() {
    return {
      status: true
    };
  },
  methods: {
    changeStatus() {
      this.status = !this.status;
    }
  }
};
</script>