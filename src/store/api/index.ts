import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productsBuilder } from "./products/apiSlice";
import { configureStore } from "@reduxjs/toolkit";

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

// const store = configureStore({
//   reducer: {},
// });

export default api;
