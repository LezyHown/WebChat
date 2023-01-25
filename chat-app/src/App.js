import './App.css';
import Chat from './components/chat/chat';
import Users from './components/users/users';

function App(props) {
  return (
    <div className="App">
      <Users state={props.state} dispatch={props.dispatch}/>
      <Chat state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
