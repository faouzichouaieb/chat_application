import React from 'react';

import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import './App.css';
import LoginForm from './components/LoginForm';



const App = () => {
if (!localStorage.getItem('username'))return <LoginForm/>

    return (
        <ChatEngine 
        height="100vh"
        projectID="6ca81b28-91fa-48a1-9697-3224c511db42"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatfeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
        
    )
   
    };

    export default App;