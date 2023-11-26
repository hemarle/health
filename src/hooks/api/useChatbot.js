import instance from "./instance";
import { useMutation } from "react-query";
export const useChat = () => {
  const chatAPI = async (payload) => {
    const { data } = await instance.post("/chat", payload);
    return data;
  };
  const chatQuery = useMutation(chatAPI);
  return chatQuery;
};
