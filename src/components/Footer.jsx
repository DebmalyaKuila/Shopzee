import { Typography } from "antd";
import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className=" bg-slate-600 flex flex-col justify-center items-center py-4">
      <div
        className="w-4/12 flex flex-row justify-around items-center mb-4"
        style={{ fontSize: 26, color: "white" }}
      >
        <FacebookOutlined />
        <InstagramOutlined />
        <YoutubeOutlined />
        <TwitterOutlined />
      </div>
      <Typography.Title level={5}>
        <Typography.Link style={{ color: "white" }}>
          Copyright &copy; 2023,owned by Debmalya Kuila
        </Typography.Link>
      </Typography.Title>
    </div>
  );
};

export default Footer;
