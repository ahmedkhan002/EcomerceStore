import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Auth from './pages/Auth'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CustomSeparator from './CustomSeparator'
import ProductCard from './pages/ProductCard'
import ScrollToTop from './hooks/ScrollToTop'
import { Toaster } from 'react-hot-toast';
import HelpPage from './pages/HelpPage'
import ProjectsPage from './pages/ProjectsPage'
import HotOffersPage from './pages/HotOffersPage'
import GiftBoxesPage from './pages/GiftBoxesPage'
import MenuPage from './pages/MenuPage'
import ChatPage from './pages/ChatPage'
import OrdersPage from './pages/OrdersPage'

const App = () => {
  return (
    <>
    <Header />
     <div className='mx-4 sm:mx-[5vw] md:mx-[7vw] lg:mx-[8vw]'>
      <CustomSeparator />
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/product" element={<ProductCard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      <Route path='/help' element={<HelpPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/hotoffers' element={<HotOffersPage />} />
      <Route path='/giftbox' element={<GiftBoxesPage />} />
      <Route path='/menupage' element={<MenuPage />} />
      <Route path='/chat' element={<ChatPage />} />
      <Route path='/orders' element={<OrdersPage />} />
    </Routes>
    </div>
    <Footer />
    <Toaster />
    </>
   
  )
}

export default App;
