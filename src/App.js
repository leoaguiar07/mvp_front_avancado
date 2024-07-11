import React from "react";
import { Route, Routes} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'
import './assets/scss/bootstrap.scss'
import './assets/css/materialdesignicons.min.css'


import Index from "./pages/index";
import DoctorProfile from "./pages/dashboard/doctor-profile";
import DoctorTeamThree from "./pages/doctor/doctor-team-three";
import BookingAppointment from "./pages/patient/booking-appointment";
import Contact from "./pages/contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/index" element={<Index/>}/>
      <Route path="/doctor-profile/:id" element={<DoctorProfile/>}/>
      <Route path="/doctor-team-three/:name/:location" element={<DoctorTeamThree/>}/>
      <Route path="/booking-appointment/:id" element={<BookingAppointment/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
  );
}

export default App;
