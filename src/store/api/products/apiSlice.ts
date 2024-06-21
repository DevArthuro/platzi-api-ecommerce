import { Product } from "@/types";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const productsBuilder = (builder: EndpointBuilder<any, any, any>) => ({
  getProductsIds: builder.query<Product["id"][], void>({
    query: () => "/products",
    providesTags: ["products"],
    transformResponse(data): Product["id"][] {
      return data.map((product: Product) => product.id);
    },
  }),
  getProductById: builder.query<Product, Product["id"]>({
    query: (id: Product["id"]) => {
      return `/products/${id}`;
    },
  }),
});
