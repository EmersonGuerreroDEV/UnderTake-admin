"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useModal from "@/hooks/useModal";
import { Product, Variant } from "@/core/interfaces/purchase";
import useProducts from "@/hooks/queries/use-products";
import VariantForm from "./VariantForm";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import useCategory from "@/hooks/queries/use-category";
import CategorySelect from "./CategorySelect";
import { CategoryProps } from "@/core/interfaces/category";
import { categories } from "@/core/config/data";
// Hook para manejar productos

const ProductSchema = (productSelected?: Product) => {
  return z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().optional(),
    price: z.number().min(0, "El precio debe ser mayor que 0").optional(),
    stock: z.number().min(0, "El stock debe ser mayor o igual a 0").optional(),
    id: z.string().optional(),
  });
};

interface ProductFormProps {
  productSelected?: Product;
  refetch: () => void;
}

const FormProduct = ({ refetch, productSelected }: ProductFormProps) => {
  const { mutateAsync, isLoading, mutateUpdateProduct } = useProducts();
  const {allCategories} = useCategory()
  const { onClose } = useModal();
  const [categoriesSelected, setCategoriesSelected] = useState<CategoryProps[] | []>([])

  const form = useForm({
    resolver: zodResolver(ProductSchema(productSelected)),
    defaultValues: {
      name: productSelected?.name || "",
      description: productSelected?.description || "",
      price: productSelected?.price || 0,
      stock:
        productSelected?.variants.reduce(
          (total, variant) => total + variant.stock,
          0,
        ) || 0,
    },
  });

  const onSubmit = async (values: any) => {
   
    const payload = {
...values,
categories:categoriesSelected.map((category:CategoryProps)=>category?.id)
    }

    let res;
    if (productSelected) {
      res = await mutateUpdateProduct({
        data: payload,
        id: productSelected.id || "",
      });
    } else {
      res = await mutateAsync(payload);
    }

    if (res) {
      form.reset();
      onClose();
      refetch();
      setCategoriesSelected([])
    }
  };

 
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-[500px] rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
    >
      <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
        <h3 className="font-medium text-dark dark:text-white">
          Registro de productos
        </h3>
      </div>
      <div className="flex flex-col gap-5.5 p-6.5">
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Nombre del producto
          </label>
          <input
            type="text"
            {...form.register("name")}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {form.formState.errors.name && (
            <span className="text-red-600">
              {form.formState.errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Descripción del producto
          </label>
          <textarea
            {...form.register("description")}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Precio
          </label>
          <input
            type="number"
            {...form.register("price", { valueAsNumber: true })}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {form.formState.errors.price && (
            <span className="text-red-600">
              {form.formState.errors.price.message}
            </span>
          )}
        </div>
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Stock
          </label>
          <input
            type="number"
            {...form.register("stock", { valueAsNumber: true })}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {form.formState.errors.stock && (
            <span className="text-red-600">
              {form.formState.errors.stock.message}
            </span>
          )}
        </div>
      <CategorySelect categoriesSelected={productSelected?.categories!} setCategories={(e:any)=>setCategoriesSelected(e)} categories={allCategories!} id="multiSelectCategory"/>
<h2 className="text-center text-white space-y-2">Variantes</h2>
<hr />

        <div className=" border-stroke  w-full">
          <div className=" space-y-2 w-full">
  {productSelected?.variants.map((variant, index) => (
    <div key={index} className="w-full relative  grid gap-4 grid-cols-3 border-b py-2 text-nowrap">
      <div className=""><strong>Color:</strong> {variant.color}</div>
      <div><strong>Tamaño:</strong> {variant.size}</div>
      <div ><strong>Stock:</strong> {variant.stock}</div>
      <button
        onClick={() => console.log('d')}
        className="w-10 absolute text-red-600 right-0 hover:text-red-800"
      >
       <X/>  
      </button>
    </div>
  ))}
</div>

        </div>
        {
          isLoading ?
          
          <button
          disabled={isLoading}
          type="submit"
          className="h-9 w-full rounded bg-blue-600 text-lg text-white hover:bg-blue-700"
        >
         Guardando
        </button>
          :
            <button
          disabled={isLoading}
          type="submit"
          className="h-9 w-full rounded bg-blue-600 text-lg text-white hover:bg-blue-700"
        >
          {productSelected ?  "Actualizar" :"Registrar"}
        </button>
        }
       
      </div>
    </form>
  );
};

export default FormProduct;
