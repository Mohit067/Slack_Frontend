import conmbineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";

export const AppContextProvider = conmbineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider
);