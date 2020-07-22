export default function authHeader() {
    let doctor = JSON.parse(localStorage.getItem('doctor'));
  
    if (doctor && doctor.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': doctor.accessToken };
    } else {
      return {};
    }
  }