"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/core/interfaces/purchase";
import useModal from "@/hooks/useModal";
import useProduct from "@/hooks/queries/use-products";

const VariantSchema = z.object({
  color: z.string().min(1, "El color es obligatorio"),
  size: z.string().min(1, "La talla es obligatoria"),
  stock: z.number().min(0, "El stock debe ser mayor o igual a 0"),
  image: z.any().optional(),
});

interface Variant {
  color: string;
  size: string;
  stock: number;
  image: any;
}

interface VariantFormProps {
  product?: Product;
  onClose: () => void;
}

const VariantForm: React.FC<VariantFormProps> = ({ product, onClose }) => {
  const { mutateAsyncVariant, isLoadingVariant } = useProduct();

  const form = useForm<Variant>({
    resolver: zodResolver(VariantSchema),
    defaultValues: {
      color: "",
      size: "",
      stock: 0,
      image: undefined,
    },
  });

  const onSubmit = async (values: Variant) => {
    const formData = new FormData();
    formData.append("color", values.color);
    formData.append("size", values.size);
    formData.append("stock", values.stock.toString());
    if (values.image && values.image.length > 0) {
      formData.append("file", values.image[0]);
    }
    let res;
    res = await mutateAsyncVariant({ data: formData, id: product?.id || "" });
    if (res) {
      form.reset();
      onClose();
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-96 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
    >
      <fieldset disabled={isLoadingVariant}>
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Registro de Variantes
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Color
            </label>
            <input
              type="text"
              {...form.register("color")}
              className={`w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3  outline-none transition focus:border-primary ${form.formState.errors.color ? "border-red-600" : ""}`}
            />
            {form.formState.errors.color && (
              <span className="text-red-600">
                {form.formState.errors.color.message}
              </span>
            )}
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Talla
            </label>
            <input
              type="color"
              {...form.register("size")}
              className={`w-full h-12 rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3  outline-none transition focus:border-primary ${form.formState.errors.size ? "border-red-600" : ""}`}
            />
            {form.formState.errors.size && (
              <span className="text-red-600">
                {form.formState.errors.size.message}
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
              className={`w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3  outline-none transition focus:border-primary ${form.formState.errors.stock ? "border-red-600" : ""}`}
            />
            {form.formState.errors.stock && (
              <span className="text-red-600">
                {form.formState.errors.stock.message}
              </span>
            )}
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Imagen
            </label>
            <input
              type="file"
              accept="image/*"
              {...form.register("image")}
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition"
            />
          </div>
          {isLoadingVariant ? (
            <button
              disabled={isLoadingVariant}
              type="submit"
              className="h-9 w-full rounded bg-blue-600 text-lg text-white hover:bg-blue-700"
            >
              Guardando ...
            </button>
          ) : (
            <button
              disabled={isLoadingVariant}
              type="submit"
              className="h-9 w-full rounded bg-blue-600 text-lg text-white hover:bg-blue-700"
            >
              {product?.id ? "Actualizar Variante" : "Registrar Variante"}
            </button>
          )}
        </div>
      </fieldset>
    </form>
  );
};

export default VariantForm;
