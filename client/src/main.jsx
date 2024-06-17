import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CharacterSheetView from './components/views/CharacterSheetView.jsx';
import Profile from './pages/Profile.jsx'

import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import './index.css'
import client from './utils/apolloClient.js';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        element: <Signup />,
      },

      {
        path: '/charactersheet',
        element: <CharacterSheetView />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
    ],
  },
]);ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
