import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styled , { keyframes } from "styled-components";
import axios from '../../api/axios';
const MESSAGE_URL = '/getmessage';
const CHECK_URL = '/checkLoginStatus';
const NEWMESSAGE = '/newMessage';
const DELETE = '/posts/';


// Comments API
const API_ENDPOINT =
  "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

const slideIn = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0);
}
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const All = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
  
const Page = styled.div`
  width: 760px;
  height: 640px;
  margin: 0 auto;
  font-family: "monospace", "微軟正黑體";
  box-shadow: 0px 0px 16px rgb(199, 197, 197);
  border-radius: 8px;
  padding: 12px 28px;
  color: #6c6c6c;
  background: #fff;
  box-sizing: border-box;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  overflow-y: scroll;
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
  width:68px;
  margin-top: 8px;
  color: #ddd;
  background-color: #343a40;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 12px;
  cursor: pointer;
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
  align-items: center;
  margin-bottom: 24px;
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

const MessageDeleteButton = styled.div`
  margin-left: 24px;
  padding: 5px;
  border-radius: 5px;
  background: #db4c3f;
  color: white;
`;




function Message({ author, time, children, handleDeleteMessage, post_id }) {
  return (
    <MessageContainer >
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <MessageTime>{time}</MessageTime>
        <MessageDeleteButton
          onClick={() => {           
            handleDeleteMessage(post_id);
          }}>
            刪除
        </MessageDeleteButton>
      </MessageHead>
      <MessageBody>{children}</MessageBody>
    </MessageContainer>
  );
}

function App(props) {
  // const [messages, setMessages] = useState();
  const [messages1, setMessages1] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [user_id, setUserId] = useState('');
  const [content, setContent] = useState('');
  
  
  const handleDeleteMessage = (e) => {
    const url = DELETE + e
    axios.delete(url)
    .then (response => {
      return axios.get(MESSAGE_URL);
    })
    .then(response => {
      // 更新留言狀態
      setMessages1(response.data);
      setContent('');
    })
    .catch(error => {
      console.error('Error submitting message:', error);
    });
  }

  // 防止點表單會消失
  const handleBoardClick = (e) => {
    e.stopPropagation();
  };

  const handleTextareaChange = (e) => {
    setContent(e.target.value);
  };

  // 按enter就能送出訊息
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleFormSubmit(e);
    }
  };

  // 打字送出
  const handleFormSubmit = (e) => {
    // 阻止預設的表單發送行為
    e.preventDefault();
    axios.post(NEWMESSAGE, JSON.stringify({user_id, content}),{
      headers: { 'Content-Type': 'application/json' }
    })
    .then (response => {
      return axios.get(MESSAGE_URL);
    })
    .then(response => {
      // 更新留言状态
      setMessages1(response.data);
      setContent('');
    })
    .catch(error => {
      console.error('Error submitting message:', error);
    });
  };

  // 顯示留言內容
  axios.get(CHECK_URL, { withCredentials: true })
  .then(response => {
    if (response.data.loggedIn) {
      setLoggedIn(true)
      setUserData(response.data.user.user)
      setUserId(response.data.user.id)
      // 如果已登入，可以根據用戶資訊執行相應的操作
    } else {
      console.log('User is not logged in');
      // 如果未登入，可以執行未登入的相應處理
    }
  })
  .catch(error => {
    console.error('Error checking login status:', error);
    // 處理錯誤情況
  });


  useEffect(() => {
    axios.get(MESSAGE_URL)
      .then(response => {
        if (response.data) {
          setMessages1(response.data);
        } 
      })
      .catch(error => {
        console.error('pc123', error);
        
      });
  }, []); 
  
  // 第二個參數傳入 [] 代表只在 componet mount 後執行
  // useEffect(() => {
  //   fetch(API_ENDPOINT)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMessages(data);
  //     })
  //     .catch((err) => {
  //       setApiError(err.message);
  //     });
  // }, []);
  
  return (

    <All>
    <Page onClick={handleBoardClick} isOpen={props.isBoardOpen}>
      <Title>留言板</Title>
      <MessageForm onSubmit={handleFormSubmit}>
        <MessageLable>留言內容</MessageLable>
        <MessageTextArea rows={8} 
          value={content}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
        />
        <SubmitButton >送出</SubmitButton>
      </MessageForm>
      <MessageList>
        
        {messages1.map((message) => (
          <>
          <Message
            // key={message.id}
            author={message.user}
            time={message.created_at}
            post_id={message.post_id}
            handleDeleteMessage={handleDeleteMessage}
          >
            {message.content}
          </Message>
          </>
        ))}
      </MessageList>


    </Page>
    </All>
  );
}

export default App;
