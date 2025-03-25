import conmbineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePrefrenceModalContextProvider } from "./WorkspacePrefrenceModalContext";

export const AppContextProvider = conmbineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePrefrenceModalContextProvider
);