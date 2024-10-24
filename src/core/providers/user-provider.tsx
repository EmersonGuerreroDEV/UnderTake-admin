'use client';
import { createContext, useMemo } from 'react';

import { UserProps } from '../interfaces/user';
import useUser from '@/hooks/queries/use-user';

// // import useUser from "../hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProp {
  user?: UserProps | null;
  isLoading: boolean;
  refetch: () => void;
  handleLogout: () => void;
  setUser: (user: UserProps) => void;
}

export const UserContext = createContext<UserContextProp>(
  {} as UserContextProp
);

const UserProvider = ({ children }: UserProviderProps) => {
  const { user, refetch, isLoading, handleLogout, setUser } = useUser();

  const value = useMemo(() => {
    return { user, refetch, isLoading, handleLogout, setUser };
  }, [handleLogout, isLoading, refetch, user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default UserProvider;
