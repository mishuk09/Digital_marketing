
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ContactForm from './Components/ContactPage/ContactForm';
import ChildDiv from './ChildDiv';
import ContactPage from './Components/ContactPage/ContactPage';
import Web from './Components/Service/Allservices/Web';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path='/' element={<ChildDiv />}></Route>


        {/* Services ROUTES */}
        <Route path='/web' element={<Web />}></Route>
        <Route path='/contactpage' element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
