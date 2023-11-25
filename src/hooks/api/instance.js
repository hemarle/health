import axios from "axios"

const instance = axios.create({
    baseURL:"https://health-server.cyclic.app"
})
export default instance