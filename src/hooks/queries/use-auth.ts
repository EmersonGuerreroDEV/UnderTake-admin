//@ts-ignore
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { UserContext } from '@/core/providers/user-provider';
import AuthRepository from '@/core/repositories/auth-repository';
import { LoginProps, RegisterProps } from '@/core/interfaces/auth';
import { Routes } from '@/core/config/routes';
interface TokenProps {
  [key: string]: string;
}

const useAuth = () => {
  const router = useRouter();
  const { refetch, handleLogout } = useContext(UserContext);


  const { isLoading: isLoadingSignIn, mutateAsync: doSignIn } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: (data: LoginProps) => AuthRepository.signIn(data)
  });

  const handleSignIn = async (form: LoginProps) => {
    try {
      const res = await doSignIn(form);
      if (res) {
        Cookies.set('ssid', res.access_token, { expires: 7 });
        refetch();
        router.push(Routes.home);
        return res;
      }
    } catch (err) {
      console.error(err);
      toast.error('Error al iniciar sesión', {
        description: 'Por favor, verifica tus credenciales.'
      });
      return false;
    }
  };

  const signOut = () => {
    Cookies.remove('ssid');
    handleLogout();
    router.push(Routes.home);
  };

  return {
    doSignIn: handleSignIn,
    isLoadingSignIn,
    signOut,
  };
};

export default useAuth;
