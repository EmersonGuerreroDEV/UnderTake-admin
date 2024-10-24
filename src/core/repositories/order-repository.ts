

import { call } from '../config/call';
import { RegisterProps } from '../interfaces/auth';
import { Order } from '../interfaces/orders';
import { UserProps, UserRol } from '../interfaces/user';

class OrdersRepository {

  
      static readonly getOrders = async (): Promise<Order[]> => {
        const res = await call({
          method: 'GET',
          path: '/orders'
        });
    
        if (res) {
          return res as Order[];
        }
    
        throw new Error('Error fetching orders');
      };
    

}

export default OrdersRepository;



