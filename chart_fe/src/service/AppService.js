import axios from "axios";
const listAll = () => {
    try {
        return axios.get(`http://localhost:8080/apps`);
    } catch(error){
        console.log(error);
    }
};

export default listAll;