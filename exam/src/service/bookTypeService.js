import axios from "axios";

export const getBookType = () => {
    return axios.get("http://localhost:8080/bookTypes");
}
