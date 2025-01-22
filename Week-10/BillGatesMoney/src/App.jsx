import { DATA } from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
  const [money, setMoney] = useState(100000000000) // Toplam para
  const [product, setProduct] = useState(DATA) // ürünler
  const [cart, setCart] = useState([]) // seper 
  const [total, setTotal] = useState(0) // toplam harcanan
  const [count, setCount] = useState(0) // ürün sayısı

  const handleBuy = (product) => {
    if (money >= product.price) {
      setMoney(money - product.price)
      setCart([...cart, product])
      setTotal(total + product.price)
      setCount(count, count + 1)
    }
  }
  
  return (
    <>
      <header>
        <h1>Bill Gates Money</h1>
      </header>
      <main className='container'>
        <section className='wallet'>
          <p>${money}</p>
        </section>
        <section className="products">
          {DATA.map((product) => (
            <article key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className="buttons">
                <button  className='button-sell'>Sell</button>
                <span className='count'>{count}</span>
                <button onClick={handleBuy} className='button-buy'>Buy</button>
              </div>
            </article>
            
          ))}
          
        </section>
        <section>
          {cart.map((product) => (
            <article key={product.id} className="cart">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </article>
            

          ))}
        </section>
      </main>
    </>
  )
}

export default App
