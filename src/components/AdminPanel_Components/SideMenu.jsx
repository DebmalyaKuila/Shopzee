import React from 'react'
import{ Menu } from "antd"
import { AppstoreOutlined, ShopOutlined,ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'


const SideMenu = () => {
  const navigate=useNavigate()
  return (
    <div id='Admin-sidemenu'  >
      <Menu
      className='h-full mr-8'
      mode='vertical'
      onClick={(item)=>{
        navigate("/admin/"+item.key)
      }}
      items={[
        {
          label:"Dashboard",
          key:"",
          icon:<AppstoreOutlined/>
        },
        {
          label:"Inventory",
          key:"inventory",
          icon:<ShopOutlined/>
        },
        {
          label:"Orders",
          key:"orders",
          icon:<ShoppingCartOutlined/>
        },
        {
          label:"Customers",
          key:"customers",
          icon:<UserOutlined/>
        },
      ]}
      />
    </div>
  )
}

export default SideMenu
