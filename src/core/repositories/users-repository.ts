

import { call } from '../config/call';
import { RegisterProps } from '../interfaces/auth';
import { UserProps, UserRol } from '../interfaces/user';

class UsersRepository {

    static readonly userRegister = async (data: RegisterProps) => {
        const res = await call({
          method: 'POST',
          path: '/users/register',
          data: data
        });
    
        if (res) {
          return res;
        }
    
        throw new Error('Error fetching sing up');
      };


      static readonly userUpdate = async (data: RegisterProps) => {
        const res = await call({
          method: 'PATCH',
          path: `/users/update/${data.id}`,
          data: data
        });
    
        if (res) {
          return res;
        }
    
        throw new Error('Error fetching sing up');
      };

      static readonly getUses = async (): Promise<UserRol[]> => {
        const res = await call({
          method: 'GET',
          path: '/users'
        });
    
        if (res) {
          return res as UserRol[];
        }
    
        throw new Error('Error fetching users');
      };
    

}

export default UsersRepository;



