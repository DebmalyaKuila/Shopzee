import React, { useEffect, useState } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";
import getCategories from "../APIs/getCategories";
import { Menu, Typography ,Input, Badge} from "antd";
import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import {User} from "phosphor-react"

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  const items = [
    {
      label: <HomeFilled />,
      key: "Home",
    },
    {
      label: categories[2],
      key: categories[2],
    },
    {
      label: categories[3],
      key: categories[3],
    },
    {
      label: "others",
      key: "others",
      children: [
        {
          label: categories[0],
          key: categories[0],
        },
        {
          label: categories[1],
          key: categories[1],
        },
      ],
    },
  ];

  // define onMenuClick handler
  const navigate = useNavigate();
  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };

  return (
    
      <div className="flex flex-col shadow-sm">
        <div className="flex flex-row justify-between items-center mx-10">
          <Typography.Title style={{color:'orangered'}}>Shopzee</Typography.Title>
          <Input.Search
          className="w-4/12"
      placeholder="Search product"
      allowClear
    
    
    />
    <div className="flex flex-row  items-center">
    <User size={24} />
<p >Debmalya kuila</p>
    </div>
    <Badge count={7}>
          <ShoppingCartOutlined style={{ fontSize: '24px' }} onClick={()=>navigate(`/Cart`)}/>   

    </Badge>
        </div>
        <Menu
       
          theme="light"
          onClick={onMenuClick}
          mode="horizontal"
          items={items}
        />
      </div>
    
  );
};

export default Header;
