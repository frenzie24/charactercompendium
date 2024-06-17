import { useState } from 'react'
import './App.css'
import { ADD_CHARACTER, LOGIN_USER, ADD_USER } from './utils/mutations';
import Auth from "./utils/auth";
import { useMutation } from '@apollo/client';

import BottomView from './components/views/BottomView'
// need to add routing !
import TopView from './components/views/TopView'
import ImageView from './components/views/ImageView';
import PrimaryAttribute from './components/PrimaryAttribute';
import LabelView from './components/views/LabelView';
import LabelContainer from './components/LabelContainer';
import CharacterSheetView from './components/views/CharacterSheetView';




// i never remove count state from app, because I almost always eventually end up needing it at this level
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const [addCharacter] = useMutation(ADD_CHARACTER);
    const [login] = useMutation(LOGIN_USER);
    const [addUser] = useMutation(ADD_USER);

const handleLogin = async () => {
  try {
      const { data } = await login({
          variables: {
              email: "test1@test.com",
              password: "test1"
          },
      });
      Auth.login(data.login.token);
      console.log('Login successful', data);
      // Optionally, redirect or perform additional actions upon successful login
  } catch (err) {
      console.error('Error logging in', err);
      console.error('GraphQL error details:', err.graphQLErrors);
      console.error('Network error details:', err.networkError);
  }
}

const handleAddCharacter = async () => {
  if (!Auth.loggedIn()) {
      console.error('User is not logged in');
      return;
  }

  try {
      const { data } = await addCharacter({
          variables: {
              userID: Auth.getProfile().data._id, // Ensure you get the userID from the token
              characterName: "Tester",
              characterClass: "Generic",
              health: "1/2",
              defense: "+1",
              baseStat: ["STR:10", "DEX:14", "CON:12", "WIS:14", "INT:17", "CHA:8"],
              skill: ["Arcana:5", "Stealth:3"],
              inventory: ["One Spellbook"],
              notes: ["Nothing of note"]
          },
      });
      console.log('Character added', data);
  } catch (err) {
      console.error('Error adding character', err);
      console.error('GraphQL error details:', err.graphQLErrors);
      console.error('Network error details:', err.networkError);
  }
};

const handleAddUser = async () => {
  try {
      const { data } = await addUser({
          variables: {
              username: "Player7",
              email: "test7@test.com",
              password: "test7"
          },
      });
      console.log('User added', data);
      const token = data.addUser.token; // Get the token from the response
      Auth.login(token); // Store the token in localStorage using Auth method
      console.log('Token stored in localStorage:', Auth.getToken()); // Verify token in localStorage
  } catch (err) {
      console.error('Error adding user', err);
      console.error('GraphQL error details:', err.graphQLErrors);
      console.error('Network error details:', err.networkError);
  }
}

  const handleClick = (ev) => {

  }
  // THE parent handleChange hook, use this as an example when creating edit, save, and post hooks
  const handleChange = (ev, setCallBackState) => {
    // ev.preventDefault();
    const target = ev.target;
    debugger;
    setCallBackState(target.value);

}
    // we need to take this and make a view for the character sheet
  return (
    <>
      <div className='tablebg flex flex-row flex-wrap w-screen justify-center items-start px-5 py5 '>
        {/* <CharacterSheetView HandleChange={handleChange} /> */}
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleAddCharacter}>Add Dummy Character</button>
        <button onClick={handleAddUser}>Add Dummy User</button>
      </div>

    </>
  )
}

export default App
