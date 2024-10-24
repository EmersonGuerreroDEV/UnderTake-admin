import { RegisterProps } from '@/core/interfaces/auth';
import UsersRepository from '@/core/repositories/users-repository';
import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';

const useUsers = () => {

    const { isLoading, mutateAsync } = useMutation(
        (data: RegisterProps) => UsersRepository.userRegister(data),
        {
          onError: (err) => handleError(err),
          onSuccess: (d) => {
            toast.success('Usuario registrado correctamente');
            return d
          }
        }
      );


      const { isLoading:isLoadingUpdate, mutateAsync:mutateUpdateUser } = useMutation(
        (data: RegisterProps) => UsersRepository.userUpdate(data),
        {
          onError: (err) => handleError(err),
          onSuccess: (d) => {
            toast.success('Usuario actualizado correctamente');
            return d
          }
        }
      );


      const {
        isLoading: isLoadingUser,
        refetch,
        data: allUser
      } = useQuery({
        queryKey: ['users'],
        queryFn: () => UsersRepository.getUses(),
        onError: (err) => console.error(err)
      });


      const handleError = (err: any) => {
        console.error(err.message);
        toast.error(err.message);
      };
    

    return {
        isLoadingRegister:isLoading,
        registerUser:mutateAsync,
        isLoadingUser,
        allUser,
        refetch,
        mutateUpdateUser,
        isLoadingUpdate
    }
}

export default useUsers