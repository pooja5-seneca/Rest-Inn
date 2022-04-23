
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import PropertyListing from './PropertyListing';
import PropertyDescriptionPage from '../pages/PropertyDescriptionPage';
import PropertyPage from '../pages/PropertyPage';
import ContactUsPage from '../pages/ContactUsPage';
import About from './About';
import Dashboard from './Dashboard';
import { Logout } from '../pages/Logout';
// import Login from './Login';
// import Signup from './Signup';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/property-listing/:type" element={<PropertyListing />} />
        <Route path="/property-listing" element={<PropertyListing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/properties/:data" element={<PropertyPage />} />
        <Route path="/propertyDescription/:id" element={<PropertyDescriptionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />



        {/* <Route path="property-list" element={<PropertyList />} /> */}
        {/* <Route path="property-sorting/:variable/propertydescription/:name" element={<PropertyDescription />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
