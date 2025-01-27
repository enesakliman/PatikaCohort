import { useBillGates } from "../context/BillContext"

function Products() {
    const { handleBuy, handleSell, billData, count} = useBillGates()
  return (
    <div className="products">
        {billData.map((item) => (
            <div key={item.id} className="product">
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <p>${item.price}</p>
                <div className="products-actions">
                    <button onClick={handleSell}>Sell</button>
                    <span>{count}</span>
                    <button onClick={handleBuy}>Buy</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products