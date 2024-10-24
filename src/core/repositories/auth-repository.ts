
import { call } from '../config/call';
import {
  ForgotProps,
  LoginProps,
  RecoveryPassword,
  RegisterProps
} from '../interfaces/auth';

class AuthRepository {
  static readonly signUp = async (data: RegisterProps) => {
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

  static readonly signIn = async (data: LoginProps) => {
    const res = await call({
      method: 'POST',
      path: '/users/login',
      data: data
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching sign in');
  };

  static readonly forgotPassword = async (data: ForgotProps) => {
    const res = await call({
      method: 'GET',
      path: `/users/restore/password/${data.email}`
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching restore password');
  };

  static readonly recoveryPassword = async (data: RecoveryPassword) => {
    const res = await call({
      method: 'PATCH',
      path: `/users/restore/password`,
      data: data
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching new password');
  };
}

export default AuthRepository;
