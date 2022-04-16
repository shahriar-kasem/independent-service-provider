import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home/Home';
import Services from './Components/Pages/Home/Services/Services';
import Service from './Components/Pages/Home/Service/Service';
import Blogs from './Components/Pages/Blogs/Blogs';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Checkout from './Components/Pages/Home/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/service/:serviceId' element={<Service></Service>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<AboutMe></AboutMe>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
