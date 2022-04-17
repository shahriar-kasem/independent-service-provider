import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home/Home';
import Services from './Components/Pages/Home/Services/Services';
import Blogs from './Components/Pages/Blogs/Blogs';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Checkout from './Components/Pages/Home/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Shared/Header/Header';
import ServiceDetails from './Components/Pages/Home/Home/ServiceDetails.js/ServiceDetails';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <section>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<AboutMe></AboutMe>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </section>
  );
}

export default App;
