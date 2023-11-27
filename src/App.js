import { Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from './componets/Navbar';
import Signup from './componets/Signup';
import Login from './componets/login';
// import Home from './componets/Home';  
// import Profile from './componets/Profile';
const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
<Routes>
{/* <Route path="/" element={<Home/>}></Route> */}
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/login" element={<Login/>}></Route>
{/* <Route path="/profile" element={<Profile/>}></Route> */}

 </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
