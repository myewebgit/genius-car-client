
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService';
import CheckOut from './Pages/CheckOut';
import Home from './Pages/Home/Home/Home';
import ManageService from './Pages/ManageService';
// import Login from './Pages/Login/Login';
// import Register from './Pages/Login/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './ServiceDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addservice' element={<AddService></AddService>}></Route>
        <Route path='/manageservice' element={<ManageService></ManageService>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        {/* <Route path='/login' element={<Login></Login>}></Route> */}
        {/* <Route path='/register' element={<Register></Register>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
