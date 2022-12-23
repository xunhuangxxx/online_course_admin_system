
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route,  NavLink, Routes, Redirect} from 'react-router-dom';
import { Provider } from './Context';

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

    const [userInfo, setUserInfo] = useState({
      email:"",
      password:""
    });

    return (
      <Provider value={userInfo}>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route exact path="/" element={<Courses />} />
                  <Route path="/courses/:id" element={<CourseDetail />} />
                  <Route path="/courses/create" element={
                     <PrivateRoute>
                        <CreateCourse />       
                     </PrivateRoute>                  
                  } />
                   <Route path="/courses/:id/update" element={
                     <PrivateRoute>
                        <UpdateCourse />       
                     </PrivateRoute>                  
                  } />
                  
                  <Route path="/signin" element={<UserSignIn />} />
                  <Route path="/signup" element={<UserSignUp />} />
                  <Route path="/signout" element={<UserSignOut />} />
              </Routes>

          
          </BrowserRouter>
      </Provider>
    );


  
}

export default App;
