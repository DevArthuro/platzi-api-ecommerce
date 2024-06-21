"use client";

import { useGetProductsIdsQuery } from "@/store/api/products/hooks";
import CardProduct from "./cardProduct";

const ListProducts = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetProductsIdsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    console.log(data);

    return (
      <div>
        Error: {JSON.stringify(error)} - {JSON.stringify(data)}
      </div>
    );
  }

  return (
    <div>
      {isSuccess &&
        data.map((productId) => (
          <div key={productId}>
            <CardProduct productId={productId} />
          </div>
        ))}
    </div>
  );
};

export default ListProducts;
