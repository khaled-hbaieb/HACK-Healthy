import axios from "axios";

const API_URL = `/api/users/clinicX/`;

class AuthService {
  async login(user) {
    let users = await axios.post(API_URL + `${user.role}s/checkLogin`, {
      email: user.email,
      password: user.password,
    },{ headers: { Authorization:localStorage.getItem('token') } });
    if (users.data.token) {
      axios.defaults.headers.common['Authorization'] = users.data.token
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

  async register(user) {
    let newPatient = await axios.post(
      API_URL + `${user.role}s/create${user.role}`,
      {
        email: user.user.email,
        password: user.user.password,
        fullName: user.user.fullName,
        gender: user.user.gender,
        dateOfBirth: user.user.dateOfBirth,
        CIN: user.user.CIN,
        speciality:user.user.speciality,
        phoneNumber: user.user.phoneNumber,
        address: user.user.address,
        yearsOfExperience:user.user.yearsOfExperience,
        imageName: user.user.imageName,
        educationBackground:user.user.educationBackground
      }
    );
    
    return newPatient.data;
  }
}

export default new AuthService();
