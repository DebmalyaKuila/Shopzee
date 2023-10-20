import Typography from "antd/es/typography/Typography";
import React, { useEffect, useState } from "react";
import getCart from "../APIs/getCart";
import { InputNumber, Table, Spin, Button } from "antd";
import OrderDrawer from "../components/OrderDrawer";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // for opening drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCart().then((res) => setCartItems(res.products));
    setLoading(false);
  }, []);
  console.log(cartItems);

  if (loading) {
    return <Spin spinning />;
  }

  return (
    <>
      <Typography.Title className="w-full flex justify-center items-center">
        your Cart
      </Typography.Title>
      <div  className=" px-10">
        <Table
         
          columns={[
            {
              title: "title",
              dataIndex: "title",
            },
            {
              title: "price",
              dataIndex: "price",
              render: (value) => {
                return <span>${value}</span>;
              },
            },
            {
              title: "quantity",
              dataIndex: "quantity",
              render: (value, record) => {
                return (
                  <InputNumber
                    defaultValue={value}
                    min={0}
                    onChange={(val) => {
                      setCartItems((prev) =>
                        prev.map((cart) => {
                          if (record.id === cart.id) {
                            cart.total = cart.price * val;
                          }
                          return cart;
                        })
                      );
                    }}
                  ></InputNumber>
                );
              },
            },
            {
              title: "subtotal",
              dataIndex: "total",
              render: (value) => {
                return <span>${value}</span>;
              },
            },
          ]}
          pagination={false}
          dataSource={cartItems}
          summary={(data) => {
            const total = data.reduce((prev, current) => {
              return prev + current.total;
            }, 0);
            return <span>Total : {total}</span>;
          }}
        />
        <Button className="my-4" onClick={()=>setOpenDrawer(true)} >Checkout your cart</Button>
      </div>
      <OrderDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default Cart;
