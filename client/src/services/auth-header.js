const jwtDecode = require("jwt-decode");
export default function authHeader() {
  let user = jwtDecode(localStorage.getItem("token"));

  if (user) {
    // for Node.js Express back-end
    return { token: user.userId };
  } else {
    return {};
  }
}

