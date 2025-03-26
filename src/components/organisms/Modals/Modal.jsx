import { CreateChannelModal } from "@/components/molecules/CreateChannelModal/CreateChannelModal";
import { CreateWorkspaceModal } from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal";
import { WorkspacePrefrenceModal } from "@/components/molecules/Workspace/WorkspacePrefrenceModal";

export const Modals = () => {
    return (
        <>
            <CreateWorkspaceModal />
            <WorkspacePrefrenceModal />
            <CreateChannelModal />
        </>
    )
}