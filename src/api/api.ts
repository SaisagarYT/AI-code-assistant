import axios from "axios";

const backendBasURl = import.meta.env.VITE_BACKEND_BASE_URL;

export const checkBackendAlive = async() =>{
    const response =  await axios.get(backendBasURl);
    return response.data;
}


