import axios from "axios";
import { API_URL } from "app/utils";

class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL + "api/login", {
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
        return axios.post(API_URL + "api/signup", {
            email,
            password,
            confirmPassword,
        });
    }

    forgotPassword(email: string) {
        return axios.post(API_URL + "api/forgot", { email });
    }

    getCurrentUser() {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }

    verifyToken(token: string) {
        return axios.get(API_URL + "api/reset/" + token);
    }

    resetPassword(token: string, password: string, confirm: string) {
        return axios.post(API_URL + "api/reset/" + token, {
            password,
            confirm,
        });
    }

    authGoogle() {
        return fetch(API_URL + "auth/google/", {
            redirect: "manual",
        }).then((res) => {
            if (res.type === "opaqueredirect") {
                // redirect to login page
                window.location.href = res.url;
            } else {
                // handle normally / pass on to next handler
            }
        });
    }
}

export default new AuthService();
