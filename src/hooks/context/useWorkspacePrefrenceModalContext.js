import WorkspacePrefrenceModalContext from "@/context/WorkspacePrefrenceModalContext";
import { useContext } from "react"

export const useWorkspacePrefrenceModalContext = () => {
    return useContext(WorkspacePrefrenceModalContext);
}