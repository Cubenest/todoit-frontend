import axios from "axios";
import { API_URL } from "app/utils";

class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL + "login", {
                email,
                password,
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(email: string, password: string, confirmPassword: string) {
        return axios.post(API_URL + "signup", {
            email,
            password,
            confirmPassword,
        });
    }

    forgotPassword(email: string) {
        return axios.post(API_URL + "forgot", { email });
    }

    getCurrentUser() {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }

    verifyToken(token: string) {
        return axios.get(API_URL + "reset/" + token);
    }

    resetPassword(token: string, password: string, confirm: string) {
        return axios.post(API_URL + "reset/" + token, { password, confirm });
    }
}

export default new AuthService();
