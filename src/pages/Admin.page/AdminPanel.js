import React from 'react'
import Header from '../../components/AdminPanel_Components/Header'
import SideMenu from '../../components/AdminPanel_Components/SideMenu'
import PageContent from '../../components/AdminPanel_Components/PageContent'

import "./styles.css"

const AdminPanel = ({children}) => {
  return (
    <>
      <Header/>
      <div className='h-full  w-full flex  items-start'>
        <SideMenu />
        <PageContent children={children}/>
      </div>
    </>
  )
}

export default AdminPanel
