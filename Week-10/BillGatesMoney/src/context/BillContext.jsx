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
        const product = billData.find((item) => item.id == id)
        if (money >= product.price) {
            setMoney(money - product.price)
            setCart([...cart, product])
            setTotal(total + product.price)
            setCount((count) => count + 1)
        }
    }




    const data = {
        billData,
        money,
        cart,
        total,
        count,
        handleBuy,
        // handleSell,


    }
  return <BillContext.Provider value={data}>{children}</BillContext.Provider>;
}
export const useBillGates = () => useContext(BillContext);
