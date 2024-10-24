import { CategoryFormProps } from '@/core/interfaces/category';
import CategoryRepository from '@/core/repositories/category-repository';
import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';

const useCategory = () => {
 
    const {
        isLoading: isLoadingCategory,
        refetch,
        data: allCategories
      } = useQuery({
        queryKey: ['categories'],
        queryFn: () => CategoryRepository.getCategory(),
        onError: (err) => console.error(err)
      });
    
      const { isLoading, mutateAsync } = useMutation(
        (data:FormData) => CategoryRepository.registerCategory(data),
        {
          onError: (err) => handleError(err),
          onSuccess: (d) => {
            toast.success('Usuario registrado correctamente');
            return d
          }
        }
      );

      const { isLoading: isLoadingUpdate, mutateAsync: mutateUpdateCategory } = useMutation(
        ({ data, id }: { data: FormData; id: string }) => CategoryRepository.updateCategory(data, id),
        {
            onError: (err) => handleError(err),
            onSuccess: (d) => {
                toast.success('Categoría actualizada correctamente');
                return d;
            }
        }
    );



      const handleError = (err: any) => {
        console.error(err.message);
        toast.error(err.message);
      };
    


    return {
        isLoadingCategory,
        allCategories,
        refetch,
        mutateAsync,
        isLoading,
        isLoadingUpdate,
        mutateUpdateCategory
    }
}

export default useCategory