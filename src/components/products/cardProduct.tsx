import { useGetProductByIdQuery } from "@/store/api/products/hooks";
import React from "react";

const CardProduct: React.FC<{ productId: number }> = ({ productId }) => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetProductByIdQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{isSuccess && data.title}</div>;
};

export default CardProduct;
