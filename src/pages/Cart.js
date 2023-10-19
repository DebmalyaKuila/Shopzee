import Typography from "antd/es/typography/Typography";
import React, { useEffect, useState } from "react";
import getCart from "../APIs/getCart"
import { InputNumber, Table ,Spin} from "antd";
const Cart = () => {
const [cartItems,setCartItems]=useState([])
const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
getCart().then(res=> setCartItems(res.products))
setLoading(false)
},[])
console.log(cartItems);

if (loading) {
  return <Spin spinning/>
}

  return (
    <>
      <Typography.Title className="w-full flex justify-center items-center">your Cart</Typography.Title>
      <Table
      className=" px-8"
      columns={[
{
  title: "title",
dataIndex: "title"
},
{
  title: "price",
dataIndex: "price",
render:(value)=>{
  return <span>${value}</span>
}
},
{
  title: "quantity",
dataIndex: "quantity",
render:(value)=>{
  return <InputNumber defaultValue={value} min={0}></InputNumber>
}
},
{
  title: "subtotal",
dataIndex: "total",
render:(value)=>{
  return <span>${value}</span>
}
}
      ]}
      dataSource={cartItems}
      pagination={false}
      />
    </>
  );
};

export default Cart;
