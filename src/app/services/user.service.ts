import axios from "axios";
import { API_URL } from "app/utils";
import authHeader from "./auth-header";

class UserService {
    getUserInfo() {
        return axios.get(API_URL + "api/account", { headers: authHeader() });
    }
}

export default new UserService();
