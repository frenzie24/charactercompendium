import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import './index.css'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
)
