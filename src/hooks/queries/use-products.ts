// Ajusta la ruta según sea necesario
import ProductRepository from '@/core/repositories/producst-repository';
import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';

const useProduct = () => {
  const {
    isLoading: isLoadingProducts,
    refetch,
    data: allProducts,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductRepository.getProducts(),
    onError: (err) => console.error(err),
  });

  const { isLoading, mutateAsync } = useMutation(
    (data: FormData) => ProductRepository.registerProduct(data),
    {
      onError: (err) => handleError(err),
      onSuccess: (d) => {
        toast.success('Producto registrado correctamente');
        return d;
      },
    }
  );

  const { isLoading: isLoadingUpdate, mutateAsync: mutateUpdateProduct } = useMutation(
    ({ data, id }: { data: FormData; id: string }) => ProductRepository.updateProduct(data, id),
    {
      onError: (err) => handleError(err),
      onSuccess: (d) => {
        toast.success('Producto actualizado correctamente');
        return d;
      },
    }
  );


  const { isLoading: isLoadingVariant, mutateAsync: mutateAsyncVariant } = useMutation(
    ({ data, id }: { data: FormData; id: string }) => ProductRepository.addVariant(data, id),
    {
      onError: (err) => handleError(err),
      onSuccess: (d) => {
        toast.success('Producto actualizado correctamente');
        return d;
      },
    }
  );

  const handleError = (err: any) => {
    console.error(err.message);
    toast.error(err.message);
  };

  return {
    isLoadingProducts,
    allProducts,
    refetch,
    mutateAsync,
    isLoading,
    isLoadingUpdate,
    mutateUpdateProduct,
    isLoadingVariant,
    mutateAsyncVariant,
  };
};

export default useProduct;
