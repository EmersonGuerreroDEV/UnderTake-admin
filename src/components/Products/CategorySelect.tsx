import { CategoryProps } from "@/core/interfaces/category";
import React, { useState, useEffect, useRef } from "react";

interface Option {
  value: string;
  text: string;
  selected: boolean;
  category: CategoryProps; // Almacena el objeto de categoría completo
}

interface DropdownProps {
  id: string;
  categories: CategoryProps[];
  setCategories: (categories: CategoryProps[]) => void;
  categoriesSelected: CategoryProps[];
}

const CategorySelect: React.FC<DropdownProps> = ({ id, categories, setCategories, categoriesSelected }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [selected, setSelected] = useState<CategoryProps[]>([]);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialOptions = categories?.map(category => ({
      value: category.id,
      text: category.name,
      selected: false,
      category, // Almacena el objeto completo
    }));
    //@ts-ignore
    setOptions(initialOptions);
  }, [categories]);

  // Cargar las categorías seleccionadas desde categoriesSelected
  useEffect(() => {
    setSelected(categoriesSelected);
    setOptions(prevOptions =>
      prevOptions?.map(option => ({
        ...option,
        selected: categoriesSelected?.some(selectedCategory => selectedCategory.id === option.category.id),
      }))
    );
  }, [categoriesSelected, categories]);

  const openDropdown = () => setShow(true);

  const toggleOption = (category: CategoryProps) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.category.id === category.id
          ? { ...option, selected: !option.selected }
          : option
      )
    );

    setSelected(prevSelected => {
      if (prevSelected.find(item => item.id === category.id)) {
        return prevSelected.filter(item => item.id !== category.id); // Deseleccionar
      } else {
        return [...prevSelected, category]; // Seleccionar
      }
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    setCategories(selected);
  }, [selected, setCategories]);

  return (
    <div className="relative z-50">
      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
        Multiselect Dropdown
      </label>
      <div>
        <div ref={triggerRef} onClick={openDropdown} className="cursor-pointer border rounded p-2">
          {selected?.length > 0 ? (
            selected.map(category => category.name).join(", ") // Muestra los nombres de las categorías seleccionadas
          ) : (
            <span className="text-gray-500">Select categories</span>
          )}
        </div>
        {show && (
          <div 
            ref={dropdownRef}
            className="absolute z-40 w-full bg-white shadow-lg rounded mt-1 max-h-60 overflow-y-auto"
          >
            {options.map(option => (
              <div 
                key={option.value} 
                className={`relative z-10 w-full appearance-none border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 ${option.selected ? "bg-blue-100" : ""}`}
                onClick={() => toggleOption(option.category)} // Pasa el objeto de categoría completo
              >
                <input 
                  type="checkbox" 
                  checked={option.selected} 
                  readOnly 
                  className="mr-2"
                />
                {option.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySelect;
