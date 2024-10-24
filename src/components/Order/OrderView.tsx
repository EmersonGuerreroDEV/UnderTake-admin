import { Order } from "@/core/interfaces/orders";

interface OrderDetailProps {
    order: Order;
}

const OrderDetail = ({ order }: OrderDetailProps) => {
    console.log(order)
    return (
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <h4 className="mb-4 text-xl text-center font-bold text-dark dark:text-white">Detalles de la Compra</h4>
<hr className="w-full"/>
            <div className="mb-6">
                <h5 className="text-lg font-medium text-dark dark:text-white mt-4">Información del Pedido</h5>
                <div className="grid  w-[500px]  gap-4 mt-2">
                    <div className="flex justify-between">
                        <p className="text-sm text-dark dark:text-white"><strong>ID del Pedido:</strong></p>
                        <p className="text-sm text-dark dark:text-white font-light">{order.id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-dark dark:text-white"><strong>ID de Usuario:</strong></p>
                        <p className="text-sm text-dark dark:text-white">{order.userId}</p>
                    </div>
                  
                    <div className="flex justify-between">
                        <p className="text-sm text-dark dark:text-white"><strong>ID de Ciudad:</strong></p>
                        <p className="text-sm text-dark dark:text-white">{order.cityId}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-dark dark:text-white"><strong>Dirección:</strong></p>
                        <p className="text-sm text-dark dark:text-white">{order.address || "No proporcionada"}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-dark dark:text-white"><strong>Estado:</strong></p>
                        <p className="text-sm text-dark dark:text-white">{order.statusId.name}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-dark dark:text-white"><strong>Método de Pago:</strong></p>
                        <p className="text-sm text-dark dark:text-white">{order.paymentMethod.name}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-dark dark:text-white"><strong>Fecha de Creación:</strong></p>
                        <p className="text-sm text-dark dark:text-white">{new Date(order.createdAt).toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <hr className="w-full"/>
            <div>
                <h5 className="text-lg mt-4 font-medium text-dark dark:text-white">Detalles de los Productos</h5>
                <div className="mt-2">
                    {order.orderDetails.map((item) => (
                        <div key={item.id} className="flex justify-between border-b border-stroke dark:border-dark-3 py-2">
                            <div className="flex flex-col w-full">
                                <p className="text-sm font-medium text-dark dark:text-white">
                                    Producto ID: {item.productId}
                                </p>
                                <div className="flex justify-between">
                                    <p className="text-sm text-dark dark:text-white"><strong>Precio:</strong> ${item.price}</p>
                                    <p className="text-sm text-dark dark:text-white"><strong>Cantidad:</strong> {item.quantity}</p>
                                    <p className="text-sm text-dark dark:text-white"><strong>Total:</strong> ${item.total}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-6">
                        <p className="text-sm text-dark dark:text-white"><strong>Total:</strong></p>
                        <p className="text-sm text-dark dark:text-white">${order.total}</p>
                    </div>
            </div>
        </div>
    );
};

export default OrderDetail;
