import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ContactForm from './Components/ContactPage/ContactForm';
import ChildDiv from './ChildDiv';
import ContactPage from './Components/ContactPage/ContactPage';
import Web from './Components/Service/Allservices/Web';
import Footer from './Components/Footer/Footer';
import Top from './Components/Top';
import Seo from './Components/Service/Allservices/Seo';
import Blog from './Components/Blog/Blog';
import Graphic from './Components/Service/Allservices/Graphic';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />


      <Routes>
        <Route path='/' element={<ChildDiv />}></Route>


        {/* Services ROUTES */}
        <Route path='/web' element={<Web />}></Route>
        <Route path='/seo' element={<Seo />}></Route>
        <Route path='/graphic' element={<Graphic />}></Route>

        {/* Blogsite ROUTES */}

        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contactpage' element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
