 // Ajusta la ruta según sea necesario
import { Product } from "@/core/interfaces/purchase";
import { Eye, Plus, Trash } from "lucide-react";
import { useState } from "react";
import Modal from "react-responsive-modal";
import VariantForm from "../Products/VariantForm";

interface TableProductsProps {
  allProducts: Product[];
  isLoading: boolean;
  selectProduct: (product: Product) => void;
  onRefetch : ()=>void
}

const TableProducts = ({ allProducts, isLoading, selectProduct, onRefetch }: TableProductsProps) => {
  const [selectProductTable, setProductSelected] = useState<any>({showModal:false, product:{}})
  if (isLoading) return <p>Loading...</p>;
  if (!allProducts || allProducts.length === 0) return <p>No products available.</p>;

  const handleModalClose = () =>{
    setProductSelected({showModal:false, product:{}});
    onRefetch();
  }

  const handleProductSelected = (product:Product) => {
    setProductSelected({
      showModal:true,
      product:product
    })
  }

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
            <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
               Id
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Nombre
              </th>
              <th className="min-w-[200px] px-4 py-4 font-medium text-dark dark:text-white">
                Descripción
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                Precio
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                Stock
              </th>
              <th className="px-4 py-4 text-right font-medium text-dark dark:text-white xl:pr-7.5">
                Acciones
              </th>
              <th className="px-4 py-4 text-right font-medium text-dark dark:text-white xl:pr-7.5">
                Variante
              </th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={product.id}>
                 <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === allProducts.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">
                    {product.id}
                  </h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === allProducts.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white hideLine2 text-base">
                    {product.name}
                  </h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allProducts.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white hideLine2 text-sm">{product.description}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allProducts.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">${product.price}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allProducts.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">{product.variants.reduce((total, variant) => total + variant.stock, 0)}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allProducts.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <div className="flex">
                    <button onClick={() => selectProduct(product)} className="text-dark w-full mx-auto text-center dark:text-white">
                      <Eye />
                    </button>
                    
                  </div>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allProducts.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">
                    <button onClick={()=>handleProductSelected(product)} className="">
                    <Plus/>
                    </button>
                    </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

<Modal styles={{
  modal:{
    backgroundColor:'transparent',
  } 
}}
center
open={selectProductTable.showModal} onClose={()=>handleModalClose()}>
<VariantForm product={selectProductTable?.product!} onClose={handleModalClose}  />
</Modal>

    </div>
  );
};

export default TableProducts;
