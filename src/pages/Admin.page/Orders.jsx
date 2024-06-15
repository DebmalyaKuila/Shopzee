import React,{useState,useEffect} from 'react'
import {Avatar, Space,Table,Typography} from "antd"

import getAllOrders from "../../APIs/getAllOrders"

const Orders = () => {

  const [dataSource,setDataSource]=useState([])
  
  useEffect(()=>{
    getAllOrders().then(data=>setDataSource(data.products))
  },[])

  return (
    <Space direction='vertical'>
      <Typography.Title level={2}>Orders</Typography.Title>
      <Table
    columns={[
      {
        title: "Thumbnail",
        dataIndex: "thumbnail",
        render:(value,record)=>{
          return(<Avatar src={value}/>)
        }
      },
        {
          title: "title",
          dataIndex: "title"
        },
        {
          title: "Quantity",
          dataIndex: "quantity"
        },
        {
            title: "Price",
            dataIndex: "price",
            render:(value,record)=>{
                return (<>${value}</>)
            }
        },
        {
          title: "Total",
          dataIndex: "total"
        },
        {
          title: "Discounted Total",
          dataIndex: "discountedTotal"
        },
      ]}
      dataSource={dataSource}
      rowKey={dataSource.title}
      pagination={{
        pageSize:5
      }}
    >

    </Table>
    </Space>
  )
}

export default Orders
