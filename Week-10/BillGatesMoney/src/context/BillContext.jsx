import { createContext, useContext, useState } from "react";
import { BillData } from '../data';
import PropTypes from 'prop-types';

const BillContext = createContext();

export const BillProvider = ({ children }) => {
    BillProvider.prototype = {
        children: PropTypes.node.isRequired
    }
     
    const [billData, setBillData] = useState(BillData); // product
    const [money, setMoney] = useState(100000000000) // total money
    const [cart, setCart] = useState([]) // sepet
    const [total, setTotal] = useState(0) // total spent
    const [count, setCount] = useState(0) // product count


    const handleBuy = (id) => {
        const item = billData.find((item) => item.id === id)
        if (money >= item.price) {
            setMoney(money - item.price)
            setCart([...cart, item])
            setTotal(total + item.price)
            setCount(count + 1)
        }
    }

    const handleSell = (id) => {
        const item = cart.find((item) => item.id === id)
        setMoney(money + item.price)
        setCart(cart.filter((item) => item.id !== id))
        setTotal(total - item.price)
        setCount(count - 1)
    }




    const data = {
        billData,
        money,
        cart,
        total,
        handleBuy,
        handleSell,


    }
  return <BillContext.Provider value={data}>{children}</BillContext.Provider>;
}
export const useBillGates = () => useContext(BillContext);
