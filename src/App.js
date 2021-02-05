import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';
import LoginForm from './components/LoginForm';

const projectID='d2915e02-4aa9-4001-b441-e87c22388c41';

const App =()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
 
        <ChatEngine 
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

          />

    );
}

export default App;