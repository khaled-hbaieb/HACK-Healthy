import axios from "axios";

const API_URL = "http://localhost:3000/api/users/clinicX/";

class AuthService {
  async login(user) {
    console.log("log", user);
    let users = await axios.post(API_URL + `${user.role}s/checkLogin`, {
      email: user.email,
      password: user.password,
    });
    if (users.data.token) {
      localStorage.setItem("token", users.data.token);
    }

    return users.data;
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(user) {
    return axios.post(API_URL + 'patients/createpatient', {
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
