import axios from "axios";
import authHeader from "./auth-header";

const API_URL = `/api/users/clinicX/`;

class UserService {
  async getPatientBoard() {
    let user = await axios.post(API_URL + "patients/checkPatient", {
      _id: authHeader().token,
    });
    return user.data[0];
  }

  async getAdministratorBoard() {
    let user = await axios.post(API_URL + "administrators/checkAdministrator", {
      _id: authHeader().token,
    });
    return user.data[0];
  }

  async getDoctorBoard() {
    let user = await axios.post(API_URL + "doctors/checkDoctor", {
      _id: authHeader().token,
    });
    return user.data[0];
  }
}

export default new UserService();
