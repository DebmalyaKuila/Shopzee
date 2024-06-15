import React,{useState,useEffect} from 'react'
import {Avatar,Rate, Space,Table,Typography} from "antd"

import getAllProducts from "../../APIs/getAllProducts"

const Inventory = () => {

  const [dataSource,setDataSource]=useState([])
  
  useEffect(()=>{
    getAllProducts().then(data=>{setDataSource(data)

      console.log(data);
    })
  },[])

  return (
    <Space direction='vertical'>
      <Typography.Title level={2}>Inventory</Typography.Title>
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
          title: "title",
          dataIndex: "title"
        },
        {
          title: "Quantity",
          dataIndex: "rating",
          render:(value,record)=>{
            return(<>{value.count}</>)
          }
        },
        {
          title: "Ratings",
          dataIndex: "rating",
          render:(value,record)=>{
            return(<Rate value={value.rate} allowHalf disabled/>)
          }
        },
        {
            title: "Price",
            dataIndex: "price",
            render:(value,record)=>{
                return (<>${value}</>)
            }
        },
        {
          title: "Category",
          dataIndex: "category"
      }
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

export default Inventory
