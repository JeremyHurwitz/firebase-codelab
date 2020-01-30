import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput.js';
import LoginButton from './LoginButton.js';
import UserResponses from './UserResponses.js'
import firebase from 'firebase';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <LoginButton setUser={(user) => setUser(user)} />
        {user != null &&
          <p>Welcome, {user.displayName} ({user.email})</p>
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My codelab app!
        </p>
        <TextInput promptText="Name?" user={user} field="name"/>
        <TextInput promptText="Hometown?" user={user} field="hometown"/>
        <UserResponses />
      </header>
    </div>
  );
}

export default App;
