"use client";

import { createContext, useContext } from "react";
import type { SearchDoc } from "@/lib/search-docs";

const PortfolioIndexContext = createContext<SearchDoc[]>([]);

export function PortfolioIndexProvider({
  docs,
  children,
}: {
  docs: SearchDoc[];
  children: React.ReactNode;
}) {
  return <PortfolioIndexContext.Provider value={docs}>{children}</PortfolioIndexContext.Provider>;
}

export function usePortfolioIndex(): SearchDoc[] {
  return useContext(PortfolioIndexContext);
}
