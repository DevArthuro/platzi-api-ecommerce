"use client";

import api from "@/store/api";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React from "react";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default Providers;
