'use client'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import TableOrders from '@/components/Tables/Orders'
import useOrders from '@/hooks/queries/use-orders'
import React from 'react'

const Orders = () => {

    const {allOrders,isLoadingOrders} = useOrders();

    if(!allOrders) return

  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
      <TableOrders data={allOrders} />
      </div>
    </DefaultLayout>
  )
}

export default Orders