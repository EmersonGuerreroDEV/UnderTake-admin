'use client';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import TableProducts from '@/components/Tables/Products';
import ModalUi from '@/components/Modal';
import useProducts from '@/hooks/queries/use-products';
import useModal from '@/hooks/useModal';
import React, { useState } from 'react';
import { Product } from '@/core/interfaces/purchase';
import FormProduct from '@/components/Products/FormProducts';

const ProductPage = () => {
  const { allProducts, isLoadingProducts, refetch } = useProducts();
  const [productSelected, setProductSelected] = useState<Product | null>(null);
  const { onOpen } = useModal();

  const onSelectProduct = (product: Product) => {
    setProductSelected(product);
    onOpen();
  };

  const newProduct = () => {
    setProductSelected(null);
    onOpen();
  };

  if (!allProducts) return null;

  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px] space-y-6">
        <button
          onClick={newProduct}
          className="flex justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
          type="button"
        >
          Nuevo producto
        </button>
        <TableProducts
          isLoading={isLoadingProducts}
          selectProduct={onSelectProduct}
          allProducts={allProducts}
          onRefetch={refetch}
        />
      </div>
      <ModalUi>
        <FormProduct productSelected={productSelected!} refetch={refetch} />
      </ModalUi>
    </DefaultLayout>
  );
};

export default ProductPage;
