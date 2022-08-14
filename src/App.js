import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route}from 'react-router-dom'
import Home from './components/HomePage/Home';
import Services from './components/ServicesPage/Services';
import SignUp from './components/SignUpPage/SignUp';
import Products from './components/ProductsPage/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>


      <Navbar/>
    <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path= '/services' element={<Services/>} />
      <Route path= '/sign-up' element={<SignUp/>} />
      <Route path= '/products' element={<Products/>} />
      <Route path='*'element={<h1>404 Wrong Page</h1>}/>
    </Routes>
    <Footer/>


    </>
  );
}

export default App;
