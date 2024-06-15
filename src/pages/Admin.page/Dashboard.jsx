import React from 'react'
import { Typography ,Space} from 'antd'
import CardsComponent from '../../components/AdminPanel_Components/CardsComponent'
import RecentOrder from '../../components/AdminPanel_Components/RecentOrder'
import DashboardChart from '../../components/AdminPanel_Components/DashboardChart'
import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'

const Dashboard = () => {
  return (
    <div>
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <Space direction="horizontal" className='flex flex-row items-start w-full content-between flex-wrap mb-4'>
      <CardsComponent title="Orders" value={129964} icon={<ShoppingCartOutlined style={{fontSize:"2rem",color:"red" ,background:"rgba(255,0,0,0.1)",borderRadius:"50%",padding:"5px"}}/>}/>
      <CardsComponent title="Inventory" value={294} icon={<ShoppingOutlined style={{fontSize:"2rem",color:"rgb(0,191,255)" ,background:"rgba(0,191,255,0.2)",borderRadius:"50%",padding:"5px"}}/>}/>
      <CardsComponent title="Customers" value={3967} icon={<UserOutlined style={{fontSize:"2rem",color:"blue" ,background:"rgba(0,0,255,0.1)",borderRadius:"50%",padding:"5px"}}/>}/>
      <CardsComponent title="Revenue" value={729664} icon={<DollarCircleOutlined style={{fontSize:"2rem",color:"green" ,background:"rgba(0,255,0,0.1)",borderRadius:"50%",padding:"5px"}}/>}/>
      </Space>
      <Space direction='horizontal'>
        <RecentOrder/>
        <DashboardChart/>
      </Space>
    </div>
  )
}

export default Dashboard
