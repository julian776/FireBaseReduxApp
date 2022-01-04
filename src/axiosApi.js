import axios from "axios";

const citasApi = () => {
    const instance = axios.create({
        baseURL: "https://app-citas-reactive-sofka.herokuapp.com", 
        responseType: "json"
    })
    return instance;
}

export default citasApi;