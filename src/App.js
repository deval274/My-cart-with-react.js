import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/Additem";


function App() {
  const products = [
    {
      name: "IPhone 15",
      price: 90000,
      quantity: 0,
    },
    {
      name: "IPhone 15 pro",
      price: 99999,
      quantity: 0,
    },
  ];

  // let cart = productList.length;

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    newproductList[index].quantity++;
    newTotalAmount += productList[index].price;
    setProductList(newproductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newproductList[index].quantity > 0) {
      newproductList[index].quantity--;
      newTotalAmount -= newproductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newproductList);
  };

  const resetQuantity = () => {
    let newproductList = [...productList];
    newproductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newproductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newproductList = [...productList];
    let newTotalAmount =
      totalAmount -
      newproductList[index].price * newproductList[index].quantity;
    newproductList.splice(index, 1);
    setProductList(newproductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name,price) => {
    let newproductList = [...productList];
    newproductList.push({
      name:name,
      price:price,
      quantity:0
    })
    setProductList(newproductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}
export default App;
