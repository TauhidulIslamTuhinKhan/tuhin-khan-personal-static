import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/Home/About/About";
import All from "./pages/Home/All/All";
import Contact from "./pages/Home/Contact/Contact";
import Design from "./pages/Home/Design/Design";
import Development from "./pages/Home/Development/Development";
import Home from "./pages/Home/Home/Home";
import Marketing from "./pages/Home/Marketing/Marketing";
import News from "./pages/Home/News/News";
import Portfollio from "./pages/Home/Portfollio/Portfollio";
import Services from "./pages/Home/Services/Services";
import Header from "./pages/Shared/Header/Header";
import Sidebar from "./pages/Shared/Sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<All />} />
            <Route path="all" element={<All />} />
            <Route path="design" element={<Design />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="development" element={<Development />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfollio" element={<Portfollio />}>
            <Route exact path="/portfollio" element={<All />} />
            <Route path="all" element={<All />} />
            <Route path="design" element={<Design />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="development" element={<Development />} />
          </Route>
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<All />} />
            <Route path="all" element={<All />} />
            <Route path="design" element={<Design />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="development" element={<Development />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
