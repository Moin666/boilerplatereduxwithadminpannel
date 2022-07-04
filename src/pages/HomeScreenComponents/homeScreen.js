import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../../components/minavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "../HomeScreenComponents/contact";
import About from "../HomeScreenComponents/about";
import { Box } from "@mui/system";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hotelDataLoaded } from "../../confiq/Store/hotel";
import firebaseMethods from "../../confiq/firebase/firebaseMethods";
import { selectDataHotel } from "../../confiq/Store/middleware/hotelData";


import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  remove,
} from "firebase/database";
import app from "../../confiq/firebase/firebaseInitialization";
import MiCards from "../../components/cards";
import Login from "../login";
import SignUp from "../singup";
import Home from "../home";






function HomeScreenHotel(props) {
  let state = useSelector((state) => state);
  ///////*******firebase Read Start ******** */
  const [instObj, setInstObj] = useState([]);
  let [userDetails,setuserDetails] = useState([])
  const getData =  () =>{
    userDetails = firebaseMethods.readOperation('cards')
    setuserDetails(userDetails)
  }

  React.useEffect(() => {
   getData("cards");  
   let data =  firebaseMethods.currenUser() 
  }, []);

  ///////*******firebase Read End ******** */

   const currentUserSignOut = () =>{
    firebaseMethods.signOutUser();
    console.log( "curreent user",firebaseMethods.currenUser())
   }

   const signInInfo = () =>{
    return firebaseMethods.currenUser()
   }

  const [hotelData, setHotelData] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <ResponsiveAppBar />

      {/* <Button variantr = 'contained' onClick={currentUserSignOut}>signOut</Button>
      <Button variantr = 'contained' onClick={currentUserSignOut}>signIn Info</Button> */}
      <Routes>   
                  <Route path='/' element ={<Login signInInfo ={signInInfo} />} />
                  <Route path='/signup' element ={<SignUp />} />
                  <Route path='/home' element ={<Home />} />
              </Routes>
    </div>
  );
}

export default HomeScreenHotel;
