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
    localStorage.removeItem("doctor");
  }

  register(user) {
    return axios.post(API_URL + `create${user.role}`, {
      email: doctor.email,
      password: doctor.password,
    });
  }
}

export default new AuthService();
