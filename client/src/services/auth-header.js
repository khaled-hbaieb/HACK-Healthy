const jwtDecode = require("jwt-decode");
export default function authHeader() {
  let user = jwtDecode(localStorage.getItem("token"));

  if (user) {
    console.log("user is yes", user);
    // for Node.js Express back-end
    return { token: user.userId };
  } else {
    console.log("user noooooooo");
    return {};
  }
}
// import axios from 'axios'
// export default function authHeader() {

//   axios.interceptors.request.use(function(config) {
//     const token = localStorage.get('token');
//   console.log('token', token)
//     if ( token != null ) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   console.log('config',config)
//     return config;
//   }, function(err) {
//     return Promise.reject(err);
//   });
// }

// export default function authHeader() {
//   let user = localStorage.getItem('token');

//   if (user) {
//     console.log(user.accessToken)
//     return { Authorization: 'Bearer ' + user };
//   } else {
//     return {};
//   }
// }
