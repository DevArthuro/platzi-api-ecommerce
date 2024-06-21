import { Product } from "@/types";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";

export const productsBuilder = (builder: EndpointBuilder<any, any, any>) => ({
  getProducts: builder.query<Product[], void>({
    query: () => "/products",
    providesTags: ["products"],
  }),
});
