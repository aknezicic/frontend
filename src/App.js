
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Singlepost1 from './components/pages/singlepost1/Singlepost1';
import Singlepost2 from './components/pages/singlepost2/Singlepost2';
import Singlepost3 from './components/pages/singlepost3/Singlepost3';
import Login from './components/pages/login/Login';
import ForgotPassword from './components/pages/ForgotPassword';
import Register from './components/pages/register/Register';
import Contact from './components/pages/contact/Contact';
import Aboutus from './components/pages/aboutus/Aboutus';
import Equipment from './components/pages/equipment/Equipment';
import Blank from './components/pages/blank/Blank';
import Blog from './components/pages/blog/Blog';
import BlogSingle from './components/pages/blog/BlogSingle';
import Comments from './components/pages/blog/Comments';
import AuthorPosts from "./components/pages/blog/meta/AuthorPosts";
import Exchange from './components/pages/exchange/Exchange';
import Countries from './components/pages/countries/Countries';
import SingleCountry from './components/pages/countries/SingleCountry';
import Weather from './components/pages/weather/Weather';
import Useful from './components/pages/useful/Useful';
import Shop from './components/pages/shop/Shop';
import ProductSingle from './components/pages/shop/ProductSingle';
import CartPage from './components/pages/shop/CartPage';
import CheckoutPage from './components/pages/shop/CheckoutPage';
import AllProductsPage from './components/pages/shop/AllProductsPage';
import BeautyCategoryPage from './components/pages/shop/BeautyCategoryPage';
import SmartphonesCategoryPage from './components/pages/shop/SmartphonesCategoryPage';
import Footer from './components/footer/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (

    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/singlepost1" element={<Singlepost1 />} />
            <Route path="/singlepost2" element={<Singlepost2 />} />
            <Route path="/singlepost3" element={<Singlepost3 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogSingle />} />
            <Route path="/blog/:id" element={<Comments />} />
            <Route path="/blog/author/:authorID" element={<AuthorPosts />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:name" element={<SingleCountry />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/useful" element={<Useful />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/category/beauty" element={<BeautyCategoryPage />} />
            <Route path="/category/smartphones" element={<SmartphonesCategoryPage />} />
            <Route path="/shop/:id" element={<ProductSingle />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
