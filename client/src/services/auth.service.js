import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users/clinicX/';

class AuthService {
  async login(user) {
    let users = await axios
      .post(API_URL + 'doctors', {
        email: user.email,
        password: user.password
      })
      console.log(users.data)
    //   .then(response => {
    //       console.log(response.data)
    //     if (response.data.accessToken) {
     
    //       localStorage.setItem('doctor', JSON.stringify(response.data));
    //     }

    //     return response.data;
    //   });
  }

  logout() {
    localStorage.removeItem('doctor');
  }

  register(doctor) {
    return axios.post(API_URL + 'signup', {
      email: doctor.email,
      password: doctor.password
    });
  }
}

export default new AuthService();