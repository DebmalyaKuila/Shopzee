import { Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="px-8 py-5 bg-slate-600 flex flex-col justify-center items-center">
      <Typography.Title level={5} style={{ color: "white" }}>
        Copyright &copy; 2023 ,owned by Debmalya Kuila
      </Typography.Title>
      <div className=" w-full flex flex-row justify-between">
        <div className="flex flex-col">
          <Typography.Link href="#" target={"_blank"}>
            Privacy and Policies
          </Typography.Link>
          <Typography.Link href="#" target={"_blank"}>
            Terms & Conditions
          </Typography.Link>
          <Typography.Link href="#" target={"_blank"}>
            +91-xxxxxxxxxx
          </Typography.Link>
          <Typography.Link href="#" target={"_blank"}>
            abc@gmail.com
          </Typography.Link>
        </div>
        <div className="flex flex-col">
          <Typography.Link href="#" target={"_blank"}>facebook.com/Shopzee</Typography.Link>
          <Typography.Link href="#" target={"_blank"}>instagram.com/Shopzee</Typography.Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
