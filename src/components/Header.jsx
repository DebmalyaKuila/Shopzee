import React from 'react'
import { useNavigate } from 'react-router-dom'

import {Menu} from "antd"
import {HomeFilled} from "@ant-design/icons"

const Header = () => {

    const items=[
        {
            label:<HomeFilled />,
            key:"Home"
        },
    {
        label:"Men",
        key:"Men",
        children:[
            {
                label:"Men's shirt",
                key:"men-shirt"
            },
            {
                label:"Men's watch",
                key:"men-watch"
            },
            {
                label:"Men's shoes",
                key:"men-shoes"
            }
        ]
    },
    {
        label:"Women",
        key:"Women",
        children:[
            {
                label:"Women's dress",
                key:"women-dress"
            },
            {
                label:"Women's bags",
                key:"women-bags"
            },
            {
                label:"Women's shoes",
                key:"women-shoes"
            },
            {
                label:"Women's accesories",
                key:"women-accesories"
            }
        ]
    },
    {
        label:"Kids",
        key:"Kids",
        children:[
            {
                label:"Kid's clothes",
                key:"kids-clothes"
            },
            {
                label:"Kid's shoes",
                key:"kids-shoes"
            },
        ]
    }]

    // define onMenuClick handler
    const navigate=useNavigate();
    const onMenuClick =(item)=>{
navigate(`/${item.key}`)
    }

  return (
    <div>
      <Menu
      theme="dark"
      onClick={onMenuClick}
      mode='horizontal'
      items={items}
      />
    </div>
  )
}

export default Header
