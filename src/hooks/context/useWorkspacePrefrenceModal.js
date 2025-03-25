import WorkspacePrefrenceModalContext from "@/context/WorkspacePrefrenceModalContext";
import { useContext } from "react"

export const useWorkspacePrefrenceModal = () => {
    return useContext(WorkspacePrefrenceModalContext);
}