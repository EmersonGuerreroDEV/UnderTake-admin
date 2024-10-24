'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useUsers from '@/hooks/queries/use-users';
import useModal from '@/hooks/useModal';
import { UserRol } from '@/core/interfaces/user';
import { RegisterProps } from '@/core/interfaces/auth';

const UserSchema = (userSelected?: UserRol) => z.object({
  fullName: z.string().nonempty({ message: 'El nombre completo es obligatorio.' }),
  email: z.string().email({ message: 'El correo electrónico no es válido.' }),
  password: userSelected ? z.string().optional() : z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' }),
  role: z.string().nonempty({ message: 'Seleccione un rol.' }),
  id: z.string().optional()
});

interface UserFormProps {
  userSelected?: UserRol;
  refetch: () => void;
}

const FormUser = ({ refetch, userSelected }: UserFormProps) => {
  const { registerUser, isLoadingRegister, mutateUpdateUser, isLoadingUpdate } = useUsers();
  const { onClose } = useModal();
  
  const form = useForm({
    resolver: zodResolver(UserSchema(userSelected)),
    defaultValues: {
      fullName: userSelected?.fullName || '',
      email: userSelected?.email || '',
      password: '',
      role: userSelected?.role || '',
      id: userSelected?.id || ''
    }
  });

  const onSubmit = async (values:RegisterProps) => {

    let res;
    if (!userSelected) {
      res = await registerUser(values);
    } else {
      res = await mutateUpdateUser(values);
    }
    
    if (res) {
      form.reset();
      onClose();
      refetch();
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
        <h3 className="font-medium text-dark dark:text-white">Registro de usuarios</h3>
      </div>
      <div className="flex flex-col gap-5.5 p-6.5">
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Nombre completo
          </label>
          <input
            type="text"
            {...form.register('fullName')}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {form.formState.errors.fullName && (
            <span className="text-red-600">{form.formState.errors.fullName.message}</span>
          )}
        </div>
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Correo electrónico
          </label>
          <input
            type="email"
            {...form.register('email')}
            placeholder="email@mail.com"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {form.formState.errors.email && (
            <span className="text-red-600">{form.formState.errors.email.message}</span>
          )}
        </div>
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Contraseña
          </label>
          <input
            type="password"
            {...form.register('password')}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {form.formState.errors.password && (
            <span className="text-red-600">{form.formState.errors.password.message}</span>
          )}
        </div>
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Rol
          </label>
          <select
            {...form.register('role')}
            className="relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2"
          >
            <option value="">Seleccione un rol</option>
            <option value="sales">Vendedor</option>
            <option value="admin">Administrador</option>
          </select>
          {form.formState.errors.role && (
            <span className="text-red-600">{form.formState.errors.role.message}</span>
          )}
        </div>
        <button disabled={isLoadingRegister} type="submit" className="h-9 w-full rounded text-lg bg-blue-600 text-white hover:bg-blue-700">
          {userSelected ? 'Actualizar' : 'Registrar'}
        </button>
      </div>
    </form>
  );
};

export default FormUser;
