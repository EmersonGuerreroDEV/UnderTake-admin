'use client'
import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'
import { useAtom } from 'jotai'
import { ModalAtom } from '@/core/atom/modal'

const useModal = () => {
 const [isOpen, setIsOpen] = useAtom<boolean>(ModalAtom)

 const onOpen =() => setIsOpen(true);
 const onClose = () => setIsOpen(false);

    return {
        onOpen,
        onClose,
        isOpen
    }
}

export default useModal