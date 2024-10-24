import { Order } from "@/core/interfaces/orders";
import useModal from "@/hooks/useModal";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ModalUi from "../Modal";
import OrderDetail from "../Order/OrderView";

interface TableOrdersProps {
    data: Order[];
}

const TableOrders = ({ data }: TableOrdersProps) => {

    const [orserSelected, setOrderSelected] = useState<Order | null>(null)
    const {onOpen} = useModal()

const onOrderSelected = (order:Order) => {
    setOrderSelected(order)
    onOpen();
}

    return (
        <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
                Orders
            </h4>

            <div className="flex flex-col">
                <div className="grid grid-cols-3 sm:grid-cols-6">
                    <div className="px-2 pb-3.5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Usuario</h5>
                    </div>
                    <div className="px-2 pb-3.5 text-center">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Total</h5>
                    </div>
                 
                    <div className="hidden px-2 pb-3.5 text-center sm:block">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Stado</h5>
                    </div>
                    <div className="hidden px-2 pb-3.5 text-center sm:block">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Metodo de pago</h5>
                    </div>
                    <div className="hidden px-2 pb-3.5 text-center sm:block">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Fecha de compra</h5>
                    </div>
                    <div className="hidden px-2 pb-3.5 text-center sm:block">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">Accion</h5>
                    </div>
                </div>

                {data.map((order) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-6 border-b border-stroke dark:border-dark-3`}
                        key={order.id}
                    >
                        <div className="flex items-center justify-start px-2 py-4">
                            <p className="font-medium text-dark dark:text-white">{order.userId}</p>
                        </div>
                        <div className="flex items-center justify-center px-2 py-4">
                            <p className="font-medium text-dark dark:text-white">${order.total}</p>
                        </div>
                       
                        <div className="hidden items-center justify-center px-2 py-4 sm:flex">
                            <p className="font-medium text-dark dark:text-white">{order.statusId.name}</p>
                        </div>
                        <div className="hidden items-center justify-center px-2 py-4 sm:flex">
                            <p className="font-medium text-dark dark:text-white">{order.paymentMethod.name}</p>
                        </div>
                        <div className="hidden items-center justify-center px-2 py-4 sm:flex">
                            <p className="font-medium text-dark dark:text-white">{new Date(order.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="hidden items-center justify-center px-2 py-4 sm:flex">
                            <button onClick={()=>onOrderSelected(order)}>
                                <Eye/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ModalUi>
             <OrderDetail order={orserSelected!} />
            </ModalUi>
        </div>
    );
};

export default TableOrders;
