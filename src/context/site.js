import { createContext, useContext } from "react";

export const SiteContext = createContext({
  openContact: () => {},
  closeContact: () => {},
  contactOpen: false,
  scrollTo: () => {},
  lenisRef: { current: null },
});

export const useSite = () => useContext(SiteContext);
