import axios from "axios";

const API_URL = `${process.env.VUE_APP_BACKEND_URL}/api/users/clinicX/`;

class AuthService {
  async login(user) {
    let users = await axios.post(API_URL + `${user.role}s/checkLogin`, {
      email: user.email,
      password: user.password,
    });
    if (users.data.token) {
      localStorage.setItem("token", users.data.token);
      localStorage.setItem("role", user.role);
      setTimeout(() => {
        localStorage = {};
      }, 28800);
    }

    return users.data;
  }

  logout() {
    localStorage.clear();
  }

  register(user) {
    return axios.post(API_URL + `${user.role}s/create${user.role}`, {
      email: user.user.email,
      password: user.user.password,
      fullName: user.user.fullName,
      gender: user.user.gender,
      dateOfBirth: user.user.dateOfBirth,
      cin: user.user.cin,
      phoneNumber: user.user.phoneNumber,
      address: user.user.address,
      job: user.user.job,
      imageName: user.user.imageName,
    });
  }
}

export default new AuthService();
