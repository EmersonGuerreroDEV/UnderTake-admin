import { CategoryProps } from "@/core/interfaces/category"; // Adjust the path as needed
import { Eye, Trash } from "lucide-react";

interface TableCategoriesProps {
  allCategories: CategoryProps[];
  isLoading: boolean;
  selectCategory: (category: CategoryProps) => void;
}

const TableCategories = ({ allCategories, isLoading, selectCategory }: TableCategoriesProps) => {
  
  if (isLoading) return <p>Loading...</p>;
  if (!allCategories || allCategories.length === 0) return <p>No categories available.</p>;

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Nombre
              </th>
              <th className="min-w-[200px] px-4 py-4 font-medium text-dark dark:text-white">
                Imagen
              </th>
              <th className="px-4 py-4 text-right font-medium text-dark dark:text-white xl:pr-7.5">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {allCategories.map((category, index) => (
              <tr key={category.id || index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === allCategories.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">
                    {category.name}
                  </h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allCategories.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <img src={category.image} alt={category.name} className="w-16 h-16 object-cover" />
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allCategories.length - 1 ? "border-b-0" : "border-b"}`}
                >
                    <div className="flex">
                    <button onClick={() => selectCategory(category)} className="text-dark w-full mx-auto text-center dark:text-white">
                    <Eye />
                  </button>
                  <button onClick={() => console.log('Delete', category.id)} className="text-red-600 w-full mx-auto text-center dark:text-red-400">
                    <Trash />
                  </button>
                    </div>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCategories;
