import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from '../src/components/Layout'
import Preloader from '../src/components/Preloader/Preloader'
import HomePage from '../src/Pages/HomePages'
import CardsPage from './Pages/CardPages/CardsPage'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);
  return (
    <>
      <BrowserRouter>
        {
          isLoading ? <Preloader /> :
            <Routes>
              <Route element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path="/Products" element={<CardsPage />} />
                <Route path="/features" element={<NotFoundPage />} />
              </Route>
            </Routes>
        }
      </BrowserRouter>
    </>
  )
}
export default App