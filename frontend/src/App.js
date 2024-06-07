import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import PropertyPage from "./pages/PropertyPage";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className='text-red-300'>Frontend dekh lavde</p>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/propertyform" element={<Form/>} />
      <Route path="/PropertyPage" element={<PropertyPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
