import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useCreateWorkspace } from "@/hooks/apis/workspaces/useCreateWorkspace";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal"
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateWorkspaceModal = () => {

    const {openCreateWorspaceModal, setOpenCreateWorkspaceModal} = useCreateWorkspaceModal();
    const [workspaceName, setWorkspaceName] = useState('');
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {isPending, createWorkspaceMutation} = useCreateWorkspace();
    
    function handleClose() {
        setOpenCreateWorkspaceModal(false);
    }

    async function openWorkspaceCreateModal(e) {
        e.preventDefault();
        try {
            const data = await createWorkspaceMutation({name: workspaceName});
            console.log("Created the workspaces", data);
            navigate(`/workspaces/${data._id}`);
            queryClient.invalidateQueries('fetchWorkspaces')
        } catch (error) {
            console.log("Not able to create workspace", error);
        } finally {
            setWorkspaceName('');
            setOpenCreateWorkspaceModal(false);
        }
    }
    return (
        <Dialog
            open={openCreateWorspaceModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new workspace</DialogTitle>
                </DialogHeader>

                <form onSubmit={openWorkspaceCreateModal}>
                    <Input 
                        required
                        disabled={isPending}
                        minLength={3}
                        placeholder="Put the name of workspace e.g MyWorkspace, Dev Workspace etc .. "
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                    />

                    <div className="flex justify-end mt-5">
                        <Button disabled={isPending}>Create Workspace</Button>
                    </div>
                </form>
                
            </DialogContent>
        </Dialog>
    )
}