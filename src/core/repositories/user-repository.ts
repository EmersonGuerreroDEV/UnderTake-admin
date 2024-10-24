import { call } from '../config/call';
import { RegisterProps } from '../interfaces/auth';
import { sendAddressUser } from '../interfaces/user';

class UserRepository {
  static readonly getMe = async () => {
    const res = await call({
      method: 'GET',
      path: '/users/me'
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching users');
  };




}

export default UserRepository;
