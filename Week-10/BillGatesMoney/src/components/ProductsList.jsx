import { useBillGates } from "../context/BillContext"

function ProductsList() {
    const { cart } = useBillGates()

  return (
    <div>
        <h4>Your Receipt</h4>
        <ul>
            {cart.map((item) => (
                <li key={item.id}>{item.title} - ${item.price}</li>
            ))}
        </ul>
    </div>
  )
}

export default ProductsList