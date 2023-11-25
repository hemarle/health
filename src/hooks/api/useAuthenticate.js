import instance from "./instance"
import {useMutation} from "react-query"
export const useRegister = () => {
    const registerAPI = async (payload) => {
        const {data}= await instance.post("/register",payload )
  return data
    }
    const registerQuery = useMutation(registerAPI)
    return registerQuery
}
export const useLogin = () => {
    const loginAPI = async (payload) => {
        const {data}= await instance.post("/login",payload )
  return data
    }
    const loginQuery = useMutation(loginAPI)
    return loginQuery
}