
import React, { useState } from "react";
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import { Provider } from './Context';
import { CookiesProvider , useCookies} from "react-cookie";

import './App.css';
import Header from "./Header";
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import CreateCourse from "./CreateCourse";
import UpdateCourse from "./UpdateCourse";
import UserSignIn from "./UserSignIn";
import UserSignUp from "./UserSignUp";
import UserSignOut from "./UserSignOut";
import PrivateRoute from "./PrivateRoute";

function App() {
    const [cookies, setCookies] = useCookies();

    const user = cookies.user || {};
   // get cookies if exist 
    const [userInfo, setUserInfo] = useState({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      password: user.password
    });
     
    return (
      <CookiesProvider>
        <Provider value={userInfo}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Courses />} />
                    <Route path="/courses/:id" element={<CourseDetail userInfo={userInfo}/>} />
                    <Route path="/courses/create" element={
                      <PrivateRoute>
                          <CreateCourse userInfo={userInfo}/>       
                      </PrivateRoute>                  
                    } />
                    <Route path="/courses/:id/update" element={
                      <PrivateRoute>
                          <UpdateCourse userInfo={userInfo}/>       
                      </PrivateRoute>                  
                    } />
                    
                    <Route path="/signin" element={<UserSignIn setContextSignIn={setUserInfo}/>} />
                    <Route path="/signup" element={<UserSignUp setContextSignUp={setUserInfo}/>} />
                    <Route path="/signout" element={<UserSignOut setContext={setUserInfo} />} />
                </Routes>            
            </BrowserRouter>
        </Provider>
      </CookiesProvider>
    );


  
}

export default App;
