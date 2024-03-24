import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './page/Home'
import ProductDeTails from './components/ProductDeTails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/productDeTails" element={<ProductDeTails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
