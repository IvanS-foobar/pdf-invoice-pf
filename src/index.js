import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

//hook for User management, integrated with Google OAuth
export const createOrGetUser = async (response, addUser) => {
  const decoded = jwt_decode(response.credential)

  //session token duplicate call - because JWT fetched in App.js can't be passed up to index
  const getToken = await axios.post(`${process.env.REACT_APP_AUTH0_URI}`,
                    {"client_id": `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
                    "client_secret":`${process.env.REACT_APP_AUTH0_CLIENT_SECRET}`,
                    "audience":"https://pdf-invoice/api",
                    "grant_type":"client_credentials"},
                    {headers: headers})


  const user = {
    'name': decoded.name,
    'email': decoded.email
  }

  addUser(user);

  await axios.post(`http://localhost:3001/api/auth`, user, {headers: {'authorization': `bearer ${getToken.data.access_token}`}});
}


const headers = {
  'Content-Type': 'application/json'
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
