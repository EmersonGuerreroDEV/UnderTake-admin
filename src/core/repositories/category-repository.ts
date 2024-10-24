

import { call } from '../config/call';
import { RegisterProps } from '../interfaces/auth';
import { CategoryProps } from '../interfaces/category';
import { UserProps, UserRol } from '../interfaces/user';

class CategoryRepository {

    static readonly registerCategory = async (data:FormData) => {
        const res = await call({
          method: 'POST',
          path: '/categories ',
          data: data,
          withFiles:true
        });
    
        if (res) {
          return res;
        }
    
        throw new Error('Error fetching sing up');
      };


      static readonly updateCategory = async (data: FormData, id:string) => {
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

      static readonly getCategory = async (): Promise<CategoryProps[]> => {
        const res = await call({
          method: 'GET',
          path: '/products/categories '
        });
    
        if (res) {
          return res as CategoryProps[];
        }
    
        throw new Error('Error fetching users');
      };
    

}

export default CategoryRepository;



