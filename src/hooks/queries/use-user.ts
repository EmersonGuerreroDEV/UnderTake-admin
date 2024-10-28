//@ts-ignore
import Cookies from 'js-cookie';
import { UserProps } from '@/core/interfaces/user';
import UserRepository from '@/core/repositories/user-repository';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';

const useUser = () => {
  const ssid = Cookies.get('ssid');
  const [user, setUser] = useState<UserProps | undefined | null>();

  const { isLoading: isLoadingUser, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: () => UserRepository.getMe(),
    onError: (err) => console.error(err),
    onSuccess: (data: UserProps) => setUser(data),
    enabled: !!ssid
  });

  const handleLogout = () => {
    setUser(null);    
  };


  const handleError = (err: any) => {
    console.error(err.message);
    toast.error(err.message);
  };

  return {
    refetch,
    user: user,
    setUser,
    isLoading: isLoadingUser,
    handleLogout,
  };
};

export default useUser;
