import { useBillGates } from "../context/BillContext"
import billGatesImg from '../assets/billgates.jpg'

function Header() {
    const { money } = useBillGates()
  return (
    <header className="header">
        <div className="header-title">
            <img src={billGatesImg} alt="Bill Gates" />
            <h1>Spend Bill Gates Money</h1>
        </div>
        <h2>${money}</h2>
    </header>
  )
}

export default Header