

import { call } from '../config/call';
import { RegisterProps } from '../interfaces/auth';
import { CategoryProps } from '../interfaces/category';
import { Product } from '../interfaces/purchase';
import { UserProps, UserRol } from '../interfaces/user';

class ProductRepository {

    static readonly registerProduct = async (data:FormData) => {
        const res = await call({
          method: 'POST',
          path: '/products ',
          data: data,
          withFiles:true
        });
    
        if (res) {
          return res;
        }
    
        throw new Error('Error fetching sing up');
      };


      static readonly updateProduct = async (data: FormData, id:string) => {
        const res = await call({
          method: 'PATCH',
          path: `/categories/${id}`,
          data: data,
          withFiles:true
        });
    
        if (res) {
          return res;
        }
    
        throw new Error('Error fetching sing up');
      };

      static readonly addVariant = async (data: FormData, id:string) => {
        const res = await call({
          method: 'POST',
          path: `/products/add-variant/${id}`,
          data: data,
          withFiles:true
        });
    
        if (res) {
          return res;
        }
    
        throw new Error('Error fetching sing up');
      };

      

      static readonly getProducts = async (): Promise<Product[]> => {
        const res = await call({
          method: 'GET',
          path: '/products'
        });
    
        if (res) {
          return res as Product[];
        }
    
        throw new Error('Error fetching users');
      };
    

}

export default ProductRepository;



