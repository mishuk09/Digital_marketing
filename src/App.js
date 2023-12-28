
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ContactForm from './Components/ContactPage/ContactForm';
import ChildDiv from './ChildDiv';

function App() {
  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path='/' element={<ChildDiv />}></Route>
        <Route path='/contactpage' element={<ContactForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
