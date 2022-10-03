import axios from "axios"

const Axios = axios.create({
    baseURL:"http://localhost:1337/"
})

export default Axios