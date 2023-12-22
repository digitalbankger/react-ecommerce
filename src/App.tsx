import {Route, Routes} from 'react-router-dom'
import { GeneralPage } from './pages/GeneralPage'
import { Catalog } from './pages/Catalog'
import { Card } from './pages/Card'
import { Checkout } from './pages/Checkout'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import './App.css';
import { ShopCartProvider } from './context/Catalog-context'

function App() {
  return (
    <>
    <ShopCartProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<GeneralPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </ShopCartProvider>
    </>
  )
}

export default App;
