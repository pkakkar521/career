import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import ProductList from './components/ProductList';
import BarChart from './components/BarChart';
import UpdateProduct from './components/UpdateProduct';
import Subject from './components/Subject';
import Jeemain from './components/subjects/Jeemain';
import Gate from './components/subjects/Gate';
import Updated from './components/Updated';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
     <Navbar/>
    
       <Routes>

        <Route element={<PrivateComponent/>}>
<Route path="/" element={<ProductList/>}/>
<Route path="/add" element={<BarChart/>}/>
<Route path="/update/:id" element={<UpdateProduct/>}/>
<Route path="/update" element={<Updated/>}/>
<Route path="/logout" element={<h1>logout listening</h1>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/subject" element={<Subject/>}/>
<Route path="/jeemain" element={<Jeemain/>}/>
<Route path="/gate" element={<Gate/>}/>
</Route>

<Route path="/signup" element={<Signup/>}/>

       </Routes>
       </BrowserRouter>
       
       
    </div>
  );
}

export default App;
