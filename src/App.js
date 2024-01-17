import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ChildDiv from './ChildDiv';
import ContactPage from './Components/ContactPage/ContactPage';
import Web from './Components/Service/Allservices/Web';
import Footer from './Components/Footer/Footer';
import Top from './Components/Top';
import Seo from './Components/Service/Allservices/Seo';
import Blog from './Components/Blog/Blog';
import Graphic from './Components/Service/Allservices/Graphic';
import Nav from './Components/Navbar/Nav';
import WhatsApp from './Components/Whatsapp/Whatsapp';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import BlogDetails from './Components/Blog/BlogDetails';
import Adminpage from './Components/Login/Adminpage/Adminpage';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddBlogs from './Components/Blog/AddBlogs';
import ManageBlog from './Components/Login/Adminpage/ManageBlog';


function App() {
  return (
    <div className="App">
      <WhatsApp />
      <Nav />
      <Top />

      <Routes>
        <Route path='/' element={<ChildDiv />} />
        <Route path='/web' element={<Web />} />
        <Route path='/seo' element={<Seo />} />
        <Route path='/graphic' element={<Graphic />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blogs/:blogid' element={<BlogDetails />}></Route>


        {/* Use PrivateRoute for the Adminpage */}

        <Route path='/adminpage' element={
          <RequireAuth>
            <Adminpage />
          </RequireAuth>
        } />
        <Route path='/addblog' element={
          <RequireAuth>
            <AddBlogs />
          </RequireAuth>
        } />
        <Route path='/manageblog' element={
          <RequireAuth>
            <ManageBlog />
          </RequireAuth>
        } />

        <Route path='/blog' element={<Blog />} />
        <Route path='/contactpage' element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
