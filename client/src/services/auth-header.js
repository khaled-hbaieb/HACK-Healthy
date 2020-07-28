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

