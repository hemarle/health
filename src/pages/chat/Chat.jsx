import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  FormControl,
  Typography,
  IconButton,
} from "@mui/material";
import Layout from "../../components/layout/Layout";
import ChatCard from "../../components/chat/ChatCard";
import SendIcon from "@mui/icons-material/Send";
import sendImg from "../../assets/icons/send.png";
import { useChat } from "../../hooks/api/useChatbot";

function Chat() {
  const chatAPI = useChat();
  const chatBottomRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [newResponse, setNewResponse] = useState("");
  function sendMessage(e) {
    e.preventDefault();
    if (!!newResponse) {
      setMessages((messages) => [
        ...messages,
        { type: "receiver", message: newResponse },
      ]);
      setTimeout(
        () =>
          setMessages((messages) => [
            ...messages,
            { type: "loading", message: "Fetching response..." },
          ]),
        300
      );
      chatBottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      chatAPI.mutate(
        { message: newResponse },
        {
          onSuccess: (res) => {
            setMessages((message) =>
              message.filter((item) => item.type !== "loading")
            );
            setMessages((messages) => [
              ...messages,
              { type: "sender", message: res?.reply },
            ]);
          },
          onError: (res) => {
            setMessages((message) =>
              message.filter((item) => item.type !== "loading")
            );
            setMessages((messages) => [
              ...messages,
              {
                type: "failed",
                message:
                  "Sorry An Error occurred and we couldn't process the request",
              },
            ]);
          },
          onSettled: () => {
            chatBottomRef.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start",
            });
          },
        }
      );

      setNewResponse("");
    }
  }

  return (
    <Layout>
      <Box
        sx={{
          height: "calc(100vh - 140px)",
          overflowY: "scroll",
          padding: "40px 60px",
          "@media (max-width:768px)": {
            padding: "40px 20px 0",
            height: "calc(100vh - 300px)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }} mb={3}>
          <Box
            bgcolor="rgba(25, 159, 132, 0.1)"
            sx={{ maxWidth: "588px", borderRadius: "16px", padding: "16px" }}
          >
            <Typography
              fontSize={14}
              variant="body1"
              align="center"
              color="primary"
            >
              {" "}
              Welcome to the Symptom Checker Chatbot! I'm here to help you
              understand your symptoms and provide preliminary medical advice.
              Please describe your symptom in detail, and I will guide you
              through a series of questions to assess your situation.{" "}
            </Typography>
          </Box>
        </Box>
        {messages.map((message, index) => (
          <ChatCard text={message.message} type={message.type} key={index} />
        ))}

        <Box ref={chatBottomRef}></Box>
      </Box>
      <Box
        sx={{ backgroundColor: "#DFE8DE", width: "100%", padding: "40px 20px" }}
      >
        {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined"> */}
        <form onSubmit={sendMessage}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                padding: "5px 5px 5px  20px",
                // padding: "2px 10px",
                borderRadius: "50px",
                width: "100%",
                maxWidth: "800px",
                justifyContent: "center",
                "@media (max-width:768px)": {
                  padding: "5px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Type a response"
                style={{
                  height: "40px",
                  width: "100%",
                  outline: "none",
                  border: "none",
                  borderRadius: "50px",
                  padding: "0 10px",
                  fontSize: "16px",
                }}
                value={newResponse}
                onChange={(e) => setNewResponse(e.target.value)}
              />
              <IconButton
                disabled={!newResponse}
                type="submit"
                sx={{
                  bgcolor: "primary.main",
                }}
                onClick={sendMessage}
              >
                <SendIcon sx={{ color: "white" }} />
                {/* <img src={sendImg} /> */}
              </IconButton>
            </Box>
          </Box>
          {/* </FormControl> */}
        </form>
      </Box>
    </Layout>
  );
}

export default Chat;
