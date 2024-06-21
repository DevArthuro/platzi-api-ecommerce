import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productsBuilder } from "./products/apiSlice";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    ...productsBuilder(builder),
  }),
});

export default api;
