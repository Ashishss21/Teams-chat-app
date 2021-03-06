import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/chatFeed';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/loginForm';

const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height="100vh"
            projectID="0c5e9024-b273-4411-bc58-e10b4353bbe9"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App;