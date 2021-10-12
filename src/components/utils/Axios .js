import axios from "axios"
const Axios = axios.create({
    baseURL:process.env.NODE_ENV === "development"
    ?"http://localhost:8080"
    :"kvaknastya.com",
    timeout:50000
})

export default Axios