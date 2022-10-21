import './App.css';
import Header from './header';
import SideBar from './Sidebar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useAuthStore from './store/authStore';

export default App;

const headers = {
  'Content-Type': 'application/json'
}

function App () {
  const { userProfile } = useAuthStore();
  const [role, setRole] = useState("Default User")
  const [authHeader, setAuthHeader] = useState({})

  //get auth0 API session JWT
  const getAPItoken = async() => {
    const response = await axios.post(`${process.env.REACT_APP_AUTH0_URI}`,
        {"client_id": `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
        "client_secret":`${process.env.REACT_APP_AUTH0_CLIENT_SECRET}`,
        "audience":"https://pdf-invoice/api",
        "grant_type":"client_credentials"},
      {headers: headers})

    //get role of current logged in user
    if (userProfile){
      axios.get('http://localhost:3001/api/getUser', {headers: {'authorization': `Bearer ${response.data.access_token}`}, params: {userEmail: userProfile.email}}).then(function (data){
          console.log(data)
          setRole(data.data.data[0].role)
  
      })
    }
    setAuthHeader({
      'authorization': `Bearer ${response.data.access_token}`
    })
  }

  useEffect(() => {
    getAPItoken()
  },[userProfile])


  return (
    <React.Fragment>
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}`}>
    <div className="App">
    <body>
    <Header/>
    {role === 'admin' || role === 'invoiceUser' ? (
      <div class="container-fluid">
        <div class="row">
        <SideBar userData={userProfile} userRole={role} authHeader={authHeader}/>
        
        </div>
      </div>
    ) : (
      <div>
      You do not have authorization to use this application. Please use Google log-in to use the app with an authorized account.
      </div>
    )}
      </body>
      </div>
      </GoogleOAuthProvider>
      </React.Fragment>
    );
  
}

