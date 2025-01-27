// import { useBillGates } from './context/BillContext.jsx'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import ProductsList from './components/ProductsList.jsx'
import './App.css'

function App() {
  // const {} = useBillGates()


  
  return (
    <>
      <Header />
      <Products />
      <ProductsList />
    </>
  )
}

export default App
