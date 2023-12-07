import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Comments API
const API_ENDPOINT =
  "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

const Page = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: "monospace", "微軟正黑體";
  box-shadow: 0px 0px 16px rgb(199, 197, 197);
  border-radius: 8px;
  padding: 12px 28px;
  color: #6c6c6c;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
`;

const MessageForm = styled.form`
  margin-top: 16px;
  font-size: 18px;
`;
const MessageLable = styled.div``;

const MessageTextArea = styled.textarea`
  display: block;
  margin-top: 8px;
  width: 95%;
  border-color: rgba(0, 0, 0, 0.125);
`;
const SubmitButton = styled.button`
  margin-top: 8px;
  color: #ddd;
  background-color: #343a40;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 12px;
`;

const MessageList = styled.div`
  margin-top: 16px;
`;
const MessageContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 16px;
  border-radius: 4px;

  & + & {
    margin-top: 8px;
  }
`;

const MessageHead = styled.div`
  display: flex;
`;

const MessageAuthor = styled.div`
  margin-right: 12px;
  color: #232323;
`;

const MessageTime = styled.div``;

const MessageBody = styled.div`
  margin-top: 8px;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: #db4c3f;
`;

function Message({ author, time, children }) {
  return (
    <MessageContainer>
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <MessageTime>{time}</MessageTime>
      </MessageHead>
      <MessageBody>{children}</MessageBody>
    </MessageContainer>
  );
}

function App() {
  const [messages, setMessages] = useState([]);
  const [apiError, setApiError] = useState(null);

  // 第二個參數傳入 [] 代表只在 componet mount 後執行
  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => {
        setApiError(err.message);
      });
  }, []);

  return (
    <Page>
      <Title>React 留言板</Title>
      <MessageForm>
        <MessageLable>留言內容</MessageLable>
        <MessageTextArea rows={8} />
        <SubmitButton>送出</SubmitButton>
      </MessageForm>
      {apiError && (
        <ErrorMessage>
          {/* 直接 render object 會出錯，因此需轉成 string */}
          Something went wrong. {apiError.toString()}
        </ErrorMessage>
      )}
      <MessageList>
        {messages.map((message) => (
          <Message
            key={message.id}
            author={message.nickname}
            time={message.createdAt}
          >
            {message.body}
          </Message>
        ))}
      </MessageList>
    </Page>
  );
}

export default App;
