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
    console.log('user',user)
    return axios.post(API_URL + 'patients/createpatient', {
      email: user.email,
      password: user.password,
      fullName: user.fullName,
      gender: user.gender, 
      dateOfBirth: user.dateOfBirth,
      cin: user.cin,
      phoneNumber: user.phoneNumber,
      address: user.address,
      job: user.job
    });
  }

  registerDoc(user) {
    console.log('user',user)
    return axios.post(API_URL + 'doctors/createdoctor', {
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
