
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardTest from './Components/card-test/CardTest';
import { Navbar } from './Components/Navbar/Navbar';
import VideoPreview from './Pages/Video/VideoPreview';


function App() {
  return (
    <div className="App">
      {/* <div className='card-conatiner'>
        <CardTest title={"New Accounts"} percentage={85} progressVal={53} type={1} />
        <CardTest title={"New Accounts 2"} percentage={24} progressVal={13} type={2} />
        <CardTest title={"New Accounts 3"} percentage={34} progressVal={23} type={3} />
        <CardTest title={"New Accounts 4"} percentage={14} progressVal={63} type={4} />
      </div> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/video' element={<VideoPreview />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
