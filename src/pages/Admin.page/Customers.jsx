import React,{useState,useEffect} from 'react'
import {Avatar, Space,Table,Typography} from "antd"

import getAllCustomers from "../../APIs/getAllCustomers"

const Customers = () => {

  const [dataSource,setDataSource]=useState([])
  
  useEffect(()=>{
    getAllCustomers().then(data=>setDataSource(data.users))
  },[])

  return (
    <Space direction='vertical'>
      <Typography.Title level={2}>Customers</Typography.Title>
      <Table
    columns={[
      {
        title: "Thumbnail",
        dataIndex: "image",
        render:(value,record)=>{
          return(<Avatar src={value}/>)
        }
      },
        {
          title: "Username",
          dataIndex: "username"
        },
        {
          title: "Phone number",
          dataIndex: "phone"
        },
        {
          title: "Email",
          dataIndex: "email"
        },
        {
          title: "Address",
          dataIndex: "address",
          render:(value,record)=>{
            return(<>{value.address}, City-{value.city}, State-{value.state}, Country-{value.country}</>)
          }
        },
      ]}
      dataSource={dataSource}
      pagination={{
        pageSize:5
      }}
    >

    </Table>
    </Space>
  )
}

export default Customers
