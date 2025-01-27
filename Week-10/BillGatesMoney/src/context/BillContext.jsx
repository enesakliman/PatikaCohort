import { createContext, useContext, useState } from "react";
import { BillData } from '../data';
import PropTypes from 'prop-types';

const BillContext = createContext();

export const BillProvider = ({ children }) => {
    BillProvider.prototype = {
        children: PropTypes.node.isRequired
    }
     
    const [billData, setBillData] = useState(
        BillData.map((item) => ({...item, count: 0}))
    ); // product
    const [money, setMoney] = useState(100000000000) // total money
    const [cart, setCart] = useState([]) // sepet
    const [total, setTotal] = useState(0) // total spent
    const [count, setCount] = useState(0) // product count


    
    const handleBuy = (id) => { 
        const updatedBillData = billData.map((item) => {
            if (item.id === id) {
                if(money >= item.price) {return {...item, count: item.count + 1}}
            }
            return item
        })
        const product = billData.find((item) => item.id == id)
        console.log(product)
        if (money >= product.price) {
            setMoney(money - product.price) // money - product price
            setCart([...cart, product]) // add product to cart
            setTotal(total + product.price) // total + product price
            setBillData(updatedBillData) // update product count
        }
    }

    const handleSell = (id) => {
        const updatedBillData = billData.map((item) => {
          if (item.id === id && item.count > 0) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        });
      
        const product = billData.find((item) => item.id === id);
        if (product.count > 0) {
          setMoney(money + product.price); // Parayı artır
          setCart(cart.filter((cartItem) => cartItem.id !== id)); // Sepetten çıkar
          setTotal(total - product.price); // Toplam harcamayı düşür
          setBillData(updatedBillData); // Güncellenmiş veriyi kaydet
        }
      };




    const data = {
        billData,
        money,
        cart,
        total,
        count,
        handleBuy,
        handleSell,


    }
  return <BillContext.Provider value={data}>{children}</BillContext.Provider>;
}
export const useBillGates = () => useContext(BillContext);
