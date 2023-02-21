import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import reportWebVitals from './reportWebVitals';
import becomeHost from './pages/becomeHost';
import Signup from './pages/Signup'
import Home from './pages/Home'
import SuccessfulPosting from './pages/SuccessfulPosting'
import MyProfile from './pages/MyProfile'
import CreateProfile from './pages/CreateProfile'
import SingleProperty from './pages/SinglePropertyPage'
import SuccessfulBooking from './pages/SuccessfulBooking'
import MyBookings from './pages/MyBookings';
import MyHomeBookings from './pages/MyHomeBookings';
import PersonalRooms from './pages/PersonalRooms';
import FamilyApartments from './pages/FamilyApartments';
import VacationVillas from './pages/VacationVillas';
import ScrollToTop from './Components/ScrollToTop';
import PublicProfilePage from './pages/PublicProfilePage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';


function App() {
  return (
  <>  
    <Routes>
        {/* <Route path="/become-host" element={<becomeHost/>}/> */}
        {/* <Route path="/signup" element={<Signup/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/done-posting-home" element={<SuccessfulPosting/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/create-profile" element={<CreateProfile/>}/>
        <Route path="/property" element={<SingleProperty/>}/>
        <Route path="/done-booking" element={<SuccessfulBooking/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
        <Route path="/my-home-bookings" element={<MyHomeBookings/>}/>
        <Route path="/personal-rooms" element={<PersonalRooms/>}/>
        <Route path="/family-apartments" element={<FamilyApartments/>}/>
        <Route path="/vacation-villas" element={<VacationVillas/>}/>
        <Route path="/find-roommates" element={<PublicProfilePage/>}/>
    </Routes>
  </>
  );

}



export default App;
