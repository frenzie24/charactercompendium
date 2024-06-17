import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import './index.css'
import client from './utils/apolloClient.js';

import {ErrorPage, Home, Login, Signup} from './pages';
import './index.css'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharacterSheetView from './components/views/CharacterSheetView.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Singup />,
      },

      {
        path: '/charactersheet',
        element: <CharacterSheetView />,
      },
    ],
  },
]);ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
)*/
