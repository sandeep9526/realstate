import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import SingleProperty from './pages/SinglePropertyPage'
import PersonalRooms from './pages/PersonalRooms';
import FamilyApartments from './pages/FamilyApartments';
import VacationVillas from './pages/VacationVillas';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
  <>  
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/property/:id" element={<SingleProperty/>}/>
        <Route path="/personal-rooms" element={<PersonalRooms/>}/>
        <Route path="/family-apartments" element={<FamilyApartments/>}/>
        <Route path="/vacation-villas" element={<VacationVillas/>}/>
    </Routes>
  </>
  );

}



export default App;
