import OrdersRepository from '@/core/repositories/order-repository';
import React from 'react'
import { useQuery } from 'react-query';

const useOrders = () => {

    const {
        isLoading: isLoadingOrders,
        refetch,
        data: allOrders
      } = useQuery({
        queryKey: ['orders'],
        queryFn: () => OrdersRepository.getOrders(),
        onError: (err) => console.error(err)
      });
    

    return {allOrders,isLoadingOrders, refetch}
}

export default useOrders