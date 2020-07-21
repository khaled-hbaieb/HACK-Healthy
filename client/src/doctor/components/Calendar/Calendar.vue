<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-md-3">
        <vs-card class="card">
          <h5 class="card-title">Drag and drop your Appontment to calender</h5>
          <vs-row class="row">
            <vs-col class="col-md-12 col-sm-12 col-xs-12">
              <div id="calendar-events" class="m-t-20">
                <div class="calendar-events" data-class="bg-info">
                  <i class="fa fa-circle text-info"></i> 10 AM
                </div>
                <div class="calendar-events" data-class="bg-success">
                  <i class="fa fa-circle text-success"></i> 11 AM
                </div>
                <div class="calendar-events" data-class="bg-danger">
                  <i class="fa fa-circle text-danger"></i> 12 PM
                </div>
                <div class="calendar-events" data-class="bg-warning">
                  <i class="fa fa-circle text-warning"></i> 1PM
                </div>
              </div>
              <vs-checkbox class="checkbox">
                <label for="drop-remove">Remove after drop</label>
              </vs-checkbox>
              <a
                data-toggle="modal"
                data-target="#add-new-event"
                class="btn btn-lg m-t-40 btn-danger btn-block waves-effect waves-light"
              >
                <i class="ti-plus"></i> Fix Appointment
              </a>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
      <vs-col class="col-md-9">
        <vs-card class="card">
          <div id="calendar"></div>
        </vs-card>
      </vs-col>
    </vs-row>
    <!-- /.row -->
    <!-- BEGIN MODAL -->
    <div class="modal fade none-border" id="my-event">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <strong>Fix Appointment</strong>
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-white waves-effect" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-success save-event waves-effect waves-light"
            >Create event</button>
            <button
              type="button"
              class="btn btn-danger delete-event waves-effect waves-light"
              data-dismiss="modal"
            >Delete</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Add Category -->
    <div class="modal fade none-border" id="add-new-event">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <strong>Fix</strong> Date
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="row">
                <div class="col-md-6">
                  <label class="control-label">Patient Name</label>
                  <input
                    class="form-control form-white"
                    placeholder="Enter name"
                    type="text"
                    name="category-name"
                  />
                </div>
                <div class="col-md-6">
                  <label class="control-label">Choose Category Color</label>
                  <select
                    class="form-control form-white"
                    data-placeholder="Choose a color..."
                    name="category-color"
                  >
                    <option value="success">Success</option>
                    <option value="danger">Danger</option>
                    <option value="info">Info</option>
                    <option value="primary">Primary</option>
                    <option value="warning">Warning</option>
                    <option value="inverse">Inverse</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger waves-effect waves-light save-category"
              data-dismiss="modal"
            >Save</button>
            <button type="button" class="btn btn-white waves-effect" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Calendar"
};
</script>