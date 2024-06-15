import React from 'react'
import {Space, Badge} from 'antd'
import { BellOutlined, MailOutlined } from '@ant-design/icons'
const Header = () => {
  return (
    <div id='Admin-header'>
        <h1 style={{"color":"orangered"}}>Shopzee</h1>
        <h1>Admin Dashboard</h1>
      <Space >
        <div className='px-6'>
        <Badge dot>
        <MailOutlined style={{fontSize : 22 }}/>
        </Badge>
        </div>
        <Badge count={10}>
        <BellOutlined style={{fontSize : 22}}/>
        </Badge>
      </Space>
    </div>
  )
}

export default Header
