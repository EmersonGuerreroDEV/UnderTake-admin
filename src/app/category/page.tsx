'use client'
import FormCategory from '@/components/Category/FormCategory'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ModalUi from '@/components/Modal'
import TableCategories from '@/components/Tables/Category'
import { CategoryProps } from '@/core/interfaces/category'
import useCategory from '@/hooks/queries/use-category'
import useModal from '@/hooks/useModal'
import { all } from 'axios'
import React, { useState } from 'react'

const Category = () => {
    
  const [categorySelected, selectCategory] = useState<CategoryProps | null>(null)
    const {allCategories, isLoadingCategory, refetch} = useCategory()
    const {onOpen} = useModal()


 const onSelectCategory = (category:CategoryProps) =>{
  selectCategory(category);
  onOpen()
 }

 const newCategory =() =>{
onOpen();
selectCategory(null);
 }

if(!allCategories) return

  return (
    <DefaultLayout>
      
      <div className="mx-auto w-full max-w-[1080px] space-y-6">
      <button
          onClick={newCategory}
          className="flex justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
          type="submit"
        >
          Nueva categoria
        </button>
     <TableCategories 
     allCategories={allCategories}
      isLoading={isLoadingCategory}
      selectCategory={(category)=>onSelectCategory(category)}
      />
      </div>
      <ModalUi>
          <FormCategory  categorySelected={categorySelected!} refetch={refetch} />
        </ModalUi>
    </DefaultLayout>
  )
}

export default Category