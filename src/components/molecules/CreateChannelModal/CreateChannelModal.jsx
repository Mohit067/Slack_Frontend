import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAddChannelToWokspace } from "@/hooks/apis/workspaces/useAddChannelToWorkspce";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWrokspace";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export const CreateChannelModal = () => {

    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();
    const { addChannelToWrkspaceMutation } = useAddChannelToWokspace();
    const { currentWorkspace } = useCurrentWorkspace();

    const [channelName, setChannelName] = useState('');
    const queryClient = useQueryClient(); 

    console.log("current workspace is",currentWorkspace);
    
    function handleClose() {
        setOpenCreateChannelModal(false);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        await addChannelToWrkspaceMutation({
            workspaceId: currentWorkspace?._id,
            channelName: channelName
        });

        toast("Successfully create channel", {
            variant: "destructive",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
        });

        queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace?._id}`);
        
        handleClose();
    }   

    return (
        <Dialog
            open={openCreateChannelModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a channel
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit}>
                    <Input 
                        value={channelName}
                        required
                        onChange={(e) => setChannelName(e.target.value)}
                        minLength={3}
                        placeholder='Channel name e.g. team-announcement'                    
                    />

                    <div>
                        <Button className="flex justify-end mt-4">
                            Create Channel
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}