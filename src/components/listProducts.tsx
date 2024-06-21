"use client";

import { useGetProductsQuery } from "@/store/api/products/hooks";

const ListProducts = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {isSuccess &&
        data.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default ListProducts;
