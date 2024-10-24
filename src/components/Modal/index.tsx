import useModal from '@/hooks/useModal'
import React from 'react'
import Modal from 'react-responsive-modal'

interface ModalProps {
children:React.ReactNode,

}
const ModalUi = ({children}:ModalProps) => {
const {isOpen, onClose} = useModal()
  return (
    <Modal
    styles={{
        modal:{
            padding:0,
            backgroundColor:'transparent'
        },
        closeButton:{
           color:'white'
        }
    }}
    
    open={isOpen} onClose={onClose} center>
   {children}
  </Modal>
  )
}

export default ModalUi