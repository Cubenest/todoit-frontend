import axios from "axios";
import { API_URL } from "app/utils";
import authHeader from "./auth-header";

class GroupService {
    GROUP_URL = `${API_URL}api/group`;
    getAllGroups() {
        return axios.get(this.GROUP_URL, { headers: authHeader() });
    }

    createGroup() {
        return axios.post(
            this.GROUP_URL,
            { name: "Group one" },
            { headers: authHeader() }
        );
    }
    createNewGroup(name: string) {
        return axios.post(this.GROUP_URL, { name }, { headers: authHeader() });
    }
}

export default new GroupService();
