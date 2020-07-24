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
      localStorage.setItem("role", user.role);
    }

    return users.data;
  }

  logout() {
    localStorage.removeItem("token");
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
    });
  }

  registerDoc(user) {
    console.log("sending");
    return axios.post(API_URL + "doctors/createdoctor", {
      fullName: user.fullName,
      email: user.email,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      password: user.password,
      phoneNumber: user.phoneNumber,
      speciality: user.speciality,
      yearsOfExperience: user.yearsOfExperience,
      educationBackground: user.educationBackground,
      address: user.address,
      CIN: user.CIN,
    });
  }
}

export default new AuthService();
