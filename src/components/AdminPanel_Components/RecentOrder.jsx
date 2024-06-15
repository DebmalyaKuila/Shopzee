import React, { useEffect, useState } from 'react'
import {Table, Typography} from "antd"

import getRecentOrders from "../../APIs/getRecentOrders"

const RecentOrder = () => {
        const [dataSource,setDataSource]=useState([])
        useEffect(()=>{
            getRecentOrders().then((res)=>setDataSource(res.products.slice(0,4)))
        },[])


  return (
    <>
    <Typography.Text>Recent Orders</Typography.Text>
     <Table
    columns={[
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
            dataIndex: "discountedTotal",
            render:(value,record)=>{
                return (<>${value}</>)
            }
        }
      ]}

      dataSource={dataSource}
      pagination={false}
    >

    </Table>
    </>
  )
}

export default RecentOrder
