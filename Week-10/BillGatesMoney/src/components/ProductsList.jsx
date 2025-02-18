import { useBillGates } from "../context/BillContext";

function ProductsList() {
  const { cart, total } = useBillGates();

  return (
    <div className="products-list">
      <div className="item-container">
        <h5>Your Receipt</h5>
        <div className="products-list-items">
          {cart.map((item) => (
            <div key={item.id} className="products-list-item">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className="products-list-total">
          <h6>Total</h6>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
