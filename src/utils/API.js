import axios from "axios";

const RANDOM_USER_URL = "https://randomuser.me/api/?nat=us&results=30";

export default {
    getEmployees: function() {
        return axios.get(RANDOM_USER_URL);
    }
}