<template>
  <div>
    <vs-row class="row">
      <vs-col class="col-sm-12">
        <vs-card id="header-titles" class="card">
          <h4 id="t1" class="text-themecolor">Patient's Info</h4>
          <h6 id="t2" class="text-themecolor">
            <a href="/administrator/doctors">Patients</a> > Patient's Info
          </h6>
        </vs-card>
      </vs-col>
    </vs-row>
    <div class="centerx">
      <vs-row class="row">
        <vs-col class="col-md-4 col-xs-12">
          <vs-card class="card">
            <div class="user-bg">
              <img width="100%" alt="user" src />
            </div>
            <div class="user-btm-box">
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-6 b-r">
                  <strong>Name</strong>
                  <p>Jonathan Doe</p>
                </vs-col>
                <div class="col-md-6">
                  <strong>Occupation</strong>
                  <p>Engineer</p>
                </div>
              </vs-row>
              <!-- /.row -->
              <hr />
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-6 b-r">
                  <strong>Email ID</strong>
                  <p>jondoe@gmail.com</p>
                </vs-col>
                <vs-col class="col-md-6">
                  <strong>Phone</strong>
                  <p>24</p>
                </vs-col>
              </vs-row>
              <!-- /.row -->
              <hr />
              <!-- .row -->
              <vs-row class="row text-center m-t-10">
                <vs-col class="col-md-12">
                  <strong>Address</strong>
                  <p>
                    E104, Dharti-2, Chandlodia Ahmedabad
                    <br />Gujarat, India.
                  </p>
                </vs-col>
              </vs-row>
              <hr />
              <!-- /.row -->
              <vs-row class="row">
                <vs-col class="col-md-4 col-sm-4 text-center">
                  <p class="text-purple">
                    <i class="ti-facebook"></i>
                  </p>
                  <h1>258</h1>
                </vs-col>
                <div class="col-md-4 col-sm-4 text-center">
                  <p class="text-info">
                    <i class="ti-twitter"></i>
                  </p>
                  <h1>125</h1>
                </div>
                <div class="col-md-4 col-sm-4 text-center">
                  <p class="text-danger">
                    <i class="ti-google"></i>
                  </p>
                  <h1>140</h1>
                </div>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
        <div class="col-md-8 col-xs-12">
          <div class="card">
            <div class="row">
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Full Name</strong>
                <br />
                <p class="text-muted">Johnathan Deo</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Mobile</strong>
                <br />
                <p class="text-muted">(123) 456 7890</p>
              </div>
              <div class="col-md-3 col-xs-6 b-r">
                <strong>Email</strong>
                <br />
                <p class="text-muted">john@admin.com</p>
              </div>
              <div class="col-md-3 col-xs-6">
                <strong>Disease</strong>
                <br />
                <p class="text-muted">Fever</p>
              </div>
            </div>
            <hr />
            <p class="m-t-30">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </vs-row>
    </div>
  </div>
</template>
​
<script>
export default {
  name: "DoctorMoreInfos",
  props: ["doctor"],
  data: () => {
    return {};
  },
  mounted() {},
};
</script>
<style>
#t1,
#t2 {
  width: 49%;
}
#t2 {
  float: right;
  text-align: right;
  margin-top: 0%;
  position: relative !important;
}
.flot-chart {
  display: block;
  height: 400px;
}
​ .flot-chart-content {
  width: 100%;
  height: 100%;
}
​ html body .jqstooltip,
html body .flotTip {
  width: auto !important;
  height: auto !important;
  background: #343a40;
  color: #fff;
  padding: 5px 10px;
}
​ body .jqstooltip {
  border-color: transparent;
  border-radius: 60px;
}
</style>
