import React from 'react'
import Sidebar from '../../../components/candidate/sidebar/Sidebar'
import Main from '../../../components/candidate/main/Main'
import Header from '../../../components/headers/Header'
function Home() {
  return (

    <div className='min-h-screen w-full'>
        <Header/>
      <div className='flex'>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default Home
