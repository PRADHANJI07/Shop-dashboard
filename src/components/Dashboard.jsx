import React from 'react'
import DashboardStats from './DashboardStats'
import TransactionChart from './TransactionChart'
import BuyerProfile from './BuyerProfile'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'


export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4 h-screen overflow-y-auto pb-[7rem]'>
      <DashboardStats />
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart />
        <BuyerProfile/>
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <RecentOrders/>
        <PopularProducts/>
      </div>
    </div>
  )
}
