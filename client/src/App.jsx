import { useEffect, useState } from 'react'
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
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

/*
const genDummyInputList = (listName) => {
  let dummy = [];
  const uuid = uuidv4();
  for (let i = 0; i < 10; i++) {
    dummy.push({
      value: `${listName}: ${i}`,
      id: uuid
    })
  }
  return dummy;
}*/


// i never remove count state from app, because I almost always eventually end up needing it at this level
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';
  /*
  let statList = []
  let skillList = []
  let textAreas = []
  let primaryAttributes = [];
  let characterLabels = [];
*/

  const handleClick = (ev) => {

  }
/*
  // logic to update/populate empty stat/skill lists
  const buildListData = (list, target, parent) => {
    let id = parent.id;
    const obj = {
      value: target.value,
      id: id,
      inputId: target.id
    }

    if (list.length <= 0) {
      list = [obj];
    } else {
      let found = false;
      list.map((stat, idx) => {
        if (stat.inputId === target.id) {
          found = true;
          return list[idx] = obj;

        }
      });

      if (!found) list.push(obj);
    }
  }
// when a text input component in a list item changes
  const handleListChange = (target, parent) => {
    let name = parent.getAttribute('name');

    if (name == 'Stat') {
      buildListData(statList, target, parent)

    } else {
      buildListData(skillList, target, parent)
    }
  }

  const handleLabelChange = (target, parent) => {
    const id = parent.id;
    const inputId = target.id;
    const obj = {
      value: target.value,
      id: id,
      inputId: inputId
    }

    // there are only ever 2 possible character labels, and they always are rendered together
    if (characterLabels.length == 0) {
      characterLabels = [obj]
    } else {
      if (characterLabels[0].inputId == inputId) {
        characterLabels[0] = obj;
      } else characterLabels[1] = obj
    }
  }

  const handlePrimaryChange = (target, parent) => {
    const id = parent.id;
    const inputId = target.id;
    const obj = {
      value: target.value,
      id: id,
      inputId: inputId
    }

    // there are only ever 2 possible character labels, and they always are rendered together
    if (primaryAttributes.length == 0) {
      primaryAttributes = [obj]
    } else {
      if (primaryAttributes[0].inputId == inputId) {
        primaryAttributes[0] = obj;
      } else primaryAttributes[1] = obj
    }
  }

  const handleTextAreaChange = (target, parent) => {
    const id = parent.id;
    const inputId = target.id;
    const obj = {
      input: inputId == 'input' ? target.value : parent.children[0].value,
      content:  inputId == 'content' ? target.value : parent.children[1].value,
      id: id,
      inputId: inputId,
    }
    // there are only 2 textarea containers for now
    if (textAreas.length == 0) {
      textAreas = [obj]
    } else {
      if (textAreas[0].id == id) {
        textAreas[0] = obj;
      } else textAreas[1] = obj
    }
  }

  // THE parent handleChange hook, use this as an example when creating edit, save, and post hooks
  const handleChange = (ev, setCallBackState) => {

    ev.preventDefault();


    const target = ev.target;
    const parent = target.parentElement;
    const tag = parent.tagName;
    //set the state of the component that called the hook
    setCallBackState(target.value);

    if (tag == "LI") {
      handleListChange(target, parent)
    } else if (tag == "SPAN") {

      handleLabelChange(target, parent)

    } else if(tag == "DIV") {
      if(target.name== "Primary") {
        handlePrimaryChange(target, parent);
      }
    } else if (tag == "SECTION" ){
      handleTextAreaChange(target, parent)
    }

    // debugger;


  }

//   const handleAddCharacter = async () => {
//     if (!AuthService.loggedIn()) {
//         console.error('User is not logged in');
//         return;
//     }

//     try {
//         const { data } = await addCharacter({
//             variables: {
//                 userID: AuthService.getProfile().data._id, // Ensure you get the userID from the token
//                 characterName: "Tester",
//                 characterClass: "Generic",
//                 health: "1/2",
//                 defense: "+1",
//                 baseStat: ["STR:10", "DEX:14", "CON:12", "WIS:14", "INT:17", "CHA:8"],
//                 skill: ["Arcana:5", "Stealth:3"],
//                 inventory: ["One Spellbook"],
//                 notes: ["Nothing of note"]
//             },
//         });
//         console.log('Character added', data);
//     } catch (err) {
//         console.error('Error adding character', err);
//         console.error('GraphQL error details:', err.graphQLErrors);
//         console.error('Network error details:', err.networkError);
//     }
// };

// const handleLogin = async () => {
//     try {
//         const { data } = await login({
//             variables: {
//                 email: "test1@test.com",
//                 password: "test1"
//             },
//         });
//         // this segment here has to do with storing the token and is REQUIRED
//         AuthService.login(data.login.token);
//         console.log('Login successful', data);
//         // Optionally, redirect or perform additional actions upon successful login
//     } catch (err) {
//         console.error('Error logging in', err);
//         console.error('GraphQL error details:', err.graphQLErrors);
//         console.error('Network error details:', err.networkError);
//     }
// }
*/

  // we need to take this and make a view for the character sheet3
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
      <div className='tablebg flex flex-row flex-wrap w-screen justify-center items-start px-5 py5 '>
          <Outlet />
        </div>

      </div>
    </ApolloProvider>
  );
  /*return (
    <>

        <CharacterSheetView HandleChange={handleChange} Items={undefined} />

      </div>

    </>
  )*/
}

export default App
