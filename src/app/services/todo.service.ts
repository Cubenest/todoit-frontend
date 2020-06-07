import axios from "axios";
import { API_URL, STATUS } from "app/utils";
import authHeader from "./auth-header";
import { TodoModel } from "app/models";

class TodoService {
    TODO_URL = `${API_URL}api/group/`;

    getAllTodo(groupId: string) {
        return axios.get(this.TODO_URL + groupId + "/todos", {
            headers: authHeader(),
        });
    }

    getAllOngoingTodo(groupId: string) {
        return axios.get(this.TODO_URL + groupId + "/todos/0,1", {
            headers: authHeader(),
        });
    }

    getAllCompletedTodo(groupId: string) {
        return axios.get(this.TODO_URL + groupId + "/todos/2,3", {
            headers: authHeader(),
        });
    }

    markComplete(groupId: string, todo: TodoModel) {
        return axios.post(
            this.TODO_URL + groupId + "/todo/" + todo._id,
            { ...todo, status: STATUS.completed },
            { headers: authHeader() }
        );
    }

    addTodo(
        groupId: string,
        data: {
            title: string;
            dueDate: Date;
            labels: string[];
            status: number;
            priority: number;
        }
    ) {
        return axios.post(this.TODO_URL + groupId + "/todo", data, {
            headers: authHeader(),
        });
    }
}

export default new TodoService();
