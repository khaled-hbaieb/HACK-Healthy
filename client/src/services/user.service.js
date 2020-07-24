import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/users/clinicX/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }

  getPatientBoard() {
    return axios.get(API_URL + "patients", { headers: authHeader() });
  }

  getAdministratorBoard() {
    return axios.get(API_URL + "administrators", { headers: authHeader() });
  }

  getDoctorBoard() {
    return axios.get(API_URL + "doctors", { headers: authHeader() });
  }
}

export default new UserService();
