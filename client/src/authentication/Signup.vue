<template>
        <div class="login-register" style="background-image:url(../assets/images/background/login-register.jpg);">
            <vs-card class="login-box ">
                
                    <form class="form-horizontal form-material" id="loginform" action="index.html">
                        
                        <h3 class="text-center m-b-20">Sign Up</h3>
                        <div id="inputs">
                        <div class="form-group">
                            <div class="col-xs-12">
                                <vs-input  type="text" required="" placeholder="Name"/>
                            </div>
                        </div>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <vs-input  type="text" required="" placeholder="Email"/>
                            </div>
                        </div>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <vs-input  type="password" required="" placeholder="Password"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <vs-input  type="password" required="" placeholder="Confirm Password"/>
                            </div>
                        </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <div class="custom-control custom-checkbox">
                                    <vs-input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                    <label class="custom-control-label" for="customCheck1">I agree to all <a href="javascript:void(0)">Terms</a></label> 
                                </div> 
                            </div>
                        </div>
                        <div class="form-group text-center p-b-20">
                            <div class="col-xs-12">
                                <button class="btn btn-info " type="submit">Sign Up</button>
                            </div>
                        </div>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Already have an account? <a href="pages-login.html" class="text-info m-l-5"><b>Sign In</b></a>
                            </div>
                        </div>
                    </form>
                
            </vs-card>
        </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error:'',
    };
  },
  methods: {
    signUp() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/signup", newUser)
      .then(res => {
          console.log(res)
          this.error = ''
          this.$router.push('/Login')
          }, err => {
              console.log(err.response)
              this.error = err.response.data.error
          })
    },
  },
};
</script>

<style scoped>
/* #loginform{
    background-color: brown;
} */

#inputs {
    margin-top: 1%;
    margin-left: 45%;    
}

/* #customCheck1{
        margin-left: 45% !important;    
 background-color: brown;
} */

.col-md-12 {
     margin-left: 45% !important;

}
/* .vs-card--content {
    width: 50%;
} */
</style>
