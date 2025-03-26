import conmbineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePrefrenceModalContextProvider } from "./WorkspacePrefrenceModalContext";
import { CreateChannelContextProvider } from "./CreateChannelContext";
import { WorkspaceContextProvider } from "./WorkspaceContext";

export const AppContextProvider = conmbineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePrefrenceModalContextProvider,
    CreateChannelContextProvider,
    WorkspaceContextProvider,
);