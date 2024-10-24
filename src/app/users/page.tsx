"use client";

import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableUser from "@/components/Tables/users";
import FormUser from "@/components/User/FormUser";
import ModalUi from "@/components/Modal";
import useModal from "@/hooks/useModal";
import { UserRol } from "@/core/interfaces/user";
import { useState } from "react";
import useUsers from "@/hooks/queries/use-users";

const UserPage = () => {
  const { onOpen } = useModal();
  const {allUser, isLoadingUser, refetch} = useUsers()
const [userSelected, setUserSelected] = useState<UserRol | null>(null)

const  handleSelectUser = (user: UserRol) => { 
  setUserSelected(user);
  onOpen();
}

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl space-y-4">
        <button
          onClick={onOpen}
          className="flex justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
          type="submit"
        >
          Nuevo Usuario
        </button>
        <TableUser selectUser={(user)=>handleSelectUser(user)} allUser={allUser!} isLoading={isLoadingUser} />
        <ModalUi>
          <FormUser  userSelected={userSelected!} refetch={refetch} />
        </ModalUi>
      </div>
    </DefaultLayout>
  );
};

export default UserPage;
