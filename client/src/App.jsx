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


  const handleClick = (ev) => {

  }

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
