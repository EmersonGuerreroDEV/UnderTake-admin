'use client';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useModal from '@/hooks/useModal';
import { CategoryProps } from '@/core/interfaces/category';
import useCategory from '@/hooks/queries/use-category';

const CategorySchema = (categorySelected?: CategoryProps) => {
  return z.object({
    name: z.string().optional(),
    image:  z.any().optional(),
    id: z.string().optional(),
  });
};

interface CategoryFormProps {
  categorySelected?: CategoryProps;
  refetch: () => void;
}

const FormCategory = ({ refetch, categorySelected }: CategoryFormProps) => {
  const { mutateAsync, isLoading, mutateUpdateCategory } = useCategory();
  const { onClose } = useModal();
  
  const form = useForm({
    defaultValues: {
      name: categorySelected?.name || '',
      image: undefined,
      id: categorySelected?.id || ''
    }
  });

 const onSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append('name', values.name);
    if (values.image && values.image.length > 0) {
        formData.append('image', values.image[0]);
    }

    let res;
    if (categorySelected) {
      
        res = await mutateUpdateCategory({ data: formData, id: categorySelected.id || '' });
    } else {
        res = await mutateAsync(formData); 
    }

    if (res) {
        form.reset();
        onClose();
        refetch();
    }
};


  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
        <h3 className="font-medium text-dark dark:text-white">Registro de categorías</h3>
      </div>
      <div className="flex flex-col gap-5.5 p-6.5">
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Nombre de la categoría
          </label>
          <input
            type="text"
            {...form.register('name')}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {form.formState.errors.name && (
            <span className="text-red-600">{form.formState.errors.name.message}</span>
          )}
        </div>
        <div>
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
            Imagen {categorySelected ? '(opcional)' : '(obligatoria)'}
          </label>
          <input
            type="file"
            accept="image/*"
            {...form.register('image')}
            className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
          {form.formState.errors.image && (
            <span className="text-red-600">{form.formState.errors.image.message}</span>
          )}
          {categorySelected?.image && (
            <img src={categorySelected.image} alt={categorySelected.name} className="mt-2 w-20 h-20 object-cover" />
          )}
        </div>
        <button
         disabled={isLoading}
         type="submit" className="h-9 w-full rounded text-lg bg-blue-600 text-white hover:bg-blue-700">
          {categorySelected ? 'Actualizar' : 'Registrar'}
        </button>
      </div>
    </form>
  );
};

export default FormCategory;
