import { useBillGates } from "../context/BillContext";

function Products() {
  const { handleBuy, handleSell, billData, count, money } = useBillGates();
  return (
    <>
      <div className="products-container">
          <div className="products-title">
            <h2>${money}</h2>
          </div>
          <div className="products">
            {billData.map((item) => (
              <div key={item.id} className="product">
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <p>${item.price}</p>
                <div className="products-actions">
                  <button onClick={handleSell}>Sell</button>
                  <span>{count}</span>
                  <button onClick={() => handleBuy(item.id)}>Buy</button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}

export default Products;
