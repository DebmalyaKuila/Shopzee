import React from "react";
import { Button, Drawer, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
const OrderDrawer = ({openDrawer,setOpenDrawer}) => {
  const navigate = useNavigate();
//   const [openDrawer, setOpenDrawer] = useState(true);

  const onPlaceOrder = (values) => {
    setOpenDrawer(false);
    console.log(values);
    navigate("/Home");
    message.success("Order placed succesfully");
  };
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title="Place Order"
      >
        <Form onFinish={onPlaceOrder}>
          <Form.Item label="Full Name" name="full_name" rules={[{
            required:true,
            message:"please enter your name"
          }]} >
            <Input  placeholder="Enter your full Name" />
          </Form.Item>
          <Form.Item label="Email" name="email_id" rules={[{
            required:true,
            type:"email",
            message:"please enter a valid email"
          }]}>
            <Input placeholder="Enter your email id" />
          </Form.Item>
          <Form.Item label="Mobile number" name="mobile_number"
          rules={[{
            required:true,
            message:"please enter your mobile number"
          }]}>
            <Input placeholder="Enter mobile number" />
          </Form.Item>
          <Typography.Title level={4} >Address</Typography.Title>
          <Form.Item label="Building/Flat/Company" name="place_name" rules={[{
            required:true,
            message:"please fill this box"
          }]}>
              <Input placeholder="Building name" />
            </Form.Item>
            <Form.Item label="Town/City" name="town_or_city_name" rules={[{
            required:true,
            message:"please fill this box"
          }]}>
              <Input placeholder="e.g.Delhi" />
            </Form.Item>
            <Form.Item label="Landmark" name="landmark" rules={[{
            required:true,
            message:"please fill this box"
          }]}>
              <Input placeholder="e.g. near Appolo Hospital" />
            </Form.Item>
            <Form.Item label="State" name="state" rules={[{
            required:true,
            message:"please fill this box"
          }]}>
              <Input placeholder="e.g.Maharastra" />
            </Form.Item>
            <Form.Item label="Country" name="country" rules={[{
            required:true,
            message:"please fill this box"
          }]}>
              <Input placeholder="e.g.India" />
            </Form.Item>
            <Form.Item label="PinCode" name="pincode" rules={[{
            required:true,
            message:"please fill this box"
          }]}>
              <Input />
            </Form.Item>
          <Button htmlType="submit">Place Order</Button>
        </Form>
      </Drawer>
    </>
  );
};

export default OrderDrawer;
