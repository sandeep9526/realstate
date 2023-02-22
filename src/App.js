import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
import PublicProfilePage from './pages/PublicProfilePage';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
  <>  
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/done-posting-home" element={<SuccessfulPosting/>}/>
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
