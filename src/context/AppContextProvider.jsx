import conmbineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./AuthContext";

export const AppContextProvider = conmbineContext(
    AuthContextProvider
);