import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import Pagenotfound from "./components/pages/Pagenotfound";
import Adduser from "./components/users/Adduser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edituser from "./components/users/Edituser";
import Viewuser from "./components/users/Viewuser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Pagenotfound/>}/>
            <Route path="/add" element={<Adduser/>}/>
            <Route path="/edit/:id" element={<Edituser/>}/>
            <Route path="/view/:id" element={<Viewuser/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
